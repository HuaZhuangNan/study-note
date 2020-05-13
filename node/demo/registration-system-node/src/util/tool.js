/*
 * @Description: 提供一些工具函数
 * @version: 1.0.0
 * @Author: 花妆男(HuaZhuangNan)
 * @Github: https://github.com/HuaZhuangNan
 * @Date: 2019-08-20 15:56:43
 * @LastEditors: 花妆男(HuaZhuangNan)
 * @LastEditTime: 2019-12-17 11:18:06
 */

const os = require('os');

// 时间格式化
function dateFormat(date,fmt) {
    let o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    date = null;
    return fmt;
}

// 字符串去空字符
function strAllTrim(str){
    return str.trim().replace(/\s*/g,"");
}

// 获取服务端IP
function getServerIp() {
    let interfaces = os.networkInterfaces();　　
    for (let devName in interfaces) {　　　　
        let iface = interfaces[devName];　　　　　　
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            // 192 本地
            if (alias.address.indexOf('192')==-1 && alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal ) {
                return alias.address;
            }
        }　　
    }
    return '127.0.0.1';
}


module.exports = {
    dateFormat,
    strAllTrim,
    getServerIp
}