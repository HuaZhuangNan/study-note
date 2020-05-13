const path = require('path')

const { createWorker } =  require('tesseract.js')
const gm = require('gm') // require('gm').subClass({imageMagick: true}); 如果使用 imageMagick 不使用gm的话

const tempPath = path.join(__dirname, '..','temp')

/**
 * @description 处理图片
 * @param {String} imgName 图片名字
 * @returns {Object} Promise 异步对象
 */
function processImg(imgName){
	return new Promise((resolve,reject) => {
    console.log(`开始处理图片: ${imgName}`)
    const entity = gm(imgName)
    let imgType = "png" // 默认 png 格式输出
    entity.format((err,value)=>{ // 获取图片格式
      if(value!=undefined) imgType = value.toLocaleLowerCase()
      let filePath = path.join(tempPath, `/temp.${imgType}`)
      // 配置路径
      entity.options({appPath: 'D:\\Tool\\dev\\GraphicsMagick-1.3.34-Q16\\'})
        .colorspace('gray') // 灰度处理
        .normalize()  // 归一处理
      .noProfile()  // 去除轮廓
        .threshold('70%') // 二值化
        .write(filePath,async err=>{
          if (err) return reject(err)
          await setTimeout(function(){ console.log(`图片处理完成: ${filePath}`); resolve(filePath)}, 1000) // 延迟1秒
        })
    })
	})
}
/**
 * @description 识别图片
 * @param {String} handledImageName  处理后的图片名
 * @returns {String} text 返回结果
 */
async function recognizer(handledImageName){
  console.log(`开始识别图片: ${handledImageName}`)
  const worker = createWorker({
    langPath: path.join(__dirname, '..', 'lang'), // 语言目录
    cachePath: tempPath // 缓存路径
  })
  await worker.load({psm: 8}) // Page Segmentation Mode 分割模式    8 表示单个字体分割
  await worker.loadLanguage('eng') // 设置加载语言,多种语言与 +chi_sim  中文简体
  await worker.initialize('eng') // 初始化语言,多种语言与+
  await worker.setParameters({
      tessedit_char_whitelist : '0123456789', // 设置白名单字符使结果只包含这些字符，有用的图像中的内容是有限的
      preserve_interword_spaces: 0, //  保留单词之间的间隔，貌似如果有一个识别失败会有空白，如果想验证长度，手动去空白 replace(/\D/g,'');
    })
  const {data:{text}} = await worker.recognize(handledImageName);
  console.log(`图片识别完毕！${handledImageName}`)
  await worker.terminate() // 关闭
  return text.replace(/\D/g,'');
}


/**
 * @description 获取验证码
 * @param {String} imgName  图片名字
 * @returns {Object} Promise  异步对象
 */
function imgOcr(imgName){
  return processImg(imgName)
  .then(recognizer)
  .catch((err) => {
    console.log(`图片处理运行出错：${err}`)
  })
}

module.exports = imgOcr
