# 报名管理系统

## 技术

+ nodejs
+ express
+ mysql

## mysql

+ [配置文件](./src/models/config.js)

```SQL
# 创建registration_system 数据库
CREATE DATABASE `registration_system` CHARACTER SET 'utf8' COLLATE 'utf8_general_ci';
```
# 创建管理员表

```SQL
CREATE TABLE `registration_system`.`admin`  (
  `name` char(10) NOT NULL COMMENT '管理员用户名',
  `password` varchar(30) NOT NULL COMMENT '管理员密码',
  PRIMARY KEY (`name`)
);
```

# 创建用户表
```SQL

```

## 运行

```shell

npm run build
//或
yarn build
```
