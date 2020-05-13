/*
 * @Description: 验证码模块
 * @Author: HuaZhuangNan
 * @Date: 2019-08-22 02:21:28
 * @LastEditTime: 2019-11-14 19:41:57
 */
const svgCaptcha = require('svg-captcha');


function strCode(width,height){
    return svgCaptcha.create({
        size: 4,
        fontSize: 92,
        ignoreChars:'0o1i',
        noise: 2,
        color: true,
        background: '#dfe6e9',
        width,
        height
    });
}
function mathCode(width,height){
    return svgCaptcha.createMathExpr(
        {
            noise: 2,
            fontSize: 92,
            color: true,
            background: '#dfe6e9',
            mathMin: 0,
            mathMax: 25,
            mathOperator: "+/-",
            width,
            height
        }
    );
}


module.exports = (type,width="300",height="80")=>{
    if(type&&type=='str') return strCode(width,height);
    else return mathCode(width,height);
}