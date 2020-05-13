


try{
    //window.ffff();

    //var kill = 12;

}catch(e){   //表示接收的错误对像
    //表示前面只有错误才会执行，如果前面的没有错误就不会执行
    console.log(e);
    console.log(e.name);//IE8及以上才可以支持
    console.log(e.message);//错误信息,跨浏览器最好的

    if(e instanceof TypeError){   //这个方法可以更加准确处理错误
        console.log("类型错误" + e.message);
    }else{
        console.log("未知错误" + e);
    }
}finally {
    console.log("不管咋样都会执行");
}

//new Array(-5);//RangeError: Invalid array length 范围错误
//var box = v;//ReferenceError: v is not defined 引用错误
//a $ b;//SyntaxError: Unexpected identifier 语法错误
//new 10;//TypeError: 10 is not a constructor  类型错误

//eval('abc');一般不会出现 EvalError 全局变量使用和定义不同的错误

//console.log(encodeURI("小沫"));//URIError(一般很不会出现)
//console.log(decodeURI(encodeURI("小沫")));


// try表示尝试执行里面的代码，不通过执行catch里面的代码
//可以避免控制台输出错误信息
//可以屏蔽错误继续执行语句，但是如果和错误语句有上下文关联就不会执行





