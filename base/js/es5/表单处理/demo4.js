
//过滤模式
//1,禁用键(不想用,之后还要验证不建议)
//2,验证后取消

addEvent(window,"load",function(event){
    var fm = document.getElementById("myForm");
    //console.log(fm.elements);//表单控件集合
    var user = fm.elements["user"];
    var content = fm.elements["content"];
    addEvent(fm.elements["user1"],"keyup",tabForWard);
    addEvent(fm.elements["user2"],"keyup",tabForWard);
    addEvent(fm.elements["user3"],"keyup",tabForWard);

    //自动切换换焦点(达到指定长度)
    function tabForWard(event){
        var e = event || window.event;
        //判断当前长度是否和指定长度一致
        if(this.value.length == this.maxLength){
            //遍历所有字段
            for(var i=0;i<fm.elements.length;i++){
                //找到当前字段
                if(fm.elements[i] == this){
                    //就把焦点移入下一个
                    fm.elements[i+1].focus();
                    //中途返回
                    return;
                }
            }
        }
    };


});
    // //屏蔽非数字键的输入(但是可以用中文)
    // addEvent(content,"keypress",function(event){
    //     var charCode = getCharCode(event);
    //     //console.log(charCode);
    //     //转化键码
    //     //console.log(String.fromCharCode(charCode));
    //     //正则表达来获取截止(>0兼容火狐无法删除键)
    //     if(!/\d/.test(String.fromCharCode(charCode)) && charCode>0){ //判断是不是不是数字
    //         preDef(event);
    //         //屏蔽非数字

    //     }
    // });
    // //裁剪，复制，粘贴事件
    // addEvent(content,"cut",function(event){
    //     preDef(event); //阻止裁剪
    // });
    // addEvent(content,"copy",function(event){
    //     preDef(event); //阻止复制
    // });
    // addEvent(content,"paste",function(event){
    //     preDef(event);//阻止粘贴
    // });
    // addEvent(content,"beforecopy",function(event){  //复制前事件
    //     console.log("复制前");
    // });
    // addEvent(content,"beforecut",function(event){  //裁剪操作前事件
    //     console.log("裁剪操作前");
    // });
    // addEvent(content,"beforepaste",function(event){  //粘贴前事件
    //     console.log("粘贴前");
    // });


    //验证数据是不是非法输入后取消
    // addEvent(content,"keyup",function(event){
    //     this.value = this.value.replace(/[^\d]/g,'');//匹配多个非数字字符全局匹配其他转换为空
    // });



