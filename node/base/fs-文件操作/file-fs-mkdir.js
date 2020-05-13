// 1.加载 fs 模块

const fs = require('fs');

// 2. 创建目录 fs.mkdir(path[, options], callback)

fs.mkdir('./测试父目录/最后子目录', { recursive: true }, (err) => {
  if (err) throw err;
    else console.log('成功');
});
// ps recursive: true 如果父目录不存在也创建
// 相当于
/*

fs.mkdir('./测试父目录/最后子目录', { recursive: true }, function(err){
  if (err) throw err;
});

// rmdir 移除目录 
fs.rmdir('./测试父目录/最后子目录', { recursive: true }, function(err){
  if (err) throw err;
}) 

*/