/*
  处理字节类
  Buffer本质就是字节数组
  1. 构造方法（类）
  2. 静态方法
  3. 实例方法
*/

// 实例化对象
const buf = Buffer.alloc(5);
const bufstr = Buffer.from("嘿嘿", 'utf8');//字符编码是可选参数
// 16 进制
const bufarr = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf);
console.log(bufstr);
console.log(bufarr.toString());

// 功能方法 
  console.log(Buffer.isEncoding("utf8")); // 判断是否支持该编码 
  console.log(Buffer.isBuffer(bufarr)); // 判断是否为Buffer
  console.log(Buffer.byteLength(bufarr)); // 返回指定编码的字节长度,默认utf8
  console.log(Buffer.concat([buf,bufarr])); // 将一组Buffer对象合并为一个Buffer对象

// 实例方法 
// 参数 : 第二个位置放二个
buf.write("hello",2,2);
console.log(buf);

// 参数:第二个位置截取二个
console.log(bufstr.slice(2,2).toString());

// toJSON() //不需要显性调用
const json = JSON.stringify(bufarr);//内部会自动调用 toJSON()
console.log(bufarr.toJSON());
console.log(json);


 