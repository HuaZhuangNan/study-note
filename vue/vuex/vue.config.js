module.exports = {

  publicPath: '/',
  outputDir: 'dist',

  filenameHashing: true,

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,

  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: '测试项目'
  },
  // 生产环境 sourceMap
  productionSourceMap: false,
  // 服务器
  devServer: {
    open: true,
    port: 3000
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,
  
};
