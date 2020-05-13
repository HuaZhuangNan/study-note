
/*
	书上页数：95-99
  最后修改时间：2018年10月13日17:23:42
	还支持正则表达模糊查询,
		比如：
					Select * From 表名
					Where 列名2 like '%@%' --表示打印列名2值含有@字符的数据
*/
Use --设置当前数据库名


--所有列数据，列中列名=值的数据，按列名(ID)排序  asc 升序 desl降序
Select *
Into 新的表名 --添加到新表
From 表名
Where 列名=值
Order By 列名(ID)
--特定列数据并且不重复
Select distinct 列名,列名 From 表名

--所有列中列名=值的数据
Select * From 表名
Where 列名=值

--特定列中列名不等于值的数据
Select 列名,列名 From 表名
Where 列名<>值


--特定列名重新命名的数据
Select 姓名 AS 列名,年龄 AS 列名 From 表名 一样的


--特定列中重新命名的数据
Select 姓名=列名,年龄=列名 From 表名

--得到的结果 姓名=值 年龄=值

--查询列名2空值的列名值的数据
Select 列名 From 表名
Where 列名2 Is null

--特定列中重新命名数据中列名2为列名2重命名值的数据
Select 姓名=列名,年龄=列名,列名2 AS 列名2重命名值
From 表名
--得到的结果 含有列名2重命名值的特定列的数据

--特定列数据添加到newVIP，约束job列等于单位的数据并且按VIPID排序
Select Name AS '名字', Job As '单位', Phone AS '电话',[E-mail] AS '电子邮件'
--into newVIP
From VIP
Where Name='王帅斌'
Order By VIPID ;
--不重复
Select distinct Job AS '单位'
from VIP;

--显示前 10percent就是前10%数据的意思，或前1条
Select top 1 *
from VIP;
