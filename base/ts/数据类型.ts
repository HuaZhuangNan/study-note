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
let flag:boolean = true || false;

// 数字类型
let num:number = 666;

// 字符型
let str:string = "字符串类型";

// 数组类型(里面数类型要一样)
// 1.
let arr0:number[] = [1,2,3];
// 2.
let arr2:Array<string> = ["sr","f5sf"];

// 元组类型、数组的一种 里面可以放多种类型的值
// PS: 顺序不可以反的
let tuple:[number,string] = [555555,"srs"]

// 枚举类型
enum ff{
  succ = 1,
  err  = 0
}
console.log(ff.succ); //  1
enum ff1{succ ,err};
console.log(ff.succ); // 0 下标，如果不指定的话
// 调用枚举
let s:ff = ff.succ;
console.log(s); //  1

// 任意类型 就是无类型
let an0:any = document.getElementById('id') || true ;
let an1:any = "string" || 1 || [1,5] || [1,"55"] || {4:5,kk:"55"};
let an2:any = null || undefined;

// null和 undefined 是 nerver 类型的子类型 
let nu:undefined | number;
console.log(nu); // 没有赋值
nu = 2;
console.log(nu); // 2
let nul:undefined | null | number;
console.log(nul); // undefined
nul = null; 
console.log(nul); //  null
nul = 6;
console.log(nul); // 6

// void 空类型
function fn():void{
  // return "555"; 表示无返回值
}

// never 类型

// 代表只能被never声明变量只能被所类型赋值

let a:undefined;
a = undefined; // 只可以被 undefined 赋值

let b:never;
b = (()=>{
      throw new Error("错误");
    })();




