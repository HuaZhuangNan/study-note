/*
  书上页数：50
	最后修改时间：2018年10月13日17:24:41
	SQL Server 把数据库的清单放在系统数据库sysdatabases中
	exists(查询语句)检测某个查询语句是否存在
*/
USE master --设置当前数据库为master（主数据库）
GO
if exists(Select * from sysdatabases Where name='数据库名')
Drop DataBase 数据库名/*删除数据库*/
