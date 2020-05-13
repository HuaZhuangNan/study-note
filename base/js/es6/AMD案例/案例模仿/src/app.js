// 入口文件

// 配置
require.config({
  baseUrl:"./js",
  paths: {
    service: "../service",
    jquery: "lib/jquery-3.3.1"
  }

})

// 初始化
require(["jquery","router"],function($,router){
  "use strict"; // 严格模式
  // $("body").append("首页");

  // 1. 事件绑定建议使用 事件委托方式
  // 父元素，祖先元素绑定事件，子元素触发
  $("#main .aside").on("click",".aside-item",function(){
    // 1.2.判断元素(this--DOM元素)是否有指定类名
    var _this = $(this);
    if(_this.hasClass("aside-sales")){
      // 1.2.1 调用销售员首页模块
      router.push({path:"/"});
      //sales.init()
    }else if(_this.hasClass("aside-car")){
      // 1.2.2 调用汽车模块 
      router.push({path:"/car"});
      //car.init();
    }else if(_this.hasClass("aside-dealer")){
      // 1.2.3 调用经销商模块 
      router.push({path:"/dealer"});
      //dealer.init();
    };
  })

  // 2.默认展示第一个
  $("#main .aside .aside-item:eq(0)").trigger("click");

})