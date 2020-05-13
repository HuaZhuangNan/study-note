/*
 * @Description: 根路由
 * @Author: MoXiaoYu
 * @Date: 2019-08-19 10:50:51
 * @LastEditTime: 2019-08-24 23:42:09
 */
const path = require('path');
// 加载框架
const router = require('express').Router();
// 验证码
const randomcode = require('../util/randomcode');


// 首页业务
router.get('/',(req,res,next)=>{
  res.status(200).redirect('index.html');
});


// 随机验证码
router.get('/randomcode',(req,res,next)=>{
  let {type,time} = req.query;
  if(time.length >11 && parseInt(time)>new Date().getTime()-60 && type && type!="str") res.status(401).send('err');
  else {
    let code = randomcode(type);
    req.session.randomcode = null; //先清空
    req.session.randomcode = code.text; // session 存储验证码数值
    res.type('svg').status(200).send(code.data);
  }
})

// 错误处理
router.all('*',(req,res,next)=>{
  res.status(404).sendFile(path.resolve(__dirname,'../www') + '/err.html');;
})

module.exports = router;