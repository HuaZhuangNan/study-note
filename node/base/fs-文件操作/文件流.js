

// 大文件流处理
const fs = require('fs');

// 
let spath = path.join(__dirname,'file.mp4');
let dpath = path.join(__dirname,'file.mp4');

let readStream = fs.createReadStream(spath);
let writeStream = fs.createWriteStream(dpath);


// 方法一
let num =1;
readStream.on("data",(chunk)=>{
  // 读取文件
  writeStream.write(chunk);
  num++;
})

readStream.on('end',()=>{
  console.log("处理完成,分成了"+num+"次")
})
// 方法二 直接通过管道输出 （建议，更简便）
readStream.pipe(writeStream);
