---
title: 马里奥制造1打百人团教程
tags:
  - 游戏相关
  - 其它游戏
categories:
  - 游戏相关
cover: >-
  https://images1.blog.sinzmise.top/images/Canvas-Ruom.86tous013z.webp
abbrlink: 10996
date: 2024-04-27 19:43:40
lang: zh-CN
---
不知道什么时候，我开始玩马里奥制造（以下简称“马造”）了
但是我没有Switch，模拟器配置较为麻烦，所以我没法玩马造2，只能玩玩马造1
然而在2024年4月9日，任天堂 3DS / WiiU 在线功能停服

在停服之前，我就一直知道马造1有私服，但是这玩意之前不知道为啥总配置失败
现在倒是配置好了，话不多说，游玩教程开始！

# 下载懒人包
这玩意我已经打包成为一个懒人包了
大伙想要的可以下载：
{% btns rounded grid5 %}
{% cell 懒人包链接, https://pan.sinzmise.top/SMM/SMM.7z, fas fa-download %}
{% endbtns %}
下载完成之后先点击Start启动服务端
![SmmServer_5kCtRQwhp0](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/SmmServer_5kCtRQwhp0.5mnlvwyhv7.webp)
{% tip success %}
正常情况下的这四个的提示是这样的：
- NEX（SMM） 占用端口59900和59921
![SmmServer_ONoCeAxy5j](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/SmmServer_ONoCeAxy5j.7awyt3pvwx.webp)
- NEX（Friends）占用端口60000和60021
![SmmServer_H0VbUAIUgS](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/SmmServer_H0VbUAIUgS.4xucbwc9yi.webp)
- Pretando++ 占用端口8383
![SmmServer_NY1UtocxVh](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/SmmServer_NY1UtocxVh.7awyt3q0js.webp)
- Caddy 占用端口80和443
![SmmServer_Hngcypv9AG](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/SmmServer_Hngcypv9AG.6ik3bd9cqv.webp)
{% endtip %}
{% tip warning %}
***请注意：***
如果出现异常的话
十有八九可能是端口被占用了
请先用`netstat -ano|findstr 程序对应的端口号`查看端口有没有被占用
如果端口被侵占了，输入`taskkill /t /f /im 进程号`关闭占用端口的进程
如果还是不行的话。。。。加Q群问（在最下方）
{% endtip %}
一切正常的话，点击“Start Cemu”打开模拟器***注意：必须用自带的模拟器！要不然打开马造世界关卡会提示106-0502错误***
![SmmServer_zKuO6e7rGt](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/SmmServer_zKuO6e7rGt.4xucbwm194.webp)
然后双击Super Mario Maker，等待加载完成便可以游玩了！

{% psw 这可能是我写博客以来第一次写这么简短的教程 %}