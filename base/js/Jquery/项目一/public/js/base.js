//基于tool.js
//连缀
//创建对象
var $ = function(args){
   return new Base(args);
}

function Base(args){
  //创建一个数组，存放对象
  this.elem = [];
  this.objt =[];//放事件
  if(typeof args =="function"){
    addDomLoaded(args);
  }else if(typeof args == "string"){  //一个字符串
    //Css模拟
    if(args.indexOf(" ") != -1){ //判断是不是是连写
      var elems = [];//字符串放进去 / #id | .clss | p
      var parent = [];//放父节点
      elems = args.split(" ");//按空格分开 /[#id,.class,p]
      for(var i = 0; i < elems.length ;i++){  // k=1
        //获取第一个之后的字符
       
        switch (elems[i].charAt(0)){  //获取 # . p
          case "#" :   //支持多ID #id1 #id2。。。。
                this.getId(elems[i].substring(1));//this.elem里面就全部有了 
              break;
            case "." :  //如果没有id getClass里面会自己判断
              parent = this.elem || document;//支持多ID下的class 如 #id1 #id2 .class 会把id1,id2里面的class都获取到
              this.elem =[];//清空ID放class
              if(parent.length == 0){
                this.getClass(elems[i].substring(1));
              }else{
                for(var n= 0;n < parent.length; n++){  
                	//调用getclas把节点一个添加到this.elem
                	this.getClass(elems[i].substring(1),parent[n]);
                }
              }
              break;
            default : //如果没有id 或者class之一
              parent = [];
              parent = this.elem;//里卖弄的 ID 或 class 或全部
              this.elem =[];//清空ID 或 class 或全部
              //调用getTagName把节点一个添加到this.elem
              for(var k= 0;k < parent.length; k++){  
                this.getTagName(elems[i],parent[k]);
              }
          }
      }
    } else {  //单个
      switch (args.charAt(0)){  //获取 # . p
        case "#" :
              this.getId(args.substring(1));
            break;
          case "." :
              this.getClass(args.substring(1));
            break;
          default :
              this.getTagName(args); //默认没有前缀
        }
      }
  }else if(typeof args == "object"){ //一个对象
    if(args != undefined) {  //对象要这样写
      this.elem.push(args); //如果有对象传过来就直接绑定这个节点
    }
  } 
};
//加载DOM
Base.prototype.ready = function(fn){
  addDomLoaded(fn);
}
//获取ID节点
Base.prototype.getId = function(id){
  this.elem.push(document.getElementById(id));
  return this.elem[0];
};
//获取Class节点
Base.prototype.getClass = function(className,parent){
  
  if(arguments.length  == 0){
  	return this.elems
  }
  var node = null;
  var elems = [];
  if(parent != undefined ){ //父节点为空自判断
      node =  parent;
  }else{
      node = document;
  }
  var all = node.getElementsByTagName("*");
  for(var i = 0;i<all.length;i++){
      if((new RegExp('(\\s|^)'+className+'(\\s|$)')).test(all[i].className))//判断有没有 IE8以上可以indexOf()
      elems.push(all[i]);
  }
  for(var k=0; k < elems.length;k++){
    this.elem.push(elems[k]);//单个的添加进去
  }
return elems;
};
//获取第position个name节点
Base.prototype.getName = function(name,position){
  this.elem.push(document.getElementsByName(name)[position]);
  return this.elem[0];
};
//获取所有节点
Base.prototype.getTagName = function(tagName,parent){
  if(arguments.length == 0){
    return this.elem;
  }
  var node = null;
  var elems = [];//临时数组放节点
  if(parent != undefined){ //父节点为空自判断
      node =  parent;
  }else{
      node = document;
  }
  var tags =  node.getElementsByTagName(tagName);
  for(var i=0;i< tags.length;i++){
      elems.push(tags[i]);
  }
  for(var k=0; k < elems.length;k++){
    this.elem.push(elems[k]);//添加进去
  }
  return elems;
};
//获取某组节点数量
Base.prototype.length = function(){
  return this.elem.length;
}

//获取某个节点
Base.prototype.eq = function(num){
  var elemt = this.elem[num];
  this.elem = [];//清空
  this.elem[0] = elemt;//赋值
  return this;
};
//返回首个节点
Base.prototype.first = function(){
  return this.elem[0];
};
//返回最后一个节点
Base.prototype.last = function(){
  return elem[this.elem.length-1];
};
//获取父节点
Base.prototype.getparent = function(){
  var elem = this.elem[0].parentNode;
  this.elem = [];//清空
  this.elem[0] = elem;//赋值
  return this;
};
//获取子节点
Base.prototype.getChildren = function(num){
  var elem = this.elem[0].children[num];
  this.elem = [];//清空
  this.elem[0] = elem;//赋值
  return this;
}
//获取同级上个节点 兼容IE8以下
Base.prototype.getPrev = function(){
  if(this.elem[0].previousElementSibling){  //IE9以下不支持
  	var elem = this.elem[0].previousElementSibling;
  	if(elem == null) throw new Error("找不到下个节点");
  }else {
  	var elem = this.elem[0].previousSibling;
  	if(elem==null) throw new Error("找不到上个节点");
  	if(elem.nodeType==3) this.getPrev();
  }
  this.elem = [];//清空
  this.elem[0] = elem;//赋值
  return this;
}
//获取同级下个节点 兼容IE8以下
Base.prototype.getNext = function(){
  if(this.elem[0].nextElementSibling){  //IE9以下不支持
    var elem = this.elem[0].nextElementSibling;
    if(elem==null) throw new Error("找不到下个节点");
  }else {
    var elem = this.elem[0].nextSibling;
    if(elem==null) throw new Error("找不到下个节点");
    if(elem.nodeType==3) this.getNext();
  }
  this.elem = [];//清空
  this.elem[0] = elem;//赋值
  return this;
}
//CSS属性
//添加ClassName
Base.prototype.addClass = function(className){
  for(var i=0;i < this.elem.length;i++){
      if(!hasClass(this.elem[i],className))
       this.elem[i].className += " "+className;
  }
  return this;
};
//移除Class
Base.prototype.removeClass = function(className){
  for(var i=0;i < this.elem.length;i++){
      if(hasClass(this.elem[i],className))
          this.elem[i].className = this.elem[i].className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),'');
  }
  return this;
};
//获取css属性,修改css属性
Base.prototype.css = function(attr,value){
  for(var i =0;i<this.elem.length;i++){
    if(arguments.length == 1){
       return getStyle(this.elem[i],attr);//有px
    }
    this.elem[i].style [attr] = value;
  }
  return this;
};

//获取html值,设置innerHTML值,
Base.prototype.html = function(str){
  for(var i =0;i<this.elem.length;i++){
      if(arguments.length == 0){
         return this.elem[i].innerHTML;//过滤了html标签
      }
      this.elem[i].innerHTML = str;
      //this.elem[i].innerHTML = str;
  }
  return this;
};
//过滤获取
Base.prototype.text = function(str){
  for(var i =0;i<this.elem.length;i++){
      if(arguments.length == 0){
         return getInnerText(this.elem[i]);//过滤了html标签
      }
      setInnerText(this.elem[i],str);
      //this.elem[i].innerHTML = str;
  }
  return this;
};
//获取某节点属性
Base.prototype.attr = function(attr,value){
  for(var i = 0;i<this.elem.length;i++){
    if(arguments.length ==1){
      return this.elem[i].getAttribute(attr);//这样可以获取自己定义标签的属性
    }else if(arguments.length == 2){
      this.elem[i].setAttribute(attr,value);//设置
    }
  }
  return this;
};
//获取某个节点在整个节点数组是第几个索引
Base.prototype.index = function(){
  
  var children = this.elem[0].parentNode.children;//父节点
  for(var i=0;i< children.length ;i++){
    if(this.elem[0] == children[i]) return i;
  }
};

//设置表单字段元素
Base.prototype.form = function(name){
  for(var i =0;i<this.elem.length;i++){
  	this.elem[i] = this.elem[i][name];
  }
  return this;
};
//设置获取透明度
Base.prototype.opacity = function(num){
  if(arguments.length == 0){
  	var v = [];
  	if(this.elem.length == 1){return this.elem[0].style.opacity;}
  	for(var i =0;i<this.elem.length;i++){
  		v.push(this.elem[i].style.opacity);
  	}
  	return v;//多个返回数组
  }else{
    for(var i =0;i<this.elem.length;i++){
    	this.elem[i].style.opacity = num /100;
    	this.elem[i].style.filter = "alpha(opacity="+num+')';
    }
    return this;
  }
};


//获取value值,设置value值
Base.prototype.value = function(str){
  if(arguments.length == 0){
    var v = [];
    if(this.elem.length == 1){return this.elem[0].value;}
    for(var i =0;i<this.elem.length;i++){
      v.push(this.elem[i].value);
    }
    return v;//多个返回数组
  }else{
    for(var i =0;i<this.elem.length;i++){
      this.elem[i].value = str;
    }
    return this;
  }
};
//设置显示隐藏
Base.prototype.show = function (state){
  for(var i =0;i<this.elem.length;i++){
     if(state){
       stste = "block";
     }else {
       stste = "none";
     }
      this.elem[i].style.display = stste;
  }
  return this;
}
//切换器
Base.prototype.toggle = function(){
  for(var i = 0;i<this.elem.length;i++){
    (function(node,args){
      var count = 0;
      addEvent(node,"click",function(){  //给点击事件添加
      	args[count++ % args.length].call(this);//运行函数 算法 0 1 -> 0 1 -> 0 1
      });
    })(this.elem[i],arguments);//接传过来的参数
  }
  return this;
}

//单属性事件函数发生器等
Base.prototype.Event = function (obj,fn){
  if(fn != false){
    var name = fn; //给函数写名字
    for(var i = 0;i<this.elem.length;i++){
      addEvent(this.elem[i],obj,name);
    }
    this.objt.push(name);//把函数都放进事件数组方便移除
  }else { //移除事件
    for(var i = 0;i< this.objt.length;i++){
      var name = this.objt[i];
      for(var k = 0;k<this.elem.length;k++){
        removeEvent(this.elem[k],obj,name);
      }
    }
  }
  return this;
}
//onclick点击事件
Base.prototype.click = function(fn){
	this.Event("click",fn);
  return this;
}
//鼠标移入移出事件
Base.prototype.hover = function (over,out){
	this.Event("mouseover",over);
	this.Event("mouseout",out);
	return this;
}
//滚动条滚动事件
Base.prototype.scroll = function (fn){
  this.Event("scroll",function(){
    setTimeout(function(){
    	fn();
    },100);//延迟100毫秒更好
  });
  return this;
}
//焦点获得失去事件
Base.prototype.focus= function(over,out){
  this.Event("focus",over);
  this.Event("change",out);
  return this;
}
//oninput此事件会在value属性值发生改变时触发，通过js改变value属性值不会触发此事件
Base.prototype.input= function(fn){
	this.Event("input",fn);
  return this;
}
//调用了 tool.js
//实际窗口大小改变事件 true 或者事件关闭 false
Base.prototype.resize = function(fn){
  this.Event("resize",fn);
  return this;
}
//设置元素居中可视化窗口基于resize
Base.prototype.center = function(state){
  if(state){
    for(var i = 0;i<this.elem.length;i++){
    	var height = this.elem[i].offsetHeight;
    	var width = this.elem[i].offsetWidth;
    	var top = (getInner().height - height)/2;
    	var left = (getClient().width - width)/2;
    	this.elem[i].style.top = top +"px";
    	this.elem[i].style.left = left +"px";
    }
  }
  return this;
}

//插件入口(名字和函数)
Base.prototype.extend = function(name,fn){
  Base.prototype[name] = fn;
}