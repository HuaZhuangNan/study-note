// 1.加载模块
// 1.1 加载 http 模块
const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');
// 2.创建 http 服务,并启动和监听
http.createServer((req,res) => {
  res.setHeader('Server','node');
  fs.readFile(path.join(__dirname,'www',req.url),(err,fileContent)=>{
    if(err){
      res.writeHeader(404,{
        'Content-Type': 'text/plain;charset=utf8'
      });
      res.end('页面消失了！');
    }else {
      let dtype = 'text/html'; // 默认文件头
      let ext = path.extname(req.url); // 获取文件后缀
      // 判断是否存在
      if(mime[ext]){
        dtype += mime[ext];
      }
      // 如果文本
      if(dtype.startsWith('text')){
        dtype += ';charset=utf8';
      }
      // 设置头信息  
      res.setHeader('Content-Type',dtype);
      // 返回文件
      res.end(fileContent);
    }
  })
  
}).listen(9090,'localhost',()=>{
  console.log('http://localhost:9090');
});