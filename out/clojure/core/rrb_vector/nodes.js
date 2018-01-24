// Compiled by ClojureScript 1.9.542 {}
goog.provide('clojure.core.rrb_vector.nodes');
goog.require('cljs.core');
clojure.core.rrb_vector.nodes.empty_node = cljs.core.PersistentVector.EMPTY_NODE;
clojure.core.rrb_vector.nodes.clone = (function clojure$core$rrb_vector$nodes$clone(shift,node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone.call(null,node.arr)));
});
clojure.core.rrb_vector.nodes.regular_QMARK_ = (function clojure$core$rrb_vector$nodes$regular_QMARK_(node){
return !((node.arr.length === (33)));
});
clojure.core.rrb_vector.nodes.ranges = (function clojure$core$rrb_vector$nodes$ranges(node){
return (node.arr[(32)]);
});
clojure.core.rrb_vector.nodes.last_range = (function clojure$core$rrb_vector$nodes$last_range(node){
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,node);
var i = ((rngs[(32)]) - (1));
return (rngs[i]);
});
clojure.core.rrb_vector.nodes.regular_ranges = (function clojure$core$rrb_vector$nodes$regular_ranges(shift,cnt){
var step = ((1) << shift);
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var i = (0);
var r = step;
while(true){
if((r < cnt)){
(rngs[i] = r);

var G__35454 = (i + (1));
var G__35455 = (r + step);
i = G__35454;
r = G__35455;
continue;
} else {
(rngs[i] = cnt);

(rngs[(32)] = (i + (1)));

return rngs;
}
break;
}
});
clojure.core.rrb_vector.nodes.overflow_QMARK_ = (function clojure$core$rrb_vector$nodes$overflow_QMARK_(root,shift,cnt){
while(true){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,root))){
return ((cnt >> (5)) > ((1) << shift));
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,root);
var slc = (rngs[(32)]);
var and__10207__auto__ = (slc === (32));
if(and__10207__auto__){
var or__10219__auto__ = (shift === (5));
if(or__10219__auto__){
return or__10219__auto__;
} else {
var G__35456 = (root.arr[(slc - (1))]);
var G__35457 = (shift - (5));
var G__35458 = (((rngs[(31)]) - (rngs[(30)])) + (32));
root = G__35456;
shift = G__35457;
cnt = G__35458;
continue;
}
} else {
return and__10207__auto__;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.index_of_0 = (function clojure$core$rrb_vector$nodes$index_of_0(arr){
var l = (0);
var h = (31);
while(true){
if((l >= (h - (1)))){
if((((arr[l]) | (0)) === (0))){
return l;
} else {
if((((arr[h]) | (0)) === (0))){
return h;
} else {
return (32);
}
}
} else {
var mid = (l + ((h - l) >> (1)));
if((((arr[mid]) | (0)) === (0))){
var G__35459 = l;
var G__35460 = mid;
l = G__35459;
h = G__35460;
continue;
} else {
var G__35461 = (mid + (1));
var G__35462 = h;
l = G__35461;
h = G__35462;
continue;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.index_of_nil = (function clojure$core$rrb_vector$nodes$index_of_nil(arr){
var l = (0);
var h = (31);
while(true){
if((l >= (h - (1)))){
if(((arr[l]) == null)){
return l;
} else {
if(((arr[h]) == null)){
return h;
} else {
return (32);
}
}
} else {
var mid = (l + ((h - l) >> (1)));
if(((arr[mid]) == null)){
var G__35463 = l;
var G__35464 = mid;
l = G__35463;
h = G__35464;
continue;
} else {
var G__35465 = (mid + (1));
var G__35466 = h;
l = G__35465;
h = G__35466;
continue;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.first_child = (function clojure$core$rrb_vector$nodes$first_child(node){
return (node.arr[(0)]);
});
clojure.core.rrb_vector.nodes.last_child = (function clojure$core$rrb_vector$nodes$last_child(node){
var arr = node.arr;
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))){
return (arr[(clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr) - (1))]);
} else {
return (arr[((clojure.core.rrb_vector.nodes.ranges.call(null,node)[(32)]) - (1))]);
}
});
clojure.core.rrb_vector.nodes.remove_leftmost_child = (function clojure$core$rrb_vector$nodes$remove_leftmost_child(shift,parent){
var arr = parent.arr;
if(((arr[(1)]) == null)){
return null;
} else {
var r_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,parent);
var new_arr = (new Array((cljs.core.truth_(r_QMARK_)?(32):(33))));
cljs.core.array_copy.call(null,arr,(1),new_arr,(0),(31));

if(cljs.core.not.call(null,r_QMARK_)){
var rngs_35467 = clojure.core.rrb_vector.nodes.ranges.call(null,parent);
var rng0_35468 = (rngs_35467[(0)]);
var new_rngs_35469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var lim_35470 = (rngs_35467[(32)]);
cljs.core.array_copy.call(null,rngs_35467,(1),new_rngs_35469,(0),(lim_35470 - (1)));

var i_35471 = (0);
while(true){
if((i_35471 < lim_35470)){
(new_rngs_35469[i_35471] = ((new_rngs_35469[i_35471]) - rng0_35468));

var G__35472 = (i_35471 + (1));
i_35471 = G__35472;
continue;
} else {
}
break;
}

(new_rngs_35469[(32)] = ((rngs_35467[(32)]) - (1)));

(new_rngs_35469[((rngs_35467[(32)]) - (1))] = (0));

(new_arr[(32)] = new_rngs_35469);
} else {
}

return cljs.core.__GT_VectorNode.call(null,parent.edit,new_arr);
}
});
clojure.core.rrb_vector.nodes.replace_leftmost_child = (function clojure$core$rrb_vector$nodes$replace_leftmost_child(shift,parent,pcnt,child,d){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,parent))){
var step = ((1) << shift);
var rng0 = (step - d);
var ncnt = (pcnt - d);
var li = ((shift >> (pcnt - (1))) & (31));
var arr = parent.arr;
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_arr[(0)] = child);

cljs.core.array_copy.call(null,arr,(1),new_arr,(1),li);

(new_arr[(32)] = new_rngs);

(new_rngs[(0)] = rng0);

(new_rngs[li] = ncnt);

(new_rngs[(32)] = (li + (1)));

var i_35473 = (1);
while(true){
if((i_35473 <= li)){
(new_rngs[i_35473] = ((new_rngs[(i_35473 - (1))]) + step));

var G__35474 = (i_35473 + (1));
i_35473 = G__35474;
continue;
} else {
}
break;
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var new_arr = cljs.core.aclone.call(null,parent.arr);
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,parent);
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var li = ((rngs[(32)]) - (1));
(new_rngs[(32)] = (rngs[(32)]));

(new_arr[(32)] = new_rngs);

(new_arr[(0)] = child);

var i_35475 = (0);
while(true){
if((i_35475 <= li)){
(new_rngs[i_35475] = ((rngs[i_35475]) - d));

var G__35476 = (i_35475 + (1));
i_35475 = G__35476;
continue;
} else {
}
break;
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
clojure.core.rrb_vector.nodes.replace_rightmost_child = (function clojure$core$rrb_vector$nodes$replace_rightmost_child(shift,parent,child,d){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,parent))){
var arr = parent.arr;
var i = (clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr) - (1));
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,child))){
var new_arr = cljs.core.aclone.call(null,arr);
(new_arr[i] = child);

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var arr__$1 = parent.arr;
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step = ((1) << shift);
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs[(32)] = (i + (1)));

(new_arr[(32)] = rngs);

cljs.core.array_copy.call(null,arr__$1,(0),new_arr,(0),i);

(new_arr[i] = child);

var j_35477 = (0);
var r_35478 = step;
while(true){
if((j_35477 <= i)){
(rngs[j_35477] = r_35478);

var G__35479 = (j_35477 + (1));
var G__35480 = (r_35478 + step);
j_35477 = G__35479;
r_35478 = G__35480;
continue;
} else {
}
break;
}

(rngs[i] = clojure.core.rrb_vector.nodes.last_range.call(null,child));

return cljs.core.__GT_VectorNode.call(null,null,arr__$1);
}
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,parent);
var new_rngs = cljs.core.aclone.call(null,rngs);
var i = ((rngs[(32)]) - (1));
var new_arr = cljs.core.aclone.call(null,parent.arr);
(new_arr[i] = child);

(new_arr[(32)] = new_rngs);

(new_rngs[i] = ((rngs[i]) + d));

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
clojure.core.rrb_vector.nodes.new_path_STAR_ = (function clojure$core$rrb_vector$nodes$new_path_STAR_(shift,node){
var reg_QMARK_ = ((32) === node.arr.length);
var len = ((reg_QMARK_)?(32):(33));
var arr = (new Array(len));
var rngs = ((!(reg_QMARK_))?(function (){var G__35482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__35482[(0)] = node.arr.length);

(G__35482[(32)] = (1));

return G__35482;
})():null);
var ret = cljs.core.__GT_VectorNode.call(null,null,arr);
var arr_35483__$1 = arr;
var shift_35484__$1 = shift;
while(true){
if((shift_35484__$1 === (5))){
if(!(reg_QMARK_)){
(arr_35483__$1[(32)] = rngs);
} else {
}

(arr_35483__$1[(0)] = node);
} else {
var a_35485 = (new Array(len));
var e_35486 = cljs.core.__GT_VectorNode.call(null,null,a_35485);
(arr_35483__$1[(0)] = e_35486);

if(!(reg_QMARK_)){
(arr_35483__$1[(32)] = rngs);
} else {
}

var G__35487 = a_35485;
var G__35488 = (shift_35484__$1 - (5));
arr_35483__$1 = G__35487;
shift_35484__$1 = G__35488;
continue;
}
break;
}

return ret;
});
clojure.core.rrb_vector.nodes.fold_tail = (function clojure$core$rrb_vector$nodes$fold_tail(node,shift,cnt,tail){
var tlen = tail.length;
var reg_QMARK_ = (function (){var and__10207__auto__ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node);
if(cljs.core.truth_(and__10207__auto__)){
return (tlen === (32));
} else {
return and__10207__auto__;
}
})();
var arr = node.arr;
var li = clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr);
var new_arr = (new Array((cljs.core.truth_(reg_QMARK_)?(32):(33))));
var rngs = ((cljs.core.not.call(null,clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)))?clojure.core.rrb_vector.nodes.ranges.call(null,node):null);
var cret = (((shift === (5)))?cljs.core.__GT_VectorNode.call(null,null,tail):clojure.core.rrb_vector.nodes.fold_tail.call(null,(arr[(li - (1))]),(shift - (5)),(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))?cljs.core.mod.call(null,cnt,((1) << shift)):(function (){var li__$1 = ((rngs[(32)]) - (1));
if((li__$1 > (0))){
return ((rngs[li__$1]) - (rngs[(li__$1 - (1))]));
} else {
return (rngs[(0)]);
}
})()),tail));
var new_rngs = ((cljs.core.not.call(null,reg_QMARK_))?(cljs.core.truth_(rngs)?cljs.core.aclone.call(null,rngs):clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt)):null);
if((((cret == null)) || ((shift === (5)))) && ((li === (32)))){
return null;
} else {
cljs.core.array_copy.call(null,arr,(0),new_arr,(0),li);

if(cljs.core.truth_(reg_QMARK_)){
} else {
if(((cret == null)) || ((shift === (5)))){
(new_rngs[li] = ((((li > (0)))?(new_rngs[(li - (1))]):((0) | (0))) + tlen));

(new_rngs[(32)] = (li + (1)));
} else {
if((li > (0))){
(new_rngs[(li - (1))] = ((new_rngs[(li - (1))]) + tlen));
} else {
}

(new_rngs[(32)] = li);
}
}

if(cljs.core.not.call(null,reg_QMARK_)){
(new_arr[(32)] = new_rngs);
} else {
}

if((cret == null)){
(new_arr[li] = clojure.core.rrb_vector.nodes.new_path_STAR_.call(null,(shift - (5)),cljs.core.__GT_VectorNode.call(null,null,tail)));
} else {
(new_arr[(((shift === (5)))?li:(li - (1)))] = cret);
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});

//# sourceMappingURL=nodes.js.map