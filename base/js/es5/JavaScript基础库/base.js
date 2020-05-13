

//连缀

//创建对象
var $ = function(){
   return new Base();
}
//获取节点
function Base(){
    //创建一个数组，存放对象
    this.elem = [];
    //获取ID节点
    this.getId = function(id){
        this.elem.push(document.getElementById(id));
        return this;
    };
    //获取name节点
    this.getName = function(name,position){
        this.elem.push(document.getElementsByName(name)[position]);
        return this;
    };
    //获取所有节点
    this.getTagName = function(tagName){
        var tags =  document.getElementsByTagName(tagName);
        for(var i =0;i<tags.length;i++){
            this.elem.push(tags[i]);
        }
        return this;
    };
    //获取Clss节点
    this.getClass = function(className,idName){
        var node = null;
        if(arguments.length == 2){
            node =  document.getElementById(idName);
        }else{
            node = document;
        }
        var all = node.getElementsByTagName("*");
        for(var i = 0;i<all.length;i++){
            if(all[i].className == className)
            this.elem.push(all[i]);
        }
        return this;
    };
    //获取某个节点
    this.getElement = function(num){
        var elem = this .elem[num];
        this.elem = [];//清空
        this.elem[0] =elem;//赋值
        return this;
    };
};
//添加Class
Base.prototype.addClass = function(className){
    for(var i=0;i < this.elem.length;i++){
        if(!this.elem[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)')))
         this.elem[i].className += " "+className;
    }
    return this;
};
//移除Class
Base.prototype.removeClass = function(className){
    for(var i=0;i < this.elem.length;i++){
        if(this.elem[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)')))
            this.elem[i].className = this.elem[i].className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),'');
    }
    return this;
};
//添加Link 或者 style的CSS规则
Base.prototype.addRule = function (num,selectorText,cssText,position){
    var sheet = document.styleSheets[num];
    if(typeof sheet.insertRule != "undefined"){
        sheet.insertRule(selectorText+'{'+cssText+'}',position);//谷歌有溢出问题
    }else if (typeof sheet.addRule != "undefined"){
        sheet.addRule(selectorText,cssText,position);
    }
    return this;
};
//移除Link 或者 style的CSS规则(按行删除)
Base.prototype.removeRule = function (num,index){
    var sheet = document.styleSheets[num];
    if(typeof sheet.deleteRule != "undefined"){
        sheet.deleteRule(index);
    }else if (typeof sheet.removeRule != "undefined"){
        sheet.removeRule(index);
    }
    return this;
};
//获取css属性,修改css属性
Base.prototype.css = function(attr,value){
    for(var i =0;i<this.elem.length;i++){
        if(arguments.length == 1){
            if(typeof window.getComputedStyle != "undefined"){  //W3C
                return window.getComputedStyle(this.elem[i],null)[attr];
            }else if(typeof this.elem[i].currentStyle != "undefined"){  //IE
                return this.elem[i].currentStyle[attr];
            }
        }
        this.elem[i].style[attr] = value;
    }
    return this;
};

//获取html值,设置innerHTML值,
Base.prototype.html = function(str){
    for(var i =0;i<this.elem.length;i++){
        if(arguments.length == 0){
           return this.elem[i].innerHTML;
        }
        this.elem[i].innerHTML = str;
    }
    return this;
};
//获取value值,设置value值
Base.prototype.value = function(str){
    for(var i =0;i<this.elem.length;i++){
        if(arguments.length == 0){
           return this.elem[i].value;
        }
        this.elem[i].value = str;
    }
    return this;
};
//click事件
Base.prototype.click = function(fn){
    for(var i =0;i<this.elem.length;i++){
        this.elem[i].onclick = fn;
    }
    return this;
}
//下拉菜单