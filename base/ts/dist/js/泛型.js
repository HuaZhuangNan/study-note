"use strict";
// 1.泛型，传入参数和返会参数相同
function getDats(value) {
    return value;
}
// 调用是决定返回数据类型
console.log(getDats(123));
console.log(getDats("陌轩痕"));
// 2.泛型类
var MinClass = /** @class */ (function () {
    function MinClass(arr) {
        this.list = [];
        this.list = arr;
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
// 实例类，并且指定类的类型为 number
var m = new MinClass([]);
m.add(5);
m.add(2);
m.add(1);
m.add(6);
console.log(m.min());
// interface confin<T>{
//   (value:T):T;
// }
var getInfo3 = function (value) {
    return value;
};
getInfo3(123);
