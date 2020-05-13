# 例子

## 居中

- [参考](https://www.w3cplus.com/css/centering-css-complete-guide.html)

### 水平居中

1. 行内或类行内元素(**display:inline/inline-block/inline-table/inline/flex**): `text-align:center`;
2. 块级元素(**display:block;**): `margin:0 auto;`

### 垂直居中

1. 行内或类行内元素: `padding-top: 10px; padding-bottom: 10px;` 或者 `line-height`设置等高
2. 块级元素(知道高度):父元素： `position: relative;` 居中子元素:`position: absolute; top: 50%; height: 100px; margin:-50px 0 0 -50px;`
3. 不知道高度：父元素： `position: relative;` 居中子元素:`position: absolute; top: 50%; transform: translateY(-50%);`
4. flex 实现：父元素：`display: flex; flex-direction: column; justify-content: center;`
5. flex 实现 2：父元素：`display: flex;`;子元素: `margin:auto;`

### 水平并垂直区中

1. 固定宽高：父元素：`position: relative;` 居中子元素：`position: absolute; top: 50%; left: 50%;width: 100px; height:100px;margin-left:-50px;margin-top:50px;`
2. 不固定宽高：父元素：`position: relative;-webkit-transform-style: preserve-3d; -moz-transform-style: preserve-3d; transform-style: preserve-3d;` 居中子元素：`position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)`
3. flex 实现: 父元素：`display: flex; justify-content: center; align-items: center;`

## 布局

## 两栏布局

```html
<style>
  body {
    margin: 0;
    padding: 0;
  }
  html,
  body {
    height: 100%;
  }
  #left-box {
    width: 200px;
    height: 100%;
    background-color: #666;
    float: left;
  }
  #right-box {
    height: 100%;
    background-color: #ccc;
    overflow: hidden; /* 或者  margin-left: 200px; 或者 padding-left:200px; */
  }
</style>
<body>
  <div id="left-box"></div>
  <div id="right-box"></div>
</body>
```

## 双飞翼布局

```html
<style>
  body {
    margin: 0;
  }
  html,
  body {
    height: 100%;
  }
  #left-box,
  #right-box {
    width: 200px;
    height: 100%;
    background-color: #666;
  }
  #left-box {
    float: left;
  }
  #right-box {
    float: right;
    overflow: hidden;
  }
  #center-box {
    height: 100%;
    background-color: #ccc;
    overflow: hidden; /* 或者  margin: 0 200px; 或者 padding:0 200px; */
  }
</style>
<body>
  <div id="left-box"></div>
  <div id="right-box"></div>
  <div id="center-box"></div>
</body>
```

## 圣杯布局

```html
<style>
  html,
  body {
    height: 100%;
  }
  body {
    margin: 0;
  }
  header,
  footer {
    width: 100%;
    height: 40px;
    background-color: #666;
    position: fixed;
  }
  header {
    top: 0;
  }
  footer {
    bottom: 0;
  }
  main {
    width: 100%;
    height: 100%;
    padding: 40px 0;
    box-sizing: border-box;
  }
  nav,
  aside {
    width: 200px;
    height: 100%;
    background-color: chartreuse;
  }
  nav {
    float: left;
  }
  aside {
    float: right;
    overflow: hidden;
  }
  section {
    width: 100%;
    height: 100%;
    padding: 0 200px;
    box-sizing: border-box;
    background-color: #ccc;
  }
</style>
<body>
  <header></header>
  <main>
    <nav></nav>
    <aside></aside>
    <section></section>
  </main>
  <footer></footer>
</body>
```

```html
<!-- flex版本 -->
<style>
  html,
  body {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  body {
    margin: 0;
  }
  header,
  footer {
    height: 40px;
    background-color: #666;
  }
  main {
    flex: 1;
    display: flex;
  }
  nav,
  aside {
    width: 200px;
    height: 100%;
    background-color: chartreuse;
  }
  section {
    flex: 1;
    background-color: #ccc;
  }
</style>
<body>
  <header></header>
  <main>
    <nav></nav>
    <section></section>
    <aside></aside>
  </main>
  <footer></footer>
</body>
```

## 悬挂式布局

```html
<style>
  html,
  body {
    height: 100%;
  }
  body {
    margin: 0;
  }
  section {
    display: flex;
    width: 100%;
    background-color: #ccc;
  }
  img {
    width: 200px;
    align-self: center;
  }
</style>
<body>
  <section>
    <img src="//test.png" alt="图片" />
    <p>测试文本.......</p>
  </section>
</body>
```

## 流体布局

```html
<style>
  html,
  body {
    height: 100%;
  }
  body {
    margin: 0;
  }
  section {
    display: flex;
    width: 260px;
    height: 600px;
    margin: auto;
    flex-wrap: wrap;
    align-content: flex-start;
    background-color: #ccc;
  }
  div {
    box-sizing: border-box;
    width: 25%;
    height: 50px;
    border: 1px solid red;
  }
</style>
<body>
  <section>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </section>
</body>
```

## 瞄点的 table 切换

```html
    <style>
      body {
        margin: 0;
        padding: 0;
      }
      #box {
        width: 520px;
        height: 520px;
        background-color: #333;
        margin: 0 auto;
      }
      #box .btn-s {
        width: 100%;
        height: 60px;
        background-color: #ccc;
      }
      #box .btn-s a {
        float: left;
        width: 60px;
        height: 60px;
        margin-right: 15px;
        font-size: 20px;
        line-height: 60px;
        text-align: center;
        text-decoration: unset;
        color: #fff;
        background-color: red;
      }
      #box .btn-s a:hover {
        text-decoration: underline;
      }
      #box .show {
        width: 100%;
        height: 460px;
        background-color: turquoise;
        overflow: hidden;
        /* overflow: auto; */
      }
      #box .show div {
        width: 100%;
        height: 460px;
        text-align: center;
        line-height: 460px;
        font-size: 60px;
        color: #fff;
      }
      #content1 {
        background-color: yellowgreen;
      }
      #content2 {
        background-color: salmon;
      }
      #content3 {
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <div id="box">
      <div class="btn-s">
        <a href="#content1">1</a>
        <a href="#content2">2</a>
        <a href="#content3">3</a>
      </div>
      <div class="show">
        <div id="content1">1</div>
        <div id="content2">2</div>
        <div id="content3">3</div>
      </div>
    </div>
  </body>
</html>
```

## 一般共用的 CSS

```css
@charset "utf-8";
* { box-sizing: border-box; }
html,
body { width: 100%; height: 100%; }
body { font-family: "微软雅黑", "宋体"; }
body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img { margin: 0; padding: 0; }
h1,h2,h3,h4,h5,h6 { font-size: 16px; font-weight: normal; }
a,u { text-decoration: none; }
b,strong { font-weight: normal; }
i,em { font-size: none; }
ul,ol,li { list-style: none; }
img { display: block; border: none; }
input {outline: none;border: 0;}
/* 清除浮动 */
.clear_fix::after { content: "."; display: block; height: 0; clear: both; overflow: hidden; visibility: hidden; }
/* 兼容IE低版本 */
.clear_fix { zoom: 1; }
/* 兼容 HTML5标签*/
header, nav, section, main, article, aside, footer { display: block; }
```

## CSS 线性流动边框

- 使用盒子缩放(scale)X,Y 的值 0-1 来模拟边框
- 使用伪元素

```html
<style>
  .box {
    position: relative;
    width: 100px;
    height: 100px;
  }
  .box:before,
  .box:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 2px solid transparent;
    box-sizing: border-box;
    position: absolute;
  }
  .box:before {
    top: 0;
    left: 0;
    transition: border-color 0s ease-in 0.8s, width 0.2s ease-in 0.6s,
      height 0.2s ease-in 0.4s;
  }
  .box:after {
    right: 0;
    bottom: 0;
    transition: border-color 0s ease-in 0.4s, width 0.2s ease-in 0.2s,
      height 0.2s ease-in;
  }
  .box:hover:before {
    width: 100%;
    height: 100%;
    transition: width 0.2s ease-in, height 0.2s ease-in 0.2s;
    border-top-color: blue;
    border-right-color: blue;
  }
  .box:hover:after {
    width: 100%;
    height: 100%;
    transition: border-color 0s ease-in 0.4s, width 0.2s ease-in 0.4s,
      height 0.3s ease-in 0.6s;
    border-bottom-color: blue;
    border-left-color: blue;
  }
</style>
<body>
  <div class="box"></div>
</body>
```

## 拖放

```html
<style type="text/css">
  .box {
    width: 300px;
    height: 300px;
    float: left;
  }
  #box1 {
    background-color: #cccccc;
  }
  #box2 {
    background-color: aqua;
  }
</style>
<body>
  <div id="box1" class="box"></div>
  <div id="box2" class="box "></div>
  <img id="img1" src="./test.png" width="100px" height="100px" />
  <script type="text/javascript">
    var boxDiv1 = document.getElementById("box1");
    var boxDiv2 = document.getElementById("box2");
    var img = document.getElementById("img1");
    // boxDiv1.ondragenter = function(e){
    //   console.log(e);
    // }
    boxDiv1.ondragover = function (e) {
      e.preventDefault();
    };
    boxDiv2.ondragover = function (e) {
      e.preventDefault();
    };
    img.ondragstart = function (e) {
      e.dataTransfer.setData("imgId", "img1");
    };
    boxDiv1.ondrop = dropImghandler;
    boxDiv2.ondrop = dropImghandler;

    function dropImghandler(e) {
      // 阻止默认行为
      e.preventDefault();
      // 创建节点
      var img2 = document.getElementById(e.dataTransfer.getData("imgId"));
      e.target.appendChild(img2);
    }
  </script>
</body>
```

## 拖放本地 img 资源

```html
<style type="text/css">
  #img-container {
    background-color: #CCCCCC;
    width: 500px;
    height: 509px;
  }
</style>
  </head>
  <body>
    <div id="img-container"></div>
    <script type="text/javascript">
      var imgContainer = document.getElementById("img-container");
      imgContainer.ondragover = function(e){
        e.preventDefault();
      }
      imgContainer.ondrop = function(e){
        e.preventDefault();
        var f = e.dataTransfer.files[0];
        var fileReader = new FileReader();
        fileReader.onload = function(e){
          imgContainer.innerHTML = "<img src=\""+fileReader.result+"\" width=\"100px\" height=\"100px\">";
        }
        fileReader.readAsDataURL(f);
      }
    </script>
  </body>
```

## 全站变灰

```css
html {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
  -webkit-filter: grayscale(1);
}
```
