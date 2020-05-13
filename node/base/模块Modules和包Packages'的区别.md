
# 模块Modules和包Packages'的区别

1. 模块可以是任一个文件或者目录（目录可以有很多个文件）只要能被nodejs通过require()加载就可以
2. 包是一个文件或者目录（目录可以有很多个文件）必须有一个Packsge.json文件描述，就是一个包

## PS
  1. 传统模块化： 有命名冲突 文件依赖
    + 前端模块化规范(文件加载、异步的) 服务器到浏览器
    + AMD require.js CMD 淘宝 seajs
  2. 服务器模块化规划(文件加载、同步的) 储存到内存
    + Commonjs - Nodejs
## 模块导入  ，已经加载的模块会缓存
  1. require('模块文件');
## 导出模块（开放接口） 
  1. exports.模块名 = 模块;
  2. module.exports = 模块;
## 模块使用 
  1. module.模块名();
  2. const vr = 模块名();
## 模块文件的后缀3种情况：
  + .js -> .json -> .node 
  + 不写后缀就 会按这个顺序去找

## 系统核心模块
  + fs  文件操作
  + http  网络操作
  + path  路径操作
  + querystring  查询参数解析
  + url  url解析
  + ...