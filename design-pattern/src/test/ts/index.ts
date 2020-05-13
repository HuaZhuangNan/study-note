/** 类模式
 * 三要素：
 * 1、继承
 * 2、多态
 * 3、封装
 * 如：JQuery
 */
class People {
  // 封装
  public weight: number; // 公开的
  private _name: string; // 私有的
  protected age: number; // 字类可以复写的
  constructor(name: string, age: number) {
    this._name = name;
    this.age = age;
  }
  get Name() {
    return this._name;
  }
  eat(): void {
    console.log(`${this._name}吃`);
  }
  speak(): void {
    console.log(`My name is ${this._name},age ${this.age}`);
  }
}

// 继承关系
class A extends People {
  constructor(name: string, age: number) {
    super(name, age);
  }
  saySomething(): void {
    console.log("I am A");
  }
}

class B extends People {
  constructor(name: string, age: number) {
    super(name, age);
  }
  saySomething(): void {
    console.log("I an B");
  }
}

// 实例化
let a = new A("A", 18);
let b = new B("B", 20);
// 使用父类的方法 // 多态
a.speak();
b.speak();
console.log(a.Name);
