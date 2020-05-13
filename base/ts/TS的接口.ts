
// 接口（定义标准规范）

// 1. 属性接口 对json的约束 

// 必须要有一个label参数
  function printLable(labeInfo:{label:string}):void{ 
    console.log(labeInfo);
  }
  printLable({label:"信息"});

// 接口实现批量传入对象参数约束
interface FullName{
  firstName:string;
  secondName:string;
}
function printName(name:FullName):void{  // 满足接口
  //必须传入对象 firstName secodName
  console.log(name.firstName+"----"+name.secondName);
}
// printName({firstName:"20",secondName:"kk"});  //参数只能传入接口
var obj = {  // 传入的参数必须包含接口
  age:20,
  firstName: "陌",
  secondName: "轩痕"
}
printName(obj);

// 可选属性接口
interface  FullName2 {
  firstName:string;
  secondName:string;
  age?:number; // 可选接口参数
}
function printInfo2(info:FullName2):void{
  console.log(info.firstName+"--"+info.secondName+"--"+info.age);
}
printInfo2(obj);
printInfo2({firstName:"20",secondName:"kk"});  // age是可选参数

// 2. 函数类型接口

interface encrypt {  // 可以批量约束
  (key:string,value:string):string;
}
var mdd5:encrypt = function (key:string,value:string):string{
  return key+value;
}

console.log(mdd5("name","陌"));
// 3. 可索引接口  （数组、对象的约束，不常用）

// 数组
interface userArray {
  [index:number]:string;
}
var arr:userArray = ["aa","nb"];
console.log(arr[0]);

// 对象
interface userObj {
  [index:string]:string;
}
var obj2:userObj = {"aa":"a1","nb":"d5"};
console.log(obj2.aa);


// 4. 类 类型接口  和抽象类有点相同

interface Animal4 {
  name:string;
  eat(str:string):void;
}

class Dog2 implements Animal4 {
  name:string;
  constructor(name:string){
    this.name=name;
  }
  eat(){
    console.log(this.name+"吃粮食");
  }
}

// 接口扩展 接口可以继承接口


interface Animal5 {
  eat():void;
}

interface Person extends Animal5 {
  work():void;
}


class progrommer{
  public name:string;
  constructor(name:string){
    this.name=name;
  }
  coding():void{
    console.log(this.name+"正在敲代码");
  }
}


class web extends progrommer implements Person {
  constructor(name:string){
    super(name);
  }
  eat():void{
    console.log(this.name+"吃");
  }
  work():void{
    console.log(this.name+"写代码");
  }
}