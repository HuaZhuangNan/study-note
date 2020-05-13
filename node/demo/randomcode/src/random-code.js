const svgCaptcha = require('svg-captcha');

/*
  Captcha 对象说明
  Captcha.text 是结果
  Captcha.data 是数据<svg>
*/

/**
 * @description 生成纯字符串验证码
 * @param {*} width 高度
 * @param {*} height 宽度
 * @returns 返回 Captcha 对象
 */
function strCode(width,height){
    return svgCaptcha.create({
        size: 4,   // 验证码长度
        fontSize: 92, // 字体大小
        ignoreChars:'0o1i', // 排除字符
        noise: 2, // 干扰线数量
        color: true, // 字体是否有颜色
        background: '#dfe6e9', // 背景颜色
        width, // 宽度
        height // 高度
    });
}


/**
 * @description 数学计算验证码
 * @param {*} width 宽度
 * @param {*} height 高度
 * @returns 返回 Captcha 对象
 */
function mathCode(width,height){
    return svgCaptcha.createMathExpr(
        {
            noise: 2,
            fontSize: 92,
            color: true,
            background: '#dfe6e9',
            mathMin: 0, // 最小数字
            mathMax: 10,  // 最大数字
            mathOperator: "+/-", // 运算方法
            width,
            height
        }
    );
}


module.exports = (type="str",width="300",height="80")=>{
    if(type&&type=='math') return mathCode(width,height);
    else return strCode(width,height);
}
