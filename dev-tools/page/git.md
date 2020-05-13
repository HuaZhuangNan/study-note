# git 工具

## 概述: Git是目前世界上最先进的分布式版本控制系统（没有之一）

## VSCode 插件 GitLens

## 安装，下载安装包后(修改安装位置后)一直下一步就好

> 官网：[https://git-scm.com/](https://git-scm.com/)
>
> GUI 可视化 git
>
> Bash 命令行 git

## 配置

```git
  # 如果需要全局配置(参数--global)
  git  config --global  user.name "用户名"  // 配置用户名
  git  config --global  user.email "邮箱"  // 配置用户名
```

## 基本使用

1. 先去 GitHub (其他仓库服务器有码云，GitLab等) 创建一个账号
2. 新建一个test仓库
3. 新建一个test项目
4. 项目初始化 ``git init``  => 在命令目录创建了 .git  一个隐藏目录
5. 添加到仓库大门口 (暂存区) 、按tap键可以自动补全文件名

    ```git
      git help 查看帮助
      git add ./readme.md 单个修改文件
      git add ./ 目录下所有修改的文件
    ```

6. 把文件全部放入仓库房间（版本库，文件都被转换为二进制文件）里面（-m 后面的是说明）没有则会打开默认编辑器输入说明

    ```git
      git commit -m "我们完成了第一个功能！"
          返回：
      [master (root-commit) 1a73866] 我们完成了第一个功能！
      1 file changed （文件个数）, 1 insertion(+),  （插入次数）1 deletion （一次删除）
      create mode 100644 readme.md
    ```

7. 查看状态

    ```git
      git status :
          返回1： ... modified:   readme.md ...
      红色表示修改了还没放到门口
      绿色表示放到了门口
        返回2：
      On branch master
      nothing to commit, working tree clean
      在分支上没有什么可交的，工作的分支是干净的。(所有修改都保存了)
    ```

    > 6,7 合并使用，直接把所有修改的文件(--all)放到版本库里面 ``git commit --all -m  "这是一次操作"``

8. 查看日志:

    ```git
      1.  git log  查看详情版本日志
        返回：Author: 你的用户名 <邮件地址>
      Date:   Mon Mar 4 16:49:30 2019 +0800
          这是我的第三个功能！
      commit 6ce8db6365db6f58ed1ace79ebaa9dc577ac2de2
      。。。。。。

      2.   git log --oneline 查看精简版的日志
        返回： 66079e1 (HEAD -> master) 这是我的第三个功能！
      6ce8db6 我们完成了第二个功能！
      1a73866 我们完成了第一个功能！
    ```

9. 提交 **注意： 当服务器版本和本地版本不一样的时候我们就需要先pull在本地解决冲突然后在push**
    1. HTTP 提交(不提倡)

        ```git
          地址：https://github.com/用户名/test.git
          1、提交：push
          提交代码：git push https://github.com/用户名/test.git master （master分支名，主分支）
          输入账号：
          输入密码：
          。。。提交中
        ```

    2. SSH 提交

        ```git
          公钥 和 私钥 两者有联系的
          1、生成密钥：任意目录输入命令 ssh-keygen -t rsa -C  "密钥"  (rsa非对称密算法)
          2 、输入路径：默认路径 /c/user/用户名/.ssh/id_rsa  (id_rsa文件名) 或者 E:/Tool/Git/GitSSH/id_rsa （最好不要后面可能报错）
              输出：Enter passphrase (empty for no passphrase):
          Enter same passphrase again:
          都可以不输入
            绑定到GitHub上  id_ras.pub 里面的内容放到SSH and GPG key 里面去
            // 报错：1.删除.ssh文件夹（直接搜索该文件夹）下的known_hosts(手动删除即可
            // 2. ssh -T git@github.com 生成 known_hosts 、测试连接你的git地址，ssh -T git@xxx.xxx.com  输入正确密码后如果出现Welcome就是连接成功了。
          3、提交：git push git@github.com:用户名/test.git master (分支名）
        ```

10. 下载

  ```git
    1. 直接去 GitHub 下载
    2.  pull 指令下载
    3. clone 拷贝(一般开发使用)
    git pull  https://github.com/MoXuanHeng/test.git  master (分支名）
    pull前提、本地必须要初始化一个数据仓库
    git clone  https://github.com/MoXuanHeng/test.git
    会得到相同数据，并且会建立项目的文件夹，多次执行会覆盖
  ```

## 分支

```git
    分支：(主分支：master)
    1. 产生：主要因为有时候代码没写完需要开辟不同的时间线,让其它功能不受影响
    2. 显示当前分支上的所有分支：git branch
      PS：当前分支就是输出的有 “ * ”号分支
    3. 创建一个（dev）分支： git branch dev
    4. 切换分支： git checkout dev
    5. 合并分支：
      一、git checkout master  切换到主分支 Switch 。。。
      二、git merge dev  合并dev分支到当前分支
    注意：如果忘记把分支合并就在主分支操作了那么就需要我们手动合并分支
      1.处理数据
        <<<<<<< HEAD
          主分支操作数据。。。
        =======
          忘记的分支数据。。。
        >>>>>>> dev
      2. 然后把处理完的提交保存git
    6、删除分支：
      一、git checkout master  切换到主分支或者dev上一级分支
      二、git branch -d dev
```

## 回退

```git
    1. 下标回退版本:
    qit reset --hard  Head~0 版本回退（到0）会直接覆盖到现在编写的代码
    0 就是最后（上次）保存的那次状态、上上次就是 1

    2、通过版本号回退： 、会直接覆盖到现在编写的代码
    qit reset --hard  Head~0   === qit reset --hard 66079e1
            1   ===    6ce8db6

    3、通过版本号实现(旧版本到新版本) 、会直接覆盖到现在编写的代码
    假设当前版本 => 1a73866 替换到  qit reset --hard 66079e1

    4、版本号切换等日志获取：
    git reflog
        返回：66079e1 (HEAD -> master) HEAD@{0}: commit: 这是我的第三个功能！
    6ce8db6 HEAD@{1}: commit: 我们完成了第二个功能！
    1a73866 HEAD@{2}: commit (initial): 我们完成了第一个功能！
```

## 其他

  ```git
    一、当前项目地址的
    1、地址简写：origin
      git remote add origin git@github.com:Xuan/test.git
    2、分支关联（-u参数会把本地分支和远程指定分支进行关联）
      git push origin -u master === git push origin master(不关联，只是简写)
      以后就可以直接写：git push
    二、当前项目模式切换：
    1. 查看当前的remote方式 git remote -v：
    2.修改为https: 简写：origin
      git remote set-url origin https://github.com/Xuan/test.git
    4.修改为ssh:   简写：origin
      git remote set-url origin git@github.com:Xuan/test.git
  ```

## 推荐书籍

- 《pro.git中文版》

## 视频 百度，b站一堆
