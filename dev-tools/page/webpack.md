# webpack 配置

> **版权声明**： 转载请带上它：

## `style-loader` 把 css 注入 Dom

- [Github](https://github.com/webpack-contrib/style-loader)

## `css-loader` css 解析

- 会像 import / require（）一样解释@import 和 url（）并将解析它们。
- [Github](https://github.com/webpack-contrib/css-loader)

### 安装style-loader和css-loader插件

```shell
npm install -D style-loader css-loader
yarn add -D style-loader css-loader
```

### Webpack配置style-loader和css-loader

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

## `postcss-loader` css 添加浏览器前缀

- [Github](https://github.com/postcss/postcss-loader)
- [配置文档](https://github.com/michael-ciniawsky/postcss-load-config)

### 安装postcss-loader

```shell
npm i -D postcss-loader
yarn add -D postcss-loader
```

### 使用postcss

1. 新建一个文件 `postcss.config.js`
2. 写入配置

```js
module.exports = {
  parser: "sugarss",
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {},
    cssnano: {},
  },
};
```

### Webpack配置Postcss-loader

```js
// 这个情况不可以使用 @import
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "postcss-loader"],
      },
    ],
  },
};
// 或者，可以使用
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
    ],
  },
};
```
