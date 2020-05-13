$(function(){ 
//   
//   $("#login .login-sub").click(function(){
//     $.ajax({
//       type : "POST",
//       url : "test.php",
//       data : $("form").serialize(),
//       timeout : 500,//500毫秒超时
//       success : function(response,stutas,xhr){ //成功时处理
//         console.log("获取的内容为:"+response+"->状态为:"+stutas+"->对象:"+xhr);
//       },
//       error : function(xhr,error,errorText){ //错误时处理
//         console.log("获取的对象为:"+xhr+"->错误为为:"+error+"->状态说明:"+errorText);
//         console.log(xhr.status+"=>"+xhr.statusText);
//       },
//       global: false,//全局属性不触发，默认触发true
//       beforeSend: function(){
//         console.log("请求之前")
//       },
//       complete :function(){
//         console.log("完成后，不管对错！")
//       }
//     })
//   })

//跨域问题直接在php文件里面用一个$_GET['callback']
//   $("#login .login-sub").click(function(){
//     $.ajax({
//       type : "POST",
//       url : "test.php?callback=?",//加了才可以跨域
//       data : $("form").serialize(),
//       datatype: "json",//jsonp 也可以跨域
//       timeout : 500,//500毫秒超时
//       success : function(response,stutas,xhr){ //成功时处理
//         console.log("获取的内容为:"+response+"->状态为:"+stutas+"->对象:"+xhr);
//       },
//       error : function(xhr,error,errorText){ //错误时处理
//         console.log("获取的对象为:"+xhr+"->错误为为:"+error+"->状态说明:"+errorText);
//         console.log(xhr.status+"=>"+xhr.statusText);
//       }
//     })
//   })
  
  //jqXHR 对象就是$.ajax();//返回的对象
  $("#login .login-sub").click(function(){
    var jqXHR = $.ajax({
      type : "POST",
      url : "test.php",
      data : $("form").serialize(),
      datatype: "json",//jsonp 也可以跨域
      timeout : 500,//500毫秒超时
    })
//     jqXHR.success(function(response,stutas,xhr){
//       
//     })//可能取消

    //可以连缀,可以按顺序执行多个事件，可以多次执行同一个回调函数
    jqXHR.done(function(response,stutas,xhr){ //代替success
      
    }).always(function(){ //代替complete
      
    }).fail(function(){ //代替error
      
    })


  })
  //多ajax处理
  
  var jqXHR = $.ajax('test.php');//可以直接写
  var jqXHR2 = $.ajax('test2.php');//可以直接写
  
  $.when(jqXHR,jqXHR2).done(function(r1,r2){
    console.log(r1);
    console.log(r1[0]);//数据
    console.log(r1[1]);//状态
    console.log(r1[2]);//就是这个对象
    console.log(r2)
  })
  
  
})
