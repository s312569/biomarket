// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.tools.reader.edn');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.utils');
goog.require('cljs.tools.reader.impl.commons');
goog.require('cljs.tools.reader');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');


cljs.tools.reader.edn.macro_terminating_QMARK_ = (function cljs$tools$reader$edn$macro_terminating_QMARK_(ch){
var and__24077__auto__ = !(("#" === ch));
if(and__24077__auto__){
var and__24077__auto____$1 = !(("'" === ch));
if(and__24077__auto____$1){
var and__24077__auto____$2 = !((":" === ch));
if(and__24077__auto____$2){
return cljs.tools.reader.edn.macros.call(null,ch);
} else {
return and__24077__auto____$2;
}
} else {
return and__24077__auto____$1;
}
} else {
return and__24077__auto__;
}
});
cljs.tools.reader.edn.not_constituent_QMARK_ = (function cljs$tools$reader$edn$not_constituent_QMARK_(ch){
return (("@" === ch)) || (("`" === ch)) || (("~" === ch));
});
cljs.tools.reader.edn.read_token = (function cljs$tools$reader$edn$read_token(var_args){
var args32740 = [];
var len__25159__auto___32744 = arguments.length;
var i__25160__auto___32745 = (0);
while(true){
if((i__25160__auto___32745 < len__25159__auto___32744)){
args32740.push((arguments[i__25160__auto___32745]));

var G__32746 = (i__25160__auto___32745 + (1));
i__25160__auto___32745 = G__32746;
continue;
} else {
}
break;
}

var G__32742 = args32740.length;
switch (G__32742) {
case 2:
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32740.length)].join('')));

}
});

cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$2 = (function (rdr,initch){
return cljs.tools.reader.edn.read_token.call(null,rdr,initch,true);
});

cljs.tools.reader.edn.read_token.cljs$core$IFn$_invoke$arity$3 = (function (rdr,initch,validate_leading_QMARK_){
if(cljs.core.not.call(null,initch)){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading");
} else {
if(cljs.core.truth_((function (){var and__24077__auto__ = validate_leading_QMARK_;
if(cljs.core.truth_(and__24077__auto__)){
return cljs.tools.reader.edn.not_constituent_QMARK_.call(null,initch);
} else {
return and__24077__auto__;
}
})())){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid leading character: ",initch);
} else {
var sb = (new goog.string.StringBuffer());
var ch = (function (){
cljs.tools.reader.reader_types.unread.call(null,rdr,initch);

return initch;
})()
;
while(true){
if((cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)) || (cljs.tools.reader.edn.macro_terminating_QMARK_.call(null,ch)) || ((ch == null))){
return [cljs.core.str(sb)].join('');
} else {
if(cljs.tools.reader.edn.not_constituent_QMARK_.call(null,ch)){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid constituent character: ",ch);
} else {
var G__32748 = (function (){var G__32743 = sb;
G__32743.append(cljs.tools.reader.reader_types.read_char.call(null,rdr));

return G__32743;
})();
var G__32749 = cljs.tools.reader.reader_types.peek_char.call(null,rdr);
sb = G__32748;
ch = G__32749;
continue;
}
}
break;
}

}
}
});

cljs.tools.reader.edn.read_token.cljs$lang$maxFixedArity = 3;
cljs.tools.reader.edn.read_dispatch = (function cljs$tools$reader$edn$read_dispatch(rdr,_,opts){
var temp__4423__auto__ = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(cljs.core.truth_(temp__4423__auto__)){
var ch = temp__4423__auto__;
var temp__4423__auto____$1 = cljs.tools.reader.edn.dispatch_macros.call(null,ch);
if(cljs.core.truth_(temp__4423__auto____$1)){
var dm = temp__4423__auto____$1;
return dm.call(null,rdr,ch,opts);
} else {
var temp__4423__auto____$2 = cljs.tools.reader.edn.read_tagged.call(null,(function (){var G__32751 = rdr;
cljs.tools.reader.reader_types.unread.call(null,G__32751,ch);

return G__32751;
})(),ch,opts);
if(cljs.core.truth_(temp__4423__auto____$2)){
var obj = temp__4423__auto____$2;
return obj;
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"No dispatch macro for ",ch);
}
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
});
cljs.tools.reader.edn.read_unmatched_delimiter = (function cljs$tools$reader$edn$read_unmatched_delimiter(rdr,ch,opts){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unmatched delimiter ",ch);
});
cljs.tools.reader.edn.read_unicode_char = (function cljs$tools$reader$edn$read_unicode_char(var_args){
var args32752 = [];
var len__25159__auto___32755 = arguments.length;
var i__25160__auto___32756 = (0);
while(true){
if((i__25160__auto___32756 < len__25159__auto___32755)){
args32752.push((arguments[i__25160__auto___32756]));

var G__32757 = (i__25160__auto___32756 + (1));
i__25160__auto___32756 = G__32757;
continue;
} else {
}
break;
}

var G__32754 = args32752.length;
switch (G__32754) {
case 4:
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32752.length)].join('')));

}
});

cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$4 = (function (token,offset,length,base){
var l = (offset + length);
if((cljs.core.count.call(null,token) === l)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid unicode character: \\"),cljs.core.str(token)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170)], null));
}

var i = offset;
var uc = (0);
while(true){
if((i === l)){
return String.fromCharCode(uc);
} else {
var d = cljs.tools.reader.char_code.call(null,cljs.core.nth.call(null,token,i),base);
if((d === (-1))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid digit: "),cljs.core.str(cljs.core.nth.call(null,token,i))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170)], null));
} else {
var G__32759 = (i + (1));
var G__32760 = (d + (uc * base));
i = G__32759;
uc = G__32760;
continue;
}
}
break;
}
});

cljs.tools.reader.edn.read_unicode_char.cljs$core$IFn$_invoke$arity$5 = (function (rdr,initch,base,length,exact_QMARK_){
var i = (1);
var uc = cljs.tools.reader.char_code.call(null,initch,base);
while(true){
if((uc === (-1))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid digit: "),cljs.core.str(initch)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170)], null));
} else {
if(!((i === length))){
var ch = cljs.tools.reader.reader_types.peek_char.call(null,rdr);
if(cljs.core.truth_((function (){var or__24089__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch);
if(or__24089__auto__){
return or__24089__auto__;
} else {
var or__24089__auto____$1 = cljs.tools.reader.edn.macros.call(null,ch);
if(cljs.core.truth_(or__24089__auto____$1)){
return or__24089__auto____$1;
} else {
return (ch == null);
}
}
})())){
if(cljs.core.truth_(exact_QMARK_)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid character length: "),cljs.core.str(i),cljs.core.str(", should be: "),cljs.core.str(length)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170)], null));
} else {
return String.fromCharCode(uc);
}
} else {
var d = cljs.tools.reader.char_code.call(null,ch,base);
cljs.tools.reader.reader_types.read_char.call(null,rdr);

if((d === (-1))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid digit: "),cljs.core.str(ch)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170)], null));
} else {
var G__32761 = (i + (1));
var G__32762 = (d + (uc * base));
i = G__32761;
uc = G__32762;
continue;
}
}
} else {
return String.fromCharCode(uc);
}
}
break;
}
});

cljs.tools.reader.edn.read_unicode_char.cljs$lang$maxFixedArity = 5;
cljs.tools.reader.edn.upper_limit = ("\uD7FF" | (0));
cljs.tools.reader.edn.lower_limit = ("\uE000" | (0));
cljs.tools.reader.edn.read_char_STAR_ = (function cljs$tools$reader$edn$read_char_STAR_(rdr,backslash,opts){
var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(!((ch == null))){
var token = (((cljs.tools.reader.edn.macro_terminating_QMARK_.call(null,ch)) || (cljs.tools.reader.edn.not_constituent_QMARK_.call(null,ch)) || (cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)))?[cljs.core.str(ch)].join(''):cljs.tools.reader.edn.read_token.call(null,rdr,ch,false));
var token_len = cljs.core.count.call(null,token);
if(((1) === token_len)){
return cljs.core.nth.call(null,token,(0));
} else {
if((token === "newline")){
return "\n";
} else {
if((token === "space")){
return " ";
} else {
if((token === "tab")){
return "\t";
} else {
if((token === "backspace")){
return "\b";
} else {
if((token === "formfeed")){
return "\f";
} else {
if((token === "return")){
return "\r";
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"u"))){
var c = cljs.tools.reader.edn.read_unicode_char.call(null,token,(1),(4),(16));
var ic = c.charCodeAt();
if(((ic > cljs.tools.reader.edn.upper_limit)) && ((ic < cljs.tools.reader.edn.lower_limit))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid character constant: \\u",c);
} else {
return c;
}
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"o"))){
var len = (token_len - (1));
if((len > (3))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid octal escape sequence length: ",len);
} else {
var uc = cljs.tools.reader.edn.read_unicode_char.call(null,token,(1),len,(8));
if(((uc | (0)) > (255))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377]");
} else {
return uc;
}
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unsupported character: \\",token);

}
}
}
}
}
}
}
}
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
});
cljs.tools.reader.edn.read_delimited = (function cljs$tools$reader$edn$read_delimited(delim,rdr,opts){
var first_line = (cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))?cljs.tools.reader.reader_types.get_line_number.call(null,rdr):null);
var delim__$1 = cljs.tools.reader.impl.utils.char$.call(null,delim);
var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch = cljs.tools.reader.impl.commons.read_past.call(null,cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch)){
} else {
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading",(cljs.core.truth_(first_line)?[cljs.core.str(", starting at line"),cljs.core.str(first_line)].join(''):null));
}

if(cljs.core._EQ_.call(null,delim__$1,cljs.tools.reader.impl.utils.char$.call(null,ch))){
return cljs.core.persistent_BANG_.call(null,a);
} else {
var temp__4423__auto__ = cljs.tools.reader.edn.macros.call(null,ch);
if(cljs.core.truth_(temp__4423__auto__)){
var macrofn = temp__4423__auto__;
var mret = macrofn.call(null,rdr,ch,opts);
var G__32765 = ((!((mret === rdr)))?cljs.core.conj_BANG_.call(null,a,mret):a);
a = G__32765;
continue;
} else {
var o = cljs.tools.reader.edn.read.call(null,(function (){var G__32764 = rdr;
cljs.tools.reader.reader_types.unread.call(null,G__32764,ch);

return G__32764;
})(),true,null,opts);
var G__32766 = ((!((o === rdr)))?cljs.core.conj_BANG_.call(null,a,o):a);
a = G__32766;
continue;
}
}
break;
}
});
cljs.tools.reader.edn.read_list = (function cljs$tools$reader$edn$read_list(rdr,_,opts){
var the_list = cljs.tools.reader.edn.read_delimited.call(null,")",rdr,opts);
if(cljs.core.empty_QMARK_.call(null,the_list)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.apply.call(null,cljs.core.list,the_list);
}
});
cljs.tools.reader.edn.read_vector = (function cljs$tools$reader$edn$read_vector(rdr,_,opts){
return cljs.tools.reader.edn.read_delimited.call(null,"]",rdr,opts);
});
cljs.tools.reader.edn.read_map = (function cljs$tools$reader$edn$read_map(rdr,_,opts){
var l = cljs.core.to_array.call(null,cljs.tools.reader.edn.read_delimited.call(null,"}",rdr,opts));
if(((1) === (l.length & (1)))){
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else {
}

return cljs.core.apply.call(null,cljs.core.hash_map,l);
});
cljs.tools.reader.edn.read_number = (function cljs$tools$reader$edn$read_number(reader,initch,opts){
var sb = (function (){var G__32769 = (new goog.string.StringBuffer());
G__32769.append(initch);

return G__32769;
})();
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__24089__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch);
if(or__24089__auto__){
return or__24089__auto__;
} else {
var or__24089__auto____$1 = cljs.tools.reader.edn.macros.call(null,ch);
if(cljs.core.truth_(or__24089__auto____$1)){
return or__24089__auto____$1;
} else {
return (ch == null);
}
}
})())){
var s = [cljs.core.str(sb)].join('');
cljs.tools.reader.reader_types.unread.call(null,reader,ch);

var or__24089__auto__ = cljs.tools.reader.impl.commons.match_number.call(null,s);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid number format [",s,"]");
}
} else {
var G__32771 = (function (){var G__32770 = sb;
G__32770.append(ch);

return G__32770;
})();
var G__32772 = cljs.tools.reader.reader_types.read_char.call(null,reader);
sb = G__32771;
ch = G__32772;
continue;
}
break;
}
});
cljs.tools.reader.edn.escape_char = (function cljs$tools$reader$edn$escape_char(sb,rdr){
var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);
var G__32774 = ch;
switch (G__32774) {
case "t":
return "\t";

break;
case "r":
return "\r";

break;
case "n":
return "\n";

break;
case "\\":
return "\\";

break;
case "\"":
return "\"";

break;
case "b":
return "\b";

break;
case "f":
return "\f";

break;
case "u":
var ch__$1 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(((-1) === parseInt((ch__$1 | (0)),(16)))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid unicode escape: \\u",ch__$1);
} else {
return cljs.tools.reader.edn.read_unicode_char.call(null,rdr,ch__$1,(16),(4),true);
}

break;
default:
if(cljs.tools.reader.impl.utils.numeric_QMARK_.call(null,ch)){
var ch__$1 = cljs.tools.reader.edn.read_unicode_char.call(null,rdr,ch,(8),(3),false);
if(((ch__$1 | (0)) > (223))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377]");
} else {
return ch__$1;
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unsupported escape character: \\",ch);
}

}
});
cljs.tools.reader.edn.read_string_STAR_ = (function cljs$tools$reader$edn$read_string_STAR_(reader,_,opts){
var sb = (new goog.string.StringBuffer());
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
while(true){
var G__32779 = ch;
if(cljs.core._EQ_.call(null,null,G__32779)){
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"EOF while reading string");
} else {
if(cljs.core._EQ_.call(null,"\\",G__32779)){
var G__32782 = (function (){var G__32780 = sb;
G__32780.append(cljs.tools.reader.edn.escape_char.call(null,sb,reader));

return G__32780;
})();
var G__32783 = cljs.tools.reader.reader_types.read_char.call(null,reader);
sb = G__32782;
ch = G__32783;
continue;
} else {
if(cljs.core._EQ_.call(null,"\"",G__32779)){
return [cljs.core.str(sb)].join('');
} else {
var G__32784 = (function (){var G__32781 = sb;
G__32781.append(ch);

return G__32781;
})();
var G__32785 = cljs.tools.reader.reader_types.read_char.call(null,reader);
sb = G__32784;
ch = G__32785;
continue;

}
}
}
break;
}
});
cljs.tools.reader.edn.read_symbol = (function cljs$tools$reader$edn$read_symbol(rdr,initch){
var temp__4425__auto__ = cljs.tools.reader.edn.read_token.call(null,rdr,initch);
if(cljs.core.truth_(temp__4425__auto__)){
var token = temp__4425__auto__;
var G__32787 = token;
switch (G__32787) {
case "nil":
return null;

break;
case "true":
return true;

break;
case "false":
return false;

break;
case "/":
return new cljs.core.Symbol(null,"/","/",-1371932971,null);

break;
case "NaN":
return Number.NaN;

break;
case "-Infinity":
return Number.NEGATIVE_INFINITY;

break;
case "Infinity":
case "+Infinity":
return Number.POSITIVE_INFINITY;

break;
default:
var or__24089__auto__ = (function (){var temp__4425__auto____$1 = cljs.tools.reader.impl.commons.parse_symbol.call(null,token);
if(cljs.core.truth_(temp__4425__auto____$1)){
var p = temp__4425__auto____$1;
return cljs.core.symbol.call(null,p.call(null,(0)),p.call(null,(1)));
} else {
return null;
}
})();
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid token: ",token);
}

}
} else {
return null;
}
});
cljs.tools.reader.edn.read_keyword = (function cljs$tools$reader$edn$read_keyword(reader,initch,opts){
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(!(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch))){
var token = cljs.tools.reader.edn.read_token.call(null,reader,ch);
var s = cljs.tools.reader.impl.commons.parse_symbol.call(null,token);
if(cljs.core.truth_((function (){var and__24077__auto__ = s;
if(cljs.core.truth_(and__24077__auto__)){
return ((-1) === token.indexOf("::"));
} else {
return and__24077__auto__;
}
})())){
var ns = s.call(null,(0));
var name = s.call(null,(1));
if((":" === cljs.core.nth.call(null,token,(0)))){
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :",token);
} else {
return cljs.core.keyword.call(null,ns,name);
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :",token);
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :");
}
});
cljs.tools.reader.edn.wrapping_reader = (function cljs$tools$reader$edn$wrapping_reader(sym){
return (function (rdr,_,opts){
var x__24923__auto__ = sym;
return cljs.core._conj.call(null,(function (){var x__24923__auto____$1 = cljs.tools.reader.edn.read.call(null,rdr,true,null,opts);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__24923__auto____$1);
})(),x__24923__auto__);
});
});
cljs.tools.reader.edn.read_meta = (function cljs$tools$reader$edn$read_meta(rdr,_,opts){
var m = cljs.tools.reader.impl.utils.desugar_meta.call(null,cljs.tools.reader.edn.read.call(null,rdr,true,null,opts));
if(cljs.core.map_QMARK_.call(null,m)){
} else {
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata must be Symbol, Keyword, String or Map");
}

var o = cljs.tools.reader.edn.read.call(null,rdr,true,null,opts);
if(((!((o == null)))?((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || (o.cljs$core$IMeta$))?true:false):false)){
return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m));
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata can only be applied to IMetas");
}
});
cljs.tools.reader.edn.read_set = (function cljs$tools$reader$edn$read_set(rdr,_,opts){
return cljs.core.set.call(null,cljs.tools.reader.edn.read_delimited.call(null,"}",rdr,opts));
});
cljs.tools.reader.edn.read_discard = (function cljs$tools$reader$edn$read_discard(rdr,_,opts){
var G__32792 = rdr;
cljs.tools.reader.edn.read.call(null,G__32792,true,null,true);

return G__32792;
});
cljs.tools.reader.edn.macros = (function cljs$tools$reader$edn$macros(ch){
var G__32794 = ch;
switch (G__32794) {
case "\"":
return cljs.tools.reader.edn.read_string_STAR_;

break;
case ":":
return cljs.tools.reader.edn.read_keyword;

break;
case ";":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "^":
return cljs.tools.reader.edn.read_meta;

break;
case "(":
return cljs.tools.reader.edn.read_list;

break;
case ")":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "[":
return cljs.tools.reader.edn.read_vector;

break;
case "]":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "{":
return cljs.tools.reader.edn.read_map;

break;
case "}":
return cljs.tools.reader.edn.read_unmatched_delimiter;

break;
case "\\":
return cljs.tools.reader.edn.read_char_STAR_;

break;
case "#":
return cljs.tools.reader.edn.read_dispatch;

break;
default:
return null;

}
});
cljs.tools.reader.edn.dispatch_macros = (function cljs$tools$reader$edn$dispatch_macros(ch){
var G__32797 = ch;
switch (G__32797) {
case "^":
return cljs.tools.reader.edn.read_meta;

break;
case "{":
return cljs.tools.reader.edn.read_set;

break;
case "<":
return cljs.tools.reader.impl.commons.throwing_reader.call(null,"Unreadable form");

break;
case "!":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "_":
return cljs.tools.reader.edn.read_discard;

break;
default:
return null;

}
});
cljs.tools.reader.edn.read_tagged = (function cljs$tools$reader$edn$read_tagged(rdr,initch,opts){
var tag = cljs.tools.reader.edn.read.call(null,rdr,true,null,opts);
var object = cljs.tools.reader.edn.read.call(null,rdr,true,null,opts);
if(!((tag instanceof cljs.core.Symbol))){
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Reader tag must be a symbol");
} else {
}

var temp__4423__auto__ = (function (){var or__24089__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"readers","readers",-2118263030).cljs$core$IFn$_invoke$arity$1(opts),tag);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return cljs.tools.reader.default_data_readers.call(null,tag);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,object);
} else {
var temp__4423__auto____$1 = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto____$1)){
var d = temp__4423__auto____$1;
return d.call(null,tag,object);
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"No reader function for tag ",cljs.core.name.call(null,tag));
}
}
});
/**
 * Reads the first object from an IPushbackReader or a java.io.PushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * clojure.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.tools.reader.edn.read = (function cljs$tools$reader$edn$read(var_args){
var args32799 = [];
var len__25159__auto___32806 = arguments.length;
var i__25160__auto___32807 = (0);
while(true){
if((i__25160__auto___32807 < len__25159__auto___32806)){
args32799.push((arguments[i__25160__auto___32807]));

var G__32808 = (i__25160__auto___32807 + (1));
i__25160__auto___32807 = G__32808;
continue;
} else {
}
break;
}

var G__32801 = args32799.length;
switch (G__32801) {
case 1:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32799.length)].join('')));

}
});

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.call(null,cljs.core.PersistentArrayMap.EMPTY,reader);
});

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2 = (function (p__32802,reader){
var map__32803 = p__32802;
var map__32803__$1 = ((((!((map__32803 == null)))?((((map__32803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32803):map__32803);
var opts = map__32803__$1;
var eof = cljs.core.get.call(null,map__32803__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var eof_error_QMARK_ = !(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"eof","eof",-489063237)));
return cljs.tools.reader.edn.read.call(null,reader,eof_error_QMARK_,eof,opts);
});

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
try{while(true){
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)){
continue;
} else {
if((ch == null)){
if(cljs.core.truth_(eof_error_QMARK_)){
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"EOF");
} else {
return eof;
}
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_.call(null,reader,ch)){
return cljs.tools.reader.edn.read_number.call(null,reader,ch,opts);
} else {
var f = cljs.tools.reader.edn.macros.call(null,ch);
if(cljs.core.truth_(f)){
var res = f.call(null,reader,ch,opts);
if((res === reader)){
continue;
} else {
return res;
}
} else {
return cljs.tools.reader.edn.read_symbol.call(null,reader,ch);
}

}
}
}
break;
}
}catch (e32805){if((e32805 instanceof Error)){
var e = e32805;
if(cljs.tools.reader.impl.utils.ex_info_QMARK_.call(null,e)){
var d = cljs.core.ex_data.call(null,e);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d))){
throw e;
} else {
throw cljs.core.ex_info.call(null,e.message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098)], null),d,(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),cljs.tools.reader.reader_types.get_line_number.call(null,reader),new cljs.core.Keyword(null,"column","column",2078222095),cljs.tools.reader.reader_types.get_column_number.call(null,reader),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.tools.reader.reader_types.get_file_name.call(null,reader)], null):null)),e);
}
} else {
throw cljs.core.ex_info.call(null,e.message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098)], null),(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),cljs.tools.reader.reader_types.get_line_number.call(null,reader),new cljs.core.Keyword(null,"column","column",2078222095),cljs.tools.reader.reader_types.get_column_number.call(null,reader),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.tools.reader.reader_types.get_file_name.call(null,reader)], null):null)),e);
}
} else {
throw e32805;

}
}});

cljs.tools.reader.edn.read.cljs$lang$maxFixedArity = 4;
/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per clojure.tools.reader.edn/read
 */
cljs.tools.reader.edn.read_string = (function cljs$tools$reader$edn$read_string(var_args){
var args32810 = [];
var len__25159__auto___32813 = arguments.length;
var i__25160__auto___32814 = (0);
while(true){
if((i__25160__auto___32814 < len__25159__auto___32813)){
args32810.push((arguments[i__25160__auto___32814]));

var G__32815 = (i__25160__auto___32814 + (1));
i__25160__auto___32814 = G__32815;
continue;
} else {
}
break;
}

var G__32812 = args32810.length;
switch (G__32812) {
case 1:
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32810.length)].join('')));

}
});

cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
});

cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(cljs.core.truth_((function (){var and__24077__auto__ = s;
if(cljs.core.truth_(and__24077__auto__)){
return cljs.core.not_EQ_.call(null,s,"");
} else {
return and__24077__auto__;
}
})())){
return cljs.tools.reader.edn.read.call(null,opts,cljs.tools.reader.reader_types.string_push_back_reader.call(null,s));
} else {
return null;
}
});

cljs.tools.reader.edn.read_string.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=edn.js.map