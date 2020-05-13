/*
 * @Description: 配置文件
 * @version: 1.0.0
 * @Author: 花妆男(HuaZhuangNan)
 * @Github: https://github.com/HuaZhuangNan
 * @Date: 2019-08-21 09:19:51
 * @LastEditors: 花妆男(HuaZhuangNan)
 * @LastEditTime: 2019-12-17 11:17:09
 */

const tool = require('./util/tool');

module.exports = {
    name: '报名系统',
    lang: 'zh-cn',
    adminRootName: 'handler',
    host: tool.getServerIp(),
    port:'80'
};