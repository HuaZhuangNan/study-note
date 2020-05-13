

addEvent(window,"load",function(event){
    var fm = document.getElementById("myForm");
    //console.log(fm.elements);//表单控件集合

    //选择框脚本
    var city  = fm.elements["city"];
    var info  = fm.elements["info"];
    console.log(city);
    //移动顺序
    //获取顺序
    console.log(city.selectedIndex);
    console.log(city.options[0].index);

    var option = city.options[1];//得到南京
    city.insertBefore(option,city.options[option.index -1]);//把南京向上移动一个位置

});

/*    city.multiple = false;//关闭多选
    //city.size = 2;//显示为二
    console.log(city.options.length);//个数
    console.log(city.type);//select-one 单行 select-multiple 多行;
    //如果value没有的时候，IE返回为空字符串，其他浏览器返回text值
    console.log(city.options[0].value+ "的值为" + city.options[0].text);//第一个选择的值
    //使用标准DOM 也可以获取(不建议表单中使用标准DOM)
    //而且HTML DOM兼容性更好，而且DOM不会获取到改变后的值

    console.log(city.options[0].firstChild.nodeValue);//第一个子节点的text值

    //获取值
    addEvent(city,"change",function(){
        console.log(this.selectedIndex); //得到索引值
        console.log(this.options[this.selectedIndex].value+ "的值为" + this.options[this.selectedIndex].text);
        //判断选择是不是正确
        if (city.options[2].selected) {
            console.log("默认值");
        }else{
            console.log("不是默认值");
        }
    });
    //可以定位索引值
    //city.selectedIndex = 1;//设定第二个为显示的选择
    //也可以使用默认值(在option对象上)
    //city.options[1].selected = true;


    //添加选项(标准的html标签)
    var option = document.createElement("option");
    var text = document.createTextNode("北京");
    option.appendChild(text);
    option.setAttribute("value","bj");
    city.appendChild(option);//添加在这个标签后面

    //使用Option构造函数添加(IE9及以上)
    var option = new Option("深圳","sz");
    //city.appendChild(option);//添加在这个标签后面

    //IE8兼容(用这个方法)
    //city.add(option,null);//0非IE会不兼容


    //兼容IE8及以下
    city.add(option,undefined);

    //移除标准DOM
    city.removeChild(city.options[0]);//删除第一个，剩下的序号会改变的

    //移除(自带的)，删除2个
    city.remove(0);//剩下的序号会改变的
    city.remove(0);

    //null方法
    //city.options[0] = null;

    //移动
    addEvent(city,"click",function(){
        info.appendChild(this.options[city.selectedIndex]);//把选者的项移动放到第二个列表里面
    });

*/




