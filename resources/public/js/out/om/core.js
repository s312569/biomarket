// Compiled by ClojureScript 1.8.51 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('goog.ui.IdGenerator');
om.core._STAR_read_enabled_STAR_ = false;
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_state_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core.display_name[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$);
} else {
var m__26544__auto____$1 = (om.core.display_name["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core.init_state[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$);
} else {
var m__26544__auto____$1 = (om.core.init_state["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core.should_update[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$,next_props,next_state);
} else {
var m__26544__auto____$1 = (om.core.should_update["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core.will_mount[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$);
} else {
var m__26544__auto____$1 = (om.core.will_mount["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core.did_mount[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$);
} else {
var m__26544__auto____$1 = (om.core.did_mount["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core.will_unmount[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$);
} else {
var m__26544__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core.will_update[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$,next_props,next_state);
} else {
var m__26544__auto____$1 = (om.core.will_update["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core.did_update[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__26544__auto____$1 = (om.core.did_update["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core.will_receive_props[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$,next_props);
} else {
var m__26544__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core.render[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$);
} else {
var m__26544__auto____$1 = (om.core.render["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core.render_state[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$,state);
} else {
var m__26544__auto____$1 = (om.core.render_state["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__26544__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args36843 = [];
var len__26950__auto___36846 = arguments.length;
var i__26951__auto___36847 = (0);
while(true){
if((i__26951__auto___36847 < len__26950__auto___36846)){
args36843.push((arguments[i__26951__auto___36847]));

var G__36848 = (i__26951__auto___36847 + (1));
i__26951__auto___36847 = G__36848;
continue;
} else {
}
break;
}

var G__36845 = args36843.length;
switch (G__36845) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36843.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core._get_state[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$);
} else {
var m__26544__auto____$1 = (om.core._get_state["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core._get_state[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$,ks);
} else {
var m__26544__auto____$1 = (om.core._get_state["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args36850 = [];
var len__26950__auto___36853 = arguments.length;
var i__26951__auto___36854 = (0);
while(true){
if((i__26951__auto___36854 < len__26950__auto___36853)){
args36850.push((arguments[i__26951__auto___36854]));

var G__36855 = (i__26951__auto___36854 + (1));
i__26951__auto___36854 = G__36855;
continue;
} else {
}
break;
}

var G__36852 = args36850.length;
switch (G__36852) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36850.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core._get_render_state[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$);
} else {
var m__26544__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core._get_render_state[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$,ks);
} else {
var m__26544__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args36857 = [];
var len__26950__auto___36860 = arguments.length;
var i__26951__auto___36861 = (0);
while(true){
if((i__26951__auto___36861 < len__26950__auto___36860)){
args36857.push((arguments[i__26951__auto___36861]));

var G__36862 = (i__26951__auto___36861 + (1));
i__26951__auto___36861 = G__36862;
continue;
} else {
}
break;
}

var G__36859 = args36857.length;
switch (G__36859) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36857.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$,val,render);
} else {
var m__26544__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$,ks,val,render);
} else {
var m__26544__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core._get_queue[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$);
} else {
var m__26544__auto____$1 = (om.core._get_queue["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$,c);
} else {
var m__26544__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__26543__auto__ = (((this$ == null))?null:this$);
var m__26544__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,this$);
} else {
var m__26544__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__26543__auto__ = (((x == null))?null:x);
var m__26544__auto__ = (om.core._value[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,x);
} else {
var m__26544__auto____$1 = (om.core._value["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__26543__auto__ = (((cursor == null))?null:cursor);
var m__26544__auto__ = (om.core._path[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,cursor);
} else {
var m__26544__auto____$1 = (om.core._path["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__26543__auto__ = (((cursor == null))?null:cursor);
var m__26544__auto__ = (om.core._state[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,cursor);
} else {
var m__26544__auto____$1 = (om.core._state["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args36864 = [];
var len__26950__auto___36867 = arguments.length;
var i__26951__auto___36868 = (0);
while(true){
if((i__26951__auto___36868 < len__26950__auto___36867)){
args36864.push((arguments[i__26951__auto___36868]));

var G__36869 = (i__26951__auto___36868 + (1));
i__26951__auto___36868 = G__36869;
continue;
} else {
}
break;
}

var G__36866 = args36864.length;
switch (G__36866) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36864.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__26543__auto__ = (((value == null))?null:value);
var m__26544__auto__ = (om.core._to_cursor[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,value,state);
} else {
var m__26544__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__26543__auto__ = (((value == null))?null:value);
var m__26544__auto__ = (om.core._to_cursor[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,value,state,path);
} else {
var m__26544__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__26543__auto__ = (((cursor == null))?null:cursor);
var m__26544__auto__ = (om.core._derive[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,cursor,derived,state,path);
} else {
var m__26544__auto____$1 = (om.core._derive["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__26543__auto__ = (((cursor == null))?null:cursor);
var m__26544__auto__ = (om.core._transact_BANG_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,cursor,korks,f,tag);
} else {
var m__26544__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__26543__auto__ = (((x == null))?null:x);
var m__26544__auto__ = (om.core._listen_BANG_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,x,key,tx_listen);
} else {
var m__26544__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__26543__auto__ = (((x == null))?null:x);
var m__26544__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,x,key);
} else {
var m__26544__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__26543__auto__ = (((x == null))?null:x);
var m__26544__auto__ = (om.core._notify_BANG_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__26544__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.fn_QMARK_.call(null,c)){
return node.props.children = (function (){var _STAR_read_enabled_STAR_36876 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{return c.call(null,node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_36876;
}})();
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(x){
return (x.props["__om_cursor"]);
});
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args36877 = [];
var len__26950__auto___36880 = arguments.length;
var i__26951__auto___36881 = (0);
while(true){
if((i__26951__auto___36881 < len__26950__auto___36880)){
args36877.push((arguments[i__26951__auto___36881]));

var G__36882 = (i__26951__auto___36881 + (1));
i__26951__auto___36881 = G__36882;
continue;
} else {
}
break;
}

var G__36879 = args36877.length;
switch (G__36879) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36877.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args36884 = [];
var len__26950__auto___36887 = arguments.length;
var i__26951__auto___36888 = (0);
while(true){
if((i__26951__auto___36888 < len__26950__auto___36887)){
args36884.push((arguments[i__26951__auto___36888]));

var G__36889 = (i__26951__auto___36888 + (1));
i__26951__auto___36888 = G__36889;
continue;
} else {
}
break;
}

var G__36886 = args36884.length;
switch (G__36886) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36884.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4425__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var pending_state = temp__4425__auto__;
var G__36892 = state;
(G__36892["__om_prev_state"] = (state["__om_state"]));

(G__36892["__om_state"] = pending_state);

(G__36892["__om_pending_state"] = null);

return G__36892;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args36893 = [];
var len__26950__auto___36896 = arguments.length;
var i__26951__auto___36897 = (0);
while(true){
if((i__26951__auto___36897 < len__26950__auto___36896)){
args36893.push((arguments[i__26951__auto___36897]));

var G__36898 = (i__26951__auto___36897 + (1));
i__26951__auto___36897 = G__36898;
continue;
} else {
}
break;
}

var G__36895 = args36893.length;
switch (G__36895) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36893.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__25880__auto__ = props;
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return owner.props;
}
})();
var temp__4425__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var props_state = temp__4425__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__25880__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_36927 = this$.state;
var _STAR_read_enabled_STAR_36901_36928 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__25880__auto__ = (state_36927["__om_prev_state"]);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return (state_36927["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_36901_36928;
}} else {
}

return (this$.state["__om_prev_state"] = null);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
var _STAR_read_enabled_STAR_36903 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{return om.core.will_unmount.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_36903;
}} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
var _STAR_read_enabled_STAR_36905 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_36905;
}} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var _STAR_read_enabled_STAR_36906 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__25868__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__25868__auto__)){
var and__25868__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__25868__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__25868__auto____$1;
}
} else {
return and__25868__auto__;
}
})())){
return true;
} else {
if(!(((state["__om_pending_state"]) == null))){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_36906;
}}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_read_enabled_STAR_36908 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
var _STAR_parent_STAR_36910 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_36911 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_36912 = om.core._STAR_instrument_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

try{return om.core.render.call(null,c);
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_36912;

om.core._STAR_state_STAR_ = _STAR_state_STAR_36911;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_36910;
}} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
var _STAR_parent_STAR_36914 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_36915 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_36916 = om.core._STAR_instrument_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

try{return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_36916;

om.core._STAR_state_STAR_ = _STAR_state_STAR_36915;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_36914;
}} else {
return c;

}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_36908;
}}),(function (next_props,next_state){
var this$ = this;
var c_36929 = om.core.children.call(null,this$);
if(((!((c_36929 == null)))?(((false) || (c_36929.om$core$IWillUpdate$))?true:(((!c_36929.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_36929):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_36929))){
var state_36930 = this$.state;
var _STAR_read_enabled_STAR_36918_36931 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{om.core.will_update.call(null,c_36929,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_36918_36931;
}} else {
}

return om.core.merge_pending_state.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__25880__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__25880__auto__ = id;
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?(function (){var _STAR_read_enabled_STAR_36920 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{return om.core.init_state.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_36920;
}})():null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
var _STAR_read_enabled_STAR_36922 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{return om.core.did_mount.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_36922;
}} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
var _STAR_read_enabled_STAR_36924 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{return om.core.display_name.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_36924;
}} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_36932 = om.core.children.call(null,this$);
if(((!((c_36932 == null)))?(((false) || (c_36932.om$core$IWillMount$))?true:(((!c_36932.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_36932):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_36932))){
var _STAR_read_enabled_STAR_36926_36933 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{om.core.will_mount.call(null,c_36932);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_36926_36933;
}} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x36937 = obj;
x36937.om$core$ISetState$ = true;

x36937.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x36937){
return (function (this$,val,render){
var this$__$1 = this;
var _STAR_read_enabled_STAR_36938 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__25868__auto__ = !((app_state == null));
if(and__25868__auto__){
return render;
} else {
return and__25868__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_36938;
}});})(x36937))
;

x36937.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x36937){
return (function (this$,ks,val,render){
var this$__$1 = this;
var _STAR_read_enabled_STAR_36939 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__25868__auto__ = !((app_state == null));
if(and__25868__auto__){
return render;
} else {
return and__25868__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_36939;
}});})(x36937))
;

x36937.om$core$IGetRenderState$ = true;

x36937.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x36937){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x36937))
;

x36937.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x36937){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x36937))
;

x36937.om$core$IGetState$ = true;

x36937.om$core$IGetState$_get_state$arity$1 = ((function (x36937){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__25880__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return (state["__om_state"]);
}
});})(x36937))
;

x36937.om$core$IGetState$_get_state$arity$2 = ((function (x36937){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x36937))
;

return x36937;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2162591503;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
var v = cljs.core._lookup.call(null,self__.value,k,not_found);
if(!(cljs.core._EQ_.call(null,v,not_found))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core.meta.call(null,self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._count.call(null,self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core.hash.call(null,self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__36941){
var vec__36942 = p__36941;
var k = cljs.core.nth.call(null,vec__36942,(0),null);
var v = cljs.core.nth.call(null,vec__36942,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.MapCursor.prototype.call = (function() {
var G__36943 = null;
var G__36943__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__36943__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__36943 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__36943__2.call(this,self__,k);
case 3:
return G__36943__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36943.cljs$core$IFn$_invoke$arity$2 = G__36943__2;
G__36943.cljs$core$IFn$_invoke$arity$3 = G__36943__3;
return G__36943;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args36940){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args36940)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!(om.core._STAR_read_enabled_STAR_)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path);
} else {
throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2179375903;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._nth.call(null,this$__$1,n,null);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._nth.call(null,this$__$1,n,not_found);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core.meta.call(null,self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._count.call(null,self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core.hash.call(null,self__.value);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});

om.core.IndexedCursor.prototype.call = (function() {
var G__36945 = null;
var G__36945__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__36945__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__36945 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__36945__2.call(this,self__,k);
case 3:
return G__36945__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36945.cljs$core$IFn$_invoke$arity$2 = G__36945__2;
G__36945.cljs$core$IFn$_invoke$arity$3 = G__36945__3;
return G__36945;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args36944){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args36944)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!(om.core._STAR_read_enabled_STAR_)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path);
} else {
throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x36947 = cljs.core.clone.call(null,val);
x36947.cljs$core$IDeref$ = true;

x36947.cljs$core$IDeref$_deref$arity$1 = ((function (x36947){
return (function (this$){
var this$__$1 = this;
if(!(om.core._STAR_read_enabled_STAR_)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path);
} else {
throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});})(x36947))
;

x36947.om$core$ICursor$ = true;

x36947.om$core$ICursor$_path$arity$1 = ((function (x36947){
return (function (_){
var ___$1 = this;
return path;
});})(x36947))
;

x36947.om$core$ICursor$_state$arity$1 = ((function (x36947){
return (function (_){
var ___$1 = this;
return state;
});})(x36947))
;

x36947.om$core$ITransact$ = true;

x36947.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x36947){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x36947))
;

x36947.cljs$core$IEquiv$ = true;

x36947.cljs$core$IEquiv$_equiv$arity$2 = ((function (x36947){
return (function (_,other){
var ___$1 = this;
if(om.core._STAR_read_enabled_STAR_){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
} else {
throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});})(x36947))
;

return x36947;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args36948 = [];
var len__26950__auto___36953 = arguments.length;
var i__26951__auto___36954 = (0);
while(true){
if((i__26951__auto___36954 < len__26950__auto___36953)){
args36948.push((arguments[i__26951__auto___36954]));

var G__36955 = (i__26951__auto___36954 + (1));
i__26951__auto___36954 = G__36955;
continue;
} else {
}
break;
}

var G__36950 = args36948.length;
switch (G__36950) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36948.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.render_all = (function om$core$render_all(){
om.core.refresh_queued = false;

var seq__36961 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__36962 = null;
var count__36963 = (0);
var i__36964 = (0);
while(true){
if((i__36964 < count__36963)){
var f = cljs.core._nth.call(null,chunk__36962,i__36964);
f.call(null);

var G__36965 = seq__36961;
var G__36966 = chunk__36962;
var G__36967 = count__36963;
var G__36968 = (i__36964 + (1));
seq__36961 = G__36965;
chunk__36962 = G__36966;
count__36963 = G__36967;
i__36964 = G__36968;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36961);
if(temp__4425__auto__){
var seq__36961__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36961__$1)){
var c__26691__auto__ = cljs.core.chunk_first.call(null,seq__36961__$1);
var G__36969 = cljs.core.chunk_rest.call(null,seq__36961__$1);
var G__36970 = c__26691__auto__;
var G__36971 = cljs.core.count.call(null,c__26691__auto__);
var G__36972 = (0);
seq__36961 = G__36969;
chunk__36962 = G__36970;
count__36963 = G__36971;
i__36964 = G__36972;
continue;
} else {
var f = cljs.core.first.call(null,seq__36961__$1);
f.call(null);

var G__36973 = cljs.core.next.call(null,seq__36961__$1);
var G__36974 = null;
var G__36975 = (0);
var G__36976 = (0);
seq__36961 = G__36973;
chunk__36962 = G__36974;
count__36963 = G__36975;
i__36964 = G__36976;
continue;
}
} else {
return null;
}
}
break;
}
});
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__25880__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__25880__auto__){
return or__25880__auto__;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str("(or (satisfies? IRender x) (satisfies? IRenderState x))")].join('')));
}
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args36983 = [];
var len__26950__auto___36986 = arguments.length;
var i__26951__auto___36987 = (0);
while(true){
if((i__26951__auto___36987 < len__26950__auto___36986)){
args36983.push((arguments[i__26951__auto___36987]));

var G__36988 = (i__26951__auto___36987 + (1));
i__26951__auto___36987 = G__36988;
continue;
} else {
}
break;
}

var G__36985 = args36983.length;
switch (G__36985) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36983.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createClass((function (){var or__25880__auto__ = descriptor;
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return om.core.pure_descriptor;
}
})()));
} else {
}

return (f["om$descriptor"]);
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args36990 = [];
var len__26950__auto___36998 = arguments.length;
var i__26951__auto___36999 = (0);
while(true){
if((i__26951__auto___36999 < len__26950__auto___36998)){
args36990.push((arguments[i__26951__auto___36999]));

var G__37000 = (i__26951__auto___36999 + (1));
i__26951__auto___36999 = G__37000;
continue;
} else {
}
break;
}

var G__36992 = args36990.length;
switch (G__36992) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36990.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.truth_(om.core.valid_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str("(valid? m)")].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,f);
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_app_state": om.core._STAR_state_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var _STAR_read_enabled_STAR_36993 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_36993;
}});})(shared,ctor))
});
} else {
var map__36994 = m;
var map__36994__$1 = ((((!((map__36994 == null)))?((((map__36994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36994):map__36994);
var key = cljs.core.get.call(null,map__36994__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state = cljs.core.get.call(null,map__36994__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__36994__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__36994__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4423__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348)));
var shared = (function (){var or__25880__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,f,new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__36994,map__36994__$1,key,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var _STAR_read_enabled_STAR_36996 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_36996;
}});})(map__36994,map__36994__$1,key,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__36994,map__36994__$1,key,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var _STAR_read_enabled_STAR_36997 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_36997;
}});})(map__36994,map__36994__$1,key,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": rkey, "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a cursor, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument will be
 * the cursor and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * cursor - an ICursor instance
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets cursor
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args37002 = [];
var len__26950__auto___37006 = arguments.length;
var i__26951__auto___37007 = (0);
while(true){
if((i__26951__auto___37007 < len__26950__auto___37006)){
args37002.push((arguments[i__26951__auto___37007]));

var G__37008 = (i__26951__auto___37007 + (1));
i__26951__auto___37007 = G__37008;
continue;
} else {
}
break;
}

var G__37004 = args37002.length;
switch (G__37004) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37002.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build.call(null,f,cursor,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (function (){var _STAR_read_enabled_STAR_37005 = om.core._STAR_read_enabled_STAR_;
om.core._STAR_read_enabled_STAR_ = true;

try{return om.core._STAR_instrument_STAR_.call(null,f,cursor,m);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_37005;
}})();
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,cursor,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,cursor,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of cursors, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args37010 = [];
var len__26950__auto___37013 = arguments.length;
var i__26951__auto___37014 = (0);
while(true){
if((i__26951__auto___37014 < len__26950__auto___37013)){
args37010.push((arguments[i__26951__auto___37014]));

var G__37015 = (i__26951__auto___37014 + (1));
i__26951__auto___37014 = G__37015;
continue;
} else {
}
break;
}

var G__37012 = args37010.length;
switch (G__37012) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37010.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var listeners_37033 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_37034 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x37026_37035 = state;
x37026_37035.om$core$INotify$ = true;

x37026_37035.om$core$INotify$_listen_BANG_$arity$3 = ((function (x37026_37035,listeners_37033,render_queue_37034){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_37033,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x37026_37035,listeners_37033,render_queue_37034))
;

x37026_37035.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x37026_37035,listeners_37033,render_queue_37034){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_37033,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x37026_37035,listeners_37033,render_queue_37034))
;

x37026_37035.om$core$INotify$_notify_BANG_$arity$3 = ((function (x37026_37035,listeners_37033,render_queue_37034){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__37027_37036 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_37033));
var chunk__37028_37037 = null;
var count__37029_37038 = (0);
var i__37030_37039 = (0);
while(true){
if((i__37030_37039 < count__37029_37038)){
var vec__37031_37040 = cljs.core._nth.call(null,chunk__37028_37037,i__37030_37039);
var __37041 = cljs.core.nth.call(null,vec__37031_37040,(0),null);
var f_37042 = cljs.core.nth.call(null,vec__37031_37040,(1),null);
f_37042.call(null,tx_data,root_cursor);

var G__37043 = seq__37027_37036;
var G__37044 = chunk__37028_37037;
var G__37045 = count__37029_37038;
var G__37046 = (i__37030_37039 + (1));
seq__37027_37036 = G__37043;
chunk__37028_37037 = G__37044;
count__37029_37038 = G__37045;
i__37030_37039 = G__37046;
continue;
} else {
var temp__4425__auto___37047 = cljs.core.seq.call(null,seq__37027_37036);
if(temp__4425__auto___37047){
var seq__37027_37048__$1 = temp__4425__auto___37047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37027_37048__$1)){
var c__26691__auto___37049 = cljs.core.chunk_first.call(null,seq__37027_37048__$1);
var G__37050 = cljs.core.chunk_rest.call(null,seq__37027_37048__$1);
var G__37051 = c__26691__auto___37049;
var G__37052 = cljs.core.count.call(null,c__26691__auto___37049);
var G__37053 = (0);
seq__37027_37036 = G__37050;
chunk__37028_37037 = G__37051;
count__37029_37038 = G__37052;
i__37030_37039 = G__37053;
continue;
} else {
var vec__37032_37054 = cljs.core.first.call(null,seq__37027_37048__$1);
var __37055 = cljs.core.nth.call(null,vec__37032_37054,(0),null);
var f_37056 = cljs.core.nth.call(null,vec__37032_37054,(1),null);
f_37056.call(null,tx_data,root_cursor);

var G__37057 = cljs.core.next.call(null,seq__37027_37048__$1);
var G__37058 = null;
var G__37059 = (0);
var G__37060 = (0);
seq__37027_37036 = G__37057;
chunk__37028_37037 = G__37058;
count__37029_37038 = G__37059;
i__37030_37039 = G__37060;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x37026_37035,listeners_37033,render_queue_37034))
;

x37026_37035.om$core$IRenderQueue$ = true;

x37026_37035.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x37026_37035,listeners_37033,render_queue_37034){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_37034);
});})(x37026_37035,listeners_37033,render_queue_37034))
;

x37026_37035.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x37026_37035,listeners_37033,render_queue_37034){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_37034),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_37034,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x37026_37035,listeners_37033,render_queue_37034))
;

x37026_37035.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x37026_37035,listeners_37033,render_queue_37034){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_37034,cljs.core.empty);
});})(x37026_37035,listeners_37033,render_queue_37034))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__37061){
var map__37077 = p__37061;
var map__37077__$1 = ((((!((map__37077 == null)))?((((map__37077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37077):map__37077);
var options = map__37077__$1;
var target = cljs.core.get.call(null,map__37077__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__37077__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__37077__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__37077__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str("(not (nil? target))")].join('')));
}

var roots_SINGLEQUOTE__37092 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__37092,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__37092,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168));
var rootf = ((function (watch_key,state,state__$1,m,map__37077,map__37077__$1,options,target,tx_listen,path,instrument){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = (((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path));
om.dom.render.call(null,(function (){var _STAR_instrument_STAR_37086 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_37087 = om.core._STAR_state_STAR_;
om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_state_STAR_ = _STAR_state_STAR_37087;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_37086;
}})(),target);

var queue = om.core._get_queue.call(null,state__$1);
if(cljs.core.empty_QMARK_.call(null,queue)){
return null;
} else {
var seq__37088_37093 = cljs.core.seq.call(null,queue);
var chunk__37089_37094 = null;
var count__37090_37095 = (0);
var i__37091_37096 = (0);
while(true){
if((i__37091_37096 < count__37090_37095)){
var c_37097 = cljs.core._nth.call(null,chunk__37089_37094,i__37091_37096);
if(cljs.core.truth_(c_37097.isMounted())){
c_37097.forceUpdate();
} else {
}

var G__37098 = seq__37088_37093;
var G__37099 = chunk__37089_37094;
var G__37100 = count__37090_37095;
var G__37101 = (i__37091_37096 + (1));
seq__37088_37093 = G__37098;
chunk__37089_37094 = G__37099;
count__37090_37095 = G__37100;
i__37091_37096 = G__37101;
continue;
} else {
var temp__4425__auto___37102 = cljs.core.seq.call(null,seq__37088_37093);
if(temp__4425__auto___37102){
var seq__37088_37103__$1 = temp__4425__auto___37102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37088_37103__$1)){
var c__26691__auto___37104 = cljs.core.chunk_first.call(null,seq__37088_37103__$1);
var G__37105 = cljs.core.chunk_rest.call(null,seq__37088_37103__$1);
var G__37106 = c__26691__auto___37104;
var G__37107 = cljs.core.count.call(null,c__26691__auto___37104);
var G__37108 = (0);
seq__37088_37093 = G__37105;
chunk__37089_37094 = G__37106;
count__37090_37095 = G__37107;
i__37091_37096 = G__37108;
continue;
} else {
var c_37109 = cljs.core.first.call(null,seq__37088_37103__$1);
if(cljs.core.truth_(c_37109.isMounted())){
c_37109.forceUpdate();
} else {
}

var G__37110 = cljs.core.next.call(null,seq__37088_37103__$1);
var G__37111 = null;
var G__37112 = (0);
var G__37113 = (0);
seq__37088_37093 = G__37110;
chunk__37089_37094 = G__37111;
count__37090_37095 = G__37112;
i__37091_37096 = G__37113;
continue;
}
} else {
}
}
break;
}

return om.core._empty_queue_BANG_.call(null,state__$1);
}
});})(watch_key,state,state__$1,m,map__37077,map__37077__$1,options,target,tx_listen,path,instrument))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,m,rootf,map__37077,map__37077__$1,options,target,tx_listen,path,instrument){
return (function (_,___$1,___$2,___$3){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(typeof requestAnimationFrame !== 'undefined'){
return requestAnimationFrame(om.core.render_all);
} else {
return setTimeout(om.core.render_all,(16));
}
}
});})(watch_key,state,state__$1,m,rootf,map__37077,map__37077__$1,options,target,tx_listen,path,instrument))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,m,rootf,map__37077,map__37077__$1,options,target,tx_listen,path,instrument){
return (function (){
cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,m,rootf,map__37077,map__37077__$1,options,target,tx_listen,path,instrument))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return f.call(null);
} else {
return null;
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args37114 = [];
var len__26950__auto___37117 = arguments.length;
var i__26951__auto___37118 = (0);
while(true){
if((i__26951__auto___37118 < len__26950__auto___37117)){
args37114.push((arguments[i__26951__auto___37118]));

var G__37119 = (i__26951__auto___37118 + (1));
i__26951__auto___37118 = G__37119;
continue;
} else {
}
break;
}

var G__37116 = args37114.length;
switch (G__37116) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37114.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args37121 = [];
var len__26950__auto___37124 = arguments.length;
var i__26951__auto___37125 = (0);
while(true){
if((i__26951__auto___37125 < len__26950__auto___37124)){
args37121.push((arguments[i__26951__auto___37125]));

var G__37126 = (i__26951__auto___37125 + (1));
i__26951__auto___37125 = G__37126;
continue;
} else {
}
break;
}

var G__37123 = args37121.length;
switch (G__37123) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37121.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * A helper function to get at React refs. Given a owning pure node
 *   extract the ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args37128 = [];
var len__26950__auto___37131 = arguments.length;
var i__26951__auto___37132 = (0);
while(true){
if((i__26951__auto___37132 < len__26950__auto___37131)){
args37128.push((arguments[i__26951__auto___37132]));

var G__37133 = (i__26951__auto___37132 + (1));
i__26951__auto___37132 = G__37133;
continue;
} else {
}
break;
}

var G__37130 = args37128.length;
switch (G__37130) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37128.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
var temp__4425__auto__ = owner.refs;
if(cljs.core.truth_(temp__4425__auto__)){
var refs = temp__4425__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args37135 = [];
var len__26950__auto___37138 = arguments.length;
var i__26951__auto___37139 = (0);
while(true){
if((i__26951__auto___37139 < len__26950__auto___37138)){
args37135.push((arguments[i__26951__auto___37139]));

var G__37140 = (i__26951__auto___37139 + (1));
i__26951__auto___37139 = G__37140;
continue;
} else {
}
break;
}

var G__37137 = args37135.length;
switch (G__37137) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37135.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args37142 = [];
var len__26950__auto___37145 = arguments.length;
var i__26951__auto___37146 = (0);
while(true){
if((i__26951__auto___37146 < len__26950__auto___37145)){
args37142.push((arguments[i__26951__auto___37146]));

var G__37147 = (i__26951__auto___37146 + (1));
i__26951__auto___37146 = G__37147;
continue;
} else {
}
break;
}

var G__37144 = args37142.length;
switch (G__37144) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37142.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args37149 = [];
var len__26950__auto___37152 = arguments.length;
var i__26951__auto___37153 = (0);
while(true){
if((i__26951__auto___37153 < len__26950__auto___37152)){
args37149.push((arguments[i__26951__auto___37153]));

var G__37154 = (i__26951__auto___37153 + (1));
i__26951__auto___37153 = G__37154;
continue;
} else {
}
break;
}

var G__37151 = args37149.length;
switch (G__37151) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37149.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args37156 = [];
var len__26950__auto___37159 = arguments.length;
var i__26951__auto___37160 = (0);
while(true){
if((i__26951__auto___37160 < len__26950__auto___37159)){
args37156.push((arguments[i__26951__auto___37160]));

var G__37161 = (i__26951__auto___37160 + (1));
i__26951__auto___37160 = G__37161;
continue;
} else {
}
break;
}

var G__37158 = args37156.length;
switch (G__37158) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37156.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args37163 = [];
var len__26950__auto___37166 = arguments.length;
var i__26951__auto___37167 = (0);
while(true){
if((i__26951__auto___37167 < len__26950__auto___37166)){
args37163.push((arguments[i__26951__auto___37167]));

var G__37168 = (i__26951__auto___37167 + (1));
i__26951__auto___37167 = G__37168;
continue;
} else {
}
break;
}

var G__37165 = args37163.length;
switch (G__37165) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37163.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;
/**
 * Returns true if in the React render phase.
 */
om.core.rendering_QMARK_ = (function om$core$rendering_QMARK_(){
return om.core._STAR_read_enabled_STAR_ === true;
});

//# sourceMappingURL=core.js.map