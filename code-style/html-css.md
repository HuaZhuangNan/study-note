# HTML + CSS 代码编写规范

- [W3C的HTML规则验证](https://validator.w3.org/nu/)
- [W3C的CSS规则验证](https://jigsaw.w3.org/css-validator/)
- [谷歌规范](https://google.github.io/styleguide/htmlcssguide.html)

## 一般HTML规则

1. 编码：`<meta charset="utf-8">`

2. 协议： `<img src="https://..." />` 尽量使用HTTPS协议，不省略使用 **//**

3. 一次缩进 2 个空格,末尾加上空行

4. `img` ，`img` 标签增加 `alt` 属性 , `a` 、`img` 、`embed` 及 `video` 标签添加 `title` 属性

5. `h1` 要分配给网站名称或给带 `alt` 标签的 `logo` 使用

6. 代码都必须小写,包括属性的值

7. 标签语义化，根据需要解释代码，大版块的标签要加注释

8. <!-- TODO: 待办说明 --> 待办事项

9. 不省略标签，写全标签，没有闭合的单标签的最后可选加 **/**，如: `<input type="text" />`

10. 严格将结构（标记）、表示（样式）和行为（脚本）分开，并尝试将三者之间的交互保持在绝对最小。如单独用于打印的样式: `<link rel="stylesheet" href="print.css" media="print">`

11. `id`属性的唯一性，以及`class`名字用 **-** 链接，属性多时；换行并缩进

12. 一级块标签必须换行

13. 除了 < & 之外。尽可能不用 Unicode 字符；

14. 默认省略 link 和 script 的type(除非不是引入css和js)

## 一般 CSS 规则

1. 编码：`@charset "utf-8";`

2. id和类名具有语言化，由于性能原因，避免不必要的祖先选择器非常有用。

3. 除非需要，否则在**0**值后省略单位规格,如:`width: 0;`；在值中省略前导**0**,如: `width: .8rem;`

4. 对于允许的颜色值，3 个字符十六进制表示法更短、更简洁

5. 为了兼容性一些属性必须加上浏览器前缀,并且写在标准属性前面

6. 块与块之间如果不是设计要求，建议留点空白

7. 对属性选择器和属性值使用单引号而不是双引号。请勿在url()中使用引号

8. 对于大版块的代码样式需要添加注释进行分组

9. 表示状态 `is`, 或者  `action` 等具有描述动作的词语

10. 文件名规范
    - 主要的 master.css
    - 模块 module.css
    - 基本共用 base.css
    - 布局、版面 layout.css
    - 主题 themes.css
    - 专栏 columns.css
    - 文字 font.css
    - 表单 forms.css
    - 补丁 mend.css
    - 打印 print.css
    - 动画 animation.css

11. 书写规范

```css
@charset "utf-8";
@font-face {}
@keyframes name{}
/*
 1. Display & Flow
 2. Positioning
 3. Dimensions
 4. Margins, Padding, Borders, Outline
 5. Typographic Styles
 6. Backgrounds,Filter
 7. Opacity, Cursors, Generated Content
 8. Transition,Transform,Animation
 */
/* 如 */
el {
    display: ;
    visibility: ;
    float: ;
    clear: ;

    position: ;
    top: ;
    right: ;
    bottom: ;
    left: ;
    z-index: ;

    width: ;
    min-width: ;
    max-width: ;
    height: ;
    min-height: ;
    max-height: ;
    overflow: ;

    resize: ;
    box-sizing: ;
    outline-offset: ;

    column-gap: ;
    column-rule-style: ;
    column-rule-width: ;
    column-rule-color: ;
    column-rule: ;
    column-span: ;
    column-width: ;

    margin: ;
    margin-top: ;
    margin-right: ;
    margin-bottom: ;
    margin-left: ;

    padding: ;
    padding-top: ;
    padding-right: ;
    padding-bottom: ;
    padding-left: ;

    border: ;
    border-top: ;
    border-right: ;
    border-bottom: ;
    border-left: ;

    border-width: ;
    border-top-width: ;
    border-right-width: ;
    border-bottom-width: ;
    border-left-width: ;

    border-style: ;
    border-top-style: ;
    border-right-style: ;
    border-bottom-style: ;
    border-left-style: ;

    border-color: ;
    border-top-color: ;
    border-right-color: ;
    border-bottom-color: ;
    border-left-color: ;

    border-radius: ;
    box-shadow: ;
    border-image: ;

    outline: ;
    list-style: ;

    table-layout: ;
    caption-side: ;
    border-collapse: ;
    border-spacing: ;
    empty-cells: ;

    font: ;
    font-family: ;
    font-size: ;
    line-height: ;
    font-weight: ;
    text-align: ;
    text-indent: ;
    text-shadow: ;
    text-transform: ;
    text-decoration: ;
    text-overflow: ;
    letter-spacing: ;
    word-spacing: ;
    white-space: ;
    word-wrap: ;
    word-break: ;
    vertical-align: ;
    color: ;

    background: ;
    background-color: ;
    background-image: ;
    background-repeat: ;
    background-position: ;
    background-origin: ;
    background-clip: ;

    opacity: ;
    cursor: ;
    content: ;
    quotes: ;

    transition: ;
    transform: ;
    transform-origin: ;
    transform-style: ;
    perspective: ;
    perspective-origin: ;
    backface-visibility: ;

    animation: ;
}
@media not|only mediatype and (expressions) {}
```
