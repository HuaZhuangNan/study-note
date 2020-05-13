
/* 基础库*/

// 数据合法验证
function formTest(elems,info){
    for(var i=0;i<elems.length;i++){
        if(!trim(elems[i].value)) { // 去除空格
            //注意：在执行时，会先把方法体加载，然后在1000毫秒后再执行
            info.innerText = elems[i].title + "不可以为空!请重新输入！";
            return 1;
        }
    }
    return 0;
}
// 数据序列化
function formSerialize(elems){
    var data = {};
    for(var i=0;i<elems.length;i++){
        data[elems[i].name] = elems[i].value;
    }
    return data; // { user: 名字, pwd: 123}
}

//封装Ajax(会默认传递GET,time参数解决缓存问题)
function ajax(obj){
    var xhr = new XMLHttpRequest();
    var data = params(obj.data,"&")+"&time="+new Date().getTime(); // 数据格式化拼接，编码中文解决IE中文问题,和缓存问题
    if(/^get$/i.test(obj.type)){  // "get" || obj.type === "GET"
        obj.url += "?"+ data;
    }
    if(obj.run === true){ // 是否异步
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4) call(); // 状态4已经完成
            else obj.process(xhr.readyState); // 其他状态
        }
    }
    xhr.open(obj.type,obj.url,obj.run);
    if(/^post$/i.test(obj.type)){  //  obj.type === "post" || obj.type === "POST"
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"); // 设置头
        xhr.send(data);
    }else {
        xhr.send(null);
    }
    if(obj.run === false){
        call();
    }
    function call(){
        if(xhr.status === 200){
            obj.success(xhr.responseText);//回调传参
            return null;
        }
        else{
            obj.error(xhr.status); // 报错
        }
    }
}

//名值对encodeURIComponent编码后按sign转换成字符串
function params(data,sign){
    var arr = [];
    for(var it in data){
        if(data.hasOwnProperty(it)) arr.push(encodeURIComponent(it) + "=" +encodeURIComponent(data[it]));//放入数组
    }
    return arr.join(sign);//按sign转换成字符串
}
// 去除前后空格
function trim(str){
    return str.replace(/\s*/g,"");
}