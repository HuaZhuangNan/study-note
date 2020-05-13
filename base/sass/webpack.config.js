const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development", // 开发模式
  entry: "./src/js/index.js",  // 入口文件
  output: {
    filename: "./js/bundle.js",  // 打包文件名
    path: path.resolve(__dirname,"./dist")  // 文件输出目录
  },
  devServer: {  // 开发服务器的配置  文件生成在内存中
    contentBase: path.join(__dirname, "public"),
    port: 3000,    // 端口
    progress: true, // 打包进度条
    contentBase: './dist', //根目录
    compress: true, //压缩
    open: true
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.scss']
  },
  module: {
    rules:[
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: "style-loader" // 样式处理
          },
          use: [
            "css-loader",  // @ 语法
            {
              loader: "postcss-loader",  // 添加前缀 
              options: {
                config: {
                    path: path.join(__dirname, 'postcss.config.js')
                }
              }
            },
            "sass-loader"  // 解析sass
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./css/style.css") //默认其实目录问打包后的入口文件路径，所以需要../
  ],
  // map映射
  devtool: 'source-map'
}