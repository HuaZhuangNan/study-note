// 用户模块
define(["user/detail"], function(userDetail) {
  "use strict";
  // 初始化...
  
  return function(){
    console.log("用户模块");
    // 调用 userDetail 模块
    userDetail();
  }

});