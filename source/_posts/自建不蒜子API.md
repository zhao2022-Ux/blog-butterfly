---
title: 自建不蒜子API
tags:
  - 站点折腾
  - 自建部署
categories:
  - 站点折腾
abbrlink: 28536
date: 2024-01-11 19:52:48
cover: https://vip1.loli.io/2022/05/11/eKfrdV9p48IcCj5.jpg
lang: zh-CN
---
# 前言
[不蒜子](https://busuanzi.ibruce.info/)是一款很好用的前端计数工具，但是因为流量日渐变多，经常会出现 502 的情况
于是就找到了[soxft/busuanzi](https://github.com/soxft/busuanzi)，然后用docker成功在Koyeb上部署不蒜子
但是由于这个不蒜子没有Web 管理面板，而如果之前使用的是其他程序统计访问量，切换到使用 busuanzi 来统计，就需要修改访问量
所以我基于[yuantuo666/busuanzi](https://github.com/yuantuo666/busuanzi)这个版本的不蒜子魔改，然后将其部署到docker和ghcr里面
然后这个教程就诞生了（bushi

# Koyeb部署
## Redis数据库
这个不蒜子默认用的Redis数据库，这边推荐[upstash](https://upstash.com/)
直接注册个账号然后新建个项目
![](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/msedge_NKCiPPkXqL.png)
复制这里面的数据库地址（后面的“:”和端口要复制下来！）和密码
## 正式开始部署
老样子，注册个koyeb账号
注册koyeb账号必须开t才没有银行卡验证的选项
(注册过koyeb账号且没有部署项目就不用这个步骤)
然后再新建个Web Service
![](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/msedge_Kd4LmCDhpM.png)
选择docker
![](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/msedge_rAnK6dlRB5.png)
image填写`docker.io/szninty/busuanzi:houtai`或者`ghcr.io/SinzMise/busuanzi`
![](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/msedge_TZkQypDvYW.png)
划到下面，点击Advanced，添加环境变量
![](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/msedge_rZ7fnbMSfz.png)
| Name      | Value |必选|
| ----------- | ----------- | ----------- |
|API_SERVER|busuanzi.js API地址 需要转译|√|
|REDIS_ADDR|Redis 数据库地址（带端口）|√|
|REDIS_PWD|Redis 密码|√|
|JWT_SECRET|JWT加密秘钥，可乱填|√|
|ADMIN_PASSWORD|后台管理密码|√|
|LOG_ENABLE|是否开启日志，默认 true||
下面的port改为`8080`
准备好了之后可以点击deploy，等一会就可以体验到不蒜子了