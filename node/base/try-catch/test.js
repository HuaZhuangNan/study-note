// 异步操作 无法捕获异常的

const fs = require('fs');

try {
  fs.writeFile('./test/test.txt','测试异步捕获问题',(err,data) => {
    console.log('ok');
  });
} catch (error) {
  console.log('出错了' + error);
}

// 对于异步操作 需要通过判断 err.code 进行处理