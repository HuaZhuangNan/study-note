$(function(){ 
  //动态创建节点
  var box = $('<div class="b">节点</div>');//创建节点
  
  //内部插入 都可以函数
  //$("body").append(box);//内部后面添加节点 prepend 相反前面添加
//   $("div").append(function(index,html){
//     return '<div class="b">节点</div>'+index+html;
//   });
  //$("string").appendTo("#box2");//移入到节点里面后面去 prependTO 相反前面
  
  //外部操作 都可以函数
  //$("#box").after(box);//添加同级后面
 //$("#box").before(box);//添加同级前面
  //$("string").insertAfter("#box2");//移到节点同级后面去 insertBefore 相反前面


  //包裹节点 
  //$("#box2").wrap("<b>外层添加</b>");//就是把节点包裹在里面 function(index)函数
  //$("#box2").wrap("<b/>");//会自动
  //$("#box2").wrap("<b><em/></b>");//多个节点
  //$("#box2").wrap($("string").get(0));
  //$("#box2").wrap(document.createElement("b"));
  //$("div").wrapAll("<b><em/></b>");//把节点全部包裹过来
  //$("div").wrapAll(document.createElement("b"));//把节点全部包裹过来
  
  //$("#box").wrapInner("<b><em/></b>");//把节点所有子元素包裹过来  function(index)函数
  
  //移除包裹
  //$(".pp").eq(0).unwrap();//移除包裹第一层
  
  //复制节点
//   $("string").click(function(){
//     console.log("点击了");
//   })
  //复制节点并且复制事件
  //$("string").clone(true).appendTo("body");
  //var ff = $("string").eq(0).remove();//移除节点不保留事件行为 并且返回这个节点
  //console.log(ff);
  
  //var ff = $("string").eq(0).detach();//移除节点保留事件行为 并且返回这个节点和行为
  //console.log(ff);
  
  //清空标签里面的内容
  //$("#box").empty();
  
  //替换节点
  //$("#box").replaceWidth('<span>DOM</span>');//替换原来事件会消失
  //等价于('<span>DOM</span>').replaceAll($("#box"));//替换原来事件会消失
})