/**
 *只有一个车牌号的车
 *
 * @class Car
 */
class Car {
  private _num: number; // 车牌号
  constructor(num: number) {
    this._num = num;
  }
  get num(): number {
    return this._num;
  }
  set num(value) {
    this._num = value;
  }
}
export default Car;
