# ejs 模板

- [官网](https://ejs.co/)
- [中文](https://ejs.bootcss.com/#promo)

## 安装

```shell
yarn add --save ejs
npm i --save ejs
# koa 还要
yarn i --save koa-views
# ....
```

## express 项目使用

```js
// 设置模板引擎
app.engine('ejs', require('ejs').renderFile);  // 映射文件
app.set('views', path.join(__dirname, 'views'));
// 解析ejs
app.set('view engine', 'ejs');
// 路由请求设置
// res.render('index',{ data:"666" });
res.render('index.ejs',{ data:"666" },function(err,html){
    if(err){
      next(err)
    }else{
      // 对html进行处理
      res.send(html)
    }
  });
// index.ejs 中使用
<%= data %> // 666
```

## Koa 项目使用

```js
views = require('koa-views')
// 设置模板引擎
app.use(views('views',{
  extension: 'ejs',
  autoRender: false,//手动渲染默认true
  options: {
    debug: process.env.NODE_ENV == 'development',
    cache: process.env.NODE_ENV == 'production', // 生产模式，模板缓存
  }
}))
// app.use(views('views',{
//   map: {html:'ejs'} // html 解析为ejs文件，单后缀名为html
// }))
// 中间件配置 公共数据 模板任何地方都可以访问
// app.use(async function (ctx) {
//   ctx.state = {
//     session: this.session,
//     title: 'app'
//   }
//   await next()
// };
// 路由配置 单独数据
const [err,html] = await ctx.render('index',{ data:"666" })
if(err){
  next(err)
}else{
  // ...
  ctr.body = html;
  next()
}
// index.ejs 中使用
<%= data %> // 666
```

## 标签含义

- `<%` '脚本' 标签，用于流程控制，无输出。
- `<%_` 删除其前面的空格符
- `<%=` 输出数据到模板（输出是转义 HTML 标签）
- `<%-` 输出非转义的数据到模板
- `<%#` 注释标签，不执行、不输出内容
- `<%%` 输出字符串 `<%`
- `%>` 一般结束标签
- `-%>` 删除紧随其后的换行符
- `_%>` 将结束标签后面的空格符删除

## 模板中输出变量

```ejs
<%= data %>
<!-- 解析data中的html标记 -->
<%- data%>
```

## 变量定义标签属性

```ejs
<h1 style="<%= style %>"></h1>
```

## 引入

```ejs
<%- include('./user') %>
// 或者
<%- include('user', {user: user});%>
```

## 循环

```ejs
<% for(var i=0;i<list.length;i++>){%>
 <li><%=list[i]%></li>
<%}%>
// ...
<% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}); %>
<% }); %>
```

## 如果

```ejs
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
```
