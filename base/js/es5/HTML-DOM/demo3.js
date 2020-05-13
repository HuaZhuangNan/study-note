

window.onload = function(){

    //改变className

    var box = document.getElementById("box");
    //太赘余了
    box.className = "aa bb";
    box.className = "aa bb cc";
    box.className = "aa cc";
    //好方法(match就是查找字符串，有就返回找到的，没有就返回null,转换布尔值)

    //检查clssName是不是存在
    function hasClass(element,cName){
        return (!!element.className.match(new RegExp('(\\s|^)'+cName+'(\\s|$)')));
    }
    //添加一个clssName
    function addClass(element,cName){
        if(!hasClass(element,cName)){ //不存在添加
            element.className += ' '+cName;
        }
    }
    //移除单个className,(replace就是替换匹配到的字符串)
    function removeClass(element,cName){
        if(hasClass(element,cName)){ //存在就移除并且替换为空格
            element.className = element.className.replace(new RegExp('(\\s|^)'+cName+'(\\s|$)'),' ');
        }
    }
    //移除全部只留一个
    box.className = "bb";
};