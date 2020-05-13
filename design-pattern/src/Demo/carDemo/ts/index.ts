import { type } from "os";

/*
 * @Description: 抽象工厂模式
 * @version: 1.0.0
 * @Author: 花妆男(HuaZhuangNan)
 * @Github: https://github.com/HuaZhuangNan
 * @Date: 2019-11-13 14:45:48
 * @LastEditors: 花妆男(HuaZhuangNan)
 * @LastEditTime: 2019-11-13 20:07:57
 */


 // 车类型枚举
enum CarType {
  "QuickCar" ="快车",
  "SpecialCar" = "专车"
}
/**
 *车父类
 * @class Car
 */
class Car {
  public readonly num: number; // 车牌号
  public readonly name: string; // 车名
  public readonly price: number; // 价格
  public readonly type:CarType; // 类型
  constructor(num: number, name: string) {
    this.num = num;
    this.name = name;
  }
}

/**
 *快车
 * @class QuickCar
 * @extends {Car}
 */
class QuickCar extends Car {
  price = 1; // 价格
  type = CarType.QuickCar;
  constructor(num: number, name: string) {
    super(num, name);
  }
}
/**
 *专车
 * @class SpecialCar
 * @extends {Car}
 */
class SpecialCar extends Car {
  price = 2; // 价格 
  type = CarType.SpecialCar;
  constructor(num: number, name: string) {
    super(num, name);
  }
}


/**
 * 行程类
 * @class Trip
 */
class Trip {
  public car: Car;
  constructor(car:Car){
    this.car = car;
  }
  public start():void{
    console.log(`行程开始，车名：${this.car.name}`)
    console.log(`车牌号：${this.car.num}`)
    console.log(`类型：${this.car.type}`)
  }
  public end():void {
    console.log(`行程结束，价格：${this.car.price * 5}`)
  }
}

// Test --------------

let car = new QuickCar(10001,'宝马');

let trip = new Trip(car);
trip.start()
setTimeout(()=>{
  trip.end()
},5)


console.log(car);