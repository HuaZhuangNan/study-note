$(function(){ //DOM加载可以多次执行不会覆盖
  
  var cs = $(".cs");
  console.log(cs.get(0));//获取第一个DOM节点 或者get()所有节点数组 或者 cs[0]
  console.log(cs.eq(0));//获取第一个返回this 或者eq()所有节点数组
  console.log(cs);
  console.log(cs.size());//返回个数
  
  //CSS选择器有容错功能--不存在节点也不会报错
  //$("div");//所有div DOM节点
  //$("*");//全局范围所有节点
  //$("div p");//所有DIV 下的 P节点
  //等价$("div").find('p');
  console.log(cs[0].nodeName);//节点名 DIV
  
  //进阶选择器
  console.log($("div , p , ul li"));//获取div所有节点 和p所有节点 所有ul下的li  按DOM顺序
  console.log($("li.cs"));//获取li标签为class cs的节点
  console.log($(".cs.ps"));//获取class 含有 cs和ps的节点
 
  //高级选择器 方法不传参数就是* (方法选择器速度快一点)
  $("ul li");//后代选择器
  $("ul li a");//最慢
  $("ul li").find('a');//在这个节点下自查a节点
  //等价于 $('a',"ul li");//速度慢一点
  //等价于$('a',$(ul li));//更慢一点
  $(".cs > p").css("color","red");//CSS选择器兼容IE6 子选则器
  //等价 $(".cs").children('p').("color","red");
  $(".cs + p");//同级后相邻第一个p对象 （之间间不可以其他元素）
  //等价 $(".cs").next('p').("color","red");更快
  $(".cs ~ p");//同级后所有p元素
  //等价 $(".cs").nextAll('p').("color","red")更快
  //$(".cs").prev('p').("color","red");//同级前相邻第一个p元素（之间间不可以其他元素）
  //$(".cs").prevAll('p').("color","red");//同级前所有p元素
  
  //$(".cs").siblings('p');//同级前后所有p元素
  //$(".cs").nextUntil('p');//.cs后 和 p之间的元素
  //$(".cs").prevUntil('p');//.cs前 和 p之间的元素
  
  //属性选择器
  $("a[title]").css("color","red");//获取有title属性的a对象
  $("a[title=num1]").css("color","red");//获取title属性等于num1的a对象
  $("a[title^=num]").css("color","red");//获取title属性开头有num的a对象
  $("a[title$=num]").css("color","red");//获取title属性结尾有num的a对象
  $("a[title|=cs]").css("color","red");//获取title属性等于num或num- 的a对象
  $("a[title!=num1]").css("color","red");//获取title属性不等于num1的a对象
  $("a[title~=aaa]").css("color","red");//获取title属性有空格列表含有aaa的a对象
  $("a[title*=num]").css("color","red");//获取title属性含有字符串num的a对象
  $("a[bb=ccc][title*=num]").css("color","red");//获取title属性含有字符串num的并且bb属性等于ccc的a对象

  
  //过滤选择器
  $("li:first").css("background","#ccc");//第一个ul下li
  //等价于$("li").first().css("background","#ccc");
  $("li:last").css("background","#ccc");//最后一个ul下最后一个li
  //等价于$("li").last().css("background","#ccc");
  $("li:not(.pp)").css("background","#ccc");//第一个ul下li的class不等于pp的元素
  //等价于$("li").not(".pp").css("backgr ound","#ccc");
  $("li:even").css("background","#ccc");//li下0开始为偶数的元素
  $("li:odd").css("background","#ccc");//li下0开始为奇数的元素
  $("li:eq(2)").css("background","#ccc");//li下0开始为2的元素
  //等价于$("li").eq(2).css("backgr ound","#ccc");
  $("li:eq(-2)").css("background","#ccc");//最后li下-1开始为-2的元素
  $("li:gt(2)").css("background","#ccc");//li下0开始大于2的元素
  $("li:gt(-2)").css("background","#ccc");//最后li下-1开始大于-2的元素
  $("li:lt(2)").css("background","#ccc");//li下0开始小于于2的元素
  $(":header").css("background","#ccc");//h1~h6的元素
  $("h3:header").css("background","#ccc");//h3元素
  $(":animated").css("background","#ccc");//选择正在执行动画的元素
  // $("input").get(0).focus();
  //$(":focus").css("background","#ccc");//只有网页初始化焦点才可以使用焦点获取元素
  //$(":button");//选择所有type=button的input
  
  //内容过滤器
  $("a:contains('第')").css("background","#ccc");//a下面文本含有”第“的a元素
  $("li:empty").css("background","#ccc");//li下面不包含子元素或者空文本的li元素
  //相反
  $("li:parent").css("background","#ccc");//li下面包含子元素或者含有文本的li元素
  //但是parent是获取父节点
  $("li").parent();//li的父节点
  $("li").parents();//li的父节点包括html body等
  $("li").parentsUntil("html");//li的父节点和html之间父节点
  $("li:has(.cs-1)").css("background","#ccc");//li下面子元素class含有cs-1的li元素 
  //等价$(li).has('cs-1')
  
  
  //可见性过滤器
  $("li:hidden");//获取属性隐藏的li display=none |  type="hidd" |  visibility:hidden
  $("li:visible");//获取属性可见的li
  
  //子元素过滤器模仿的css伪类
  $("li:first-child");//获取每个父元素ul的第一个子元素li集合
  $("li:last-child");//获取每个父元素ul的最后一个子元素li集合
  $("p:only-child");//获取每个父元素只有一个子元素p集合
  //索引是1开始计算的
  $("li:nth-child(even)");//获取元素li偶数集合
  $("li:nth-child(odd)");//获取元素li奇数集合
  $("li:nth-child(1)");//获取元素li索引第(1-1)个元素集合
  $("li:nth-child(3n)");//获取元素li索引3n元素集合
  $("li:nth-child(3n+1)");//获取元素li索引3n-1元素集合不足会到最前面那个
  
  
  //方法
  $(".cs").is("li");//true 检测li的css是不是.cs
  $(".cs").is($("li"))//true 同上 jq对象
  $(".cs").is($("li").eq(1))//true 同上 jq对象
  $(".cs").is($("li").get(1))//true 同上 DOM对象
  $(".cs").is($("li")[1])//true 同上 DOM对象
  $(".cs").is(function(){
    return $(this).attr("title")="hh";//获取title属性
  })//true 同上 jq对象
  
  $("li").eq(1).hasClass("cs");//true 检测第二个li的css是不是.cs
  $("li").slice(1,3).css("bakground","#ccc");//从第二个选到第三个
  $("li").slice(2).css("bakground","#ccc");//从第三个选到最后
  $("li").slice(0,-2).css("bakground","#ccc");//最后两个不选其他都选
  $("li").slice(2,-2).css("bakground","#ccc");//最后两个前面两个不选其他都选
  $(".cs").find("li").end();//获取上一个元素，可以是父节点点也可以是相邻节点
  $(".two").contents();//子元素包括文本节点
  
  $("li").filter(".cs ,:first,:last-child");//添加多个过滤器灵活性较高
  //$("li").filter("function(){
  //  return $(this).attr("title")="hh";//获取title属性
  //}) //函数获取对象
})

//jQuery.noConflict();//剔除$符所有权
//var $$ = jQuery; //赋值 || var $$ = jQuery.noConflict();