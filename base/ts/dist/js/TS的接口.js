"use strict";
// 接口（定义标准规范）
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. 属性接口 对json的约束 
// 必须要有一个label参数
function printLable(labeInfo) {
    console.log(labeInfo);
}
printLable({ label: "信息" });
function printName(name) {
    //必须传入对象 firstName secodName
    console.log(name.firstName + "----" + name.secondName);
}
// printName({firstName:"20",secondName:"kk"});  //参数只能传入接口
var obj = {
    age: 20,
    firstName: "陌",
    secondName: "轩痕"
};
printName(obj);
function printInfo2(info) {
    console.log(info.firstName + "--" + info.secondName + "--" + info.age);
}
printInfo2(obj);
printInfo2({ firstName: "20", secondName: "kk" }); // age是可选参数
var mdd5 = function (key, value) {
    return key + value;
};
console.log(mdd5("name", "陌"));
var arr = ["aa", "nb"];
console.log(arr[0]);
var obj2 = { "aa": "a1", "nb": "d5" };
console.log(obj2.aa);
var Dog2 = /** @class */ (function () {
    function Dog2(name) {
        this.name = name;
    }
    Dog2.prototype.eat = function () {
        console.log(this.name + "吃粮食");
    };
    return Dog2;
}());
var progrommer = /** @class */ (function () {
    function progrommer(name) {
        this.name = name;
    }
    progrommer.prototype.coding = function () {
        console.log(this.name + "正在敲代码");
    };
    return progrommer;
}());
var web = /** @class */ (function (_super) {
    __extends(web, _super);
    function web(name) {
        return _super.call(this, name) || this;
    }
    web.prototype.eat = function () {
        console.log(this.name + "吃");
    };
    web.prototype.work = function () {
        console.log(this.name + "写代码");
    };
    return web;
}(progrommer));
