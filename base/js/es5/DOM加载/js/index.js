//现代DOM加载（加载DOM树结构后就加载）IE9以上 ，可以再iframe加载之前
// addEvent(document,"DOMContentLoaded",function(){
//   
// });
//IE6/7/8模拟DOM加载
// document.write('<script id="ie_loaded" defer="defer" src="javascript:void(0)"></script>')
// var is_loaded = document.getElementById("ie_loaded");
// //判断是否完全加载完毕DOM
// is_loaded.onreadystatechange = function (){
//   console.log(this.readyState);
//   //loading loaded complete(加载完毕)并且后面才加载完图片
//   //缺陷 如果有iframe标签会加载
// }

// //使用doScroll（可以解决iframe问题）
//  var timer = null;
//  timer = setInterval(function(){
//    try{
//    	 document.documentElement.doScroll("left");
//      console.log("加载OK")
//    }catch(e){}
//  })
 
 //兼容IE8以下Dom加载完后执行

 function addDomLoaded(fn){
  if(document.addEventListener){ //W3c
    addEvent(document,"DOMContentLoaded",function(){
      fn();
      //获取匿名函数
      console.log(arguments.callee);
      //执行完 fn 移除匿名函数
      removeEvent(document,"DOMContentLoaded",arguments.callee);
    });
  }else { //兼容IE8以下
    var isReady = false;
    var timer  = null;
    function doReady(fn){
    	if(timer) clearInterval(timer);
    	if(isReady) return;
    	isReady = true;
    	fn();
    }
    timer = setInterval(function(){
      try{
        document.documentElement.doScroll("left");
        doReady(fn);
      }catch(e){}
    },1);
  }
 }