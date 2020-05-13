// 兼容IE8区块元素
(function(){
  var e="abbr,article,aside,audio,canvas,datalist,details,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(','),
   i=e.length;
   while(i--){
    document.createElement(e[i]);
   }
}());
//兼容IE8以下Dom加载完后执行
 function addDomLoaded(fn){
  if(document.addEventListener){ //W3c
    addEvent(document,"DOMContentLoaded",function(){
      fn();
      //获取匿名函数
      // console.log(arguments.callee);
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
/* 
  跨浏览器获取高度宽度类
  实现了IE8及以上和其他浏览器一样效果  
*/

//获取屏幕正文宽度高度对象
function getScroll(){
    return {width: document.body.scrollWidth,height: document.body.scrollHeight}
}
//实际 窗口可视大小 包括滚动条
function getInner(){
  var h = 0;
  var f = document.documentElement.offsetHeight;
  var c = document.documentElement.clientHeight;
  if(typeof window.innerHeight == "undefined" && f - c == 3 ){  //IE8没有底部滚动条时的问题
    h = document.documentElement.offsetHeight -3;
  }else {
    h = window.innerHeight || document.documentElement.offsetHeight;
  }
  return {
    width: window.innerWidth || document.documentElement.offsetWidth,
    height: h
  } 
}
//实际 可视窗口大小(clienwidth+padding+scoll,不包括边框border和外边距)
function getClient(){
  return {
    width: Math.min(document.documentElement.clientWidth,document.body.clientWidth),
    height: Math.min(document.documentElement.clientHeight,document.body.clientHeight)
  }
}
//可视 窗口大小(offsetWidth=width+padding+border，不包括外边距margin ,scroll)
function getOffset(){
  return {
    width: document.body.offsetWidth, //实时变化
    height: document.body.offsetHeight //实时不变化
  } 
} 
//实际窗口大小改变事件
// function setresize = function(fn){
//   for(i=0;i<this.elem.length;i++){
//     var elm = this.elem[i];
//       addEvent(window,"resize",fn())
//     }
//   return this;
// }

/* 窗口滚动条 */

//窗口X,Y滚动条宽度（不含外边距）
//跨浏览器获取滚动条位置
function getScrollWidth(){
  return {
  	right: getInner().width - getClient().width ,
  	bottom: getInner().height - getClient().height  
  }
}
//获取或设置窗口滚动条距顶部高度  
function getScollTop(){
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}
function setScollTop(top) {
  if(typeof document.documentElement.scrollTop != "undefined" ) { 
    document.documentElement.scrollTop = top; 
  }
  else if (typeof document.body.scrollTop != "undefined") {
    document.body.scrollTop = top;
  }
}
//节点绑定body 
function bodyBinding(node){
  addEvent(window,"scroll",function(){
    node.style.top = Math.max(200, window.scrollY) + 'px';
    if(node == false){
      //执行完 fn 移除匿名函数
      removeEvent(window,"scroll",arguments.callee);
    }
  })
}
/*
//给body添加粘性定位
onscroll="document.getElementById('get-top').style.top = Math.max(100, window.scrollY) + 'px'"
<script>
    function snap(destination) {
        if (Math.abs(destination - window.scrollY) < 3) {
            scrollTo(window.scrollX, destination);
        } else if (Math.abs(destination - window.scrollY) < 200) {
            scrollTo(window.scrollX, window.scrollY + ((destination - window.scrollY) / 2));
            setTimeout(snap, 20, destination);
        }
    }
    var timeoutId = null;
    addEventListener("scroll", function() {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(snap, 200, parseInt(document.getElementById('snaptarget').style.top));
    }, true);
 </script>
*/
//获取或设置窗口底部滚动条 
function getScollBottom(){
  return document.documentElement.scrollLeft || document.body.scrollLeft;
}
function setScollBottom(left) {
   if(typeof document.documentElement.scrollLeft  != "undefined") { 
     document.documentElement.scrollLeft = left; 
   }
   else if (typeof document.body.scrollLeft  != "undefined") {
     document.body.scrollLeft = left; 
   }
}                                                                                                                                                                                                                                                 
//显示隐藏窗口滚动条 第一个传X,Y轴,第二个传状态 true 开 或者 false 隐藏
function setScrollView(direction,state){
  if(direction =="X" || direction =="x"){
    if(state){
      document.body.parentNode.style.overflowX = "auto";
    }else{
      document.body.parentNode.style.overflowX = "hidden";
    }
  }else if(direction =="Y" || direction =="y"){
    if(state){
      document.body.parentNode.style.overflowY = "auto";
    }else{
      document.body.parentNode.style.overflowY = "hidden";
    }
  }
}
/* 跨浏览器CSS规则类  */
//获取style
function getStyle(elem ,attr){
  var value;
  if(typeof window.getComputedStyle !="undefined"){  //W3C
    value = window.getComputedStyle(elem,null)[attr];//转化为number忽略字符串
  }else if(typeof elem.currentStyle !="undefined"){ //IE
    value = elem.currentStyle[attr];
  }
  return value;
}
//获取某元素到顶部的距离
function elemOffsetTop(elem){
  var top = elem.offsetTop;
  var parent = elem.offsetParent;
  while(parent !=null){ //兼容IE
    top += parent.offsetTop;
    parent = parent.offsetParent;
  }
  return top;
}
//判断clss是否存在
function hasClass(elem,className){
  return elem.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));
}

//添加Link 或者 style的CSS规则  
function insertRule(sheet,selectorText,cssText,position){  //节点 名字 css内容  位置
    if(typeof sheet.insertRule != "undefined"){  //W3C
        sheet.insertRule(selectorText+'{'+cssText+'}',position);//谷歌有溢出问题
    }else if (typeof sheet.addRule != "undefined"){
        sheet.addRule(selectorText,cssText,position);
    }
}
//移除Link 或者 style的CSS规则(按行删除) 
function deleteRule(sheet,index){  //节点 第几行
    if(typeof sheet.deleteRule != "undefined"){  //W3C
        sheet.deleteRule(index);
    }else if (typeof sheet.removeRule != "undefined"){
        sheet.removeRule(index);
    }
}
//表单序列化
$().extend('serialize', function () {
	for (var i = 0; i < this.elem.length; i ++) {
		var form = this.elem[i];
		var parts = {};
    
		for (var k = 0; k< form.elements.length; k ++) {
			var filed = form.elements[k];
			switch (filed.type) {
				case undefined : 
				case 'submit' : 
				case 'reset' : 
				case 'file' : 
				case 'button' : 
					break;
				case 'radio' : 
          if(filed.checked) parts[filed.name] = filed.checked;
          break;
				case 'checkbox' : 
          if(filed.checked) parts[filed.name] = filed.checked;
          break;
				if (!filed.selected) break;
				case 'select-one' : 
				case 'select-multiple' :
					for (var j = 0; j < filed.options.length; j ++) {
						var option = filed.options[j];
						if (option.selected) {
							var optValue = '';
							if (option.hasAttribute) {
								optValue = (option.hasAttribute('value') ? option.value : option.text);
							} else {
								optValue = (option.attributes('value').specified ? option.value : option.text);
							}
							parts[filed.name] = optValue; 
						}
					}
					break;
				default :
					parts[filed.name] = filed.value;
			}
		}
		return parts;
	}
	return this;
});


/*
ajax({
      type : "POST | GET | post | get",
      url : "demo2.php",
      data : {
          "name" : "小沫",
          "age" : "19"
      },
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
  });
*/
//封装Ajax(会默认传递GET,time参数解决缓存问题)
function ajax(obj){
  var xhr = new XMLHttpRequest();
  var data = params(obj.data,"&")+"&time="+new Date().getTime();
  if(obj.type === "get" || obj.type === "GET"){
    obj.url += "?"+ data;//编码中文解决IE中文问题,和缓存问题
  }
  if(obj.run === true){
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4){
        call();
      }else {
        obj.process(xhr.readyState);
      }
    }
  }
  xhr.open(obj.type,obj.url,obj.run);
  if(obj.type === "post" || obj.type === "POST"){
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(data);
  }else {
    xhr.send(null);
  }
  if(obj.run === false){
    call();
  }
  function call(){
    if(xhr.status == 200){
      obj.success(xhr.responseText);//回调传参
      return 200;
    }else{
      obj.error(xhr.status);
    }
  }
};
 
/* 数组类  */
//名值对encodeURIComponent编码后按sign转换成字符串
function params(data,sign){
    var arr = [];
    for(var it in data){
        arr.push(encodeURIComponent(it) + "=" +encodeURIComponent(data[it]));//放入数组
    }
    return arr.join(sign);//按sign转换成字符串
}
//判断某一个值是不是在某个数组里面
function inArray(array,value) {
  for(var i in array){
    if(array[i] === value) return true;
  }
  return false;
}

/* String类  */

//时间格式化
Date.prototype.format = function(format)
{
  var o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(),    //day
    "h+" : this.getHours(),   //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
    "S" : this.getMilliseconds() //millisecond
   }
  if(/(y+)/.test(format)) 
    format=format.replace(RegExp.$1,
      (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(format))
   format = format.replace(RegExp.$1,
    RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
  return format;
}
//跨浏览器获取innerText过滤HTMl标签
function getInnerText(node){
  return (typeof node.textContent == "string") ? node.textContent : node.innerText;
}
//跨浏览器设置innerText过滤HTMl标签
function setInnerText(node,str){
  if(typeof node.textContent == "string"){
    node.textContent = str;
  }else {
    node.innerText = str;
  }
}
//删除前后空格
function trim(str){
  return str.replace(/(^\s*)|(\s*$)/g,"");
}
//随机数
function radomNumber(max,min){
  return Math.floor(Math.random()*(max-min+1)+min);
}
//获取某个节点的上个节点索引
function prevIndex(current,parent){
  var length =parent.children.length;
  if(current==0) return length-1;
  return current-1 ;
}
//获取某个节点的下个节点索引
function nextIndex(current,parent){
  var length = parent.children.length;
  if(current==(length-1)) return 0;
  return current+1 ;
}
/* 锁定、解除滚动条 */
//状态 true 开 或者 false 解除
$().extend("scrollLock",function(state){
  //锁定滚动条 
  if(state){
    var t = getScollTop();
    var b = getScollBottom();
    this.Event("scroll",function(){
      setTimeout(function(){
        setScollTop(t);
        setScollBottom(b);
      },100);//延迟100毫秒更好
   })
   }else {
    this.Event("scroll",state);
  }
  return this;
});
/* 遮挡层锁屏功能 */

function predef(e){
  e.preventDefault(); 
}
//第一个传节点,第二个传状态 true 开 或者 false 隐藏
$().extend("ViewLock",function(state){
  elem = this.elem[0];
  if(state){
  	elem.style.height = getInner().height + "px";
  	elem.style.width = getClient().width + "px";
  	elem.style.display = "block";
//     //禁用鼠标,阻止默认行为
    addEvent(elem,"mousedown",predef);
    addEvent(elem,"mouseup",predef);
    addEvent(elem,"selectstart",predef);
  }else {
    removeEvent(elem,"mousedown",predef);
    removeEvent(elem,"mouseup",predef);
    removeEvent(elem,"selectstart",predef);
  	elem.style.display = "none";
  }
  return this;
});

/*
  元素window窗口可视托拽
  先点击
  选中移动
  抬起鼠标，停止移动
  点击某个问题，用odiv即可，move和up全局区域 
  targe //可拖动节点
*/
$().extend("drag",function(tags,state){
  var b = this;

  if(state){
    for(i=0;i<this.elem.length;i++){
    		var _this = this.elem[i]; 
    		addEvent(_this ,"mousedown" , function(e){
    			//判断是不是空白区块
    			if(trim(_this.innerHTML).length == 0) e.preventDefault();
    			//计算X坐标和区块距离差
    			var diffX = e.clientX - _this.offsetLeft;
    			var diffY = e.clientY - _this.offsetTop;
    			//可移动区域
    			var diffHeight = getInner().height - _this.offsetHeight;
    			var diffWidth = getClient().width - _this.offsetWidth;
    			//可拖拽区域
    			var flag = false; // 默认不可以
    			for(var i=0;i < tags.length;i++){
    				if(e.target == tags[i]){
    					flag = true; //只要一个就可以了
    					break;
    				}
    			}
         
    			if(flag){ //可拖动区域的子节点
    				addEvent(document,"mousemove" , move);
    				addEvent(document,"mouseup" , up );
    			}else{
    				removeEvent(document, "mousemove", move);
    				removeEvent(document, "mouseup", up);
    			}
    			function move(e){
    				var left = e.clientX-diffX;
    				var top = e.clientY-diffY;
    				//防止区块左右溢出
    				if(left < 0 ){ left = 0 }
    				else if(left > diffWidth){ left  = diffWidth }
    				//防止区块上下溢出
    				if(top < 0 ){top = 0 }
    				else if(top > diffHeight){ top  = diffHeight }
    				_this.style.left = left + "px";
    				_this.style.top = top + "px";
    				
    				//锁定鼠标IE
    				if(typeof _this.setCapture !="undefined"){
    					_this.setCapture();
    				}
    			}
    			function up(e){
    				removeEvent(document, "mousemove", move);
    				removeEvent(document, "mouseup", up);
    				//移除鼠标锁定IE
    				if(typeof _this.releaseCapture  != "undefined"){
    					_this.releaseCapture();
    				}
    			} 
    	})
    }
  }
  return this;
});
//设置移动动画(同步和列队动画) css , 起点 ,增加点 ,结束点,间隙时间
/*
列队动画
$("#id").animate({
  attr : "x", y ,w ,h ,o 透明度 或者任意CSS属性 可选 默认 x
  start: 176, //起始值 可选 默认style值
  step : 20,  //每次增加值 可选 默认20 
  target: 300, //目标值必选
  stime : 30 , //运动间隔时间 可选 默认30
  speed： 6,//缓冲速度 可选 默认6
  type ：1 || 0 缓冲开关 可选 默认开启 true
  fn :  //列队动画函数
})
同步动画 
$("#id").animate({
  start: 176, //起始值 可选 默认style值
  step : 20,  //每次增加值 可选 默认20 
  stime : 30 , //运动间隔时间 可选 默认30
  speed： 6 ,//缓冲速度 可选 默认6
  type ：1 || 0 缓冲开关 可选 默认开启 true
  mul ： { 
    //CSS属性 :  //target目标值 
    x 300, 
    y 200,
    w 60,
    h 50,
    o 60
    //任意CSS属性 可选 默认 x
  },
  fn :  //列队动画函数
})
*/
$().extend("animate",function(obj){
  for(var i=0;i< this.elem.length;i++){
    //参数赋值变量
    var node = this.elem[i];//节点
    var attr = obj["attr"] == "o" ? "opacity" : obj["attr"] ;//动画名
    var target = obj["target"];//目标量
    var mul = obj["mul"];
    if(mul == undefined){
      var mul = {}
      mul[attr] = target;//添加参数
    }
    var step = obj["step"] != undefined ? obj["step"] : 20;//默认每次增加值20
    var defLong = getDelong();
    var start = obj["start"] != undefined ? obj["start"] : defLong;//默认起始位置
    
    if(start > target){  //开始值和目标值来判断要咋样运动
      step = -step;
    }
    var speed = obj["speed"] != undefined ? obj["speed"] : 6; //默认缓冲速度6
    var type = obj["type"] == 0 ? "constant" : obj["type"] == 1 ? "buffer" : "buffer";//默认缓冲 1
    var stime = obj["stime"] != undefined ? obj["stime"] : 30; //默认30毫秒
    
    clearInterval(node.timer);//防止多次点击加速,以及动画冲突
    node.timer = setInterval(function(){
      var flag = true;//变量设置是否停止
      for(ai in mul){
      	attr = ai == "x" ? "left" : ai =="y" ? "top" : 
               ai == "w" ? "width" : ai == "h" ? "height" :
               ai == "o" ? "opacity" : ai != undefined ? ai : "left";//默认left;
      	target=mul[ai];
        defLong = getDelong();
        //缓冲
        if(type == "buffer") step = (target-defLong)/speed;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);//防止突兀
        //判断是否执行
        if(attr == "opacity"){
          if(target == defLong && step ==0){
          	setOpactiy(target);
          }else if(step > 0 && (target-defLong) < step || step < 0 && (target-defLong) > step){
            setOpactiy(target+step);
          }else{
            setOpactiy((defLong+step));
          }
          if(step !=0) flag = false;
        }else{
          if(target == defLong && step ==0){
          	setTarget(target);
          }else if(step > 0 && (target-defLong) < step || step < 0 && (target-defLong) > step){
            setTarget(target+step);
          }else{
            setTarget((defLong+step));
          }
          if(step !=0) flag = false;
        }

      };
      if(flag){
        if(obj["fn"] && typeof obj["fn"]()==Object) obj["fn"]();
      	clearInterval(node.timer);
      }
    },stime);
    function setTarget(tar){ //其他css
      node.style[attr] = tar + "px";
    }
    function setOpactiy(tar){ //透明度
    	node.style.opacity = parseFloat(tar/100);
      node.style.filter = "alpha(opacity="+parseInt(tar)+')';
    }
    function getDelong(){ //获取当前节点css
      return attr == "opacity" ? parseInt(parseFloat(getStyle(node,"opacity")) * 100) : parseInt(getStyle(node,attr));
    }
  }
  return this;
});


// b.resize(function(elem){
//             	var height= getClient().height - elem[i].offsetHeight;
//             	var width= getClient().width - elem[i].offsetWidth;
//             	if(elem[i].offsetLeft > width){
//             			elem[i].style.left = width+"px";
//             	}
//             	if(elem[i].offsetTop > height){
//             			elem[i].style.top = height+"px";
//             	}
//             },true)