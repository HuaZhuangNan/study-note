// 入口文件

"use strict";  // es5 之后的严格模式


/* 检测第三方是否支持amd模规范
 例如：
  if ( typeof define === "function" && define.amd ) {
	  define( "jquery", [], function() {
		  return jQuery;
	  } );
  }
*/
// 配置
require.config({
  // baseUrl 模块基础路径
  baseUrl: "./js",
  // paths 用来配置一些常用的文件、文件夹路劲
  paths:{
    // 以后所有模块调用都通过jquery短名称来导入
    jquery:"./lib/jquery-3.3.1"
    // jquery: ['//cdn.bootcss.com/jquery/3.3.1/jquery', 'jquery-3.3.1']

    // 当然不是所有模块放这里
  }
  // shim
});

// 如果多个模块都要使用一个模块，那每个模块都要引用它；
// 原因: 防止全局污染 , 缺点：会导致牵一发动全身的效果
// 解决： 配置为常用文件

// 注意不管哪个模块加载都要以入口文件为路径参考


/* (要求逻辑顺序)
  index.html
    --> app.js
      --> user.js
        --> user/detail.js
      --> cart.js
        --> cart/detail.js
      --> product.js
        --> product/add.js
*/
// 在一个单页应用中，一般只需要调用一次require
// 形参顺序必须要和模块顺序保持一致
// 没有参数的时候顺序放在最后就可以了

require([
  "jquery",
  "product/product",
  "user/user",
  "cart/cart"
],function($,product,user,cart){  // 后缀不写就表示一个js文件
  // 这里是首页模块自己的逻辑、引用模块之后执行

  // 点击后才实现加载模块
  var btnUser = document.getElementById("user");
  btnUser.onclick=function(){
    console.log(user);
    user();
  };

  var btnCart = document.getElementById("cart");
  btnCart.onclick=function(){
    console.log(cart);
    cart();
  };

  var btnProduct = document.getElementById("product");
  btnProduct.onclick=function(){
    console.log(product);
    product.init();
  };

  

})