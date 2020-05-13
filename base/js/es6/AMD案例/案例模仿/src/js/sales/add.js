// 添加模块

define(["jquery","service/salesService","require","router"], function($,salesService,require,router) {
  'use strict';
  return {
    init(){
      router = require("router");
      console.log("sales/add初始化！");
      var addStr =`
        <form>
          <lable>姓名：</lable><input name="name"/>
          <lable>年龄：</lable><input name="age"/>
          <button type="submit">提交</button>
        </form>
      `;
      // 1. 把同步的表单变成异步的表单，阻止from的submint默认事件
      var $add = $(addStr);
      $add.on("submit",function(e){
        e.preventDefault();
        // 2.获取表单数据自己进行操作
        var name = $(this).find("input[name=name]").val();
        var age = $(this).find("input[name=age]").val();
        // 添加数据
        salesService.add(name,age);
        //console.log(name,age,salesService);

        // 3.返回到saleman/index 页面
        //$("#main .aside .aside-item:eq(0)").trigger("click");
        router.push({path:"/"});
      })
      $("#main .content").html($add);
    }
  }
});