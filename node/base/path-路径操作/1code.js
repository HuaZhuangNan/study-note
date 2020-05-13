
// 1. 引入path模块
const path = require("path");

// 目录路径,
console.log(__dirname);
// 文件路径
console.log(__filename);
// 2. 获取路径
console.log(path.dirname("/a/b/a/ff/abd"));
// 文件名
console.log(path.basename('/gss/ing.html','.html'));
// 获取扩展名
console.log(path.extname("index.html"));
// 路径的格式化处理 
// path.format(); // obj -> string
let obj = {
  root: '/ignored',  // 文件根路径
  dir: '/home/user/dir', // 文件的全路径
  base: 'file.txt', // 文件名称
  ext: '.js', // 文件扩展名
  name: '02' // 文件名
}
console.log(path.format(obj));
// path.parse(); // string -> obj
console.log(path.parse("/a/b/a/ff/abd"));
// 判断是否是绝对路径
console.log(path.isAbsolute('/foo/bar'));
//join 拼接路径 (..表示上成路径) 会进行格式化处理
console.log(path.join(__dirname,"bar","../fsf/"))
// 规范化路径
console.log(path.normalize("/foo/bar/.."));

// 计算相对路径
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));

// 解析路径
console.log(path.resolve('/foo/bar', './baz'));

// 两个特殊属性
console.log(path.delimiter); // 表示分隔符（window是 \ Linux是 /）
console.log(path.sep);// 环境变量分隔符（window中使用 ; Linux :）





