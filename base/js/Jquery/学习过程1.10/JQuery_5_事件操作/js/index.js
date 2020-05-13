$(function(){ 
  
  //bind 3.0废除 是on在1.9之后 one 表示执行一次
  //unbind 3.0废除 是 off在1.9之后
  //单个事件绑定 数据  bind("click",数据,function()...
//   $("#but").bind("click",function(){
//     console.log("匿名函数");
//   });
//   //多个事件绑定
//   $("#but").bind("click mouseover",fn);
//   function fn(){
//     console.log("有名字函数");
//   }
//   //多个事件不同函数
//   $("#but").bind({
//     mouseover : function(){
//       console.log("移入");
//     },
//     mouseout : function(){
//       console.log("移出");
//     }
//   });
 
//   $("#but").click(fn1);
//   $("#but").click(fn2);
//   function fn1(){
//     console.log("函数fn1");
//   }
//   function fn2(){
//   	console.log("函数fn2");
//   }
  //删除所有绑定事件 off
  //$("#but").unbind();
  //删除特定事件
  //$("#but").unbind("click");
  //删除指定事件绑定函数
  //$("#but").unbind("click",fn2);
  //$("#but").unbind("click.fn");
  
  //方法绑定
  //   $("#but").click(function(){
  //   	console.log("匿名函数");
  //   });
   /*
   //鼠标
    click 单击
    dbclick 双击 
    //会触发子节点
    mouseover 移入
    mouseout 移出
    //不会触发子节点
    mouseenter 穿过时
    mouseleave 穿出时
    
    mousedown 按下后 
    mouseup 放开后 
    mousemove 移动时
    
  //键盘 
    keydown 按下 返回键码 e.keyCode
    keyup 按下弹起 返回键码 e.keyCode
    keypress 键盘按下事件 返回字符码 e.charCode
  //文档
    unload 卸载页面 //一般用于清理工作
    resize 改变大小
    scroll 滚动条拖动
  //表单
    focus 焦点激活
    blur 焦点丢失
    focusin 焦点激活
    focusout 焦点丢失
    select 文本选定
    change 值改变
    submint 表单提交
  */
 
  //复合事件
  //ready(); //DOM加载完事件
  //hover(fn,fn);//鼠标移入移出事件 mouseenter 和 mouseleave 不触发子节点
  //toggle()//废除了1.8
})