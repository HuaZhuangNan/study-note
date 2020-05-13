# HTML + CSS 的一些总结

- [MDN 文档](https://developer.mozilla.org/zh-CN/)
- [Caniuse 兼容性查询](https://www.caniuse.com/)

## [HTML总结](./page/html.md)

## [CSS总结](./page/css.md)

## [例子](./page/example.md)

## 兼容性方案

### [旧版 IE 淘汰计划](https://support.dmeng.net)

### 渐进增强(progressive enhancement)

- 针对低版本浏览器构建页面，保证基本功能，然后针对搞级浏览器进行效果，交互和追加的功能。

### 优雅降级(graceful degradation)

- 开始就构建完整的功能，然后针对低版本浏览器去兼容

## 兼容 HTML5(IE9 以上)

- 兼容 HTML5：`<!--[if lt IE 9]><script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script><![endif]-->`
- `gt`、`>` 大于; `lt`、`<` 小于; `gte` 大于或等于；`lte` 小于或等于

## 移动端 Meta 标签 `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0">`

- `width=device-width` 宽度等于当前设备宽度
- `initial-scale=1.0` 初始化为缩放比例 1
- `maximum-scale=1.0` 允许用户最大比例 1
- `minimum-scale=1.0` 允许用户最小比例 1
- `user-scalable=no` (no)不希望用户放大所有页面

## 优先使用 Edge浏览器 `<meta http-equiv="X-UA-Compatible" content="ie=edge">`

## 国产优先使用 webkit内核 `<meta name="renderer" content="webkit">`

## SEO 优化

### meta 标签，这个是重中之重

```html
<title标题</title>
<meta name="title" content="标题">/*不推荐用这个*/
<meta name="keywords" content="seo,html5,标题,seo优化,html优化"> <!-- 5-6个 关键字-->
<meta name="description" content="通过html标签及属性，使用户搜素时网站尽量排在前面，提高用户的点击率"> <!-- 30-40文字-->
```

### 标签的处理

- `img` ，`img` 标签增加 `alt` 属性
- `a` 、`img` 、`embed` 及 `video` 标签添加 `title` 属性
- `h1` 要分配给网站名称或给带 `alt` 标签的 `logo` 使用，用以强调网站名称。h2 标签用来定义“站点副标题”。如果没有副标题，h2 标签最好也空着，以备不时之需。h3 标签用来定义导航栏目名称，h4 标签用来定义文章列表标题，但大多数内容系统，文章列表输出用 UL 标签，所以 h4 可能就派不上用场，这里只是以此类推。浏览器会自动地在标题的前后添加空行。请确保将 HTML heading 标签只用于标题。不要仅仅是为了产生粗体或大号文本而使用标题因为搜索引擎使用标题为你的网页的结构和内容标志索引。
- 页面结构清晰，使用语义化标签比如 header、footer、content、section，js、css 使用外部文件

### robots.txt 文件

> [文件的作用及写法](https://baijiahao.baidu.com/s?id=1616368344109675728&wfr=spider&for=pc)  
> [obots 中 Sitemap 的 XML 格式 和 用法](https://lzj0470.iteye.com/blog/905962)

### 一些其他优化

- 设置网站地图，方便搜索引擎索引整个网站
- 友情链接
- 搜索引擎更喜欢引用静态页面，不喜欢大页面

### 手机端全屏等设置

```html
<!-- 缩放 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0">
<!--删除苹果默认的工具栏和菜单栏-->
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <!--UC强制全屏-->
  <meta name="fullscreen" content="yes">
  <!--QQ强制全屏-->
  <meta name="x5-fullscreen" content="true">
```
