# Webpack 4

## 先全局安装webpack4和webpack-cli

`npm i -g webpack`
`npm i -g webpack-cli`

##打包webpack4命令应该变为：
```
  npx  webpack  .\src\main.js  -o  .\dist\bundle.js  --mode  development 
  //  --mode development 开发模式
  //  --mode production 生产模式
```

1. 初始化项目 `yarn init -y` 
2. 安装本地开发依赖 `yarn add webpack webpack-cli -D` 
3. 打包  默认development开发模式 `npx  webpack` 
4. 新建 webpack.config.js 配置文件 
 + 基础代码：

```
    // webpack 是 node 写出来的
    let path = require('path');
    console.log(path.resolve('./dist'));
    module.exports = {
      mode: 'development', // 开发模式  production 生产模式
      entry: './src/index.js', // 入口文件
      output: {
        filename: 'bundle.js', //打包后的文件名
        path: path.resolve('./dist') //文件输出绝对路径
    }
    }
```
  + 修改配置文件名 `npx webpack --config webpack.js` 

+ `-D` === `--dev` 

5. 安装web服务  `yarn add webpack-dev-server -D` 

6. 启动服务 `npx webpack-dev-server` 

7. 安装html插件 `yarn add html-webpack-plugin -D` 

8. 安装loader插件 `yarn add style-loader css-loader -D` 

9. 
  + 安装less依赖 `yarn add less less-loader -D`
  + 安装sass依赖 `yarn add node-sass sass-loader -D`

10. 安装抽离css插件成link插件 `yarn add mini-css-extract-plugin -D` 

11. 自动添加css前缀 `yarn add postcss-loader autoprefixer -D`

12. 压缩css `yarn add optimize-css-assets-webpack-plugin -D`

13. 添加了css压缩的时候必须压缩js添加插件
  + `yarn add uglifyjs-webpack-plugin -D`

14. ES6 新建模板(module)规则(rules) 
 + 安装babel转化js代码 `yarn add babel-loader @babel/core @babel/preset-env -D`或
 `npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env `
  + 实验性js `yarn add @babel/plugin-proposal-class-properties -D`
  + 修饰器等js `yarn add @babel/plugin-proposal-decorators`
  + 节省代码实现实例上的es7语法(打包进项目)等  `yarn add @babel/plugin-transform-runtime` 
    - 打包上线还需要 `yarn add @babel/runtime`
    - `"aa".includes('a')` 这些还需要 `yarn add @babel/polyfill`
  + 语法校验Eslint `yarn add eslint eslint-loader -D`  直接[官网](https://eslint.org/demo/)下配置规则

15. 第三方模块的调用(可能有全局变量问题) `yarn add jquery`
  + 全局loader `yarn add expose-loader -D`
16. 打包图片 `yarn add file-loader -D`
  + js   中创建引入
  + css  中引入 
  + html 中引入 `yarn add html-withimg-loader -D`
  + 一般直接成base64 `yarn add url-loader -D`

17. 文件打包分类
  + `outputPath: 'img/'`

18. 请求数据
    1. 代理获取 ; 
```webpack.config.js
    proxy: {
      '/api' : {  // 配置代理
        target: "http://localhost:3000",
        pathRewrite: {  // 重写把请求发送给服务器
          '/api':''
        }
      }
    }
```

  2. 前端模拟数据 ;
```webpack.config.js
    before(app){
      app.get('/user',(req,res)=>{
        res.json({ 
          name: "陌轩痕-before",
          age: "20",
          sex: "男",
          birthday: "1999"
        })
      })
    }
```
  3. 有服务端也不代理
      + 安装服务端webpack中间件 `yarn add webpack-dev-middleware -D` ;
      + 配置好中间件 `node server.js` ;

19. 解析三方库 common 

```webpack.config.js

```
    
    

    