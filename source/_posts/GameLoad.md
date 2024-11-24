---
title: GameLoad
description: Play Unity games through your browser
cover: 'https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/6624165c7f851.9nzrkxau2v.webp'
tags:
  - 游戏相关
  - 其它游戏
categories: 
  - 游戏相关
abbrlink: 21375
date: 2023-04-04 20:07:45
lang: zh-CN
---
# 前言
自从在我的360极速浏览器安装FVD Downloader这个插件后，我就习惯将4399上的swf下载下来了
后面我在玩4399上的U3D游戏（得安装UnityWebPlayer才能玩）的时候弹出了这个提示：
![360chrome_xFZnhVi7dg](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230404/360chrome_xFZnhVi7dg.1xookg8vju2o.webp)
但FVD Downloader能识别到游戏文件
![360chrome_3Yt4q2IsEs](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230404/360chrome_3Yt4q2IsEs.26dp6kmu464g.webp)
于是我将后缀为“unity3d”的游戏下载下来，打算找个游戏启动器来启动这个游戏
找了一圈找到了这玩意：
![msedge_ZV2ru5IQh0](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230404/msedge_ZV2ru5IQh0.48zi2sq5i620.webp)

这个软件安装完成之后，会自动关联后缀为“unity3d”的文件
经测试，能顺利游玩大部分u3d游戏
# 示例
1.[杀手小乔3D](http://www.4399.com/flash/147405.htm)
![GameLoad_WN1oQsK9Bq](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230404/GameLoad_WN1oQsK9Bq.3quhllbtc540.webp)
![GameLoad_bHycAxI9Xi](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230404/GameLoad_bHycAxI9Xi.yj0xvg4dork.webp)
2.[优米酱GO](https://www.4399.com/flash/191954.htm)
![GameLoad_PDftUq8rZR](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230404/GameLoad_PDftUq8rZR.4ofq40gtb3e0.webp)
![image](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230404/image.12alzy49ndyo.webp)
![GameLoad_W0oG3jH9c9](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230404/GameLoad_W0oG3jH9c9.llzawzb03ts.webp)
3.[追逐繁星的孩子（追逐繁星的夏娜）](http://www.4399.com/flash/151847.htm)
![GameLoad_ZKdZV5gYnn](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230404/GameLoad_ZKdZV5gYnn.214xzg7lessg.webp)
![GameLoad_25LfvnlHtf](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230404/GameLoad_25LfvnlHtf.1uq8qqsy49s0.webp)
![GameLoad_YH7ebdiJqU](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230404/GameLoad_YH7ebdiJqU.hjnvf80xo6o.webp)
后面看了第三个游戏的一个评论才知道这个角色叫Unity娘（Unity Chan），而且这模型还是免费的
![msedge_5G6QZ3PZVJ](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230404/msedge_5G6QZ3PZVJ.2lzj9irde260.webp)
{% psw （怪不得第二个游戏和第三个游戏的主角都是同一个模型。。。。。） %}
# 下载链接
https://www.gameload.top/
# 后记
我看了下Gameload的官网，发现这玩意支持JS加载：
![msedge_yw02846AU8](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230404/msedge_yw02846AU8.5rh04nc4l3s0.webp)
插件示例我先放上去了，后面我再来搞这玩意吧：
``` html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-browser/0.0.8/jquery.browser.min.js"></script>
<script>
$(document).ready(function(){
    if ($.browser.chrome === true && $.browser.versionNumber >= 45) { //detect Chrome 45+
        var myJsonString = JSON.stringify({ title: '游戏标题', file: '游戏链接', type: "unity", width: 800, height: 600 });
        try{ //IE8 does not support window.btoa   
            var insert_data = window.btoa(myJsonString); 
        }catch(e){ 
        functionToHandleError(e);
        }
        
        $('#unityPlayer .missing').prepend('<center><a href="gameload://' + insert_data + '/"><img alt="Play game with Gameload!" src="http://data.gameload.top/download/playgameload.png" /></a><br /><br />Install Gameload to play Unity games<br /><a href="http://data.gameload.top/download/gameload.exe" title="Install Gameload now!"><img alt="Install Gameload now!" src="http://data.gameload.top/download/getgameload.png" /></a></center>');
    }
});
</script>
<div id="unityPlayer">
    <div class="missing"></div>
</div>
```