/*
	书上72面
	IDentity(起始值起始值,增值)表示这列为自动标识列
	最后修改时间：2018年10月13日17:25:04
*/
Use --设置当前数据库表名
Create Table 表名
(
	/*
		字段名字 数据类型  not null IDentity(起始值,增值) Primary Key unique,--非空必填主键唯一性
		字段名字 数据类型  not null,--非空必填
		字段名字 数据类型	 --允许为空
	*/
)
--修改表结构
Alter Table 表名 Add 字段名字 数据类型  not null IDentity(起始值起始值,增值) --添加列
Alter Table 表名 Alter Column 字段名字 char(18) --设置数据长度为18
Alter Table 表名 Drop Column 字段名字  --删除列
--添加主键约束
Alter Table 表名
Add ConstRaint 约束名 Primary Key (字段名字)
--添加唯一约束
Alter Table 表名
Add ConstRaint  约束名 unique (字段名字)
--添加默认约束
Alter Table 表名
Add ConstRaint  约束名 Default('默认值') For 字段名字
--添加Check约束
Alter Table 表名
Add ConstRaint  约束名 Check (字段名字 Between 0 And 100) ---约束大小在0-100之间
/*
	字段名字 like '%@%' --表示必须包含@字符
		正则表达式 :
			like    模糊匹配
			%       任意字符通配
			_       一个字符
			[]     指定1-2之间（A-B）或者（a-b）等
			[^1-2] 指定不在1-2之间（^A-B）或者（^a-b）等

	字段名字 >=0 And 字段名字 <=100 --约束大小在0-100之间
		逻辑表达式:
			And 表示和
			Or  表示或者
			Not 表示否定条件

	len(字段名)   计算长度

	字段名字 != 100  --约束不得等于100
	字段名字 <> 100  --约束不得等于100

	*/
--添加外键约束
Alter Table 表名
Add ConstRaint  约束名
Foreign Key(当前表字段名) References 表名2（这个表的字段名） --主表（表名2）和从表（表名），关联字段为（字段名）
GO
--删除约束
ALter Table 表名
Drop Constraint 约束名
