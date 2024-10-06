---
title: 记一次部署Memos
tags:
  - 站点折腾
  - 自建部署
categories:
  - 站点折腾
cover: >-
  https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230801/未标题-1.66u9tpp5tsw0.webp
abbrlink: 18063
date: 2023-08-01 16:30:15
lang: zh-CN
---
# 前言
ispeak的编辑器用的jsdelivr，这导致了每次我要新建日记的时候编辑器没显示，被迫换方案
经过[木木](https://immmmm.com/hi-memos/)大佬的介绍，我找到了一个叫Memos的知识库
但我没钱买服务器部署，于是就考虑无服务器部署
# Render部署
我首先考虑的是Render部署，因为Render能部署“Web Server”
但部署完成没几个小时后，我发布的日记消失了
看了一下，Render没有访问就会清理数据并且重新部署
考虑到这个是用来做日记用的，数据很重要，因此，我放弃了Render
# Zeabur部署
Zeabur部署Memos很方便，自带的Marketplace就有Memos
但由于Zeabur现在只能免费7天，过期之前需要登陆上去手动续期
再加上Zeabur自带的Marketplace要收费
因此，我放弃了Zeabur部署
# Replit部署
我找的很多Replit部署Memos的教程都不是最新版本的Memos
看了一下教程，发现那些教程大多都是自己构建后端的
那么我就在想：能否用Github Action部署最新版本Memos后端呢？
于是搞了很久，经历了许多次失败，终于构建成功！
然后用构建完成的Memos试运行，结果显示“No frontend embeded.”
查issues，才知道原来得部署前端
问题不大！将部署前端的命令写在update.yml里面
第二次试运行，成功！
![AP7iMWt7QU](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230801/AP7iMWt7QU.6stfiu4ghlk0.png)
{% psw （别问为啥没有第一次试运行的图。。。。。。忘记截图了） %}
感兴趣的话可以看一下我的项目：https://github.com/SinzMise/memos-on-replit
# Koyeb部署
最近听安小歪说Replit要收费了
![](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/QQ_EqAgdYlEts.png)
他的Memos转到了codesandbox，我的也转过去了
但我们发现codesandbox会休眠，不得不换个部署平台
之后我发现Memos能连Mysql或者postgreSQL数据库，于是我决定换koyeb部署
注册koyeb账号必须开t才没有银行卡验证的选项
然后再新建个Web Service
![](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/msedge_Kd4LmCDhpM.png)
选择docker
![](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/msedge_rAnK6dlRB5.png)
在image这一行填写：`ghcr.io/usememos/memos:latest`，点击Next
![](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/msedge_3pmSNqxnlH.png)
划到下面，点击Advanced，Environment variables新增两个变量：`MEMOS_DRIVER`和`MEMOS_DSN`

{% note warning %}注意：两个变量都是必选的，当然你也可以不用添加这两个，只不过一旦Memos更新数据会丢失！{% endnote %}

![](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/msedge_3jo6namzf5.png)
| 变量      | 值 |
| ----------- | ----------- |
|MEMOS_DRIVER|数据库名称，MySQL就填`mysql`，postgreSQL就填`postgres`|
|MEMOS_DSN|数据库地址|

{% note info %}
值得一提的是，你使用postgreSQL的时候，数据库地址必须要添加前面的`postgresql://`
也就是下面的例子：
```
postgresql://postgres:PASSWORD@localhost:5432/memos
```
mysql不用在前面加`mysql://`
直接按照下面的例子填写就行（注意括号和前面的tcp要去掉！）
```
root:password@tcp(localhost)/memos_prod

```
{% endnote %}

然后将Exposing your service下面的port改为5432，然后deploy
等一会你就能体验到Memos了

{% note info %}
但koyeb绑定域名好像要钱，因此最好再注册个koyeb账号来搞Uptime Kuma ，然后监测源站（这样的话可以确保反代的时候源站不会没）
{% endnote %}

# Serv00部署
由于Koyeb的部署会自动休眠，因此不得不找别的部署方式

因为之前看见了Serv00部署Alist的方式，所以我寻思着用serv00的方法部署memos
但是苦于不知道前端文件夹放到哪里，因此只能搁置了
然后那个博主就补充了一个serv00部署Memos的教程
教程我放这里了（主要是我懒得搬过来）：
{% link Serv00部署Memos,https://blog.rappit.site/2024/01/27/serv00_logs/#Memos %}

