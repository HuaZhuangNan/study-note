const http = require('http')

const randmonCode = require('./random-code')
// 创建服务
const server = http.createServer();

// 挂载路由
server.on('request', (req, res) => {
  if (req.url === '/'){
    const captcha = randmonCode('math')
    // session = captcha.text 把结果存到session中
    res.statusCode = 200
    res.statusMessage = 'OK'
    res.setHeader('Content-Type','image/svg+xml')
    res.end(captcha.data)
  }
  else{
    res.statusCode = 404
    res.statusMessage = 'Not Found'
    res.end("404")
  }
})

// 启动服务
server.listen(8080, 'localhost', () => {
  console.log('服务启动成功！http://localhost:8080');
});
