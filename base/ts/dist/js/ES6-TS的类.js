"use strict";
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
// 1. 简单的类
var Person2 = /** @class */ (function () {
    function Person2(n) {
        this.name = n;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    Person2.prototype.setName = function (n) {
        this.name = n;
    };
    return Person2;
}());
var p = new Person2("陌轩痕");
// 2. ts实现继承 extends super
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(n, age) {
        var _this = _super.call(this, n) || this;
        _this.age = age;
        return _this;
    }
    Web.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8,\u5E74\u9F84" + this.age;
    };
    return Web;
}(Person2));
var w = new Web("哈哈", 21);
w.run();
// 3. 类里面的修饰符
/**
 * public 公有的  类里面、子类、类外面可以访问
 * protected 保护的  类里面、子类 可以访问
 * private 私有的 只有类里面可以访问
 *
 * // 默认 public
 */
var Animal = /** @class */ (function () {
    function Animal(n) {
        this.name = n;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.tool = function () {
        console.log("静态方法");
    };
    return Animal;
}());
// 4. 类里面的静态属性方法
var tiger = /** @class */ (function () {
    function tiger(n) {
        this.name = n;
    }
    tiger.prototype.getName = function () {
        return this.name;
    };
    tiger.tool = function () {
        //静态方法里面不可以直接使用动态的属性
        console.log("静态方法");
    };
    // 静态属性
    tiger.age = 15;
    return tiger;
}());
// 使用
tiger.age;
tiger.tool();
// 5. 多态属于继承
var Animal2 = /** @class */ (function () {
    function Animal2(n) {
        this.name = n;
    }
    Animal2.prototype.eat = function () {
        console.log("吃的方法！");
    };
    return Animal2;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(n) {
        return _super.call(this, n) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + "\u5728\u5403\u8089\uFF01";
    };
    return Dog;
}(Animal2));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(n) {
        return _super.call(this, n) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + "\u5728\u5403\u8001\u9F20\uFF01";
    };
    return Cat;
}(Animal2));
// 6. 抽象类和抽象方法（用来定义标准,不可以实例化）
var Animal3 = /** @class */ (function () {
    function Animal3(n) {
        this.name = n;
    }
    return Animal3;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1(n) {
        return _super.call(this, n) || this;
    }
    Dog1.prototype.eat = function () {
        return this.name + "\u5728\u5403\u8089\uFF01";
    };
    return Dog1;
}(Animal3));
