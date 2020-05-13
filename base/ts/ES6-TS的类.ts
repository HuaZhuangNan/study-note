

// 1. 简单的类
class Person2{
  name:string;
  constructor(n:string){
    this.name = n;
  }
  getName():string{
    return this.name;
  }
  setName(n:string):void{
    this.name = n;
  }
}

var p = new Person2("陌轩痕");


// 2. ts实现继承 extends super

class Web extends Person2{
  age:number;
  constructor(n:string,age:number){
    super(n); // 初始化父类
    this.age = age;
  }
  run():string{
    return `${this.name}在运动,年龄${this.age}`;
  }
}

var w = new Web("哈哈",21);
w.run();

// 3. 类里面的修饰符
/**
 * public 公有的  类里面、子类、类外面可以访问
 * protected 保护的  类里面、子类 可以访问
 * private 私有的 只有类里面可以访问
 * 
 * // 默认 public
 */
class Animal{
  name:string;
  constructor(n:string){
    this.name=n;
  }
  getName():string{
    return this.name;
  }
  protected tool():void{
    console.log("静态方法");
  }
}


// 4. 类里面的静态属性方法
class tiger{
  public name:string;
  // 静态属性
  static age:number= 15;
  constructor(n:string){
    this.name=n;
  }
  public getName():string{
    return this.name;
  }
  static tool():void{
    //静态方法里面不可以直接使用动态的属性
    console.log("静态方法");
  }
}

// 使用
tiger.age;
tiger.tool();

// 5. 多态属于继承

class Animal2{
  name:string;
  constructor(n:string){
    this.name =n;
  }
  eat():void{
    console.log("吃的方法！");
  }
}
class Dog extends Animal2{
  constructor(n:string){
    super(n);
  }
  eat():string{  // 具体干啥不知道。子类都不同
    return `${this.name}在吃肉！`;
  }
}
class Cat extends Animal2{
  constructor(n:string){
    super(n);
  }
  eat():string{
    return `${this.name}在吃老鼠！`;
  }
}


// 6. 抽象类和抽象方法（用来定义标准,不可以实例化）

abstract class Animal3{
  public name:string;
  constructor(n:string){ // 可以有
    this.name=n;
  }
  abstract eat():any;
}
class Dog1 extends Animal3{
  constructor(n:string){
    super(n);
  }
  eat():string{  // 子类必须要调用父类抽象方法
    return `${this.name}在吃肉！`;
  }
}
