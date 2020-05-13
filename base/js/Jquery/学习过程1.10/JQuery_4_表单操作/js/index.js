$(function(){ 
  //表单选择器
  
  //常规的
  $("input").size();//2个
  $("input[type=password]").val();
  $("input[name=pass]").val();
  
  //JQuery的
  $(":input").size();//所有的包括input textarea select button 标签
  
  $(":text").size();//type=text
  $(":password").size();//type=password
  $(":password[name=pass]").val();//type=password
  $(":radio").val();//type=radio 单选框 未勾选或勾选 默认value on
  $(":checkbox").val();//type=checkbox  未勾选或勾选 默认value on
  $(":submit").val();//
  $(":reset").val();
  $(":image").val();//type=
  $(":button").val();
  $(":file").val();//type=
  $("form :hidden").val();//type= 最好限定范围不然不一样的结果
  
  
  //表单过滤器
  $("form :enabled").size();//type= 最好限定范围不然不一样的结果 可用元素
  $("form :disabled").size();//不可用元素
  $("form :cheacked").size();//size 0 | 更多 选定元素 选定返回元素 单复选框 
  $("form :selected").size();//下拉菜单元素 返回option 默认选第一个 如果selected 添加 multiple属性
})