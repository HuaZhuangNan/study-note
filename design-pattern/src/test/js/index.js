
// 面向对象例子
class jQuery {
  constructor(selector) {
    let slice = Array.prototype.slice;
    let dom = slice.call(document.querySelectorAll(selector));
    let len = dom ? dom.length : 0;
    for (let i = 0; i < len; i++) {
      this[i] = dom[i];
    }
    this.length = len;
    this.selector = selector || "";
  }
  appEnd(node) {
    // ...
  }
  addClass(name) {
    // .....
  }
  // ....N 个 APi
}
window.$ = function(selector) {
  return new jQuery(selector);
};

// 用 Promise 来表示 OS设计原则
/**
 * 单一职责原则 每个 then
 * 开放封闭原则扩展 then
 * @param {string} src
 */
// 加载图片
function LoadImg(src) {
  var promise = new Promise((resolve, reject) => {
    let img = document.createElement("img");
    img.onload = () => {
      resolve(img);
    };
    img.onerror = err => {
      reject(err);
    };
    img.src = src;
  });
  return promise;
}
var result = LoadImg(
  "https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super"
);
result
  .then(img => {
    console.log("img width", img.width);
    return img;
  })
  .then(img => {
    console.log("img Height", img.height);
  })
  .catch(err => {
    // 捕获异常
    console.log(err);
  });
