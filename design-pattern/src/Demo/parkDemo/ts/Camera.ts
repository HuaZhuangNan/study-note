/*
 * @Description: 
 * @version: 1.0.0
 * @Author: 花妆男(HuaZhuangNan)
 * @Github: https://github.com/HuaZhuangNan
 * @Date: 2019-11-10 20:11:11
 * @LastEditors: 花妆男(HuaZhuangNan)
 * @LastEditTime: 2019-11-13 20:35:01
 */
import Car from "./Car";
import IResult from "./IResult";
import Place from "./Place";

/**
 *相机类
 *
 * @class Camera
 */
class Camera {
  shot(car: Car): IResult {
    let result: IResult = {
      num: car.num,
      time: Date.now(),
      place: new Place()
    };
    return result;
  }
}
export default Camera;
