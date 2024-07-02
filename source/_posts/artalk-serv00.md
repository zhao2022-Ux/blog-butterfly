---
title: Serv00搭建Artalk
abbrlink: 13624
date: 2024-04-12 22:46:14
cover: https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/pc.6f0hm71zvw.webp
tags:
  - 项目折腾
  - 自建部署
categories:
  - 项目折腾
ai: true
lang: zh-CN
---
之前在安小歪的推荐下，找到了一个叫serv00的东西
但是因为这玩意我不会用，所以我把Serv00一直当成不能部署thinkphp的虚拟主机使用
然而我之前看见了这个教程：
{% link Serv00搭建各种服务,https://blog.rappit.site/2024/01/27/serv00_logs/ %}
于是我决定在Serv00搭建一些项目
但里面没有Artalk的教程，我准备所以按照部署Alist的方法给Serv00部署Artalk
那么好，教程开始！

# 教程
## 准备工作
{% link Serv00搭建各种服务·部署应用前的一些准备工作,https://blog.rappit.site/2024/01/27/serv00_logs/#%E9%83%A8%E7%BD%B2%E5%BA%94%E7%94%A8%E5%89%8D%E7%9A%84%E4%B8%80%E4%BA%9B%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C,,准备工作 %}
## 正式开始
首先在 Panel 中放行一个端口，接着按照下表 Add a New Website ：

|Key| Value                                                        |
|----|--------------------------------------------------------------|
|Domain|`xxx.USERNAME.serv00.net`（也可以把原有的 USERNAME.serv00.net 删掉后重新添加） |
|Website Type| proxy                                                        |
|Proxy Target| localhost                                                    |
|Proxy URL| 留空                                                           |
|Proxy port| 你准备用来部署 Alist 的端口                                            |
|Use HTPPS| False                                                        |
|DNS support| True                                                         |
添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

|Type|Domain|
|----|----|
|Generate Let’s Encrypted certificate|与刚刚添加的站点域名保持一致（如果是原有的 `USERNAME.serv00.net` ，可以省略此步）|
接着SSH登入，并进入刚刚你新建的域名目录下的`public_html`路径下：
```shell
# 使用一键命令安装 Artalk
wget -O artalk-freebsd.sh https://github.com/SinzMise/artalk-deploy/raw/serv00/artalk-freebsd.sh && sh artalk-freebsd.sh
```

在 Panel 中进入 MySQL 选项卡，使用 Add database 功能新建一个数据库。（当然Postgresql也可以，如果不要数据库就只要sqlite可以不用新建）
{% tip info %}密码要求含有大写字母、小写字母和数字三种字符，且长度必须超过6个字符。{% endtip %}
接下来进入 File manager 选项卡，进入`~/domains/xxx.USERNAME.serv00.net/public_html`路径，可以看到一个名为 `artalk.yml` 的文件，右键点击，选择 View/Edit > Source Editor ，进行编辑
这里面就只要改port和db就行，其它的能在后台设置
其中port改成你放行的端口
db是数据库设置
参考如下：
![msedge_1Z2sZqAP2k](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/msedge_1Z2sZqAP2k.70a4hbgckz.webp)
改完之后，点击 save 保存，接着回到 SSH 窗口中进行操作：

测试启动 Artalk：
```shell
./artalk server
```
{% tip info %}确定运行没有问题后，按`Ctrl+c`即可停止运行。{% endtip %}

由于artalk需要创建管理员账号，因此需要输入以下命令：
```shell
./artalk admin
```
最后使用pm2启动并且管理artalk：
```shell
pm2 start "./artalk server" --name "Artalk"
```

{% tip info %} 同样的，你还可以使用 Cloudflared 隧道添加域名，而不选择使用 Proxy 。 {% endtip %}
## 收尾工作
参考教程：
{% link Serv00搭建各种服务·收尾工作,https://blog.rappit.site/2024/01/27/serv00_logs/#%E6%94%B6%E5%B0%BE%E5%B7%A5%E4%BD%9C,,收尾工作 %}
