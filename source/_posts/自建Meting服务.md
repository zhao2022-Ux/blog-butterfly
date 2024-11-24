---
title: 自建Meting服务
description: Meting官方API用不了了，所以。。。。。
swiper_index: 5
cover: https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230128/30165599-36623bea-93a6-11e7-8956-1ddf99ce0e6f.2rbu2i9xfvy0.webp
tags:
  - 站点折腾
  - 自建部署
categories: 
  - 站点折腾
abbrlink: 61417
date: 2023-01-19 19:52:34
lang: zh-CN
---
# 前言
听人说Meting官方API证书过期了，也就是说MetingAPI得自建了
然后很快啊，有人就搞出了自建MetingAPI的Vercel版本
# 教程
## 后端部署
{% tabs 后端部署 %}
<!-- tab Vercel部署（推荐） -->
点击下方按钮，跳转至 Vercel：
[![跳转到Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/xizeyoupan/Meting-API)
名字随便写，然后点击“Create”
![msedge_4fdyFO3sCF](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230119/msedge_4fdyFO3sCF.7hpgbpasakc0.webp)
看到这个就算成功了
![msedge_fs4WGcMy4l](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230119/msedge_fs4WGcMy4l.326qjm58vf20.webp)
<!-- endtab -->

<!-- tab 服务器部署 -->
去https://github.com/injahow/meting-api/releases 下载编译好的压缩包上传到服务器上（服务器必须开启跨域！）
<!-- endtab -->
{% endtabs %}
## 前端部署
### Butterfly主题
编辑[Blogroot]\themes\butterfly\layout\includes\third-party\aplayer.pug
``` diff
link(rel='stylesheet' href=url_for(theme.asset.aplayer_css) media="print" onload="this.media='all'")
script(src=url_for(theme.asset.aplayer_js))
script(src=url_for(theme.asset.meting_js))
+ script.
+   var meting_api='https://（你的api地址）/api/?server=:server&type=:type&id=:id&auth=:auth&r=:r';
```
### HTML代码
``` html
<script>
var meting_api='https://（你的api地址）/api/?server=:server&type=:type&id=:id&auth=:auth&r=:r';
</script>
```