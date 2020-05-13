
//跨浏览器添加事件绑定,一切以对象为基准
function addEvent(node,obj,fn){
  if(typeof document.addEventListener != "undefined"){
    node.addEventListener(obj,fn,false);//关闭捕获W3C IE9及以上
  }else {  //传统代替IE8及以下
  
    //创建一个存放事件的哈希表（散列表）
    if(!node.events) node.events={};
    //创建一个存放事件的 
    if(!node.events[obj]){
      addEvent.ID = 1;//给事件添加计数器
      node.events[obj] = [];
      //第一次先存储下
      node.events[obj][0] = fn;
    }else {
      //屏蔽同一个相同函数
      if(addEvent.equal(node.events[obj] , fn)) return false;
      //第二次开始用事件计数器来存储
      node.events[obj][addEvent.ID++] = fn;
    }
    //执行事件处理函数
    node["on"+obj] = addEvent.exec;
  }
  
  // console.log(obj.events[type].length);
}
//执行事件处理函数
addEvent.exec = function(event){
  var e = event || addEvent.fixEvent(window.event);
  var es = this.events[e.type];
  for(var i in es){
     es[i].call(this,e);//this传递回去
  }
}
//查找同一个注册函数
addEvent.equal = function(es , fn){
  for(var i in es){
    if(es[i] == fn){
      return true; //存在
    }
  }
  return false; //不存在
}
//跨浏览器删除事件
function removeEvent(node,obj,fn){
  if(typeof node.removeEventListener != "undefined"){
  	node.removeEventListener(obj,fn,false);
  }else if(node.events) {
    for(var i in node.events[obj]){
      if(node.events[obj][i]== fn){
      	delete node.events[obj][i]; //删除事件
      }
    }
  }
}
//把IE中常用的EVent对象配对到W3C中
addEvent.fixEvent = function(event){
  //阻止默认行为
  event.preventDefault = addEvent.fixEvent.preventDefault;
  //冒泡处理
  event.stopPropagation = addEvent.fixEvent.stopPropagation;
  //target获取触发对象
  event.target = event.srcElement;
  return event;
}
//IE阻止默认行为
addEvent.fixEvent.preventDefault = function(){
  this.returnValue = false;
}
//IE取消冒泡
addEvent.fixEvent.stopPropagation = function(){
  this.cancelBubble = true;
}


/*IE8及以下内存泄漏，顺序问题）事件添加
if(typeof obj.attachEvent != "undefined"){
    obj.attachEvent("on"+type,function(){
      fn.call(obj,window.event);//兼容IE对象冒充 this,第二个参数传递event
    });//IE倒序
  }
  事件移除
  if(typeof obj.delachEvent != "undefined"){
  	obj.delachEvent("on"+type,fn);
  }
*/