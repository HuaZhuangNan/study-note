# nvm、node、npm、yarn等前端工具,使用搜索功能（ctrl+f）搜索

> **版权声明**： 转载请带上它：

## 开发环境必备

- [nvm](#nvm)    node版本管理器
- [node](#node)  基于v8引擎js运行环境
- [npm](#npm)    插件包管理器
- [nrm](#nrm)    npm安装源管理器
- [yarn](#yarn)  插件包管理器
- [yrm](#yrm)    yarn安装源管理器

## 其他开发工具

- [md](#md) 语法
- [mddir](#mddir) 路径映射md文件工具
- [git](./git.md)  版本管理器，协同开发
- [babel](./plugin.md#babel) 插件
- [webpack4](./webpack.md) 打包工具

## nvm

> - GitHub：[https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)
> - 安装[链接](./install.md)

```cmd
    nvm -h                      # nvm 帮助
    nvm version                 # nvm 版本号
    nvm on                      # 开启 nvm
    nvm off                     # 关闭 nvm （不会卸载node）
    nvm arch 32/64              # 默认环境位数
    nvm node_mirror  URL        # 设置 node 下载源
    nvm npm_mirror URL          # 设置 npm 下载源
    nvm proxy URL/none          # 设置代理 / 移除代理
    nvm root Path               # 设置 nvm 根路径
    nvm install latest          # 安装最新开发版node
    nvm install 版本号           # 安装指定 版本 的node
    nvm uninstall 版本号         # 卸载指定 版本 的node
    nvm ls                      # 当前电脑所有安装的node版本
    nvm nvm ls available        # 云端安装版本
    # 版本标题说明
    # CURRENT  <--> 测试版
    # LTS  <-->  稳定版(长期支持版)
    # OLD STABLE <--> 过去稳定版
    # OLD UNSTABLE  <--> 过去测试版
    nvm use 版本号            # 设置当前版本(需要管理员)
```

## node

> - 官网：[https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)
> - GitHub:[https://github.com/nodejs/node/](https://github.com/nodejs/node/)
> - 安装[链接](./install.md)

```cmd
    node -h         # 命令帮助
    node -v         # 当期node的版本
    node test.js    # 运行当前目录的 test.js
```

## npm

> - npm工具GitHub:[https://github.com/npm/cli](https://github.com/npm/cli)
> - npm工具官网[http://npm.community/](http://npm.community/)
> - npm库官网:[https://www.npmjs.com/](https://www.npmjs.com/)
> - 安装：node安装好就有
> - 用户配置文件[.npmrc](./config/npmrc),注：文件在电脑用户根目录下
> - 出现警告使用
>    1. npm WARN deprecated coffee-script@1.7.1: CoffeeScript on NPM has moved to "coffeescript" (no hyphen)
>    2. `npm install --global coffeescript` 解决

```cmd
    npm -h                      # 帮助
    npm -v                      # 版本
    npm root -g                 # 全局安装包的位置
    npm config ls               # 用户配置
    npm config ls -l            # npm所有配置
    npm config -h               # 配置帮助的命令
    npm config set perfix 绝对路径  # 配置全局包位置
    npm config set cache 绝对路径   # 配置包缓存路径
    npm install npm@latest -g   # 更新npm(不建议跟新可能出现意想不到的问题)
    npm init                    # 初始化项目，会在项目下生成一个 package.json 文件
    npm init -y                 # 按默认 package.json 初始化项目，5.0版本还会生成
    npm view 包名 version        # 包的最新版本
    # install 可以简写写成 i
    npm install 包名             # 安装包
    npm install 包名@版本         # 安装特定版本包
    npm install -g 包名          # 全局安装包名
    npm install 包名@版本 -g      # 全局安装特定版本包
    npm install 包名 -S 或者 --save      # 安装 dependencies 开发依赖包，会打包进项目
    npm install 包名 -D 或者 --save-dev  # 安装 devDependencies  生产依赖包，不会打包进项目，开发时候使用
    npm install 包名@版本号       # 安装指定版本号的包名，全局、不同环境安装一样
    npm --registry URL install 包名 # 安装 URL 源的包
    npm list -g --depth 0      # 安装了那些全局包，list：已安装的node包；–-depth 0，深度
    npm ls 包名                 # 指定包的版本号或者通过 package.json 文件里面，或者全局包路径
    npm run 命令                # 运行 package.json 文件中 script项的命令
    npm update 或 up  包名      # 更新包
    npm update 或 up   -g      # 包的全局更新
    npm uninstall 或 un  包名   # 卸载包
    npm cache verify           # 缓存
    npm cache clean -force     # 清理缓存  -force 表示确认删除所有缓存
```

### 更多 package.json 说明[链接](./package.md)

### nrm

> - GitHub:[https://github.com/Pana/nrm](https://github.com/Pana/nrm)
> - 安装：`npm i -g nrm`
> - 用户配置文件[.nrmrc](./config/nrmrc),注：文件在电脑用户根目录下

```cmd
    nrm -h                          # 帮助
    nrm -V                          # 版本
    nrm ls                          # 所有的源(* 标的就是当前使用源)
    nrm current # 当前使用的源
    nrm use 源名(如:taobao)          # 配置源
    nrm add 源名 URL                 # 添加一个自定义源
    nrm del 源名                     # 删除一个源
    nrm test 源名                    # 测试源的延迟
```

## yarn

> - 官网： [https://yarnpkg.com](https://yarnpkg.com)
> - GitHub： [https://github.com/yarnpkg/yarn](https://github.com/yarnpkg/yarn)
> - 安装：`npm i -g yarn`
> - 用户配置文件[.yarnrc](./config/yarnrc),注：文件在电脑用户根目录下
> - 配置：yarn(如果全局包使用npm管理的话，npm全局个人觉得比yarn好用)，**注意:npm和yarn全局或者项目中请勿混一起使用，会出问题**
>   1. `yarn config set global-folder “D:\Tool\dev\nvm\package_global"`  配置全局目录
>   2. `yarn config set cache-folder ”D:\Tool\dev\nvm\package_cache“`  配置缓存目录
>   3. `yarn config set temp-folder “D:\Tool\dev\nvm\package_tmp”` 配置临时目录
>   4. 我们需要将 D:\Tool\dev\nvm\package_global\global\node_modules\bin 整个目录 添加到系统环境变量中去，否则通过yarn 添加的全局包 在cmd 中是找不到的。

```cmd
    yarn -h                         # 帮助
    yarn -v                         # 版本
    yarn global dir                 # 全局安装位置
    yarn global bin                 #  yarn bin目录
    yarn config list                #  package.json和npm的配置
    yarn config current             # yarn的配置
    yarn install npm@latest -g   # 更新npm(不建议跟新可能出现意想不到的问题)
    yarn init                    # 初始化项目，会在项目下生成一个 package.json 文件
    yarn init -y                 # 按默认 package.json 初始化项目，5.0版本还会生成
    yarn global add  包名        # 全局安装包
    yarn global remove  包名     # 移除全局包
    yarn或yarn install      # 安装所有依赖项：
    yarn install --flat     # 安装一个且只有一个版本的软件包：
    yarn install --force    # 强制重新下载所有软件包：
    yarn install --production   # 只安装生产依赖关系：
    yarn add 包名      # 安装 dependencies 开发依赖包，会打包进项目
    yarn add 包名 -D 或者 --dev  # 安装 devDependencies  生产依赖包，不会打包进项目，开发时候使用
    yarn remove 包名            # 移除包
    yarn run 命令 或者直接 yarn 命令      # 运行 package.json 文件中 script项的命令
    yarn upgrade-interactive --latest  # 显示升级选择让用户选择那些需要更新
    yarn upgrade               # 更新全部包
    yarn upgrade global 包名    # 更新全部全局包
    yarn global list --depth=0 # 全局包
    yarn cache list            # 缓存
    yarn cache dir             # 全局缓存目录
    yarn cache clean           # 清理缓存
```

## yrm

> - GitHub: [https://github.com/i5ting/yrm](https://github.com/i5ting/yrm)
> - 安装：`npm i -g yrm` 或者 `yarn add global yrm`
> - 用户配置文件[.yrmrc](./config/yrmrc),注：文件在电脑用户根目录下
> - 配置nrm：`nrm user taobao` 设置淘宝源

```cmd
    yrm -h                    # 帮助
    yrm -V                    # 版本
```

### 和 nrm 一样使用(nrm替换yrm就好),[链接](#nrm)

## mddir

> - GitHub：[https://github.com/JohnByrneRepo/mddir](https://github.com/JohnByrneRepo/mddir)
> - 安装： `npm i -g mddir` 或 `yarn add global mddir`

```cmd
  node mddir 目录    # 默认当前目录生成一个文件 directoryList.md
```

### 结束语：欢迎该做补充
