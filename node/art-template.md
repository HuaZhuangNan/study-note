# art-template

- [官网](http://aui.github.io/art-template/zh-cn/index.html)

- 支持ejs语法
- 速度比ejs快，语法简洁

## 安装

```shell
# express
yarn add --save art-template
yarn add --save express-art-template
# 或者
npm i --save art-template
npm i --save express-art-template

# koa
yarn add --save art-template
yarn add --save koa-art-template # 改这句
# ...
```

## Express 使用

```js
// 后缀名可以改为html
// 设置模板引擎
app.engine('art', require('express-art-template')); // 后缀名
app.set('views', {
    debug: process.env.NODE_ENV == 'development' // 是否debug模式
});
app.set('views', path.join(__dirname, 'views'));
// 解析 art
app.set('view engine', 'art');
// 路由请求设置
// res.render('index',{ data:"666" });
res.render('index.art',{ data:"666" },function(err,html){
    if(err){
      next(err)
    }else{
      // 对html进行处理
      res.send(html)
    }
  });
// index.art 中使用
// 标准语法
{{data}}  // 666
// 原始语法
<%= data %> // 666
```

## Koa 中使用

```js
// 后缀名可以改为html
const render = require('koa-art-template');
const app = new Koa();
// 配置模板引擎
render(app, {
  root: path.join(__dirname, 'views'), // 位置
  extname: '.art', // 后缀名
  cache: true, // debug 模式会自动设置为 false
  debug: process.env.NODE_ENV == 'development' // 是否开启debug模式
});
// 中间件配置 公共数据 模板任何地方都可以访问
// app.use(async function (ctx) {
//   ctx.state = {
//     session: this.session,
//     title: 'app'
//   }
//   await next()
// };
// 路由配置 单独数据
await ctx.render('index',{ data:"666" })
// index.ejs 中使用
{{ data }} // 666
```

## 标签

- `{{@` 原文输出不解析html,输出转义 HTML 标签
- `{{`  解析html

## 条件

```art
{{if value}} {{value}} {{/if}}
{{if v1}} {{v1}} {{else if v2}} {{v2}} {{/if}}
```

## 循环

```art
<!-- 支持 array 与 object 的迭代-->
{{each arr}}
    {{$index}} {{$value}}
{{/each}}
```

## 变量

```art
{{set temp = data.content}}
```

## 模板继承

```art
{{extend './layout.art'}}
{{block 'head'}} ... {{/block}}
```

## 引入模板

```art
{{include './header.art'}}
{{include './header.art' data}}
```

## 过滤器

- 注册一个过滤器

```js
template.defaults.imports.dateFormat = function(date, format){/*[code..]*/};
template.defaults.imports.timestamp = function(value){return value * 1000};
```

- 使用

```art
{{date | timestamp | dateFormat 'yyyy-MM-dd hh:mm:ss'}}
```
