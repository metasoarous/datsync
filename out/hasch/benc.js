// Compiled by ClojureScript 1.9.542 {}
goog.provide('hasch.benc');
goog.require('cljs.core');

/**
 * @interface
 */
hasch.benc.PHashCoercion = function(){};

hasch.benc._coerce = (function hasch$benc$_coerce(this$,md_create_fn,write_handlers){
if((!((this$ == null))) && (!((this$.hasch$benc$PHashCoercion$_coerce$arity$3 == null)))){
return this$.hasch$benc$PHashCoercion$_coerce$arity$3(this$,md_create_fn,write_handlers);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (hasch.benc._coerce[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,md_create_fn,write_handlers);
} else {
var m__10938__auto____$1 = (hasch.benc._coerce["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,md_create_fn,write_handlers);
} else {
throw cljs.core.missing_protocol.call(null,"PHashCoercion.-coerce",this$);
}
}
}
});

hasch.benc.magics = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"binary","binary",-1802232288),new cljs.core.Keyword(null,"inst","inst",645962501),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"map","map",1371690461)],[(13),(6),(2),(4),(3),(9),(5),(0),(12),(7),(8),(11),(1),(10)]);
hasch.benc.split_size = (1024);
hasch.benc.max_entropy_byte_count = (32);
hasch.benc.byte_array = (function hasch$benc$byte_array(len){
return cljs.core.into_array.call(null,cljs.core.repeat.call(null,len,(0)));
});
hasch.benc.digest = (function hasch$benc$digest(bytes_or_seq_of_bytes,md_create_fn){
var md = md_create_fn.call(null);
if(cljs.core.seq_QMARK_.call(null,bytes_or_seq_of_bytes)){
var seq__42219_42223 = cljs.core.seq.call(null,bytes_or_seq_of_bytes);
var chunk__42220_42224 = null;
var count__42221_42225 = (0);
var i__42222_42226 = (0);
while(true){
if((i__42222_42226 < count__42221_42225)){
var bs_42227 = cljs.core._nth.call(null,chunk__42220_42224,i__42222_42226);
md.update(bs_42227);

var G__42228 = seq__42219_42223;
var G__42229 = chunk__42220_42224;
var G__42230 = count__42221_42225;
var G__42231 = (i__42222_42226 + (1));
seq__42219_42223 = G__42228;
chunk__42220_42224 = G__42229;
count__42221_42225 = G__42230;
i__42222_42226 = G__42231;
continue;
} else {
var temp__6738__auto___42232 = cljs.core.seq.call(null,seq__42219_42223);
if(temp__6738__auto___42232){
var seq__42219_42233__$1 = temp__6738__auto___42232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42219_42233__$1)){
var c__11130__auto___42234 = cljs.core.chunk_first.call(null,seq__42219_42233__$1);
var G__42235 = cljs.core.chunk_rest.call(null,seq__42219_42233__$1);
var G__42236 = c__11130__auto___42234;
var G__42237 = cljs.core.count.call(null,c__11130__auto___42234);
var G__42238 = (0);
seq__42219_42223 = G__42235;
chunk__42220_42224 = G__42236;
count__42221_42225 = G__42237;
i__42222_42226 = G__42238;
continue;
} else {
var bs_42239 = cljs.core.first.call(null,seq__42219_42233__$1);
md.update(bs_42239);

var G__42240 = cljs.core.next.call(null,seq__42219_42233__$1);
var G__42241 = null;
var G__42242 = (0);
var G__42243 = (0);
seq__42219_42223 = G__42240;
chunk__42220_42224 = G__42241;
count__42221_42225 = G__42242;
i__42222_42226 = G__42243;
continue;
}
} else {
}
}
break;
}
} else {
md.update(bytes_or_seq_of_bytes);
}

return md.digest();
});
hasch.benc.coerce_seq = (function hasch$benc$coerce_seq(seq,md_create_fn,write_handlers){
var seq_md = md_create_fn.call(null);
var s_42250 = seq;
while(true){
var vec__42247_42251 = s_42250;
var seq__42248_42252 = cljs.core.seq.call(null,vec__42247_42251);
var first__42249_42253 = cljs.core.first.call(null,seq__42248_42252);
var seq__42248_42254__$1 = cljs.core.next.call(null,seq__42248_42252);
var f_42255 = first__42249_42253;
var r_42256 = seq__42248_42254__$1;
seq_md.update(hasch.benc._coerce.call(null,f_42255,md_create_fn,write_handlers));

if(cljs.core.empty_QMARK_.call(null,r_42256)){
} else {
var G__42257 = cljs.core.rest.call(null,s_42250);
s_42250 = G__42257;
continue;
}
break;
}

return seq_md.digest();
});
/**
 * Commutatively coerces elements of collection, seq entries must already be crypto hashes
 *   to avoid collisions in XOR. Takes at maximum 32 bytes into account.
 */
hasch.benc.xor_hashes = (function hasch$benc$xor_hashes(seq){
var len = (function (){var x__10564__auto__ = cljs.core.count.call(null,cljs.core.first.call(null,seq));
var y__10565__auto__ = hasch.benc.max_entropy_byte_count;
return ((x__10564__auto__ < y__10565__auto__) ? x__10564__auto__ : y__10565__auto__);
})();
return cljs.core.reduce.call(null,((function (len){
return (function (acc,elem){
var i_42258 = (0);
while(true){
if((i_42258 < len)){
(acc[i_42258] = ((acc[i_42258]) ^ (elem[i_42258])));

var G__42259 = (i_42258 + (1));
i_42258 = G__42259;
continue;
} else {
}
break;
}

return acc;
});})(len))
,hasch.benc.byte_array.call(null,len),seq);
});
hasch.benc.encode_safe = (function hasch$benc$encode_safe(a,md_create_fn){
if((cljs.core.count.call(null,a) < hasch.benc.split_size)){
var len = cljs.core.long$.call(null,a.length);
var ea = hasch.benc.byte_array.call(null,len);
var i_42260 = (0);
while(true){
if(cljs.core._EQ_.call(null,i_42260,len)){
} else {
var e_42261 = (a[i_42260]);
if(((e_42261 > (0))) && ((e_42261 < (30)))){
(ea[i_42260] = (1));
} else {
}

var G__42262 = (i_42260 + (1));
i_42260 = G__42262;
continue;
}
break;
}

return a.concat(ea);
} else {
return hasch.benc.digest.call(null,a,md_create_fn);
}
});

//# sourceMappingURL=benc.js.map