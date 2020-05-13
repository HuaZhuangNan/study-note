# 域名解析

- 域名解析就是国际域名或者国内域名以及中文域名等域名申请后做的到 IP 地址的转换过程。IP 地址是网路上标识您站点的数字地址，为了简单好记，采用域名来代替 ip 地址标识站点地址。域名的解析工作由 DNS 服务器完成。

## 域名解析记录类型

### A 记录

- 又称 IP 指向，用户可以在此设置子域名并指向到自己的目标主机地址上，从而实现通过域名找到服务器。指向的目标主机地址类型只能使用 IP 地址。

### CNAME 记录

- 又称别名记录,假如有个**example.com**（A 记录）。它同时提供 WWW 和 MAIL 服务，为了便于用户访问服务。可以为该计算机设置两个别名（CNAME）：WWW 和 MAIL。这两个别名的全称就 **www.example.com**和**mail.example.com**。实际上他们都指向 **host.example.com**。通俗的说就是这两个域名访问的时候都会访问**example.com**
- A 记录优先于 CNAME 记录。即如果一个主机地址同时存在 A 记录和 CNAME 记录，则 CNAME 记录不生效

### MX 记录

- 邮件交换记录，用于将以该域名为结尾的电子邮件指向对应的邮件服务器以进行处理。
- 用户所用的邮件是以域名**example.com**为结尾的，则需要在管理界面中添加该域名的 MX 记录来处理所有以 **@example.com** 结尾的邮件地址。

### NS 记录

- 解析服务器记录。用来表明由哪台服务器对该域名进行解析。这里的 NS 记录只对子域名生效。
- 如果用户希望台服务器解析**host.example.com**，则需要设置**host.example.com**的 NS 记录。

### TTL 记录

- TXT 记录一般指为某个主机名或域名设置的说明
- admin IN TXT "author: HuaZhuangNan, github: <https://github.com/HuaZhuangNan>"；
- 检测记录，输入命令**nslookup -q=txt host.example.com 或者 example.com**，查看返回的结果与设置的是否一致即可。

### 使用 A 记录和 CNAME 记录结合使用

- A 记录指定主要域名**example.com**;而**www.example.com**也需要指定**example.com**；这个时候就是用 CNAME 记录设置**www.example.com**的指向问题
