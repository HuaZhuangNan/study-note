/*
 * @Description: 
 * @version: 1.0.0
 * @Author: 花妆男(HuaZhuangNan)
 * @Github: https://github.com/HuaZhuangNan
 * @Date: 2019-11-13 20:26:53
 * @LastEditors: 花妆男(HuaZhuangNan)
 * @LastEditTime: 2019-11-13 20:32:12
 */

import Floor from "./Floor"
import Place from "./Place"
import Park from "./Park"
import Car from "./Car"

// Test--------

// 初始化停车场
const floors: Array<Floor> = [];
const floorCount = 3;
for (let i = 0; i < floorCount; i++) {
  const places: Array<Place> = [];
  for (let j = 0; j < 100; j++) {
    places[j] = new Place();
  }
  floors[i] = new Floor(i + 1, places);
}
const onePark: Park = new Park(floors);

// 初始化车辆
const car1: Car = new Car(10001);
const car2: Car = new Car(10002);
const car3: Car = new Car(10003);

console.log(onePark);
console.log("第一辆进入");
onePark.in(car1);
console.log(onePark.getEmptyNum());

console.log("第二俩车进入");
onePark.in(car2);
console.log(onePark.getEmptyNum());

console.log("第一辆离开");
onePark.out(car1);
console.log(onePark.getEmptyNum());

console.log("第三俩车进入");
onePark.in(car3);
console.log(onePark.getEmptyNum());

console.log("第二辆离开");
onePark.out(car2);

console.log(onePark.getEmptyNum());