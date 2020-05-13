import Place from "./Place";
/**
 *楼层
 *
 * @class Floor
 */
class Floor {
  private _places: Array<Place>;
  private _index: number;
  constructor(index: number, places: Array<Place> = []) {
    this._index = index;
    this._places = places;
  }
  get index(): number {
    // 属性选择器
    return this._index;
  }
  get places() {
    return this._places;
  }
  /**
   *
   *返回车位空余数量
   * @returns {number}
   * @memberof Floor
   */
  getEmptyPlaceNum(): number {
    let num = 0;
    this._places.forEach(place => {
      if (place.empty) {
        num += 1;
      }
    });
    return num;
  }
}

export default Floor;
