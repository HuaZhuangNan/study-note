

// 1.泛型，传入参数和返会参数相同

function getDats<T>(value:T):T{
  return value;
}

// 调用是决定返回数据类型

console.log(getDats<number>(123));

console.log(getDats<string>("陌轩痕"))


// 2.泛型类

class MinClass<T>{
  public list:T[]=[];
  constructor(arr:T[]){
    this.list = arr;
  }
  add(value:T):void{
    this.list.push(value);
  }
  min():T{
    var minNum=this.list[0];
    for(var i=0;i<this.list.length;i++){
      if(minNum>this.list[i]){
        minNum = this.list[i];
      }
    }
    return minNum;
  }
}

// 实例类，并且指定类的类型为 number
var m = new MinClass<number>([]);
m.add(5);
m.add(2);
m.add(1);
m.add(6);
console.log(m.min());


// 3.泛型接口

interface confin{
  <T>(value:T):T;
}
// interface confin<T>{
//   (value:T):T;
// }
var getInfo3:confin= <T>(value:T):T=>{
  return value;
}

getInfo3<number>(123);











