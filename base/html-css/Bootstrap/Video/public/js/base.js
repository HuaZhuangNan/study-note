$(function(){
  
 
  //导航搜索框
  $(".nav-form").hover(function(){
    var _this = $(this);
    if(_this.find("button").css("right") == "0px"){
      _this.find("input").val(null).toggle().get(0).focus();
    }
  })
  $(".nav-form").find("button[type=submit]").click(function(){
  	var v = $(this).find("input").eq(0).val();
  	if($.trim(v)!=""){
  		$.get('index.html?seach='+_this.find("input").val());
  	}else {
  		alert("输入不可以为空！")
  	}
  })
  //历史统计记录
  $(".nav-histroy .histroy-num").text($(".nav-histroy > span").size());
  //删除历史
  $(".nav-clear").click(function(){
    $(".nav-histroy > span").remove();
    $(".nav-histroy .histroy-num").text("0");
  })
  //下拉菜单
  ;(function($){
    $.extend({
      'dropdown' : function(){
        var d =$(document); 
        d.on("mouseenter mouseleave",'.dropdown',function(){
          	//this ==.dropdown
            var _this = $(this);
            var m = _this.find('.dropdown-menu');
            _this.find("i").toggle();
            m.css("top",_this.offsetHeight+"px");
          	var z = d.outerWidth()-(_this.get(0).offsetLeft + m.outerWidth());
          	z < 0 ? m.css("left",z+"px") : null;
          	m.stop().slideToggle('normal');
        })
      return this;
      }
    })
  })(jQuery);
  $.dropdown();
  //遮挡层
  
})