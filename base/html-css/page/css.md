# CSS

- [w3cSchool](https://www.w3cschool.cn/cssref)
- [菜鸟手册](https://www.runoob.com/cssref/css-reference.html)

## CSS 权重大到小排序

- `!important`(5) > 内联(4) > id(3) > class、伪类(2) > 标签(1)

## 单位、大小 **px,pt,em,rem,%,vw,vh,**

- deg 角度单位
- px 虚拟长度单位，是计算机系统的数字化图像长度单位像素(pixel);
- PPI: dpi:dot per inch 即点/英寸;ppi:pixel per inch 即像素/英寸
- 1 英寸(in)=2.54 厘米(cm)
- pt 物理长度单位，指的是 72 分之一英寸
- em 相对于**父元素**的 font-size 的值)
- rem 相对于根元素**html**
- % 相对于父元素百分比布局
- vw 相对于**视口**的宽度，**视口**被均分为 100 单位;浏览器会四舍五入
- vh 相对于**视口**的高度，**视口**被均分为 100 单位;浏览器会四舍五入
- 字体大小偶数，PC 最好不小于 12px
- 1pt = 1px \* 4/3
- 1vw = **视口**宽度的 1%
- 1vh = **视口**高度的 1%
- vwin  取 vw 和 vh 中最小的那个
- vwax  取 vw 和 vh 中最大的那个
- 1 个像素等于 0.001rem； 1rem = 16px； 1em=16px；
- 任意浏览器的默认字体高都是 16px。所有未经调整的浏览器都符合: 1rem=16px。那么 12px=0.75rem,10px=0.625rem。为了简化 font-size 的换算，需要在 css 中的 body 选择器中声明 Font-size:62.5%，这就使 rem 值变为 16px\*62.5%=10px, 这样 12px=1.2rem, 10px=1rem, 也就是说只需要将你的原来的 px 数值除以 10，然后换上 rem 作为单位就行了。

## 颜色,背景

- white #fff rgb(255,255,255) rgba(255,255,255,1)
- hsl(Hue(色调),Saturation(饱和度)%,Lightness(亮度)%)
- 背景图默认是平铺的，只会显示容器区域
- [阮一峰普通人的网页配色方案](http://www.ruanyifeng.com/blog/2019/03/coloring-scheme.html)
- [阮一峰网页设计的 12 种颜色](http://www.ruanyifeng.com/blog/2010/09/12_colors_used_in_web_design.html)
- 配色站：[flatuicolors](https://flatuicolors.com/)

## rgba 和 opacity 的区别

- 有 `opacity` 属性的所有后代元素都会继承 `opacity` 属性，而 **rgba** 后代元素不会继承不透明属性
- **rgba** 只是背景颜色有透明效果, `opacity` 属性元素的后代都会继承这个透明属性，包括但不限于文字图片等

## 浏览器的效果的统一

- 编码：`@charset "utf-8";`
- 注释：/\*\*/
- body {margin:0;} ,body 的外边距
- 重置 input 和 textarea 的默认样式：input,button,select,textarea{outline:none};textarea{resize:none}
- list 的图标默认不在内容区域，并且不垂直居中
- 移到内容区域：`list-style-position:inside;`
- [normalize.css](https://github.com/necolas/normalize.css)

## 盒模型(mbpc): \[margin \[border \[padding \[content\]\]\]\]

## 移动端使用怪异盒子 `box-sizing: border-box;`

- 默认：**content-box**
- `padding`,`border` 在盒子里面

## 属性设置：上 右 下 左

## 文本的处理

- 溢出：overflow：visible(默认，不修减，溢出)、hidden(修减，剩余部分不可见)、scroll(修减，显示滚动条)、auto(如果修减，显示滚动条)、inherit(规定继承父元素)
- 换行：white-space:normal(默认，空白忽略)、nowrap(不换行，不忽略)
- 显示引号：text-overflow:clip(不显示，裁剪)、ellipsis(溢出显示)

## 置换元素： img、input、textarea、select、object

- 一个 内容 不受 CSS 视觉格式化模型控制，CSS 渲染模型并不考虑对此内容的渲染，且元素本身一般拥有固有尺寸（宽度，高度，宽高比）的元素，被称之为置换元素。
- 替换元素就是浏览器根据元素的标签和属性，来决定元素的具体显示内容

## 定位

1. 固定定位: `position:fixed;`
2. 粘性定位(实现导航条吸顶): `position:sticky;`；relative 和 fixed 的结合；没有滚动条执行 relative；反之 fixed

## 高度塌陷

- 父元素自适应或者没有设置高度，子元素有浮动，父元素就高度塌陷
- 父元素设置`overflow:hidden;`因为触发了一个 BFC 布局规则，计算 BFC 高度的时候，里面的浮动也会参与计算；但是会隐藏掉基于父元素定位到外面的内容
- [BTC 介绍](#bfc)
- 浮动元素添加一个 div 节点设置`clear:both;`忽略浮动元素的预留空间
- 父元素选择符:after{content:".";display:block;height:0;clear:both;overflow:hidden;visibility:hidden;}

## `display:none;` 和 `visibility:hidden;`

- **display** 隐藏不留空间
- **visibility** 隐藏留空间

## 伪元素(用在块元素中)

- `选择符:before{content:"之前添加文字"}`
- `选择符:after{content:"之后添加文字"}`

## table 标签属性

- `border-collapse: collapse;` 相邻单元格边框合并
- `border-space: 0px;` 相邻单元格边框的间距
- `empty-cells: show/hide;` 当单元格没内容的时候是否显示区域
- `table-layout:auto/fixed;` 自动还是固定布局

## 浏览器前缀(Vendor Prefix)

- `-moz-` /_ 火狐等使用 Mozilla 浏览器引擎的浏览器 _/
- `-webkit-` /_ Safari, 谷歌浏览器等使用 Webkit 引擎的浏览器 _/
- `-o-` /_ Opera 浏览器(早期) _/
- `-ms-` /_ Internet Explorer (不一定) _/

## 阴影

- 备注：可以多阴影,以逗号隔开

1. 盒子阴影: `box-shadow: h-shadow v-shadow blur spread color inset;`

   - **h-shadow** 必需的，水平阴影的位置。允许负值
   - **v-shadow** 必需的，垂直阴影的位置。允许负值
   - **blur** 可选，模糊距离
   - **spread** 可选，阴影的大小
   - **color** 可选，阴影的颜色
   - **inset** 可选，从外层的阴影（开始时）改变阴影内侧阴影

2. 文本阴影 `text-shadow: h-shadow v-shadow blur color;`
   - **h-shadow** 必需，水平阴影的位置，允许负值
   - **v-shadow** 必需，垂直阴影的位置，允许负值
   - **blur** 可选，模糊的距离
   - **color** 可选，阴影的颜色，参阅 CSS 颜色值

## CSS 渐变

- [菜鸟手册](https://www.runoob.com/css3/css3-gradients.html)
- [在线 1](https://www.colorzilla.com/gradient-editor/)
- [在线 2](http://westciv.com/tools/gradients/)

- 线性渐变 `linear-gradient` - 向下/向上/向左/向右/对角方向
- 重复线性 `repeating-linear-gradient`
- 径向渐变 `radial-gradient` - 由它们的中心定义
- 重复径向 `repeating-radial-gradient`

## css 过渡

- [贝塞尔曲线](https://cubic-bezier.com/)

- `transition-property` 规定应用过渡的 CSS 属性的名称，默认 “all”
- `transition-duration` 规定过渡效果持续运动的时间，默认 0
- `transition-timing-function` 规定过渡效果的速度曲线(贝塞尔曲线)，默认是 "ease"。
- `transition-delay` 规定过渡效果的延迟时间，默认 0
- `transition`: 名称 运动时间 s/ms 速度曲线 延迟时间 s/ms , ... ;简写属性，用于在一个属性中设置四个过渡属性。

## 2D

## 变形：`transform: translate() / rotate() / skew() / scale()`

### 位移：translate() 根据左(X 轴)和顶部(Y 轴)位置给定的参数，从当前元素位置向指定方向移

- 水平移动/translateX(20px)：向左 `translate(-tx,0)`; 向右 `translate(tx,0)`
- 垂直移动/translateY(30px)：向上 `translate(0,-ty)`; 向下 `translate(0,ty)`
- 对角移动：左上角 `translate(-tx,-ty)`；左下角 `translate(-tx,ty)`；右上角 `translate(tx,-ty)`右下角 `translate(tx,ty)` ;

### 缩放：scale() 元素增加或减少的大小，取决于宽度（X 轴）和高度（Y 轴）的参数

- scale(2) 放大 2 倍
- scaleX(2) X 轴 2 倍
- scaleY(3) Y 轴 2 倍

### 旋转：rotate() 在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转

- rotate(50deg) 顺时针旋转 50 度
- rotate(-50deg) 逆时针旋转 50 度
- rotateX(50deg) 围绕 X 轴旋转
- rotateY(10deg) 围绕 Y 轴旋转

### 倾斜：skew() 表示 X 轴和 Y 轴倾斜的角度，如果第二个参数为空，则默认为 0，参数为负表示向相反方向倾斜

- skew(30deg) X 轴倾斜
- skew(-30deg) Y 轴倾斜
- skewX(30deg) 只在 X 轴(水平方向)倾斜
- skewY(30deg) 只在 Y 轴(垂直方向)倾斜

## 缩放旋转对位移的影响

- 先位移后缩放旋转
- 因为旋转时候坐标系也跟着旋转了

## 3D

## 景深：近大远小

### 距离

- `perspective:1200px;` 父元素
- `transform:perspective(1200px)` 子元素
- 两个设置会冲突，建议只设置父元素,900-1200 之间

### 角度

- `perspective-origin: center center;` 中心
- `perspective-origin: left top;` 左上角
- `perspective-origin: 100% 100%;` 右小角

## 父元素空间属性 `transform-style`

- **flat** 2D 平面空间
- **preserve-3d** 3D 立体空间

## 位移旋转缩放

### 位移

- `translateZ()` z 轴移动
- `translate3d(tx,ty,tz)` 特定方向移动(z 轴不可以百分比)

### 旋转

- `rotateX()` Z 轴上一点旋转 0-1 数值
- `rotateY()` Y 轴上一点旋转
- `rotateZ()` Z 轴上一点旋转
- `rotate3d(tx,ty,tz,a)` 特定点旋转,**a**角度值

### 缩放

- `scaleZ()` z 轴缩放
- `scale3d()` 特定缩放

## 背面可见不可见属性 `backface-visibility`

- **visible** 可见，默认
- **hidden** 不可见

## 动画 animation

- [Animate.css](https://daneden.github.io/animate.css/)
- `animation: 动画名 时间 过渡曲线 延迟时间 循环次数 方向`

```css
@keyframes mymove {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
  /* 或者 */
  /* 0%{} */
  /* ... 中间还可以加 */
  /* 100%{} */
}
div {
  animation: mymove 5s linear 1s infinite reverse;
}
div:hover {
  animation-play-state: paused;
}
```

- **keyframes** 关键帧
- **mymove** 动画名
- **from** 从开始状态 **to** 到结束状态
- **linear**匀速可以换**step-start** 中间没有过渡直接跳过，可以做帧动画
- 就是说 div 元素的样式 1 秒从 form 后匀速过渡到 to 样式，并且无限反方向(to->form)循环；如果鼠标经过元素就暂停动画

## 原点 `transform-origin:x,y,z[length];`

- `transform-origin: left top;` 定右上角
- `transform-origin: left center;` 定左中心
- `transform-origin: left bottom;` 定左下角
- `transform-origin: right top;` 定右下角
- `transform-origin: right center;` 定右中心
- `transform-origin: right bottom;` 定右小角
- `transform-origin: -100px bottom;` 定-100px 的下角
- `transform-origin: center center -100px;` 定中心向前 100px

## 动画 animation 和 transition 的区别

- animation 不需要事件触发

## 字体库 @font-face

- 早在 IE4 就支持了

## 失量图标库

- [GitHub 内置的图标库](https://github.com/primer/octicons)
- [IconFont:阿里巴巴矢量图标库](https://iconfont.cn/)
- [IconFinder-Free Icons](https://www.iconfinder.com/free_icons)
- [Font Awesome 中文网](https://www.fontawesome.com.cn/faicons/)
- [Find Icons](https://findicons.com/)
- [Vexels](https://www.vexels.com/)
- [Icons8](https://icons8.com/)

## 背景边框等

## `background-clip:属性值` 属性规定背景的绘制区域

- `border-box` 背景裁剪到边框盒
- `padding-box` 背景裁剪发哦内边距框
- `content-box`背景裁剪到内容框

## 边框圆角上右下左半径，可设置百分比

- `border-radius:1px 2px 3px 4px;`
- `border-radius:1px`

## 边框椭圆纵向/横向半径

- `border-radius:1px 2px 3px 4px/4px 3px 2px 1px;`
- `border-radius:1px/2px;`

## 图片边框

- `border-image:url(URL) 26 26 round` 地址、x、y 偏移量、repeat(round)、

## CSS 多列(配合前缀使用)

- `column-count:5` 分 5 列
- `column-gap:20px` 列间距 20
- `column-rule:1px solid red` 间隔线 1px 红色实线
- `column-fill:auto(自适应高度)/balance(所有列高度以最高的统一);`
- `column-span:none(不跨列)/all(横跨所有行);`
- `column-width: 100px;` 设置每列的宽度
- `columns:100px 5;` 组合属性，设置每列宽度 100px，共 5 列
- `break-inside: avoid;` 防止出现中断

## [实现瀑布流](https://www.cnblogs.com/ainyi/p/8766281.html)

## 媒体查询

- [CSS 媒体查询](http://www.mamicode.com/info-detail-2761455.html)
- [img 响应式](https://blog.csdn.net/u014711690/article/details/79750505)
- @media print{} 打印样式
- @media screen and (min-width: 320px;) and (max-width:480px;) 手机等小屏幕手持设备
- @media only screen and (min-width:321px;) and (max-width:1024px;){} 平板之类的宽度 1024 以下设备
- @media only screen and (min-width: 1029px;) PC 客户端或者大于 1028 的设备
- @media screen and (orientation:portrait;) 竖屏
- @media screen and (orientation:landscape;) 横屏

## 移动端设计图

- 设计图: 640px / 750px / 1080px
- dpr:2 / 2 / 3
- 1vw = 3.2px / 1vw = 3.75px / 1vw = 3.6px'

## 设计网页的时候使用：vw 和 rem 结合布局，通过设计图计算 vw 和 rem 的关系

- 设置 html{font-size:100px} 得出=> (31.25vw/26.67vw/27.78vw)，这种情况下 1rem =/~ 100px
- 设置 body {font-size: 0.16rem;} 还原字体大小默认16大小
- 假设一元素设计图量出 88px 情况下
  - 88/2=44px=0.44rem=3.6364vw
  - 88/2=44px=0.44rem=4.2614vw
  - 88/3~29.333px=0.29333rem=4.0909vw

## 阿里 flexible.js

- [使用教程](http://caibaojian.com/flexible-js.html)

1. 删除 meta 视口标签
2. 引入 js 文件
3. 量出大小 88px
4. 设置大小 0.88rem 就行
5. 插件的 var rem = width / 7.5; // 默认 750px 设计图

## BFC

- [BFC 使用](https://blog.csdn.net/sinat_36422236/article/details/88763187)

1. 简介

   - Block formatting context 翻译为块级格式化上下文
   - 是一个单独的**渲染区域**;规定这块区域的内部布局，和区域外部无关

2. 规则

   - 内部的 Box 会在垂直方向，一个个的放置
   - Box 垂直方向的距离有 margin 决定，属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
   - 每个元素的 margin box 的左边，虞包含块 border box 的左边框相接触
   - BFC 区域不会和 float box 重叠
   - BFC 就是页面上的一个隔离独立的容器，容器里面的子元素不会影响到外面的元素。
   - 计算 BFC 的高度时，浮动元素也会参与计算

3. 触发条件
   - 根元素 html
   - float 属性不为 none
   - position 为 absolute 或 fixed
   - display 为 inline-block，table-cell，table-caption，flex，inline-flex
   - overflow 不为 visible
4. 使用
   - 自适应两栏布局
   - 清除内部浮动
   - 防止 margin 上下重叠

## 目标伪类

```html
<style>
  a {
    width: 20px;
    height: 10px;
  }
  div {
    width: 200px;
    height: 0;
    background-color: red;
    overflow: hidden;
    transition: 1s;
  }
  /* 目标样式 */
  div:target {
    height: 100px;
  }
</style>
<body>
  <a href="#box1">1</a>
  <div id="box1"></div>
  <a href="#box2">2</a>
  <div id="box2"></div>
  <a href="#box3">3</a>
  <div id="box3"></div>
</body>
```

## flex 布局 `display:flex;`

- [阮一峰 Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [阮一峰 Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

- 子元素都会沿着主轴排列，默认主轴是 x 轴
- 子元素可以直接添加宽高
- 一个子元素的时候直接添加`margin:auto;`会垂直居中
- 默认不会自动换行

## 父元素属性

1. 主轴排列方式 `flex-direction`

   > `flex-direction: row(x行,默认)/colum(y列)/row-reverse(x轴反向，右到左)/colum-reverse(y轴反向，下到上);` 子元素排列方式

2. 主轴的对齐方式 `justify-content`

   > `justify-content: flex-start(顶端对齐，默认)/flex-end(底部)/center/(居中)/space-between(两端,中间自动分配)/space-around(自动分配距离);`

3. 侧轴对齐方式 `align-items`

   > `align-items: flex-start(主轴开始)/flex-end(主轴结束)/center(居中)/baseline(行和侧轴同一条的时候，flex-start等效);`

4. 是否换行 `flex-warp`

   > `flex-warp: wrap(换行)/nowrap(不换行，默认)/wrap-reverse(反向);`

5. 行和行之间的对齐方式 `align-content`
   > `align-content:flex-start(开始没有行间距)/flex-end(底部没有行间距)/center(居中没有行问题)/space-between(两端对齐，中间自动分配)/space-around(自动分配距离);`

## 子元素属性

1. 控制侧轴子元素的对齐方式 `align-self`

   > `align-self: auto(继承父元素的align-item属性，无则为stretch;默认)/stretch(元素拉伸以适应容器)/center(元素位于容器的中心)/flex-start(容器的开头)/flex-end(容器的结尾);`

2. 控制子元素的排列顺序，数值越大越往后排，支持负数 `order`

3. 扩展比率,根据盒子元素所设置的值作为比率来分配剩余空间 `flex-grow`

4. 收缩比率,根据弹性盒子元素所设置的值作为比率来收缩空间 `flex-shrink`

   > `flex-shrink:1(元素在主轴上的宽度或高度压缩用来适应父元素宽度或者高度,默认)/0(不压缩)`

5. 伸缩基准值，如果所有子元素的基准值之和大于剩余空间，则会根据每项设置的基准值，按比率伸缩剩余空间 `flex-basis`

6. 把剩余空间全部分配给当前元素 `flex:1`;是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写
   > `flex:0 auto(计算值为[0 1 auto]，默认)/initial(计算值为[0 1 auto]，默认)/1(计算值为[1 1 0%])/auto(计算值为[1 1 auto])/none(计算值为[0 0 auto])`

## Grid 布局

- [阮一峰 CSS Grid 网格布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

## 滤镜 `filter`

- [菜鸟手册](https://www.runoob.com/cssref/css3-pr-filter.html)

## 一些 bug 和解决方案

1. 图片下面有间隙（大约 3px）

   - 把容器的标签和 img 标签写在同一行，
   - `img{display:block}`

2. 如果图片存在超链接，IE 上会显示蓝颜色边框

   - `img{border:0;}`

3. 表单元素对齐方式不一致

   - 给元素添加浮动 float

4. 按钮元素默认大小不一致

   - 如果按钮不在表单里面，页面中所有的按钮用 a 超链接模拟
   - 如果按钮是一张图片的情况下，直接切图当背景即可
   - input 按钮：在按钮的外面套一个元素。给外围的元素添加边框。

5. 鼠标指针 `cursor:hand`

   - `cursor:pointer`

6. opacity 让整个元素包括内容透明， 0 - 1； (IE 不支持)

   - `filter:alpha(opacity=50);` (IE 识别)

7. margin 的 Bug

   - 当元素和子元素都没有浮动的情况下：给第一个子元素提那家 margin-top；会错误的把 margin 的值添加在父元素上
   - 相邻两个元素上下 margin 会重叠，按照较大的值设置

8. IE6
   - 当元素有浮动并且有 margin，在 IE6 上会把浮向边的 margin 值双倍显示。
     - 给浮动元素添加`display:inline;`
   - IE6 出现默认最小高度大约 16px
     - `font-size:0;overflow:hidden;`
   - IE6 不识别 min-height;默认就是最小宽度
     - `min-height:100px;_height:100px;`
