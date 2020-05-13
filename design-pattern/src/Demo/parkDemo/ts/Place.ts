/**
 *停车位
 *
 * @class Place
 */
class Place {
  private _empty: boolean; // 位子
  constructor() {
    this._empty = true; // 默认空
  }
  get empty(): boolean {
    return this._empty;
  }
  /**
   *停入车辆
   *
   * @memberof Place
   */
  in(): void {
    this._empty = false;
  }
  /**
   *
   *出车位
   * @memberof Place
   */
  out(): void {
    this._empty = true;
  }
}

export default Place;
