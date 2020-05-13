/*
 * @Description: 
 * @version: 1.0.0
 * @Author: 花妆男(HuaZhuangNan)
 * @Github: https://github.com/HuaZhuangNan
 * @Date: 2019-11-07 19:03:30
 * @LastEditors: 花妆男(HuaZhuangNan)
 * @LastEditTime: 2019-11-15 19:10:41
 */
const path = require('path');
// 多入口解决方案
const globEntry = require('webpack-glob-entry'); 
// 清除dist文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
// 以树图的方式展示打包后的文件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// html 模板
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    //mode: 'development', production
    // entry: {
    //     //appJs: './src/js/index.js',
    //     //appTs: './src/ts/index.ts',
    //     //parkDemo: './src/parkDemo/index.ts',
    // },
    entry: globEntry(globEntry.basePath('src'),'./src/*/*/*.*s','./src/Demo/*/*/index.*s'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: { //查找文件顺序
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        // 指定特定的ts编译配置，为了区分脚本的ts配置
                        configFile: path.resolve(__dirname, './tsconfig.json'),
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: []
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "设计模式",
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin({
            port: 8686
        })
    ],
    devServer: { // 服务器
        contentBase: path.join(__dirname,'./dist'),
        open: true,
        port: 8989
    },
    devtool: "source-map" // 开发工具map映射
};
