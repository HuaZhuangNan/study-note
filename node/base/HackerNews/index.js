
// 当前项目（包） 的入口文件

// 1.加载模块
// 1.1 加载 http 模块
import http from 'http';
//const http = require('http');
// 1.2 加载 path 模块
import path from 'path';
// 1.3 加载 fs 模块
import fs from 'fs';



// 2.创建服务 8080 端口
http.createServer((req,res)=>{
  // body..
  
  // 设计路由
  // get请求
  // 请求 / | /index 时,显示新闻列表
  // 请求  /item 时,显示新闻详情页面
  // 请求  /submit 时显示新闻发表页面
  // 请求  /add 时，将用户提交的行文保存到 data.json 中

  // post 请求
  // 请求 /add 时，将用户提交的行文保存到 data.json 中
  
  // 请求连接和请求方式转换为小写
  req.url = req.url.toLowerCase();
  req.method = req.method.toLowerCase();
  // 网站目录,文件位置
  let webPath = path.join(__dirname,'views');
  let fileName = '';
  // 目录判断
  if(req.url === '/' || req.url === '/index' && req.method === 'get' ){
    // index.html 
    fileName = 'index.html';
  }else if(isDirOrFile(path.join(webPath,req.url)) || isDirOrFile(path.join(webPath,req.url+'html'))){ // 判断文件是否存在
    // 文件存在
    fileName = req.url;
  }else {

  }
  
  // 根据用户请求的路径(路由) ，将对应的html 文件显示出来
  if(req.url === '/' || req.url === '/index' && req.method === 'get' ){
    // index.html 
    fileName = 'index.html';
  }else if(req.url === '/item' && req.method === 'get' ){
    //  details.html 
    fileName = 'details.html';
  }else if(req.url === '/submit' && req.method === 'get' ){
    // submit.html 
    fileName = 'submit.html'
  }else if(req.url === '/add' && req.method === 'get' ){
    // 表示 get 方式提交一条新闻
  }else if(req.url === '/add' && req.method === 'post' ){
    // 表示 post 方式提交一条新闻
  }else {
    // 404 
    res.writeHead('404','Not Found', {
      'Content-Type' : 'text/html; charset=utf-8'
    });
    // 结束
    res.end('404, Page No Found !');
  }

  res.end('');
}).listen(8080,'location',()=>{
  console.log('启动服务成功：http://localhost:8080')
});
// 判断文件是否存在
function isDirOrFile(path){
  fs.access(path, fs.constants.F_OK | fs.constants.R_OK, (err) => {
    return err ?  false :  true;
  });
}
// 