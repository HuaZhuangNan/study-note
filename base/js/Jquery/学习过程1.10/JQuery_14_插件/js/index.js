$(function(){ 
  //插件
  //表单插件
  $("form").validate();
  //第四步，表单字段不为空添加class required
  //表单字段不为空添加class required
  //表单字段不小于两位 minlength="2" 
  //电子邮件 class=email 网址 class=url 
  
  //自动完成插件 
  
  
  //下拉插件
  
  ;(function ($) {
	
	$.fn.extend({
		'nav_down' : function(){
      //this 就是JQuery
      this.find(".nav-down").css({
      	"position" : "absolute",
      	"top" : "60px",
      	"display" : "none",
      	"width": "100px",
      	"margin" : 0,
      	"padding" : 0,
      	"border-top": "1px solid blue",
      	"line-height" : "30px",
      	"list-style" : "none",
      	"color" : "#fff",
      	"background" : "#666",
      })
      this.find(".nav-down").find("li").hover(function(){
        //普通匿名
      	$(this).css({
      		"background" : "#000",
      	})
      },function(){
      	$(this).css({
      		"background" : "#666",
      	})
      })
      this.find(".nav-down").parent().css({
      	"position": "relative",
      }).hover(function(){
      	$(this).find('.nav-down').slideDown('normal');
      },function(){
      	$(this).find('.nav-down').stop().slideUp('normal');
      })
    return this;
    }
	});

})(jQuery);
  $("#nav").nav_down().size();
  
  
})
