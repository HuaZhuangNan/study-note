// 购物车模块
define(["user/detail"], function(cartDetail) {
  "use strict";
  
  // 初始化...
  return function(){
    console.log("购物车模块");
    // 需要在这里调用 cartDetail
    cartDetail();
  }
  
});