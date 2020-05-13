"use strict";
/* 数据类型
  boolean   布尔型
  number    数字类型
  srting    字符串类型
  array     数组类型
  tuple     元组类型
  enum      枚举类型
  any       任意类型
  null 和 undefind 类型
  void      类型
  never    类型
*/
// 布尔型
var flag = true || false;
// 数字类型
var num = 666;
// 字符型
var str = "字符串类型";
// 数组类型(里面数类型要一样)
// 1.
var arr0 = [1, 2, 3];
// 2.
var arr2 = ["sr", "f5sf"];
// 元组类型、数组的一种 里面可以放多种类型的值
// PS: 顺序不可以反的
var tuple = [555555, "srs"];
// 枚举类型
var ff;
(function (ff) {
    ff[ff["succ"] = 1] = "succ";
    ff[ff["err"] = 0] = "err";
})(ff || (ff = {}));
console.log(ff.succ); //  1
var ff1;
(function (ff1) {
    ff1[ff1["succ"] = 0] = "succ";
    ff1[ff1["err"] = 1] = "err";
})(ff1 || (ff1 = {}));
;
console.log(ff.succ); // 0 下标，如果不指定的话
// 调用枚举
var s = ff.succ;
console.log(s); //  1
// 任意类型 就是无类型
var an0 = document.getElementById('id') || true;
var an1 = "string" || 1 || [1, 5] || [1, "55"] || { 4: 5, kk: "55" };
var an2 = null || undefined;
// null和 undefined 是 nerver 类型的子类型 
var nu;
console.log(nu); // 没有赋值
nu = 2;
console.log(nu); // 2
var nul;
console.log(nul); // undefined
nul = null;
console.log(nul); //  null
nul = 6;
console.log(nul); // 6
// void 空类型
function fn() {
    // return "555"; 表示无返回值
}
// never 类型
// 代表只能被never声明变量只能被所类型赋值
var a;
a = undefined; // 只可以被 undefined 赋值
var b;
b = (function () {
    throw new Error("错误");
})();
