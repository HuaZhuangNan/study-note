function sortArray(arr){
    if(arr instanceof Array){  //判断传过来的东西有没有排序方法，如果有就返回
        arr.sort();//正序
        arr.reverse();//倒序
        return arr;
    }else{
        return "传过来的数据不是一个数组！";
    }
}
var box = null;
console.log(sortArray(box));
//typeof arr.sort == "function"  null，还有模拟的function可以绕过
//所以直接使用是不是数组方法 arr instanceof Array 完美解决












/*

    1,可以通过修改代码来排错，不需要try-cath
    2,浏览器兼容性时不要使用（逻辑会有问题）
    3,try-cath比较耗资源

    无法修改代码可能报错是就是使用try-cath,比如Ajax

*/
// try{
//     new 10;
// }catch(e){   //表示接收的错误对像

//     if(e instanceof TypeError){
//         throw new TypeError("类型错误：实例化时候出了问题");
//     }else{
//         throw new Error("抛出错误");
//     }
//     //console.log("未知错误" + e);//这种表示错误处理，浏览器不报错，因为处理掉了
// }finally {
//     console.log("不管咋样都会执行");
// }
// new 10;//一般是浏览器自己会抛出错误
// //事件错误 onerror
// //可以用于图片加载出错

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





