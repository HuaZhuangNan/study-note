const imgOcr= require('./utils/img-ocr')
const path = require('path');

const imgPath = path.join(__dirname, './test.jpeg')  // `http://passport2.chaoxing.com/num/code?${new Date().getTime()}`

;(async (img)=>{
  await imgOcr(img).then(text=>{
    console.log("识别到文字："+ text)
  })
  .catch((err=>{
    console.log(`识别图片出错：${err}`)
  }))

})(imgPath)
