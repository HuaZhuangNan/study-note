# node 开发有关

> **版权声明**： 转载请带上它：

## 工具

- [nodemon](#nodemon) node开发环境运行工具
- [pm2](#pm2)  node线上运行环境工具
- [es-checker](#es-checker) 阮一峰的node环境es6语法支持度检测
- [svg-captcha](#svg-captcha) 验证码生成工具
- [gm](#gm) node端处理图片工具
- [tesseract.js](#tesseract.js) js版本的图片文字识别
- [node-mime](#node-mime) 800+ MIME types, 1,000+ extensions ；http头 Content-type 类型

## 框架

- [express](./frames/express/readme.md)  一个简单快速的框架
- [koa2](./frames/koa2/readme.md) 一个面向未来的框架
- TS框架

## nodemon

> - 官网：[https://nodemon.io/](https://nodemon.io/)
> - GitHub：[https://github.com/remy/nodemon](https://github.com/remy/nodemon)
> - 安装： `npm i -g nodemon` 或 `yarn add global nodemon`
> - **nodemon.json**  默认的配置文件（更多看官方文档）

```json
    {
        "verbose": true, // 一直后台
        "watch": ["*.js", "src/*"], // 监听文件
        "ignore": ["*.test.js", "fixtures/*"]  // 排除文件
    }
```

```cmd
    nodemon -h                          # 帮助
    nodemon -V                          # 版本
    nodemon -w  目录或者文件              # 监听目录或者文件
    nodemon -i  目录或者文件              # 忽略目录或者文件
    nodemon --config 配置文件名           # 设置 nodemon 默认配置文件
    nodemon ./server.js                 # 运行 app.js
    nodemon ./server.js localhost 8080  # 可以传参
    nodemon --inspect ./server.js 80    # 检查
    nodemon --debug ./server.js 80      # 可以运行 debug 模式

    # nodemon 会自动读取package.json的main属性
    # nodemon还将scripts.start在package.json（从nodemon 1.1.x开始）中搜索属性
    # nodemon app.js -- -L -opt2 -opt3
    # 以 -- 为分隔，nodemon 不会去读取 -- 后面的参数，而是传给 app.js。
```

## pm2

> - 官网：[https://pm2.keymetrics.io/](https://pm2.keymetrics.io/)
> - 或 [https://pm2.io/](https://pm2.io/)
> - GitHub：[https://github.com/Unitech/pm2](https://github.com/Unitech/pm2)
> - 安装： `npm i -g pm2` 或 `yarn add global pm2`

```cmd

```

## es-checker

> - Github： [https://github.com/ruanyf/es-checker](https://github.com/ruanyf/es-checker)
> - 安装： `npm i -g es-checker` 或 `yarn add global es-checker`

```cmd
  es-checker       # 查看当前node版本支持es6的情况
```

## svg-captcha

> - Github: [https://github.com/produck/svg-captcha](https://github.com/produck/svg-captcha)
> - 安装项目依赖包 `npm i svg-captcha` 或者 `yarn add svg-captcha`
> - 使用见文档或者 作者[例子](../../node-demo/randomcode/readme.md)
> - 官方中文文档[https://github.com/produck/svg-captcha/blob/HEAD/README_CN.md](https://github.com/produck/svg-captcha/blob/HEAD/README_CN.md)

## gm

> - 官网: [http://aheckmann.github.com/gm/](http://aheckmann.github.com/gm/)
> - Github: [https://github.com/aheckmann/gm](https://github.com/aheckmann/gm)
> - 先安装环境依赖 [http://www.graphicsmagick.org/](http://www.graphicsmagick.org/) 打开官网下载平台安装包安装好
> - 安装项目依赖包 `npm i gm` 或者 `yarn add gm`
> - 使用见GitHub或者 作者[例子](../../node-demo/translation/readme.md)
> - 官方文档[http://aheckmann.github.io/gm/docs.html](http://aheckmann.github.io/gm/docs.html)

## tesseract.js

> - tesseract-ocr 的js版，官网[https://tesseract-ocr.github.io/](https://tesseract-ocr.github.io/) Github: [https://github.com/tesseract-ocr](https://github.com/tesseract-ocr)
> - 官网: [http://tesseract.projectnaptha.com/](http://tesseract.projectnaptha.com/)
> - Github: [https://github.com/naptha/tesseract.js](https://github.com/naptha/tesseract.js)
> - 文档、语言包: [https://tesseract-ocr.github.io/tessdoc/Data-Files](https://tesseract-ocr.github.io/tessdoc/Data-Files)
> - 安装项目依赖包: `npm i tesseract.js`或者 `yarn add tesseract.js`
> - 使用见 GitHub或者 作者[例子](../../node-demo/translation/readme.md)

## node-mime

> - NPM: [https://www.npmjs.com/package/mime](https://www.npmjs.com/package/mime)
> - 安装项目依赖包: `npm i mime`或者 `yarn add mime`
> - 使用见 NPM
