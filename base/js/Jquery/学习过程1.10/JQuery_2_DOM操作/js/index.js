$(function(){ //DOM加载可以多次执行不会覆盖
  
  
  //内容操作 都可以function
  //html();//设置获取html内容 解析html标签 
  //text();//设置获取文本内容 转义html标签
  //val();//设置获取表单中文本内容 radio check  值也可以获取
  //val(["男","女"]);//value值为男、女的表单控件被选中
  
  //属性操作
  //attr("id");
  //attr("title","标题")；
  /*
    attr({
     "title":"标题",
     "class":"red" //不建议这里用会直接覆盖
    })
  */
  /*attr("title",function(index,value){
    return  "现在我是标题"+index+1+"原来我是"+value;
    //value没有就会undefined
  });
  */
  //removeAttr("title");//移除titl属性但是不可以传递function
  
  //元素样式操作
  var box = $("div").css(["color","width","height"]);
  
  $.each(box,function(attr,value){  //工具打印
    console.log(attr+":"+value);
  });
  $("div").each(function(index,elem){
    console.log("索引："+index+"对象："+elem);
  });
  //设置属性
//   $("#box").css({
//     "color": "#fff ",
//     "background": "green"
//   })
//   $("div").css("height",function(index,value){
//     //局部操作
//     return parseInt(value)+20+"px";
//   })
  //添加class
  //$("div").addClass("red size");
  //$("#box").removeClass("red size");

  //css类别切换
//   var count = 0;
//   $("div").click(function(){
//     $(this).toggleClass("size red",count++ %2==0);//和默认相切换，可多个,有个布尔值
//   })
  //css多类别切换
//   $("div").click(function(){
//   	$(this).toggleClass(function(){
//       //局部
//       if($(this).hasClass("red")){
//         $(this).removeClass("red");
//         return "green";
//       }else {
//         $(this).remove("green");
//         return "red";
//       }
//     })
//   })

  //获取值
//     var count = 0;
//    $(document).click(function(){
//       $("div").toggleClass(function(index,className,switchBool){
//         console.log("索引"+index+"class名字"+className+"频率布尔值"+switchBool)
//         //局部
//         if($(this).hasClass("red")){
//           $(this).removeClass("red");
//           return "green";
//         }else {
//           $(this).removeClass("green");
//           return "red";
//         }
//       },count++%3==0)
//     })
  //css方法 height也一样(不包括内外边距和边框)
  $("#box").width();//返回一个number
  $(window).width();//$(document).width();
  //如果设置windth(500);//默认500px 或者500pt。。。
  $("#box").width(function(index,value){
    console.log("索引"+index+"之前的宽度"+value); 
  });
  /*
    innerWidth 包含内外边距padding
    outerWidth 包含边框border和内边距padding
    outerHeight(true) 包含边框border和内边距padding和外边距margin
  */
 //获取某个元素相对于视口的距离
 console.log($("#box").offset({
   top: 50,
 }));//带参数就是设置
 //offset().top 和 offset().left属性
 console.log($("#box p").position());//获取父元素的属性
 
 //滚动条距顶高度 或者设置 scrollTop(300)
 console.log($(window).scrollTop());
 //初始化没反应谷歌$("html,body").scrollTop(300); || $(window).scrollTop(300);

 //水平滚动条scrollLeft() 一样的
 
})