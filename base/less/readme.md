# less

- [less 官网](http://lesscss.org/)
- [less 中文](http://lesscss.cn/)
- [Bootstrap-Less](https://less.bootcss.com/)

## 介绍

- 是一门向后兼容的 CSS 扩展语言
- 可以嵌套混合

## 变量，`&` 表示当前选择器的父级，算术运算符 +、-、\*、/ 可以对任何数字、颜色或变量进行运算

```less
@width: 10px;
@height: @width + 10px;
.box {
  height: @height;
}
```

## 嵌套

```less
#father {
  ... .children {
    ...;
  }
}
// 变成
#father {
  ...;
}
#father .children {
  ...;
}
// @
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}
//
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```

## 混合

```less
.base {
  ..;
}
#main {
  ...;
  .base();
}
```

## 转义

- 允许你使用任意字符串作为属性或变量值。任何 ~"anything" 或 ~'anything' 形式的内容都将按原样输出

```less3.5+
@min768: ~"(min-width: 768px)";
@min768: (min-width: 768px);
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```

## 导入

```less
@import "library"; // library.less
@import "typo.css";
```

## [函数](https://less.bootcss.com/functions/)

## [进阶](https://less.bootcss.com/features/)
