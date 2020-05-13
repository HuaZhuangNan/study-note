"use strict";
// 匿名函数
var fn0 = function () {
    return "返回函数";
};
console.log(fn0);
// 传参
function run(str) {
    return str + "在运行！";
}
console.log(run("陌轩痕"));
// 无参类型
function pri2() {
    console.log("无参数！");
}
pri2();
// 可选参数,必须配置在最后面
function getInfo(name, age) {
    console.log("无参数！", name, age);
}
getInfo("陌轩痕"); // 无参数！ 陌轩痕
// 默认参数 ES6 和 ts 可以
function getInfo2(name, age) {
    if (age === void 0) { age = 18; }
    console.log("无参数！", name, age);
}
getInfo2("陌轩痕"); // 无参数！ 陌轩痕 18
getInfo2("陌轩", 20); // 无参数！ 陌轩 20
// 剩余参数
function sum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    arr.forEach(function (item, index) {
        console.log(item + "---" + index);
    });
}
sum([1, 5, 9, 58, 5]);
function getInfo6(str) {
    if (typeof str === "string") {
        return "你的姓名为：" + str;
    }
    else {
        return "你的年龄是：" + str;
    }
}
console.log(getInfo6("12345"));
console.log(getInfo6(123));
