
$(function(){
  windowSize();//窗口大小事件
  dowMemu();//下拉菜单
  loginView();//弹出登录框
  regView();//弹出注册框
  regTest();//注册框验证
  sliderNav();//滑动导航
  getTop();//返回顶部,百度分享栏
  toggleMenu();//菜单切换器
  bannerView();//轮播器初始化
  photoLoad();//图片延迟加载
  imgBig();//大图预加载
  imgError();//网页图片加载失败动作
  // bodyBinding($("#get-top").first());//节点绑定body滚动条
});
//失败换本地图片
var imgError = function(){
  $("img").Event("error",function(){
    $(this).attr("src","images/imgError.jpg");
  })
};
//切换器
var toggleMenu = function(){
  //console.log($(".main-sidebar h2").elem);
  $("#main .main-sidebar h2").toggle(function(){
   
    $(this).getNext().animate({
      mul : {
        h : 0,
        o : 0
      }
    })
  },function(){
    $(this).getNext().animate({
      mul : {
      	h : 150,
      	o : 100
      }
    })
  })
}

//窗口大小事件
var windowSize = function (){
  $(window).resize(function(){
    //百度侧边栏居中
    var sh = $("#share");
    // 获取窗口可视大小 -控件高度 之后 /2
    sh.css("top",(getInner().height-parseInt(sh.css("height")))/2 +"px");
    //end 百度侧边栏
  });
}

//下拉菜单
var dowMemu = function(){
  $(".drop").hover(function(){
    //第二个子节点显示
    $(this).getChildren(1).show(true).animate({
      mul : {
        h :  83,//大于或等于默认值就可以
        o : 100
      }
    })
  },function(){
      var _this = $(this);
      _this.getChildren(1).animate({
        mul : {
        	h : 0,
        },
        fn : function(){
        //第二个子节点隐藏
        _this.show(false);//这里的-this里面对象已经换成子节点了
      }
    })
  });
}
//轮播器
var bannerView =function(){
  var img =  $(".main-banner img");
  var imgLi = $(".main-banner ul li");
  var imgInfo = $(".main-banner-info a");
  //初始化
  //初始化
    img.opacity(0).css("top","0px");
    $(".main-banner ul li").eq(0).css("color","#20A5F4");
    $(".main-banner img").eq(0).opacity(100);
    imgInfo.html($(".main-banner img").eq(0).attr("alt"));//获取alt属性并赋值
  //轮播器计数器
  var banner_index = 1;
  //轮播器种类 1 透明度默认 2 就是滚动
  var banner_type = 1;
  //自动轮播器
  var banner_Time = setInterval(banner_fn,3000);
  //手动轮播器
  imgLi.hover(function(){
    clearInterval(banner_Time);
    //rgb(32, 165, 244)  #20a5f4
    if($(this).css("color")!="rgb(32, 165, 244)" && $(this).css("color")!= "#20a5f4"){
      banner(this,banner_index ==0 ? imgLi.length()-banner_index-1 : banner_index-1);//本体传过去
    }
  },function(){
    banner_index = $(this).index()+1;//后一个索引赋值
    banner_Time = setInterval(banner_fn,3000);//自动轮播器开始
  })
  //详细信息轮播器暂停
  imgInfo.hover(function(){
  	clearInterval(banner_Time);
  },function(){
  	banner_Time = setInterval(banner_fn,3000);//自动轮播器开始
  })
  //合并
  function banner(obj,prev){
    if(banner_type == 1){
      img.css("top","0px")
      $(".main-banner img").eq(prev).css("zIndex",1).animate({ //前一张
      	attr : 'o',
      	target : 0,
      	stime : 30,
      	speed : 20
      });
      var obj = $(obj);
      $(".main-banner img").eq(obj.index()).css("zIndex",2).animate({ //后一张
      	attr : 'o',
      	target : 100,
      	stime : 30,
      	speed : 20
      });
      
    }else if(banner_type == 2){
      img.opacity(100);
      $(".main-banner img").eq(prev).css("zIndex",1).animate({ //前一张
      	attr : 'y',
      	target : 300,
      	stime : 30
      });
      var obj = $(obj);
      $(".main-banner img").eq(obj.index()).css("top","-300px").css("zIndex",2).animate({ //后一张
      	attr : 'y',
      	target : 0,
      	stime : 30
      });
    }else {
      img.opacity(100);
      $(".main-banner img").eq(prev).css("zIndex",1).animate({ //前一张
      	attr : 'y',
      	target : 300,
      	stime : 30
      });
      var obj = $(obj);
      $(".main-banner img").eq(obj.index()).css("top","-300px").css("zIndex",2).animate({ //后一张
      	attr : 'y',
      	target : 0,
      	stime : 30
      });
    }
    
    $(".main-banner ul li").css("color","#FFF");
    obj.css("color","#20A5F4");//本体包含到基础
    imgInfo.html($(".main-banner img").eq(obj.index()).attr("alt"));
  }
  function banner_fn(){
   if(banner_index == imgLi.length()) {
     banner_index= 0;
   }
   banner_type = radomNumber(2,1);//随机换动画
   if(banner_type==1){
    $(".main-banner img").eq(banner_index).opacity(0);//初始化对象
   }
   banner($(".main-banner ul li").eq(banner_index).first(),banner_index ==0 ? imgLi.length()-banner_index-1 : banner_index-1);
   banner_index ++;
  }
}
//获取图片到顶点的距离,延迟加载
var photoLoad = function(){
  var photo = $(".main-index-photo img");
  //getInner()+getScollTop();//可视高度加上滚动条高度就是最底部高度
  photo.opacity(0);
  wait_Load();//防止默认当前位置刷新没图片
  $(window).scroll(wait_Load).resize(wait_Load);
  function wait_Load(){
    for(var i=0; i < photo.length();i++){
    	var _this = photo.elem[i];
    	if( (getInner().height + getScollTop()) >= elemOffsetTop(_this)){ //距离顶部距离
    		$(_this).attr("src",$(_this).attr("_src")).animate({
    			attr : 'o',
    			target: 100,
    		});
    	}
    }
  }
}
//img预加载
var imgBig = function(){
  //弹出图片详情框
  var photo_big = $("#photo-big");
  var photo_big_img =  $("#photo-big .photo-big-img img");
  //插件遮挡层
  var screen = $("#screen");
  //窗口
  var w = $(window);
  //点击图片
  $(".main-index-photo img").click(function(){
  	//使用插件遮挡层
  	screen.ViewLock(true).animate({
  		attr : 'o',
  		target : 50
  	});
  	//居中大图框
  	photo_big.show(true).center(true).drag($("#photo-big .photo-move").getTagName(),true);//必须先显示才可以获取高度居中
  	//滚动条
  	w.scrollLock(true).resize(function(){
  		photo_big.center(true);
  		screen.ViewLock(true)
  	});
  	//创建临时的img对象
  	var temp_img = new Image();
  	var alt = $(this).attr("alt");//图片说明
    var childrenNode = this.parentNode.parentNode;//dl 节点
    //标题
    var photo_big_h3= $("#photo-big h3");
    //
    var  photo_index = $(childrenNode).index();//当前索引值
    //记录索引值
    var photo_big_length = childrenNode.parentNode.children.length;
    var photo_big_index = $("#photo-big  .photo-big-index span");
    
  	$(temp_img).Event("load",function(){
  		photo_big_img.opacity(10).css("top","0px").css("width","620px").css("height","460px");
  		photo_big_h3.text(alt);
      photo_big_index.text(photo_index+1+'/'+photo_big_length);//索引值加一
  		photo_big_img.attr("src",temp_img.src).attr("alt",alt).animate({
  			attr : 'o',
  			target: 100
  		})
  	})
  	temp_img.src = $(this).attr("bigsrc");//在后台加载 IE要放在后面
    
    //$(children.index());//当前索引值
    //前后索引值
    var prev = prevIndex(photo_index,childrenNode.parentNode);//节点索引加父节点
    var next = nextIndex(photo_index,childrenNode.parentNode);
    //加载前后图片放入缓存
    var prev_img = new Image();
    var next_img = new Image();
    var prev_alt = '';
    var next_alt = '';
   
    
    img_index_info();
    //大图片鼠标滑过
    var big_prev = $("#photo-big .photo-big-prev");
    var big_next = $("#photo-big .photo-big-next");
    //大图片鼠标滑过
    $("#photo-big .photo-big-left").hover(function(){
    	big_prev.animate({
    		attr : 'o',
    		target : 66
    	});
    },function(){
    	big_next.animate({
    		attr : 'o',
    		target : 0
    	});
    })
    $("#photo-big .photo-big-right").hover(function(){
    	big_next.animate({
    		attr : 'o',
    		target : 66
    	});
    },function(){
    	big_prev.animate({
    		attr : 'o',
    		target : 0
    	});
    })
    var src = '';//保存上张图片地址
    big_prev.click(function(){ 
      photo_big_h3.text(prev_alt);//标题
      photo_big_index.text(prev+1+'/'+photo_big_length);//记录
      src = prev_img.src;
      //加载图片先加载
      photo_big_img.attr("src","images/loading.gif").css("top","200px").css("width","32px").css("height","32px");
      $(prev_img).Event("load",function(){
      	photo_big_img.opacity(10).attr("src",src).css("top","0px").css("width","620px").css("height","460px").animate({
      		attr : 'o',
      		target: 100
      	})
      })
      next = nextIndex(prev,childrenNode.parentNode);//0 2 1 2
      prev = prevIndex(prev,childrenNode.parentNode);//节点索引加父节点
      img_index_info();
    })
    big_next.click(function(){
     //http://img.ivsky.com/img/tupian/pre/201805/30/chuangyi_kapian_sheji-004.jpg
      photo_big_h3.text(next_alt);
      photo_big_index.text(next+1+'/'+photo_big_length);//记录
      src = next_img.src;
      //加载图片先加载
      photo_big_img.attr("src","images/loading.gif").css("top","200px").css("width","32px").css("height","32px");
      $(next_img).Event("load",function(){
      	photo_big_img.opacity(10).attr("src",src).css("top","0px").css("width","620px").css("height","460px").animate({
      		attr : 'o',
      		target: 100
      	})
      })
      prev = prevIndex(next,childrenNode.parentNode);//0 2 1 2
      next = nextIndex(next,childrenNode.parentNode);//节点索引加父节点
      img_index_info();
    })
    function img_index_info(){
      prev_img.src = $(".main-index-photo img").eq(prev).attr("bigsrc");//上一张_src
      next_img.src = $(".main-index-photo img").eq(next).attr("bigsrc");//下一张
      prev_alt = $(".main-index-photo img").eq(prev).attr("alt");
      next_alt = $(".main-index-photo img").eq(next).attr("alt");
    }
  });
  
  //关闭大图框
  $("#photo-big .colse").click(function(){
  	//先执行动画在关闭
  	screen.animate({
  		attr : 'o',
  		target : 0,
  		fn : function(){
  			screen.ViewLock(false);//关闭
  		}
  	})
  	//换图片,初始化
  	$("#photo-big h3").html("&nbsp;图像预览");
  	$("#photo-big .photo-big-img img").css("width","32px").css("height","32px").css("top","200px").attr("src","images/loading.gif").attr("alt"," ");
  	//隐藏 
  	photo_big.show(false);
  	//关闭
  	w.scrollLock(false).resize(false);
  });
  
}
//弹出注册框 
var regView = function(){
  var reg = $("#reg");
  //插件遮挡层
  var screen = $("#screen");
  //窗口
  var w = $(window); 
  $("#nav .nav-reg").click(function(){
  	//使用插件遮挡层
  	screen.ViewLock(true).animate({
  		attr : 'o',
  		target : 50
  	});
  	//居中登陆框
  	reg.show(true).center(true).drag($("#reg .reg-move").getTagName(),true);//必须先显示才可以获取高度居中
  	//滚动条
  	w.scrollLock(true).resize(function(){
  		reg.center(true);
      screen.ViewLock(true);
  	});
  	//可以获取event对象
  });
  //关闭登陆框
  $("#reg .colse").click(function(){
  	//先执行动画在关闭
  	screen.animate({
  		attr : 'o',
  		target : 0,
  		fn : function(){
  			screen.ViewLock(false);//关闭
  		}
  	})
  	//隐藏 
  	reg.show(false);
  	//关闭
  	w.scrollLock(false).resize(false);
  });
}
//注册验证
var regTest = function(){
  //初始化表单
  $("#reg input").value('');
  //用户验证
  var info_user = $("#reg .info-user");
  var error_user = $("#reg .error-user");
  var succ_user = $("#reg .succ-user");
  $("#reguser").Event("focus",function(){
    info_user.show(true);
    error_user.show(false);
    succ_user.show(false);
  }).Event("blur",function(){
    if(trim($(this).value()) ==''){
      info_user.show(false);
      error_user.show(true).html("不能为空！");
      succ_user.show(false);
    }else if(!check_user()){
      info_user.show(false);
      error_user.show(true).html("必须是2-20数字字母下划线字符");
      succ_user.show(false);
    }else {
      info_user.show(false);
      error_user.show(false);
      succ_user.show(true);
    }
  })
  function check_user(){
    if(/[\w]{2,20}/.test(trim($("#reguser").value())))return true
  }
  
  //密码验证
  var regpass =  $("#regpass");
  var info_pass = $("#reg .info-pass");
  var error_pass = $("#reg .error-pass");
  var succ_pass = $("#reg .succ-pass");
  var pass_view = $("#reg .pass-view");
  regpass.Event("focus",function(){
  	info_pass.show(true);
    error_pass.show(false);
    succ_pass.show(false);
  }).Event("keyup",function(){ //强度验证
    check_pass();
  }).Event("blur",function(){
    if(trim($(this).value()) ==''){
    	info_pass.show(false);
    	error_pass.show(true).html("不能为空！");
    	succ_pass.show(false);
    }else {
       if(check_pass()){
      	info_pass.show(false);
      	error_pass.show(false);
      	succ_pass.show(true);
      }else {
      	info_pass.show(false);
      	error_pass.show(true).html("密码格式出错请检查后重新输入！");
      	succ_pass.show(false);
      }
    }
  })
  //密码可见
  $("#reg .pass-view").toggle(function(){
  	$(this).html("隐")
  	$("#regpass").first().type="text";
  },function(){
  	$(this).html("见");
  	$("#regpass").first().type="password";
  });
  //密码验证函数
  function check_pass(){
    var value = trim(regpass.value());
    var value_length = value.length;
    var code_length = 0;
    //第一个6-20字符之间
    
    var info_pass_q1 = $("#reg .info-pass .q1");
    var info_pass_q2 = $("#reg .info-pass .q2");
    if(value_length >=6 && value_length <=20) { 
    	info_pass_q1.html("●").css("color","green");
    }else {
    	info_pass_q1.html("○").css("color","#000");
    }
    //第二个字母或数字或非空字符，任意一个即可
    if(value_length > 0 && !/\s/.test(value)){
    	info_pass_q2.html("●").css("color","green");
    }else {
    	info_pass_q2.html("○").css("color","#000");
    }
    //第三个字母或数字或非空字符，2种以上即可
    if(/[\d]/.test(value)){
    	code_length++;
    }
    if(/[a-z]/.test(value)){
    	code_length++;
    }
    if(/[A-Z]/.test(value)){
    	code_length++;
    }
    if(/[^\w]/.test(value) && !/\s/.test(value)){
    	code_length++;
    }
    if(code_length >= 2 && !/\s/.test(value)){
    	$("#reg .info-pass .q3").html("●").css("color","green");
    }else {
    	$("#reg .info-pass .q3").html("○").css("color","#000");
    }
    //安全级别 高大于10字符 并且不同混拼  高到低判断
    var info_pass_b1 = $("#reg .info-pass .b1");
    var info_pass_b2 = $("#reg .info-pass .b2");
    var info_pass_b3 = $("#reg .info-pass .b3");
    var info_pass_b4 = $("#reg .info-pass .b4");
    if(value.length >=10 && code_length >=3){
    	info_pass_b1.css("color","green");
    	info_pass_b2.css("color","green");
    	info_pass_b3.css("color","green");
    	info_pass_b4.html("高").css("color","green");
    }else if(value.length >=8 && code_length >=2){
    	info_pass_b1.css("color","#F60");
    	info_pass_b2.css("color","#F60");
    	info_pass_b3.css("color","#CCC");
    	info_pass_b4.html("中").css("color","#F60");
    }else if(value.length >0){
    	info_pass_b1.css("color","red");
    	info_pass_b2.css("color","#CCC");
    	info_pass_b3.css("color","#CCC");
    	info_pass_b4.html("低").css("color","red");
    }else {
    	info_pass_b1.css("color","#CCC");
    	info_pass_b2.css("color","#CCC");
    	info_pass_b3.css("color","#CCC");
    	info_pass_b4.html(" ");
    } 
    //密码正确
    if(value_length >=6 && value_length <=20 && !/\s/.test(value) && code_length >= 2)
      return true;
  }
  //密码再次确认
  var notpass =  $("#notpass");
  var info_notpass = $("#reg .info-notpass");
  var error_notpass = $("#reg .error-notpass");
  var succ_notpass = $("#reg .succ-notpass");
  notpass.Event("focus",function(){
  	info_notpass.show(true);
  	error_notpass.show(false);
  	succ_notpass.show(false);
  }).Event("blur",function(){
  	if(trim($(this).value()) ==''){
  		info_notpass.show(false);
  		error_notpass.show(true).html("不能为空！");
  		succ_notpass.show(false);
  	}else if(trim($(this).value()) == trim($("#regpass").value())){
      info_notpass.show(false);
      error_notpass.show(false);
      succ_notpass.show(true);
  	}else {
      info_notpass.show(false);
      error_notpass.show(true).html("密码不一致，请重新输入！");
      succ_notpass.show(false);
    }
  })
  //确认密码可见
  $("#reg .notpass-view").toggle(function(){
    $(this).html("隐");
    $("#notpass").first().type="text";
  },function(){
    $(this).html("见");
    $("#notpass").first().type="password";
  })
  //回答
  var info_ans =  $("#reg .info-ans");
  var error_ans = $("#reg .error-ans");
  var succ_ans = $("#reg .succ-ans");
  $("#ans").Event("focus",function(){
    info_ans.show(true);
    error_ans.show(false);
    succ_ans.show(false);
  }).Event("blur",function(){
    if(trim($(this).value())==''){
     info_ans.show(false);
      error_ans.show(true).html("不能为空！");
      succ_ans.show(false);
    }else if(trim($(this).value()).length >=2 && trim($(this).value()).length<=20){
      info_ans.show(false);
      error_ans.show(false);
      succ_ans.show(true);
    }else {
      info_ans.show(false);
      error_ans.show(true).html("回答不合法，请重新输入！");
      succ_ans.show(false);
    }
  })
  //电子邮件验证
  var email = $("#email");
  var all_email_li = $("#reg .all-email li");
  var info_email = $("#reg .info-email");
  var error_email = $("#reg .error-email");
  var succ_email = $("#reg .succ-email");
  var all_email = $("#reg .all-email");
  email.Event("focus",function(){
    info_email.show(true);
    error_email.show(false);
    succ_email.show(false);
  }).Event("keyup",function(){  //电子邮件补全
  all_email_li.css("background","#FFF");
    if(trim($(this).value()).length >0 && $(this).value().indexOf("@")==-1){
      all_email.show(true);
      $("#reg .all-email li span").text(trim($(this).value()));//赋值过滤Html标签
    }else if(trim($(this).value()).length ==0 || $(this).value().indexOf("@")!=-1){ //长度0 有@就隐藏
      all_email.show(false);
    }
    //邮件点击补全（过滤html标签）
    all_email_li.click(function(){
    	email.value($(this).text());
      //信息也变一下
      info_email.show(false);
      error_email.show(false);
      succ_email.show(true);
      all_email.show(false);
      all_email_li.css("background","#FFF");
    })
    //键盘操作上38\下键40\回车13
    if(event.keyCode == 40) {
      if(this.index == undefined || this.index >= $("#reg .all-email li").length()-1){
        this.index = 0;
      }else {
        this.index++;
      }
      all_email_li.css("background","#FFF");
      $("#reg .all-email li").eq(this.index).css("background","#EEE");
    }
    if(event.keyCode == 38) {
    	if(this.index == undefined || this.index <=0){
    		this.index = $("#reg .all-email li").length()-1;
    	}else {
    		this.index--;
    	}
    	all_email_li.css("background","#FFF");
    	$("#reg .all-email li").eq(this.index).css("background","#EEE");
    }
    if(event.keyCode == 13) {
      this.value = $("#reg .all-email li").eq(this.index).text();
      all_email.show(false);
      this.index = undefined;//初始化
    }
  }).Event("blur",function(){
    if(trim($(this).value())==''){
    	info_email.show(false);
    	error_email.show(true).html("不能为空！");
    	succ_email.show(false);
    }else if(/^[\w\-\.]+\@[\w]+(\.[a-zA-Z]{2,4}){1,2}$/.test(trim($(this).value()))){
    	info_email.show(false);
    	error_email.show(false);
    	succ_email.show(true);
      $("#reg .all-email").show(false);
    }else {
    	info_email.show(false);
    	error_email.show(true).html("输入不合法，请重新输入！");
    	succ_email.show(false);
    }
  })
  //年月日
  var year = $("#year");
  var month = $("#month");
  var day = $("#day");
  //注入年
  for(var i= 2018; i>=1950;i--){
    year.first().add(new Option(i,i),undefined);//写undefdefined可以兼容
  }
  //注入月
  for(var i= 1; i<=12;i++){
  	month.first().add(new Option(i,i),undefined);//写undefdefined可以兼容
  }
  //注入日
  var day30 = [4,6,9,11];
  var day31 = [1,3,5,7,8,10,12];
  //年内容改变事件
  year.Event("change",echoDay);
  //月内容改变事件
  month.Event("change",echoDay);
  function echoDay(){
   
    if(year.value() != 0 && month.value()!=0){
    	//31天
    	day.first().options.length = 1;//清理下
    	//不确定的日
    	var cur_day = 0;
    	
    	if(inArray(day31,parseInt(month.value()))){
    		cur_day = 31;
    	}else if(inArray(day30,parseInt(month.value()))){
    		cur_day = 30;
    	}else { //闰年二月等判断
    		if((parseInt(year.value()) %4==0 && parseInt(year.value()) %100 !=0) || (parseInt(year.value()) %400 == 0)){
    			cur_day = 29;
    		}else {
    			cur_day = 28;
    		}
    	}
      for(var i= 1; i<=cur_day;i++){
      	day.first().add(new Option(i,i),undefined);//写undefdefined可以兼容
      }
    }else {
    	day.first().options.length = 1;//清理下
    }
  }
  
  //备注验证
  var ps = $("#ps");
  var info_ps = $("#reg .info-ps");
  var error_ps = $("#reg .error-ps");
  var succ_ps = $("#reg .succ-ps");
  var ps_num = $("#reg .ps-num");
  var num = ps_num.text();
  ps.Event("focus",function(){
  	info_ps.show(true);
  	error_ps.show(false);
  	succ_ps.show(false);
  }).Event("keyup",cherk_ps).Event("paste",function(){//粘贴事件会在粘贴之前触发
    setTimeout(cherk_ps,50);
  }).Event("blur",function(){
    if(trim(ps.value()) == ''){
    	info_ps.show(false);
    	error_ps.show(true).text("不可以为空！");
    	succ_ps.show(false);
    }else if(num-(ps.value().length) >= 0){
    	info_ps.show(false);
    	error_ps.show(false);
    	succ_ps.show(true);
    }else {
    	info_ps.show(false);
    	error_ps.show(true);
    	succ_ps.show(false);
    }
  });
  function cherk_ps(){
    var m = num-(ps.value().length);
    if(m >= 0){
    	info_ps.show(true);
    	error_ps.show(false);
    	succ_ps.show(false);
    	ps_num.text(m);
    }else {
    	info_ps.show(false);
    	error_ps.show(true);
    	$("#reg .error-ps b").html("你已经超过"+(-m)+"个字");
    	succ_ps.show(false);
    }
  }
  
  //清尾功能
  $("#reg .ps-clear").click(function(){
  	ps.value(ps.value().substring(0,num));
  	info_ps.show(true);
    ps_num.text(0);
  	error_ps.show(false);
  	succ_ps.show(false);
  });
  //用户协议！
  //提交
  $("#reg-sub").click(function(){
    if(!$("#agr").first().checked){
    	alert("请同意用户协议！");
      return ;
    }
    ajax({
        type : "post",
        url : "userInfo.php",
        data : $("#reg").eq(0).serialize(),
        process : function (i){  // 0 1 2 3 4
          console.log(i); //提交过程
        },
        success : function(info){  // 200
          console.log(info);
          // console.log(eval("("+info+")"));//不太安全的返回对象
          var info = JSON.parse(info);//较为安全的对象
//           console.log(info);
//           console.log(info["code"]);
          data = info["data"];
          if(data==="null"){
            console.log("注册失败");
          }else if(data.data =="succ" && data.time !=''){
            console.log("注册成功！注册时间为："+data.time);
          };
          //console.log(JSON.stringify(info));//转义
        },
        error : function(i){ // 404 500 ....
          console.log(i);
        },
        run : true  //异步
    })
  })
}
//弹出登录框
var loginView = function(){
  var login = $("#login");
  //插件遮挡层
  var screen = $("#screen");
  //窗口
  var w = $(window); 
  $("#nav .nav-login").click(function(){
    //使用插件遮挡层
    screen.ViewLock(true).animate({
      attr : 'o',
      target : 50
    });
    //居中登陆框
    login.show(true).center(true).drag($("#login .login-move").getTagName(),true);//必须先显示才可以获取高度居中
    //滚动条
    w.scrollLock(true).resize(function(){
      login.center(true);
      screen.ViewLock(true);
    });
    //密码可见
    $("#login .pass-view").toggle(function(){
      $(this).html("隐");
    	$("#pass").first().type="text";
    },function(){
      $(this).html("见");
    	$("#pass").first().type="password";
    });
    //可以获取event对象
  });
  //提交
  $("#login-sub").click(function(){
  	ajax({
  			type : "get",
  			url : "./",
  			data : $("#login").eq(0).serialize(),
  			process : function (i){  // 0 1 2 3 4
  					console.log(i); //提交过程
  			},
  			success : function(info){  // 200
  					console.log(info);
  					// console.log(eval("("+info+")"));//不太安全的返回对象
  					var info = JSON.parse(info);//较为安全的对象
  					console.log(info);
  					console.log(info["code"]);
  					console.log(info["data"]);
  					//console.log(JSON.stringify(info));//转义
  			},
  			error : function(i){ // 404 500 ....
  					console.log(i);
  			},
  			run : true  //异步
  	})
  })
  //关闭登陆框
  $("#login .colse").click(function(){
    //先执行动画在关闭
    screen.animate({
      attr : 'o',
      target : 0,
      fn : function(){
        screen.ViewLock(false);//关闭
      }
    })
    //隐藏 
    login.show(false);
    //关闭
    w.scrollLock(false).resize(false);
  });
}
//滑动导航
var sliderNav = function (){
  $("#slider-nav .about li").hover(function(){
    var tar = $(this).first().offsetLeft;//位置
    $("#slider-nav .nav-bg").animate({
      attr : 'x',
      target : tar+20,
      fn : function(){
        $("#slider-nav .white").animate({
          attr : 'x',
          target : -tar
        });
      }
    })
  },function(){
    $("#slider-nav .nav-bg").animate({
    	attr : 'x',
    	target : 20,
      fn : function(){
      	$("#slider-nav .white").animate({
      		attr : 'x',
      		target : 0
      	});
      }  
    })
  });
}
//百度分享侧栏
/*$("#id").animate({
  attr : "x", y ,w ,h ,o 透明度或者CSS 可选 默认 x
  start: 176, //起始值 可选 默认style值
  step : 20,  //每次增加值 可选 默认20 
  target: 300, //目标值必选
  stime : 30 , //运动间隔时间 可选 默认30
  speed： 5 ,//缓冲速度 可选 默认5
  type ：1 || 0 缓冲开关 可选 默认开启 1
})
*/
var share = function(){
  //初始化获取高度居中和添加动画
  var sh = $("#share");
  sh.css("top",(getInner().height-parseInt(sh.css("height")))/2 +"px");
  sh.hover(function(){
    $(this).animate({  //移动动画
      attr : "x", 
      target: 0
    }) 
  },function(){
    $(this).animate({  //移动动画
      attr : "x", 
      target: -211
    })
  })
};
//返回顶部,百度分享栏
var getTop = function(){
  var w = $(window);
  var top = $("#go-top");
  var n = $("#nav");
  var m =  $("#slider-nav");
  var he = $("#header");
  var h = parseInt(n.css("height"))+ parseInt(m.css("margin-top"));//获取的都有单位，转化去掉
  var hetop = parseInt(he.css("height"));
  w.scroll(function(){
    if(getScollTop() <= hetop){
    	top.show(false);
    	n.css("position","relative").css("box-shadow","none");
    	m.css("margin-top","30px");
      $("#share").show(false);
    }else{
      top.show(true);
      n.css("position","fixed").css("top","0px").css("box-shadow","0 3px 3px #C9C9C9");
      m.css("margin-top",(h+"px"));
      $("#share").show(true);
      share();//百度分享栏
    }
  })
  //返回顶部动画
  top.click(function(){
    top.show(false);//隐藏防止二次点击
    var timer = null;
    timer = setInterval(function(){
      var scrll = getScollTop();
      w.click(function(){  //用户单击后停止
          clearInterval(timer);
          if(getScollTop() > 200){
            top.show(true);
          }
      });
      if(scrll > 50){
        var t = 0;
        if(scrll > 1000)
          t =Math.round(scrll-(scrll/5));
        else 
          t =Math.round(scrll-(scrll/6));
        setScollTop(t);
      }else {
        setScollTop(0);
        clearInterval(timer);
      }
    }
    ,30); 
  });
}