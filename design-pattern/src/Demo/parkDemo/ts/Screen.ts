/*
 * @Description: 
 * @version: 1.0.0
 * @Author: 花妆男(HuaZhuangNan)
 * @Github: https://github.com/HuaZhuangNan
 * @Date: 2019-11-11 12:06:09
 * @LastEditors: 花妆男(HuaZhuangNan)
 * @LastEditTime: 2019-11-13 20:35:11
 */
import Result from "./IResult";

/**
 *屏幕
 *
 * @export
 * @class Screen
 */
class Screen {
  /**
   *
   *显示信息
   * @param {Result} result
   * @memberof Screen
   */
  show(result: Result): void {
    console.log("车牌号：", result.num);
    console.log("停车时间", Date.now() - result.time);
  }
}

export default Screen;
