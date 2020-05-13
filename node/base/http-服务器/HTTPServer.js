
// 1.加载模块
// 1.1 加载 http 模块
const http = require('http');
// 1.2 加载 path 模块
const path = require('path');
// 1.3 加载 fs 模块
const fs = require('fs');
// 2.创建 http 服务
const server = http.createServer();

// 3.监听用户请求事件 Request Event

// 参数说明 request 请求报文对象可以简写(req) response 响应用户对象简写(res)

server.on('request', (req,res) => {
  // 网站路径
  let webPath = path.join(__dirname,'htmls');

  // 3.1 处理请求 switch(req.url)
  //req.url 请求连接的不同做出不同的响应

  // 拼接路径
  let fileName = path.join(webPath,req.url);

  // 3.2 返回响应

  // 3.2.2. 读取文件
  fs.require(path.join(filePath,fileName),(err,data) => {
    if (err) res.end('404 文件不存在');

    // 3.2.3 返回数据
  
    res.end(data);
  });

  /* 基本http服务
  // 设置响应报文头 
  //res.setHeader('Content-Type','text/plain; charset=utf-8');//纯文本utf8编码
  res.setHeader('Content-Type','text/html; charset=utf-8');//html文件utf8编码
  
  // body...
  res.write('Hello World! <h1>你好世界！</h1>');

  //结束 res.end()
  res.end('结束！');
  */
});

// 4. 启动服务
server.listen(8080,'localhost',() => {
  console.log('服务启动成功！http://localhost:8080');
});

  // if (req.url === '/' || req.url === '/index') {
  //   filename = 'index.html';
  // }else switch(req.url) {
  //     case '/login': 
  //       fileName = 'login.html'; 
  //       break;
  //     case '/reg': 
  //       fileName = 'reg.html';
  //       break;
  //     default : fileName = '404.html';
  //   }