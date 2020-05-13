/*
 * @Description:
 * @version: 1.0.0
 * @Author: 鱼小陌
 * @Date: 2019-03-10 20:03:27
 * @LastEditors: 鱼小陌
 * @LastEditTime: 2019-09-09 03:37:18
 */

// 匿名函数
let fn0 = function(): string {
  return "返回函数";
};
console.log(fn0);
// 传参
function run(str: string): string {
  return str + "在运行！";
}
console.log(run("陌轩痕"));

// 无参类型

function pri2(): void {
  console.log("无参数！");
}
pri2();

// 可选参数,必须配置在最后面
function getInfo(name: string, age?: number): void {
  console.log("无参数！", name, age);
}
getInfo("陌轩痕"); // 无参数！ 陌轩痕

// 默认参数 ES6 和 ts 可以
function getInfo2(name: string, age: number = 18): void {
  console.log("无参数！", name, age);
}
getInfo2("陌轩痕"); // 无参数！ 陌轩痕 18
getInfo2("陌轩", 20); // 无参数！ 陌轩 20

// 剩余参数
function sum(...arr: any[]): void {
  arr.forEach((item, index) => {
    console.log(`${item}---${index}`);
  });
}
sum([1, 5, 9, 58, 5]);

// ts 函数重载
// ts 为了兼容ES5和ES6重载写法和Java中有点不同

function getInfo6(name: string): string;
function getInfo6(sge: number): number;
function getInfo6(str: any): any {
  if (typeof str === "string") {
    return "你的姓名为：" + str;
  } else {
    return "你的年龄是：" + str;
  }
}
console.log(getInfo6("12345"));
console.log(getInfo6(123));
