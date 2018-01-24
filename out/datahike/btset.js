// Compiled by ClojureScript 1.9.542 {}
goog.provide('datahike.btset');
goog.require('cljs.core');
goog.require('datahike.arrays');
datahike.btset.min_len = (16);
datahike.btset.max_len = (32);
datahike.btset.avg_len = ((datahike.btset.max_len + datahike.btset.min_len) >>> (1));
datahike.btset.level_shift = (cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__42772_SHARP_){
return ((datahike.btset.max_len & (1 << p1__42772_SHARP_)) != 0);
}),cljs.core.range.call(null,(31),(-1),(-1)))) + (1));
datahike.btset.path_mask = (((1) << datahike.btset.level_shift) - (1));
datahike.btset.empty_path = (0);
datahike.btset.path_get = (function datahike$btset$path_get(path,level){
return (datahike.btset.path_mask & (path >>> level));
});
datahike.btset.path_set = (function datahike$btset$path_set(path,level,idx){
return (path | (idx << level));
});
datahike.btset.binary_search_l = (function datahike$btset$binary_search_l(cmp,arr,r,k){
var l = (0);
var r__$1 = cljs.core.long$.call(null,r);
while(true){
if((l <= r__$1)){
var m = ((l + r__$1) >>> (1));
var mk = (arr[m]);
if((cmp.call(null,mk,k) < (0))){
var G__42773 = (m + (1));
var G__42774 = r__$1;
l = G__42773;
r__$1 = G__42774;
continue;
} else {
var G__42775 = l;
var G__42776 = (m - (1));
l = G__42775;
r__$1 = G__42776;
continue;
}
} else {
return l;
}
break;
}
});
datahike.btset.binary_search_r = (function datahike$btset$binary_search_r(cmp,arr,r,k){
var l = (0);
var r__$1 = cljs.core.long$.call(null,r);
while(true){
if((l <= r__$1)){
var m = ((l + r__$1) >>> (1));
var mk = (arr[m]);
if((cmp.call(null,mk,k) > (0))){
var G__42777 = l;
var G__42778 = (m - (1));
l = G__42777;
r__$1 = G__42778;
continue;
} else {
var G__42779 = (m + (1));
var G__42780 = r__$1;
l = G__42779;
r__$1 = G__42780;
continue;
}
} else {
return l;
}
break;
}
});
datahike.btset.lookup_exact = (function datahike$btset$lookup_exact(cmp,arr,key){
var arr_l = arr.length;
var idx = datahike.btset.binary_search_l.call(null,cmp,arr,(arr_l - (1)),key);
if(((idx < arr_l)) && (((0) === cmp.call(null,(arr[idx]),key)))){
return idx;
} else {
return (-1);
}
});
datahike.btset.lookup_range = (function datahike$btset$lookup_range(cmp,arr,key){
var arr_l = arr.length;
var idx = datahike.btset.binary_search_l.call(null,cmp,arr,(arr_l - (1)),key);
if((idx === arr_l)){
return (-1);
} else {
return idx;
}
});
datahike.btset.alast = (function datahike$btset$alast(arr){
return (arr[(arr.length - (1))]);
});
datahike.btset.cut_n_splice = (function datahike$btset$cut_n_splice(arr,cut_from,cut_to,splice_from,splice_to,xs){
var xs_l = xs.length;
var l1 = (splice_from - cut_from);
var l2 = (cut_to - splice_to);
var l1xs = (l1 + xs_l);
var new_arr = datahike.arrays.make_array.call(null,((l1 + xs_l) + l2));
var l__42424__auto___42781 = (splice_from - cut_from);
var n__11240__auto___42782 = l__42424__auto___42781;
var i__42425__auto___42783 = (0);
while(true){
if((i__42425__auto___42783 < n__11240__auto___42782)){
(new_arr[(i__42425__auto___42783 + (0))] = (arr[(i__42425__auto___42783 + cut_from)]));

var G__42784 = (i__42425__auto___42783 + (1));
i__42425__auto___42783 = G__42784;
continue;
} else {
}
break;
}

var l__42424__auto___42785 = (xs_l - (0));
var n__11240__auto___42786 = l__42424__auto___42785;
var i__42425__auto___42787 = (0);
while(true){
if((i__42425__auto___42787 < n__11240__auto___42786)){
(new_arr[(i__42425__auto___42787 + l1)] = (xs[(i__42425__auto___42787 + (0))]));

var G__42788 = (i__42425__auto___42787 + (1));
i__42425__auto___42787 = G__42788;
continue;
} else {
}
break;
}

var l__42424__auto___42789 = (cut_to - splice_to);
var n__11240__auto___42790 = l__42424__auto___42789;
var i__42425__auto___42791 = (0);
while(true){
if((i__42425__auto___42791 < n__11240__auto___42790)){
(new_arr[(i__42425__auto___42791 + l1xs)] = (arr[(i__42425__auto___42791 + splice_to)]));

var G__42792 = (i__42425__auto___42791 + (1));
i__42425__auto___42791 = G__42792;
continue;
} else {
}
break;
}

return new_arr;
});
datahike.btset.cut = (function datahike$btset$cut(var_args){
var args42793 = [];
var len__11440__auto___42796 = arguments.length;
var i__11441__auto___42797 = (0);
while(true){
if((i__11441__auto___42797 < len__11440__auto___42796)){
args42793.push((arguments[i__11441__auto___42797]));

var G__42798 = (i__11441__auto___42797 + (1));
i__11441__auto___42797 = G__42798;
continue;
} else {
}
break;
}

var G__42795 = args42793.length;
switch (G__42795) {
case 2:
return datahike.btset.cut.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.btset.cut.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42793.length)].join('')));

}
});

datahike.btset.cut.cljs$core$IFn$_invoke$arity$2 = (function (arr,cut_from){
return arr.slice(cut_from);
});

datahike.btset.cut.cljs$core$IFn$_invoke$arity$3 = (function (arr,cut_from,cut_to){
return arr.slice(cut_from,cut_to);
});

datahike.btset.cut.cljs$lang$maxFixedArity = 3;

datahike.btset.splice = (function datahike$btset$splice(arr,splice_from,splice_to,xs){
return datahike.btset.cut_n_splice.call(null,arr,(0),arr.length,splice_from,splice_to,xs);
});
datahike.btset.insert = (function datahike$btset$insert(arr,idx,xs){
return datahike.btset.cut_n_splice.call(null,arr,(0),arr.length,idx,idx,xs);
});
datahike.btset.merge_n_split = (function datahike$btset$merge_n_split(a1,a2){
var a1_l = a1.length;
var a2_l = a2.length;
var total_l = (a1_l + a2_l);
var r1_l = (total_l >>> (1));
var r2_l = (total_l - r1_l);
var r1 = datahike.arrays.make_array.call(null,r1_l);
var r2 = datahike.arrays.make_array.call(null,r2_l);
if((a1_l <= r1_l)){
var l__42424__auto___42800 = (a1_l - (0));
var n__11240__auto___42801 = l__42424__auto___42800;
var i__42425__auto___42802 = (0);
while(true){
if((i__42425__auto___42802 < n__11240__auto___42801)){
(r1[(i__42425__auto___42802 + (0))] = (a1[(i__42425__auto___42802 + (0))]));

var G__42803 = (i__42425__auto___42802 + (1));
i__42425__auto___42802 = G__42803;
continue;
} else {
}
break;
}

var l__42424__auto___42804 = ((r1_l - a1_l) - (0));
var n__11240__auto___42805 = l__42424__auto___42804;
var i__42425__auto___42806 = (0);
while(true){
if((i__42425__auto___42806 < n__11240__auto___42805)){
(r1[(i__42425__auto___42806 + a1_l)] = (a2[(i__42425__auto___42806 + (0))]));

var G__42807 = (i__42425__auto___42806 + (1));
i__42425__auto___42806 = G__42807;
continue;
} else {
}
break;
}

var l__42424__auto___42808 = (a2_l - (r1_l - a1_l));
var n__11240__auto___42809 = l__42424__auto___42808;
var i__42425__auto___42810 = (0);
while(true){
if((i__42425__auto___42810 < n__11240__auto___42809)){
(r2[(i__42425__auto___42810 + (0))] = (a2[(i__42425__auto___42810 + (r1_l - a1_l))]));

var G__42811 = (i__42425__auto___42810 + (1));
i__42425__auto___42810 = G__42811;
continue;
} else {
}
break;
}
} else {
var l__42424__auto___42812 = (r1_l - (0));
var n__11240__auto___42813 = l__42424__auto___42812;
var i__42425__auto___42814 = (0);
while(true){
if((i__42425__auto___42814 < n__11240__auto___42813)){
(r1[(i__42425__auto___42814 + (0))] = (a1[(i__42425__auto___42814 + (0))]));

var G__42815 = (i__42425__auto___42814 + (1));
i__42425__auto___42814 = G__42815;
continue;
} else {
}
break;
}

var l__42424__auto___42816 = (a1_l - r1_l);
var n__11240__auto___42817 = l__42424__auto___42816;
var i__42425__auto___42818 = (0);
while(true){
if((i__42425__auto___42818 < n__11240__auto___42817)){
(r2[(i__42425__auto___42818 + (0))] = (a1[(i__42425__auto___42818 + r1_l)]));

var G__42819 = (i__42425__auto___42818 + (1));
i__42425__auto___42818 = G__42819;
continue;
} else {
}
break;
}

var l__42424__auto___42820 = (a2_l - (0));
var n__11240__auto___42821 = l__42424__auto___42820;
var i__42425__auto___42822 = (0);
while(true){
if((i__42425__auto___42822 < n__11240__auto___42821)){
(r2[(i__42425__auto___42822 + (a1_l - r1_l))] = (a2[(i__42425__auto___42822 + (0))]));

var G__42823 = (i__42425__auto___42822 + (1));
i__42425__auto___42822 = G__42823;
continue;
} else {
}
break;
}
}

return [r1,r2];
});
datahike.btset.eq_arr = (function datahike$btset$eq_arr(cmp,a1,a1_from,a1_to,a2,a2_from,a2_to){
var len = (a1_to - a1_from);
var and__10207__auto__ = (len === (a2_to - a2_from));
if(and__10207__auto__){
var i = (0);
while(true){
if((i === len)){
return true;
} else {
if(!(((0) === cmp.call(null,(a1[(i + a1_from)]),(a2[(i + a2_from)]))))){
return false;
} else {
var G__42824 = (i + (1));
i = G__42824;
continue;

}
}
break;
}
} else {
return and__10207__auto__;
}
});
datahike.btset.check_n_splice = (function datahike$btset$check_n_splice(cmp,arr,from,to,new_arr){
if(datahike.btset.eq_arr.call(null,cmp,arr,from,to,new_arr,(0),new_arr.length)){
return arr;
} else {
return datahike.btset.splice.call(null,arr,from,to,new_arr);
}
});
datahike.btset.arr_map_inplace = (function datahike$btset$arr_map_inplace(f,arr){
var len = arr.length;
var i_42825 = (0);
while(true){
if((i_42825 < len)){
(arr[i_42825] = f.call(null,(arr[i_42825])));

var G__42826 = (i_42825 + (1));
i_42825 = G__42826;
continue;
} else {
}
break;
}

return arr;
});
/**
 * Splits `arr` into arrays of size between min-len and max-len,
 * trying to stick to (min+max)/2
 */
datahike.btset.arr_partition_approx = (function datahike$btset$arr_partition_approx(min_len,max_len,arr){
var chunk_len = datahike.btset.avg_len;
var len = arr.length;
var acc = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
if((len > (0))){
var pos_42827 = (0);
while(true){
var rest_42828 = (len - pos_42827);
if((rest_42828 <= max_len)){
cljs.core.conj_BANG_.call(null,acc,datahike.btset.cut.call(null,arr,pos_42827));
} else {
if((rest_42828 >= (chunk_len + min_len))){
cljs.core.conj_BANG_.call(null,acc,datahike.btset.cut.call(null,arr,pos_42827,(pos_42827 + chunk_len)));

var G__42829 = (pos_42827 + chunk_len);
pos_42827 = G__42829;
continue;
} else {
var piece_len_42830 = (rest_42828 >>> (1));
cljs.core.conj_BANG_.call(null,acc,datahike.btset.cut.call(null,arr,pos_42827,(pos_42827 + piece_len_42830)));

var G__42831 = (pos_42827 + piece_len_42830);
pos_42827 = G__42831;
continue;

}
}
break;
}
} else {
}

return cljs.core.to_array.call(null,cljs.core.persistent_BANG_.call(null,acc));
});
datahike.btset.sorted_arr_distinct_QMARK_ = (function datahike$btset$sorted_arr_distinct_QMARK_(arr,cmp){
var al = arr.length;
if((al <= (1))){
return true;
} else {
var i = (1);
var p = (arr[(0)]);
while(true){
if((i >= al)){
return true;
} else {
var e = (arr[i]);
if(((0) === cmp.call(null,e,p))){
return false;
} else {
var G__42832 = (i + (1));
var G__42833 = e;
i = G__42832;
p = G__42833;
continue;
}
}
break;
}
}
});
/**
 * Filter out repetitive values in a sorted array.
 * Optimized for no-duplicates case
 */
datahike.btset.sorted_arr_distinct = (function datahike$btset$sorted_arr_distinct(arr,cmp){
if(cljs.core.truth_(datahike.btset.sorted_arr_distinct_QMARK_.call(null,arr,cmp))){
return arr;
} else {
var al = arr.length;
var acc = cljs.core.transient$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(arr[(0)])], null));
var i = (1);
var p = (arr[(0)]);
while(true){
if((i >= al)){
return cljs.core.into_array.call(null,cljs.core.persistent_BANG_.call(null,acc));
} else {
var e = (arr[i]);
if(((0) === cmp.call(null,e,p))){
var G__42834 = acc;
var G__42835 = (i + (1));
var G__42836 = e;
acc = G__42834;
i = G__42835;
p = G__42836;
continue;
} else {
var G__42837 = cljs.core.conj_BANG_.call(null,acc,e);
var G__42838 = (i + (1));
var G__42839 = e;
acc = G__42837;
i = G__42838;
p = G__42839;
continue;
}
}
break;
}
}
});
/**
 * Drop non-nil references and return array of arguments
 */
datahike.btset.return_array = (function datahike$btset$return_array(var_args){
var args42840 = [];
var len__11440__auto___42843 = arguments.length;
var i__11441__auto___42844 = (0);
while(true){
if((i__11441__auto___42844 < len__11440__auto___42843)){
args42840.push((arguments[i__11441__auto___42844]));

var G__42845 = (i__11441__auto___42844 + (1));
i__11441__auto___42844 = G__42845;
continue;
} else {
}
break;
}

var G__42842 = args42840.length;
switch (G__42842) {
case 1:
return datahike.btset.return_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datahike.btset.return_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.btset.return_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42840.length)].join('')));

}
});

datahike.btset.return_array.cljs$core$IFn$_invoke$arity$1 = (function (a1){
return [a1];
});

datahike.btset.return_array.cljs$core$IFn$_invoke$arity$2 = (function (a1,a2){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
return [a1,a2];
} else {
return [a1];
}
} else {
return [a2];
}
});

datahike.btset.return_array.cljs$core$IFn$_invoke$arity$3 = (function (a1,a2,a3){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a1,a2,a3];
} else {
return [a1,a2];
}
} else {
if(cljs.core.truth_(a3)){
return [a1,a3];
} else {
return [a1];
}
}
} else {
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a2,a3];
} else {
return [a2];
}
} else {
return [a3];
}
}
});

datahike.btset.return_array.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
datahike.btset.INode = function(){};

datahike.btset.node_lim_key = (function datahike$btset$node_lim_key(_){
if((!((_ == null))) && (!((_.datahike$btset$INode$node_lim_key$arity$1 == null)))){
return _.datahike$btset$INode$node_lim_key$arity$1(_);
} else {
var x__10937__auto__ = (((_ == null))?null:_);
var m__10938__auto__ = (datahike.btset.node_lim_key[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,_);
} else {
var m__10938__auto____$1 = (datahike.btset.node_lim_key["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-lim-key",_);
}
}
}
});

datahike.btset.node_len = (function datahike$btset$node_len(_){
if((!((_ == null))) && (!((_.datahike$btset$INode$node_len$arity$1 == null)))){
return _.datahike$btset$INode$node_len$arity$1(_);
} else {
var x__10937__auto__ = (((_ == null))?null:_);
var m__10938__auto__ = (datahike.btset.node_len[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,_);
} else {
var m__10938__auto____$1 = (datahike.btset.node_len["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-len",_);
}
}
}
});

datahike.btset.node_merge = (function datahike$btset$node_merge(_,next){
if((!((_ == null))) && (!((_.datahike$btset$INode$node_merge$arity$2 == null)))){
return _.datahike$btset$INode$node_merge$arity$2(_,next);
} else {
var x__10937__auto__ = (((_ == null))?null:_);
var m__10938__auto__ = (datahike.btset.node_merge[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,_,next);
} else {
var m__10938__auto____$1 = (datahike.btset.node_merge["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,_,next);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-merge",_);
}
}
}
});

datahike.btset.node_merge_n_split = (function datahike$btset$node_merge_n_split(_,next){
if((!((_ == null))) && (!((_.datahike$btset$INode$node_merge_n_split$arity$2 == null)))){
return _.datahike$btset$INode$node_merge_n_split$arity$2(_,next);
} else {
var x__10937__auto__ = (((_ == null))?null:_);
var m__10938__auto__ = (datahike.btset.node_merge_n_split[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,_,next);
} else {
var m__10938__auto____$1 = (datahike.btset.node_merge_n_split["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,_,next);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-merge-n-split",_);
}
}
}
});

datahike.btset.node_lookup = (function datahike$btset$node_lookup(_,cmp,key){
if((!((_ == null))) && (!((_.datahike$btset$INode$node_lookup$arity$3 == null)))){
return _.datahike$btset$INode$node_lookup$arity$3(_,cmp,key);
} else {
var x__10937__auto__ = (((_ == null))?null:_);
var m__10938__auto__ = (datahike.btset.node_lookup[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,_,cmp,key);
} else {
var m__10938__auto____$1 = (datahike.btset.node_lookup["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,_,cmp,key);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-lookup",_);
}
}
}
});

datahike.btset.node_conj = (function datahike$btset$node_conj(_,cmp,key){
if((!((_ == null))) && (!((_.datahike$btset$INode$node_conj$arity$3 == null)))){
return _.datahike$btset$INode$node_conj$arity$3(_,cmp,key);
} else {
var x__10937__auto__ = (((_ == null))?null:_);
var m__10938__auto__ = (datahike.btset.node_conj[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,_,cmp,key);
} else {
var m__10938__auto____$1 = (datahike.btset.node_conj["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,_,cmp,key);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-conj",_);
}
}
}
});

datahike.btset.node_disj = (function datahike$btset$node_disj(_,cmp,key,root_QMARK_,left,right){
if((!((_ == null))) && (!((_.datahike$btset$INode$node_disj$arity$6 == null)))){
return _.datahike$btset$INode$node_disj$arity$6(_,cmp,key,root_QMARK_,left,right);
} else {
var x__10937__auto__ = (((_ == null))?null:_);
var m__10938__auto__ = (datahike.btset.node_disj[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,_,cmp,key,root_QMARK_,left,right);
} else {
var m__10938__auto____$1 = (datahike.btset.node_disj["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,_,cmp,key,root_QMARK_,left,right);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-disj",_);
}
}
}
});

datahike.btset.rotate = (function datahike$btset$rotate(node,root_QMARK_,left,right){
if(cljs.core.truth_(root_QMARK_)){
return datahike.btset.return_array.call(null,node);
} else {
if((datahike.btset.node_len.call(null,node) > datahike.btset.min_len)){
return datahike.btset.return_array.call(null,left,node,right);
} else {
if(cljs.core.truth_((function (){var and__10207__auto__ = left;
if(cljs.core.truth_(and__10207__auto__)){
return (datahike.btset.node_len.call(null,left) <= datahike.btset.min_len);
} else {
return and__10207__auto__;
}
})())){
return datahike.btset.return_array.call(null,datahike.btset.node_merge.call(null,left,node),right);
} else {
if(cljs.core.truth_((function (){var and__10207__auto__ = right;
if(cljs.core.truth_(and__10207__auto__)){
return (datahike.btset.node_len.call(null,right) <= datahike.btset.min_len);
} else {
return and__10207__auto__;
}
})())){
return datahike.btset.return_array.call(null,left,datahike.btset.node_merge.call(null,node,right));
} else {
if(cljs.core.truth_((function (){var and__10207__auto__ = left;
if(cljs.core.truth_(and__10207__auto__)){
return ((right == null)) || ((datahike.btset.node_len.call(null,left) < datahike.btset.node_len.call(null,right)));
} else {
return and__10207__auto__;
}
})())){
var nodes = datahike.btset.node_merge_n_split.call(null,left,node);
return datahike.btset.return_array.call(null,(nodes[(0)]),(nodes[(1)]),right);
} else {
var nodes = datahike.btset.node_merge_n_split.call(null,node,right);
return datahike.btset.return_array.call(null,left,(nodes[(0)]),(nodes[(1)]));

}
}
}
}
}
});

/**
* @constructor
 * @implements {datahike.btset.INode}
*/
datahike.btset.Node = (function (keys,pointers){
this.keys = keys;
this.pointers = pointers;
})
datahike.btset.Node.prototype.datahike$btset$INode$ = cljs.core.PROTOCOL_SENTINEL;

datahike.btset.Node.prototype.datahike$btset$INode$node_lim_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datahike.btset.alast.call(null,self__.keys);
});

datahike.btset.Node.prototype.datahike$btset$INode$node_len$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keys.length;
});

datahike.btset.Node.prototype.datahike$btset$INode$node_merge$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
return (new datahike.btset.Node(datahike.arrays.aconcat.call(null,self__.keys,next.keys),datahike.arrays.aconcat.call(null,self__.pointers,next.pointers)));
});

datahike.btset.Node.prototype.datahike$btset$INode$node_merge_n_split$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
var ks = datahike.btset.merge_n_split.call(null,self__.keys,next.keys);
var ps = datahike.btset.merge_n_split.call(null,self__.pointers,next.pointers);
return datahike.btset.return_array.call(null,(new datahike.btset.Node((ks[(0)]),(ps[(0)]))),(new datahike.btset.Node((ks[(1)]),(ps[(1)]))));
});

datahike.btset.Node.prototype.datahike$btset$INode$node_lookup$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datahike.btset.lookup_range.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return datahike.btset.node_lookup.call(null,(self__.pointers[idx]),cmp,key);
}
});

datahike.btset.Node.prototype.datahike$btset$INode$node_conj$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datahike.btset.binary_search_l.call(null,cmp,self__.keys,(self__.keys.length - (2)),key);
var nodes = datahike.btset.node_conj.call(null,(self__.pointers[idx]),cmp,key);
if(cljs.core.truth_(nodes)){
var new_keys = datahike.btset.check_n_splice.call(null,cmp,self__.keys,idx,(idx + (1)),datahike.arrays.amap.call(null,datahike.btset.node_lim_key,nodes));
var new_pointers = datahike.btset.splice.call(null,self__.pointers,idx,(idx + (1)),nodes);
if((new_pointers.length <= datahike.btset.max_len)){
return [(new datahike.btset.Node(new_keys,new_pointers))];
} else {
var middle = (new_pointers.length >>> (1));
return [(new datahike.btset.Node(datahike.btset.cut.call(null,new_keys,(0),middle),datahike.btset.cut.call(null,new_pointers,(0),middle))),(new datahike.btset.Node(datahike.btset.cut.call(null,new_keys,middle),datahike.btset.cut.call(null,new_pointers,middle)))];
}
} else {
return null;
}
});

datahike.btset.Node.prototype.datahike$btset$INode$node_disj$arity$6 = (function (_,cmp,key,root_QMARK_,left,right){
var self__ = this;
var ___$1 = this;
var idx = datahike.btset.lookup_range.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var child = (self__.pointers[idx]);
var left_child = ((((idx - (1)) >= (0)))?(self__.pointers[(idx - (1))]):null);
var right_child = ((((idx + (1)) < self__.pointers.length))?(self__.pointers[(idx + (1))]):null);
var disjned = datahike.btset.node_disj.call(null,child,cmp,key,false,left_child,right_child);
if(cljs.core.truth_(disjned)){
var left_idx = (cljs.core.truth_(left_child)?(idx - (1)):idx);
var right_idx = (cljs.core.truth_(right_child)?((2) + idx):((1) + idx));
var new_keys = datahike.btset.check_n_splice.call(null,cmp,self__.keys,left_idx,right_idx,datahike.arrays.amap.call(null,datahike.btset.node_lim_key,disjned));
var new_pointers = datahike.btset.splice.call(null,self__.pointers,left_idx,right_idx,disjned);
return datahike.btset.rotate.call(null,(new datahike.btset.Node(new_keys,new_pointers)),root_QMARK_,left,right);
} else {
return null;
}
}
});

datahike.btset.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"pointers","pointers",-1669058356,null)], null);
});

datahike.btset.Node.cljs$lang$type = true;

datahike.btset.Node.cljs$lang$ctorStr = "datahike.btset/Node";

datahike.btset.Node.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"datahike.btset/Node");
});

datahike.btset.__GT_Node = (function datahike$btset$__GT_Node(keys,pointers){
return (new datahike.btset.Node(keys,pointers));
});


/**
* @constructor
 * @implements {datahike.btset.INode}
*/
datahike.btset.Leaf = (function (keys){
this.keys = keys;
})
datahike.btset.Leaf.prototype.datahike$btset$INode$ = cljs.core.PROTOCOL_SENTINEL;

datahike.btset.Leaf.prototype.datahike$btset$INode$node_lim_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datahike.btset.alast.call(null,self__.keys);
});

datahike.btset.Leaf.prototype.datahike$btset$INode$node_len$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keys.length;
});

datahike.btset.Leaf.prototype.datahike$btset$INode$node_merge$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
return (new datahike.btset.Leaf(datahike.arrays.aconcat.call(null,self__.keys,next.keys)));
});

datahike.btset.Leaf.prototype.datahike$btset$INode$node_merge_n_split$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
var ks = datahike.btset.merge_n_split.call(null,self__.keys,next.keys);
return datahike.btset.return_array.call(null,(new datahike.btset.Leaf((ks[(0)]))),(new datahike.btset.Leaf((ks[(1)]))));
});

datahike.btset.Leaf.prototype.datahike$btset$INode$node_lookup$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datahike.btset.lookup_exact.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return (self__.keys[idx]);
}
});

datahike.btset.Leaf.prototype.datahike$btset$INode$node_conj$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datahike.btset.binary_search_l.call(null,cmp,self__.keys,(self__.keys.length - (1)),key);
var keys_l = self__.keys.length;
if(((idx < keys_l)) && (((0) === cmp.call(null,key,(self__.keys[idx]))))){
return null;
} else {
if((keys_l === datahike.btset.max_len)){
var middle = ((keys_l + (1)) >>> (1));
if((idx > middle)){
return [(new datahike.btset.Leaf(datahike.btset.cut.call(null,self__.keys,(0),middle))),(new datahike.btset.Leaf(datahike.btset.cut_n_splice.call(null,self__.keys,middle,keys_l,idx,idx,[key])))];
} else {
return [(new datahike.btset.Leaf(datahike.btset.cut_n_splice.call(null,self__.keys,(0),middle,idx,idx,[key]))),(new datahike.btset.Leaf(datahike.btset.cut.call(null,self__.keys,middle,keys_l)))];
}
} else {
return [(new datahike.btset.Leaf(datahike.btset.splice.call(null,self__.keys,idx,idx,[key])))];

}
}
});

datahike.btset.Leaf.prototype.datahike$btset$INode$node_disj$arity$6 = (function (_,cmp,key,root_QMARK_,left,right){
var self__ = this;
var ___$1 = this;
var idx = datahike.btset.lookup_exact.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var new_keys = datahike.btset.splice.call(null,self__.keys,idx,(idx + (1)),[]);
return datahike.btset.rotate.call(null,(new datahike.btset.Leaf(new_keys)),root_QMARK_,left,right);
}
});

datahike.btset.Leaf.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null)], null);
});

datahike.btset.Leaf.cljs$lang$type = true;

datahike.btset.Leaf.cljs$lang$ctorStr = "datahike.btset/Leaf";

datahike.btset.Leaf.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"datahike.btset/Leaf");
});

datahike.btset.__GT_Leaf = (function datahike$btset$__GT_Leaf(keys){
return (new datahike.btset.Leaf(keys));
});

datahike.btset.btset_conj = (function datahike$btset$btset_conj(set,key,cmp){
return null;
});
datahike.btset.btset_disj = (function datahike$btset$btset_disj(set,key,cmp){
return null;
});
datahike.btset.btset_iter = (function datahike$btset$btset_iter(set){
return null;
});
datahike.btset.uninitialized_hash = null;

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ISet}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {datahike.btset.Object}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
datahike.btset.BTSet = (function (root,shift,cnt,comparator,meta,__hash){
this.root = root;
this.shift = shift;
this.cnt = cnt;
this.comparator = comparator;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2297303311;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.btset.BTSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datahike.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return datahike.btset.node_lookup.call(null,self__.root,self__.comparator,k);
});

datahike.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var or__10219__auto__ = datahike.btset.node_lookup.call(null,self__.root,self__.comparator,k);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return not_found;
}
});

datahike.btset.BTSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,cljs.core.seq.call(null,this$__$1));
});

datahike.btset.BTSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

datahike.btset.BTSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new datahike.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,self__.meta,self__.__hash));
});

datahike.btset.BTSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

datahike.btset.BTSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.rseq.call(null,datahike.btset.btset_iter.call(null,this$__$1));
});

datahike.btset.BTSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__10661__auto__ = self__.__hash;
if(!((h__10661__auto__ == null))){
return h__10661__auto__;
} else {
var h__10661__auto____$1 = cljs.core.hash_unordered_coll.call(null,this$__$1);
self__.__hash = h__10661__auto____$1;

return h__10661__auto____$1;
}
});

datahike.btset.BTSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (cljs.core.set_QMARK_.call(null,other)) && ((self__.cnt === cljs.core.count.call(null,other))) && (cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p1__42847_SHARP_){
return cljs.core.contains_QMARK_.call(null,this$__$1,p1__42847_SHARP_);
});})(this$__$1))
,other));
});

datahike.btset.BTSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new datahike.btset.BTSet((new datahike.btset.Leaf([])),(0),(0),self__.comparator,self__.meta,datahike.btset.uninitialized_hash));
});

datahike.btset.BTSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return datahike.btset.btset_disj.call(null,this$__$1,key,self__.comparator);
});

datahike.btset.BTSet.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var temp__6736__auto__ = datahike.btset.btset_iter.call(null,this$__$1);
if(cljs.core.truth_(temp__6736__auto__)){
var i = temp__6736__auto__;
return cljs.core._reduce.call(null,i,f);
} else {
return f.call(null);
}
});

datahike.btset.BTSet.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
var temp__6736__auto__ = datahike.btset.btset_iter.call(null,this$__$1);
if(cljs.core.truth_(temp__6736__auto__)){
var i = temp__6736__auto__;
return cljs.core._reduce.call(null,i,f,start);
} else {
return start;
}
});

datahike.btset.BTSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datahike.btset.btset_iter.call(null,this$__$1);
});

datahike.btset.BTSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new datahike.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,new_meta,self__.__hash));
});

datahike.btset.BTSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return datahike.btset.btset_conj.call(null,this$__$1,key,self__.comparator);
});

datahike.btset.BTSet.prototype.call = (function() {
var G__42850 = null;
var G__42850__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__42850__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__42850 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__42850__2.call(this,self__,k);
case 3:
return G__42850__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__42850.cljs$core$IFn$_invoke$arity$2 = G__42850__2;
G__42850.cljs$core$IFn$_invoke$arity$3 = G__42850__3;
return G__42850;
})()
;

datahike.btset.BTSet.prototype.apply = (function (self__,args42849){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args42849)));
});

datahike.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

datahike.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

datahike.btset.BTSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"comparator","comparator",-509539107,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

datahike.btset.BTSet.cljs$lang$type = true;

datahike.btset.BTSet.cljs$lang$ctorStr = "datahike.btset/BTSet";

datahike.btset.BTSet.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"datahike.btset/BTSet");
});

datahike.btset.__GT_BTSet = (function datahike$btset$__GT_BTSet(root,shift,cnt,comparator,meta,__hash){
return (new datahike.btset.BTSet(root,shift,cnt,comparator,meta,__hash));
});

datahike.btset.alter_btset = (function datahike$btset$alter_btset(set,root,shift,cnt){
return (new datahike.btset.BTSet(root,shift,cnt,set.comparator,set.meta,datahike.btset.uninitialized_hash));
});
datahike.btset.keys_for = (function datahike$btset$keys_for(set,path){
var level = set.shift;
var node = set.root;
while(true){
if((level > (0))){
var G__42851 = (level - datahike.btset.level_shift);
var G__42852 = (node.pointers[datahike.btset.path_get.call(null,path,level)]);
level = G__42851;
node = G__42852;
continue;
} else {
return node.keys;
}
break;
}
});
datahike.btset.btset_conj = (function datahike$btset$btset_conj(set,key,cmp){
var roots = datahike.btset.node_conj.call(null,set.root,cmp,key);
if((roots == null)){
return set;
} else {
if((roots.length === (1))){
return datahike.btset.alter_btset.call(null,set,(roots[(0)]),set.shift,(set.cnt + (1)));
} else {
return datahike.btset.alter_btset.call(null,set,(new datahike.btset.Node(datahike.arrays.amap.call(null,datahike.btset.node_lim_key,roots),roots)),(set.shift + datahike.btset.level_shift),(set.cnt + (1)));

}
}
});
datahike.btset.btset_disj = (function datahike$btset$btset_disj(set,key,cmp){
var new_roots = datahike.btset.node_disj.call(null,set.root,cmp,key,true,null,null);
if((new_roots == null)){
return set;
} else {
var new_root = (new_roots[(0)]);
if(((new_root instanceof datahike.btset.Node)) && (((1) === new_root.pointers.length))){
return datahike.btset.alter_btset.call(null,set,(new_root.pointers[(0)]),(set.shift - datahike.btset.level_shift),(set.cnt - (1)));
} else {
return datahike.btset.alter_btset.call(null,set,new_root,set.shift,(set.cnt - (1)));
}
}
});
datahike.btset._next_path = (function datahike$btset$_next_path(node,path,level){
var idx = datahike.btset.path_get.call(null,path,level);
if((level > (0))){
var sub_path = datahike.btset._next_path.call(null,(node.pointers[idx]),path,(level - datahike.btset.level_shift));
if(((-1) === sub_path)){
if(((idx + (1)) < node.pointers.length)){
return datahike.btset.path_set.call(null,datahike.btset.empty_path,level,(idx + (1)));
} else {
return (-1);
}
} else {
return datahike.btset.path_set.call(null,sub_path,level,idx);
}
} else {
if(((idx + (1)) < node.keys.length)){
return datahike.btset.path_set.call(null,datahike.btset.empty_path,(0),(idx + (1)));
} else {
return (-1);
}
}
});
/**
 * Returns path representing next item after `path` in natural traversal order,
 * or -1 if end of tree has been reached
 */
datahike.btset.next_path = (function datahike$btset$next_path(set,path){
return datahike.btset._next_path.call(null,set.root,path,set.shift);
});
/**
 * Returns rightmost path possible starting from node and going deeper
 */
datahike.btset._rpath = (function datahike$btset$_rpath(node,level){
var node__$1 = node;
var path = datahike.btset.empty_path;
var level__$1 = level;
while(true){
if((level__$1 > (0))){
var G__42853 = datahike.btset.alast.call(null,node__$1.pointers);
var G__42854 = datahike.btset.path_set.call(null,path,level__$1,(node__$1.pointers.length - (1)));
var G__42855 = (level__$1 - datahike.btset.level_shift);
node__$1 = G__42853;
path = G__42854;
level__$1 = G__42855;
continue;
} else {
return datahike.btset.path_set.call(null,path,(0),(node__$1.keys.length - (1)));
}
break;
}
});
datahike.btset._prev_path = (function datahike$btset$_prev_path(node,path,level){
var idx = datahike.btset.path_get.call(null,path,level);
if((level > (0))){
var sub_level = (level - datahike.btset.level_shift);
var sub_path = datahike.btset._prev_path.call(null,(node.pointers[idx]),path,sub_level);
if(((-1) === sub_path)){
if(((idx - (1)) >= (0))){
var idx__$1 = (idx - (1));
var sub_path__$1 = datahike.btset._rpath.call(null,(node.pointers[idx__$1]),sub_level);
return datahike.btset.path_set.call(null,sub_path__$1,level,idx__$1);
} else {
return (-1);
}
} else {
return datahike.btset.path_set.call(null,sub_path,level,idx);
}
} else {
if(((idx - (1)) >= (0))){
return datahike.btset.path_set.call(null,datahike.btset.empty_path,(0),(idx - (1)));
} else {
return (-1);
}
}
});
/**
 * Returns path representing previous item before `path` in natural traversal order,
 * or -1 if `path` was already beginning of a tree
 */
datahike.btset.prev_path = (function datahike$btset$prev_path(set,path){
return datahike.btset._prev_path.call(null,set.root,path,set.shift);
});
datahike.btset.iter = (function datahike$btset$iter(set,left,right){
return null;
});
datahike.btset.iter_first = (function datahike$btset$iter_first(iter){
return null;
});
datahike.btset.iter_next = (function datahike$btset$iter_next(iter){
return null;
});
datahike.btset.iter_chunk = (function datahike$btset$iter_chunk(iter){
return null;
});
datahike.btset.iter_chunked_next = (function datahike$btset$iter_chunked_next(iter){
return null;
});
datahike.btset.iter_rseq = (function datahike$btset$iter_rseq(iter){
return null;
});
datahike.btset.iter_reduce = (function datahike$btset$iter_reduce(var_args){
var args42856 = [];
var len__11440__auto___42859 = arguments.length;
var i__11441__auto___42860 = (0);
while(true){
if((i__11441__auto___42860 < len__11440__auto___42859)){
args42856.push((arguments[i__11441__auto___42860]));

var G__42861 = (i__11441__auto___42860 + (1));
i__11441__auto___42860 = G__42861;
continue;
} else {
}
break;
}

var G__42858 = args42856.length;
switch (G__42858) {
case 2:
return datahike.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42856.length)].join('')));

}
});

datahike.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2 = (function (iter,f){
return null;
});

datahike.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3 = (function (iter,f,start){
return null;
});

datahike.btset.iter_reduce.cljs$lang$maxFixedArity = 3;

datahike.btset.riter = (function datahike$btset$riter(set,left,right){
return null;
});
datahike.btset.riter_first = (function datahike$btset$riter_first(riter){
return null;
});
datahike.btset.riter_next = (function datahike$btset$riter_next(ri){
return null;
});
datahike.btset.riter_rseq = (function datahike$btset$riter_rseq(riter){
return null;
});
/**
 * Iterator that represents whole set
 */
datahike.btset.btset_iter = (function datahike$btset$btset_iter(set){
if((datahike.btset.node_len.call(null,set.root) > (0))){
var left = datahike.btset.empty_path;
var right = (datahike.btset._rpath.call(null,set.root,set.shift) + (1));
return datahike.btset.iter.call(null,set,left,right);
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IChunkedNext}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IChunkedSeq}
 * @implements {cljs.core.IReduce}
*/
datahike.btset.Iter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 143130816;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
datahike.btset.Iter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

datahike.btset.Iter.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datahike.btset.iter_first.call(null,this$__$1);
});

datahike.btset.Iter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__10219__auto__ = datahike.btset.iter_next.call(null,this$__$1);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

datahike.btset.Iter.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datahike.btset.iter_next.call(null,this$__$1);
});

datahike.btset.Iter.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datahike.btset.iter_chunk.call(null,this$__$1);
});

datahike.btset.Iter.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__10219__auto__ = cljs.core._chunked_next.call(null,this$__$1);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

datahike.btset.Iter.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datahike.btset.iter_chunked_next.call(null,this$__$1);
});

datahike.btset.Iter.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return datahike.btset.iter_reduce.call(null,this$__$1,f);
});

datahike.btset.Iter.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
return datahike.btset.iter_reduce.call(null,this$__$1,f,start);
});

datahike.btset.Iter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datahike.btset.iter_rseq.call(null,this$__$1);
});

datahike.btset.Iter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.with_meta(new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

datahike.btset.Iter.cljs$lang$type = true;

datahike.btset.Iter.cljs$lang$ctorStr = "datahike.btset/Iter";

datahike.btset.Iter.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"datahike.btset/Iter");
});

datahike.btset.__GT_Iter = (function datahike$btset$__GT_Iter(set,left,right,keys,idx){
return (new datahike.btset.Iter(set,left,right,keys,idx));
});

datahike.btset.iter = (function datahike$btset$iter(set,left,right){
return (new datahike.btset.Iter(set,left,right,datahike.btset.keys_for.call(null,set,left),datahike.btset.path_get.call(null,left,(0))));
});
datahike.btset.iter_first = (function datahike$btset$iter_first(iter){
if(cljs.core.truth_(iter.keys)){
return (iter.keys[iter.idx]);
} else {
return null;
}
});
datahike.btset.iter_next = (function datahike$btset$iter_next(iter){
var set = iter.set;
var left = iter.left;
var right = iter.right;
var keys = iter.keys;
var idx = iter.idx;
if(cljs.core.truth_(keys)){
if(((idx + (1)) < keys.length)){
if(((left + (1)) < right)){
return (new datahike.btset.Iter(set,(left + (1)),right,keys,(idx + (1))));
} else {
return null;
}
} else {
var left__$1 = datahike.btset.next_path.call(null,set,left);
if((cljs.core.not_EQ_.call(null,(-1),left__$1)) && ((left__$1 < right))){
return datahike.btset.iter.call(null,set,left__$1,right);
} else {
return null;
}
}
} else {
return null;
}
});
datahike.btset.iter_chunk = (function datahike$btset$iter_chunk(iter){
var left = iter.left;
var right = iter.right;
var keys = iter.keys;
var idx = iter.idx;
var end_idx = ((cljs.core._EQ_.call(null,(left | datahike.btset.path_mask),(right | datahike.btset.path_mask)))?(right & datahike.btset.path_mask):keys.length);
return cljs.core.array_chunk.call(null,keys,idx,end_idx);
});
datahike.btset.iter_chunked_next = (function datahike$btset$iter_chunked_next(iter){
var set = iter.set;
var left = iter.left;
var right = iter.right;
var keys = iter.keys;
var idx = iter.idx;
var left__$1 = datahike.btset.next_path.call(null,set,(left + ((keys.length - idx) - (1))));
if((cljs.core.not_EQ_.call(null,(-1),left__$1)) && ((left__$1 < right))){
return datahike.btset.iter.call(null,set,left__$1,right);
} else {
return null;
}
});
datahike.btset.iter_rseq = (function datahike$btset$iter_rseq(iter){
var set = iter.set;
var left = iter.left;
var right = iter.right;
if(cljs.core.truth_(iter.keys)){
return datahike.btset.riter.call(null,set,datahike.btset.prev_path.call(null,set,left),datahike.btset.prev_path.call(null,set,right));
} else {
return null;
}
});
datahike.btset.iter_reduce = (function datahike$btset$iter_reduce(var_args){
var args42863 = [];
var len__11440__auto___42866 = arguments.length;
var i__11441__auto___42867 = (0);
while(true){
if((i__11441__auto___42867 < len__11440__auto___42866)){
args42863.push((arguments[i__11441__auto___42867]));

var G__42868 = (i__11441__auto___42867 + (1));
i__11441__auto___42867 = G__42868;
continue;
} else {
}
break;
}

var G__42865 = args42863.length;
switch (G__42865) {
case 2:
return datahike.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42863.length)].join('')));

}
});

datahike.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2 = (function (iter,f){
if((iter.keys == null)){
return f.call(null);
} else {
var first = datahike.btset.iter_first.call(null,iter);
var temp__6736__auto__ = datahike.btset.iter_next.call(null,iter);
if(cljs.core.truth_(temp__6736__auto__)){
var next = temp__6736__auto__;
return datahike.btset.iter_reduce.call(null,next,f,first);
} else {
return first;
}
}
});

datahike.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3 = (function (iter,f,start){
var set = iter.set;
var right = iter.right;
var left = iter.left;
var keys = iter.keys;
var idx = iter.idx;
var acc = start;
while(true){
if((keys == null)){
return acc;
} else {
var new_acc = f.call(null,acc,(keys[idx]));
if(cljs.core.reduced_QMARK_.call(null,new_acc)){
return cljs.core.deref.call(null,new_acc);
} else {
if(((idx + (1)) < keys.length)){
if(((left + (1)) < right)){
var G__42870 = (left + (1));
var G__42871 = keys;
var G__42872 = (idx + (1));
var G__42873 = new_acc;
left = G__42870;
keys = G__42871;
idx = G__42872;
acc = G__42873;
continue;
} else {
return new_acc;
}
} else {
var new_left = datahike.btset.next_path.call(null,set,left);
if((!(((-1) === new_left))) && ((new_left < right))){
var G__42874 = new_left;
var G__42875 = datahike.btset.keys_for.call(null,set,new_left);
var G__42876 = datahike.btset.path_get.call(null,new_left,(0));
var G__42877 = new_acc;
left = G__42874;
keys = G__42875;
idx = G__42876;
acc = G__42877;
continue;
} else {
return new_acc;
}

}
}
}
break;
}
});

datahike.btset.iter_reduce.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
*/
datahike.btset.ReverseIter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 142606528;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datahike.btset.ReverseIter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

datahike.btset.ReverseIter.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datahike.btset.riter_first.call(null,this$__$1);
});

datahike.btset.ReverseIter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__10219__auto__ = datahike.btset.riter_next.call(null,this$__$1);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

datahike.btset.ReverseIter.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datahike.btset.riter_next.call(null,this$__$1);
});

datahike.btset.ReverseIter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datahike.btset.riter_rseq.call(null,this$__$1);
});

datahike.btset.ReverseIter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.with_meta(new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

datahike.btset.ReverseIter.cljs$lang$type = true;

datahike.btset.ReverseIter.cljs$lang$ctorStr = "datahike.btset/ReverseIter";

datahike.btset.ReverseIter.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"datahike.btset/ReverseIter");
});

datahike.btset.__GT_ReverseIter = (function datahike$btset$__GT_ReverseIter(set,left,right,keys,idx){
return (new datahike.btset.ReverseIter(set,left,right,keys,idx));
});

datahike.btset.riter = (function datahike$btset$riter(set,left,right){
return (new datahike.btset.ReverseIter(set,left,right,datahike.btset.keys_for.call(null,set,right),datahike.btset.path_get.call(null,right,(0))));
});
datahike.btset.riter_first = (function datahike$btset$riter_first(riter){
if(cljs.core.truth_(riter.keys)){
return (riter.keys[riter.idx]);
} else {
return null;
}
});
datahike.btset.riter_next = (function datahike$btset$riter_next(ri){
var set = ri.set;
var left = ri.left;
var right = ri.right;
var keys = ri.keys;
var idx = ri.idx;
if(cljs.core.truth_(keys)){
if(((idx - (1)) >= (0))){
if(((right - (1)) > left)){
return (new datahike.btset.ReverseIter(set,left,(right - (1)),keys,(idx - (1))));
} else {
return null;
}
} else {
var right__$1 = datahike.btset.prev_path.call(null,set,right);
if((cljs.core.not_EQ_.call(null,(-1),right__$1)) && ((right__$1 > left))){
return datahike.btset.riter.call(null,set,left,right__$1);
} else {
return null;
}
}
} else {
return null;
}
});
datahike.btset.riter_rseq = (function datahike$btset$riter_rseq(riter){
var set = riter.set;
var left = riter.left;
var right = riter.right;
if(cljs.core.truth_(cljs.core.keys)){
var new_left = (((left === (-1)))?(0):datahike.btset.next_path.call(null,set,left));
var new_right = datahike.btset.next_path.call(null,set,right);
var new_right__$1 = (((new_right === (-1)))?(right + (1)):new_right);
return datahike.btset.iter.call(null,set,new_left,new_right__$1);
} else {
return null;
}
});
datahike.btset._distance = (function datahike$btset$_distance(node,left,right,level){
var idx_l = datahike.btset.path_get.call(null,left,level);
var idx_r = datahike.btset.path_get.call(null,right,level);
if((level > (0))){
if((idx_l === idx_r)){
return datahike.btset._distance.call(null,(node.pointers[idx_l]),left,right,(level - datahike.btset.level_shift));
} else {
var level__$1 = level;
var res = (idx_r - idx_l);
while(true){
if(((0) === level__$1)){
return res;
} else {
var G__42878 = (level__$1 - datahike.btset.level_shift);
var G__42879 = (res * datahike.btset.avg_len);
level__$1 = G__42878;
res = G__42879;
continue;
}
break;
}
}
} else {
return (idx_r - idx_l);
}
});
datahike.btset.distance = (function datahike$btset$distance(set,path_l,path_r){
if((path_l === path_r)){
return (0);
} else {
if(((path_l + (1)) === path_r)){
return (1);
} else {
if((datahike.btset.next_path.call(null,set,path_l) === path_r)){
return (1);
} else {
return datahike.btset._distance.call(null,set.root,path_l,path_r,set.shift);

}
}
}
});
datahike.btset.est_count = (function datahike$btset$est_count(iter){
return datahike.btset.distance.call(null,iter.set,iter.left,iter.right);
});
/**
 * Returns path to first element >= key,
 * or -1 if all elements in a set < key
 */
datahike.btset._seek = (function datahike$btset$_seek(set,key){
var node = set.root;
var path = datahike.btset.empty_path;
var level = set.shift;
while(true){
var keys_l = datahike.btset.node_len.call(null,node);
if(((0) === level)){
var keys = node.keys;
var idx = datahike.btset.binary_search_l.call(null,set.comparator,keys,(keys_l - (1)),key);
if((keys_l === idx)){
return (-1);
} else {
return datahike.btset.path_set.call(null,path,(0),idx);
}
} else {
var keys = node.keys;
var idx = datahike.btset.binary_search_l.call(null,set.comparator,keys,(keys_l - (2)),key);
var G__42880 = (node.pointers[idx]);
var G__42881 = datahike.btset.path_set.call(null,path,level,idx);
var G__42882 = (level - datahike.btset.level_shift);
node = G__42880;
path = G__42881;
level = G__42882;
continue;
}
break;
}
});
/**
 * Returns path to the first element that is > key.
 * If all elements in a set are <= key, returns `(-rpath set) + 1`.
 * It’s a virtual path that is bigger than any path in a tree
 */
datahike.btset._rseek = (function datahike$btset$_rseek(set,key){
var node = set.root;
var path = datahike.btset.empty_path;
var level = set.shift;
while(true){
var keys_l = datahike.btset.node_len.call(null,node);
if(((0) === level)){
var keys = node.keys;
var idx = datahike.btset.binary_search_r.call(null,set.comparator,keys,(keys_l - (1)),key);
return datahike.btset.path_set.call(null,path,(0),idx);
} else {
var keys = node.keys;
var idx = datahike.btset.binary_search_r.call(null,set.comparator,keys,(keys_l - (2)),key);
var G__42883 = (node.pointers[idx]);
var G__42884 = datahike.btset.path_set.call(null,path,level,idx);
var G__42885 = (level - datahike.btset.level_shift);
node = G__42883;
path = G__42884;
level = G__42885;
continue;
}
break;
}
});
datahike.btset._slice = (function datahike$btset$_slice(set,key_from,key_to){
var path = datahike.btset._seek.call(null,set,key_from);
if((path < (0))){
return null;
} else {
var till_path = datahike.btset._rseek.call(null,set,key_to);
if((till_path > path)){
return (new datahike.btset.Iter(set,path,till_path,datahike.btset.keys_for.call(null,set,path),datahike.btset.path_get.call(null,path,(0))));
} else {
return null;
}
}
});
/**
 * When called with single key, returns iterator over set that contains all elements equal to the key.
 * When called with two keys (range), returns iterator for all X where key-from <= X <= key-to
 */
datahike.btset.slice = (function datahike$btset$slice(var_args){
var args42886 = [];
var len__11440__auto___42889 = arguments.length;
var i__11441__auto___42890 = (0);
while(true){
if((i__11441__auto___42890 < len__11440__auto___42889)){
args42886.push((arguments[i__11441__auto___42890]));

var G__42891 = (i__11441__auto___42890 + (1));
i__11441__auto___42890 = G__42891;
continue;
} else {
}
break;
}

var G__42888 = args42886.length;
switch (G__42888) {
case 2:
return datahike.btset.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.btset.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42886.length)].join('')));

}
});

datahike.btset.slice.cljs$core$IFn$_invoke$arity$2 = (function (set,key){
return datahike.btset.slice.call(null,set,key,key);
});

datahike.btset.slice.cljs$core$IFn$_invoke$arity$3 = (function (set,key_from,key_to){
return datahike.btset._slice.call(null,set,key_from,key_to);
});

datahike.btset.slice.cljs$lang$maxFixedArity = 3;

datahike.btset._btset_from_sorted_arr = (function datahike$btset$_btset_from_sorted_arr(arr,cmp){
var leafs = datahike.btset.arr_map_inplace.call(null,(function (p1__42893_SHARP_){
return (new datahike.btset.Leaf(p1__42893_SHARP_));
}),datahike.btset.arr_partition_approx.call(null,datahike.btset.min_len,datahike.btset.max_len,arr));
var current_level = leafs;
var shift = (0);
while(true){
var G__42896 = cljs.core.count.call(null,current_level);
switch (G__42896) {
case (0):
return (new datahike.btset.BTSet((new datahike.btset.Leaf([])),(0),(0),cmp,null,datahike.btset.uninitialized_hash));

break;
case (1):
return (new datahike.btset.BTSet(cljs.core.first.call(null,current_level),shift,arr.length,cmp,null,datahike.btset.uninitialized_hash));

break;
default:
var G__42898 = datahike.btset.arr_map_inplace.call(null,((function (current_level,shift,G__42896,leafs){
return (function (p1__42894_SHARP_){
return (new datahike.btset.Node(datahike.arrays.amap.call(null,datahike.btset.node_lim_key,p1__42894_SHARP_),p1__42894_SHARP_));
});})(current_level,shift,G__42896,leafs))
,datahike.btset.arr_partition_approx.call(null,datahike.btset.min_len,datahike.btset.max_len,current_level));
var G__42899 = (shift + datahike.btset.level_shift);
current_level = G__42898;
shift = G__42899;
continue;

}
break;
}
});
datahike.btset._btset_from_seq = (function datahike$btset$_btset_from_seq(seq,cmp){
var arr = datahike.btset.sorted_arr_distinct.call(null,datahike.arrays.asort.call(null,cljs.core.into_array.call(null,seq),cmp),cmp);
return datahike.btset._btset_from_sorted_arr.call(null,arr,cmp);
});
datahike.btset.btset_by = (function datahike$btset$btset_by(var_args){
var args42900 = [];
var len__11440__auto___42905 = arguments.length;
var i__11441__auto___42906 = (0);
while(true){
if((i__11441__auto___42906 < len__11440__auto___42905)){
args42900.push((arguments[i__11441__auto___42906]));

var G__42907 = (i__11441__auto___42906 + (1));
i__11441__auto___42906 = G__42907;
continue;
} else {
}
break;
}

var G__42904 = args42900.length;
switch (G__42904) {
case 1:
return datahike.btset.btset_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(args42900.slice((1)),(0),null));
return datahike.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

datahike.btset.btset_by.cljs$core$IFn$_invoke$arity$1 = (function (cmp){
return (new datahike.btset.BTSet((new datahike.btset.Leaf([])),(0),(0),cmp,null,datahike.btset.uninitialized_hash));
});

datahike.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic = (function (cmp,keys){
return datahike.btset._btset_from_seq.call(null,keys,cmp);
});

datahike.btset.btset_by.cljs$lang$applyTo = (function (seq42901){
var G__42902 = cljs.core.first.call(null,seq42901);
var seq42901__$1 = cljs.core.next.call(null,seq42901);
return datahike.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic(G__42902,seq42901__$1);
});

datahike.btset.btset_by.cljs$lang$maxFixedArity = (1);

datahike.btset.btset = (function datahike$btset$btset(var_args){
var args42909 = [];
var len__11440__auto___42913 = arguments.length;
var i__11441__auto___42914 = (0);
while(true){
if((i__11441__auto___42914 < len__11440__auto___42913)){
args42909.push((arguments[i__11441__auto___42914]));

var G__42915 = (i__11441__auto___42914 + (1));
i__11441__auto___42914 = G__42915;
continue;
} else {
}
break;
}

var G__42912 = args42909.length;
switch (G__42912) {
case 0:
return datahike.btset.btset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(args42909.slice((0)),(0),null));
return datahike.btset.btset.cljs$core$IFn$_invoke$arity$variadic(argseq__11463__auto__);

}
});

datahike.btset.btset.cljs$core$IFn$_invoke$arity$0 = (function (){
return datahike.btset.btset_by.call(null,cljs.core.compare);
});

datahike.btset.btset.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return datahike.btset._btset_from_seq.call(null,keys,cljs.core.compare);
});

datahike.btset.btset.cljs$lang$applyTo = (function (seq42910){
return datahike.btset.btset.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42910));
});

datahike.btset.btset.cljs$lang$maxFixedArity = (0);


//# sourceMappingURL=btset.js.map