$(function(){  
  //模拟操作 触发默认行为  数组对象全部执行 返回JQuery对象 自定义事件会冒泡 
  //trigger("事件","数据" | [数据1,数据2,[1,2,2,3],{5:5,5:5,9:9}]);//多个数据必须要括号
  //function(e,data1,data2,data3,data4){}
  
  //自定义事件 一般要绑定click这些系统事件 或者trigger调用
  
//   $('#but').click(function(){
//     console.log("我是被模拟的点击事件")
//   }).click();//同 .trigger("click")
  
  //高级模拟用法和trigger一样
  //triggerHandler();
  //不会同点 
  //1.不会触发默认行为 
  //2.如果是数组对象只会执行第一个 
  //3.返回事件函数返回值或者undefined
  //4.自定义事件不会冒泡
  
   
  //命名空间 更方便移除匿名函数 
//   $("inout").bind("click.fnName",function(){
//     console.log("命名空间实现事件单个移除");
//   });
//   $("#but").unbind("click.fnName");//模拟操作也是如此trigger("click.fnName")
    
  //事件委托可以,通过冒泡原理 bind不会动态绑定事件
  //父元素 <<-->> 子元素(标签名(小写)|| id || class);
  //替代.live
  $("#buts").on("click",'.but2',function(e){
    console.log("事件委托");
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.tagName);
    $(".but3").eq(0).clone().appendTo("#buts");//赋值节点添加到节点下即使clone没有有打开true也会有事件
  });
  //on取消可以这样默认行为
  //$("#buts").on("submint",false)
  //$("#boxs").on()
  
  //取消事件委托用off
  $("#buts").off("click",'.but2');
  
  //单次事件触发
  $(".but2").one("click",function(){
    console.log("只有一次有用");
  });
  //单次事件委托触发
  $("#buts").one("click",'.but2',function(e){
  	console.log("事件委托");
  	console.log(e.type);
  	console.log(e.target);
  	console.log(e.target.tagName);
  	$(".but3").eq(0).clone().appendTo("#buts");//赋值节点添加到节点下即使clone没有有打开true也会有事件
  });
})
