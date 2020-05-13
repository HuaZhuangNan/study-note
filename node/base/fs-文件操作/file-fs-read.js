

// 1. 加载 fs 模块

const fs = require('fs');

// 加载 path 模块

const path = require('path');

// import { readFile } from 'fs'; nodejs暂时不支持 export 也不支持

/* PS一下
ES6模块主要有两个功能：export和import

export用于对外输出本模块（一个文件可以理解为一个模块）变量的接口

import用于在一个模块中加载另一个含有export接口的模块。

*/



// 2. 调用 fs.readFile() 方法来读取文件
// fs.readFile(path[, options], callback)

/*
fs.readFile('./file-fs.txt',function(err, data){
  if (err) {
    throw err;
  }
  // 不传参数utf8 data 数据类型是个 Buffer对象 可以理解为字节数组

  //转化数据为字符串 并且打印
  //console.log(data.toString('utf8'));// toString不传参数默认也是utf8
});
*/

/*
fs.readFile('./file-fs.txt','utf8',function(err, data){
  if (err) {
    throw err;
  }
  // 传参数 utf8 data 数据类型就是个字符串

  //打印
  //console.log(data);
});

*/

// 路径问题

//fs.readFile('./file-fs.txt','utf8',function(err, data){}

//相对路径是相对nodejs执行目录
//不是根据文件执行目录问题

//所以我们用一个绝对的路径

//  __dirname   当前正在执行文件的完整路径
// console.log(__dirname);

//  __filename  当前正在执行文件的完整路径加文件名和扩展名
// console.log(__filename);

// 改良

//let filename = __dirname + '\\' + 'file-fs.txt';

// 路径拼接问题 path模块

let filename = path.join(__dirname,'file-fs.txt');

fs.readFile(filename,'utf8',function(err,data){
	if(err){
    throw err;
  }
  console.log(data);
});



// 同步
// fs.statSyns('../data.txt')

