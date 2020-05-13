$(function(){ 
  $("#login .login-sub").click(function(){
    $.ajax({
      type : "POST",
      url : "test.php",
      data : $("form").serialize(),
      timeout : 500,//500毫秒超时
      success : function(response,stutas,xhr){ //成功时处理
        console.log("获取的内容为:"+response+"->状态为:"+stutas+"->对象:"+xhr);
      },
      error : function(xhr,error,errorText){ //错误时处理
        console.log("获取的对象为:"+xhr+"->错误为为:"+error+"->状态说明:"+errorText);
        console.log(xhr.status+"=>"+xhr.statusText);
      },
      global: false,//全局属性不触发，默认触发true
      beforeSend: function(){
        console.log("请求之前")
      },
      complete :function(){
        console.log("完成后，不管对错！")
      }
    })
  })
  
  //AJAX全局属性加载开始ajaxStart和加载结束ajaxStop
  $(document).ajaxStart(function(){
    $("#loading").show();
  }).ajaxStop(function(){
    $("#loading").hide();
  })
  
  //局部错误处理$.post()等这些方法可以使用 .error()捕获错误
  $.post("url.php").error(function(xhr,error,errorText){
    console.log("获取的对象为:"+xhr+"->错误为为:"+error+"->状态说明:"+errorText);
    console.log(xhr.status+"=>"+xhr.statusText);
  })
  
  //全局错误
  $(document).ajaxError(function(event,xhr,setting,errorText){
  	console.log("获取的事件"+event+"对象为:"+xhr+"->触发错误有关设置:"+setting+"->状态说明:"+errorText);
  	console.log(event);
    console.log(setting);
    console.log(xhr.status+"=>"+xhr.statusText);
  })
  //全局 ajaxSend() ajax开始前执行 
  
  //全局成功ajaxSuccess() 局部成功-> .success()
  $(document).ajaxSend(function(event,xhr,setting,errorText){
  	console.log("请求开始前");
  }).ajaxStart(function(){
    console.log("请求开始时");
  }).ajaxComplete(function(event,xhr,setting,errorText){
  	console.log("请求完成后,不管请求对还是错都运行");//在失败或者成功函数执行后
  }).ajaxSuccess(function(event,xhr,setting,errorText){
  	console.log("请求成功后");
  }).ajaxError(function(event,xhr,setting,errorText){
  	console.log("请求失败后");
  })
  //请求完成注册不管对和错 ajaxComplete() 局部-> .complete
  
  
  
})
