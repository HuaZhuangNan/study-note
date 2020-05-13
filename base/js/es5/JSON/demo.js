//JSON不支持undefined

//简单值
10;
"hello";
true;
null;
//对象表示(json是一个字符串)
'{"name":"Lee";"age":100;}';
//JSON数组
'[100，"lee",true]';
//常用JSON结构

/*
'[
    {
        "name" : "one",
        "age" : 1
    },
    {
        "name" : "two",
        "age" : 2
    },
    {
        "name" : "there",
        "age" : 3
    }
]'
*/

//模拟加载json
var json = '[{"name":"one","age":1},{"name":"two","age" : 2}]';
//解析和序列化(不支持的可以使用Json.js开源库模拟执行)
// var box = eval(json);//不安全！(解析json)
// console.log(box);
console.log(JSON.parse(json)[0].name);//不是双引号会报错
//生成的执行函数
console.log(JSON.parse(json,function(key,value){
    if(key =="name"){
        return "Mr" + value;
    }else {
        return value;
    }
}));
var box = [
    {
        "name" : "one",
        "age" : 1,
        "height" : 166,
        toJSON:function(){
           return this.age;
        }
    },
    {
        "name" : "two",
        "age" : 2,
        "height" : 176
    },
    {
        "name" : "there",
        "age" : 3,
        "height" : 186
    }
];
console.log(JSON.stringify(box));//不是双引号会报错,并且双引号前会加反斜杠 \
console.log(JSON.stringify(box,["age","height"]));//只要部分生成
//生成时候的执行函数(火狐和3.5和3.6有个BUG)
console.log(JSON.stringify(box,function(key,value){
    if(key =="name"){
        return "Mr" + value;
    }else {
        return value;
    }
}));
console.log(JSON.stringify(box,null,4));//缩进4个，更利于观看