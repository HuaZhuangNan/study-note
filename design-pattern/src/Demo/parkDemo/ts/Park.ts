/*
 * @Description: 
 * @version: 1.0.0
 * @Author: 花妆男(HuaZhuangNan)
 * @Github: https://github.com/HuaZhuangNan
 * @Date: 2019-11-10 20:31:54
 * @LastEditors: 花妆男(HuaZhuangNan)
 * @LastEditTime: 2019-11-13 20:30:01
 */
import Floor from "./Floor";
import Car from "./Car";
import Camera from "./Camera";
import Screen from "./Screen";
import IResult from "./IResult";
/**
 *停车场
 *
 * @class Park
 */
class Park {
  private floors: Array<Floor>;
  private camera: Camera;
  private screen: Screen;
  private carList: Array<IResult>;
  constructor(floors: Array<Floor> = []) {
    this.floors = floors;
    this.camera = new Camera();
    this.screen = new Screen();
    this.carList = [];
  }
  public in(car: Car) {
    // 通过摄像头获取信息
    const info = this.camera.shot(car);
    // 停入车位
    const i = parseInt(((Math.random() * 100) % 100) + "");
    const place = this.floors[0].places[i];
    place.in();
    info.place = place;
    // 记录下信息
    this.carList[car.num] = info;
  }
  public out(car: Car) {
    // 获取信息
    const info = this.carList[car.num];
    // 将车位清空
    const place = info.place;
    place.out();
    // 显示时间
    this.screen.show(info);
    // 清空记录
    delete this.carList[info.num];
  }
  public getEmptyNum(): string {
    return this.floors
      .map(floor => {
        return `${floor.index} 层还有 ${floor.getEmptyPlaceNum()} 个车位`;
      })
      .join("\n"); // 转换为字符串
  }
}

export default Park;