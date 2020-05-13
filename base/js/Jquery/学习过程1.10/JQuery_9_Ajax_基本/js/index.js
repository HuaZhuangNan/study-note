$(function(){ 

  
  
//load方法 局部函数
  //get方式提交映入数据 
//   $("#loading").click(function(){
//     //$("#info").load("info.html?id=info")
//     //$("#info").load("info.html .url");//只加载class ；
//     var time = + new Date();//new Date().getime();
//     $("#info").load('test.php?time='+time);//只加载class
//   })
//   //post方式提交
//   $("#loading").click(function(){
//   	var time = + new Date();
//   	$("#info").load("test.php",{
//       "time" : time
//     },function(response,stutas,xhr){
//       //response 就是返回数据
//       console.log(stutas);//状态 成功 success 错误 error
//       console.log(xhr);//对象
//       console.log(xhr.status);//状态码
//       console.log(xhr.statusText)//状态说明
//     });
//   })


//$.get多一个 type属性
//   $("#loading").click(function(){
//     var time = + new Date();
//     $.get("test.php?time="+time,function(response,stutas,xhr){
//       console.log("获取的内容为:"+response+"->状态为:"+stutas+"->对象:"+xhr);
//     },"html");//默认html、text    或者xml或者json格式
//   })
  //字符串
//   $.get("test.php","time="+time+"&id=1",function(response,stutas,xhr){
//     console.log("获取的内容为:"+response+"->状态为:"+stutas+"->对象:"+xhr);
//   });
//   //对象
//   $.get("test.php",{"time":time,"id":1},function(response,stutas,xhr){
//   	console.log("获取的内容为:"+response+"->状态为:"+stutas+"->对象:"+xhr);
//   });
  
//$.post使用
    var time = + new Date();
  //字符串
//   $.post("test.php","time="+time,function(response,stutas,xhr){
//   console.log("获取的内容为:"+response+"->状态为:"+stutas+"->对象:"+xhr);
//   });
  //对象
//   $.post("test.php",{"time":time,"id":1},function(response,stutas,xhr){
//     console.log("获取的内容为:"+response+"->状态为:"+stutas+"->对象:"+xhr);
//   });
  //第四参数
  //$.post("test.php",{"time":time,"type":"json"},function(response,stutas,xhr){
   // console.log("获取的内容为:"+response+"->状态为:"+stutas+"->对象:"+xhr);
  //},"json");//默认html、text    或者xml或者json格式
 //xml对象$(response).find("root").find("url").text();//获取root下的url里面的内容


  //$.getScript();//加载js文件方便加载插件个人觉得
  
  //$.getJSON();//加载json文件 安全级别更高

  //$.ajax 默认GET
  
  $.ajax({
    type: 'POST',
    url:'test.php',
    data: {
      "time" : time,
    },
    dataType: "json",//放回类型
    timeout: 3000,//设置3秒为超时
    success : function(response,stutas,xhr){ 
      console.log("获取的内容为:"+response+"->状态为:"+stutas+"->对象:"+xhr);
    },
    error : function(){
      console.log("出错了")
    }
  })
      
 
})
