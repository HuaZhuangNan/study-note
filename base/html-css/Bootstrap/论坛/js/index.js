$(function(){
  //导航条
  nav();
  $(window).resize(nav);
  //主内容
  main();
  //滚动监听
  $(window).scroll(function() {
  //获取文档滚动高度
    var top = $(document).scrollTop();
    if(top>=100){
      $(".glyphicon-chevron-up").eq(0).show();
    }else {
      $(".glyphicon-chevron-up").eq(0).hide();
    }
  })
  $(".glyphicon-chevron-up").eq(0).click(function(){
    $("html,body").animate({scrollTop:$("header").offset().top},800);
  })
  //登录中
  $('#loginbutton').on('click', function () {
    var $btn = $(this).button('loading');
    // business logic...
       $.ajax({
         type : "POST",
         url : "user.php",
         data : $("#reg form").serialize(),
         timeout : 500,//500毫秒超时
         success : function(response,stutas,xhr){ //成功时处理
           console.log("获取的内容为:"+response+"->状态为:"+stutas+"->对象:"+xhr);
         },
         error : function(xhr,error,errorText){ //错误时处理
           console.log("获取的对象为:"+xhr+"->错误为:"+error+"->状态说明:"+errorText);
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
    setTimeout(function(){
       console.log("成功")
     $btn.button('succ'); 
     $btn.button('reset'); 
    }, 3000);
    
  })
  //关闭登录框弹出注册框
  $("#login .modal-footer a").click(function(){
    $('#login').modal('hide');
    $('#reg').modal('show');
  })

  //关闭注册框弹出登录框
  $("#reg .modal-footer a").click(function(){
    $('#reg').modal('hide');
    $('#login').modal('show');
  })
  //注册中
  $('#regbutton').on('click', function () {
    var $btn = $(this).button('loading');
    // business logic...
   
    setTimeout(function(){
       console.log("成功")
     $btn.button('succ'); 
     $btn.button('reset');
     $('#reg').modal('hide');
     $('#login').modal('show');
    }, 3000);
    
  })
  
  
  
})

//导航条
var nav = function() {
  var li = $("#navbar-collapse-1 >ul >li");
  var menu = $(".navbar-collapse .dropdown-menu");
  var m = menu.find("> li");
  var l = li.size()-1;
  if($(this).outerWidth(true) >740 && $(this).outerWidth(true) < 975 && li.size() >=3){
    for(var i=2;i<l;i++){
      menu.get(0).append(li.get(i));
    }
    // $(this).unbind("resize",arguments.callee);
  }else if(m.size()>0){
    for(var i= (m.size()-1);i>=0;i--){
      li.eq(1).after(m.get(i));
    }
  }
}
//主内容
var main = function(){
  var main = $(".main-info");
  //点击跳转到指定网页
  main.click(function(){
    $(location).attr('href', $(this).find("a").eq(0).attr("href"));
  })
  //图片放大效果
  main.hover(function(){
    $(this).find(".media-left img").css("transform","scale(1.03)");
  },function(){
    $(this).find(".media-left img").css("transform","scale(1)");
  })
}