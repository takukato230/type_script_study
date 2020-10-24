"use strict";
let as = [1, 2, 3];
// concatメソッドは直接変更を加えるのでなく、
// 新たに指定の要素を加えたコピーの配列を作成する処理となる
let bs = as.concat(4);
console.log(bs);
