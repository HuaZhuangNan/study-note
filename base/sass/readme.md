# sass

- [sass 官网](https://sass-lang.com)
- [sass 中文](https://www.sass.hk/docs/)

## 抽离 css `yarn add extract-text-webpack-plugin@next -D`

```js
module: {
  rules: [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    }
  ]
},
  plugins: [
    new ExtractTextPlugin("../css/styles.css") //默认其实目录问打包后的入口文件路径，所以需要../
  ]
```
