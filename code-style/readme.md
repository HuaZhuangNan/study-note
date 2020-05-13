# 代码规范

## 语言

- [HTML+CSS,](./html-css.md)
- [SASS,LESS](./style.md)
- [JavaScript](./js.md)
- [TypeScript](./ts.md)

## 工具插件

-[editorconfig](#editorconfig)  代码空格编码等规范
-[eslint](./eslint.md)  js 规范
-[tslint](./tslint.md)  es 规范

## editorconfig

> - 官网：[http://editorconfig.org/](http://editorconfig.org/)
> - GitHub[https://github.com/editorconfig/editorconfig-core-js](https://github.com/editorconfig/editorconfig-core-js)
> - 安装 vscode 安装 `ext install EditorConfig`
> - 配置：项目根目录目录新建立 **.editorconfig** 文件写入配置

```cmd
    root = true                # 表示当前配置就是这个项目的配置
    [*]                        # [*]  方括号里面是正则匹配文件使用，* 表示所有文件
        charset = utf-8        # 文件字符编码
        tab_width = 2          # tab 键的大小
        indent_size = 2        # tab 占用2个位置
        indent_style = space   # 使用 space 占用位置
        end_of_line = lf       # 使用 lf 换行符
        insert_final_newline = true        # 在文件最后一行添加空白行
        trim_trailing_whitespace = true    # 去除每行后面的空格
    [*\.[html|css]]             # 可以多个
        tab_width = 4
        indent_size = 4
```
