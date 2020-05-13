# linux新建用户组、用户、用户目录

## 新建用户组 VRgroup
	```linux
	 # groupadd VRgroup
	```
## 新建用户设置用户目录 
	```linux
	# useradd -d /opt/testroot -m test -g VRgroup  // 新建用户
	// 将test用户主目录改为/opt/testroot，用户组为VRgroup
	# passwd test   // 设置密码
	New password:*******
	Re-enter new password:*******
	// 设置目录权限
	# chmown test:VRgroup testroot(目录)
	
	useradd -d /opt/javaserverroot -m javaserver -g VRgroup
	
	```
## 查看用户组
	```linux
	# cat /etc/group
	```
## 查看用户
	```linux
	# cat /etc/passwd
	```
## 建立目录
	```linux
	# mkdir 目录名
	```
## 删除目录
	```linux
	# rm -r 目录名
	```