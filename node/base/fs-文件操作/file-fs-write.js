// 1，加载模块

var fs = require('fs');

// 2，实现文件写入操作
let msg = 'Hello Word ! 你好世界！';
// 等于 msg = Buffer.from('Hello Word ! 你好世界！');
// 3,写入数据 fs.writeFile(file , data[, options ], callback )??DD???tD′è?2ù×÷ òì2?2ù×÷

/*  参数说明
  file 路径
  data 数据
  options 可选  encoding 编码 默认utf-8 || mode 方法 默认0o666 || flag 文件标识'w'
  callback 回调函数 error ::  失败 || null 成功
*/

// nodejs,中 error-fast (错误优先！) 就是函数参数第一个为err

fs.writeFile('./file-fs.txt', msg, 'utf-8', function(err){
  if(err){
    console.log('写入失败，详情为'+err);
  }else {
     console.log('写入成功');
  }

});

// 同步 writeFileSync()