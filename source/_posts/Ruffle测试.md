---
title: Ruffle测试
tags:
  - 站点折腾
  - Flash相关
categories:
  - 站点折腾
cover: >-
  https://images1.blog.sinzmise.top/images/Canvas-Ruom.7pbzp97mh.webp
abbrlink: 57692
date: 2024-05-25 21:12:39
lang: zh-CN
---
这玩意也是很久之前就认识到了
我甚至记得我还给这玩意写过Hexo插件
~~但后来我给这个插件删了，因为这玩意的配置真的简单~~

# 介绍
随着网页的安全性升级，带有安全漏洞的Flash也逐渐被淘汰，现在的主流浏览器几乎都不支持Flash
也因此，很多的站点都已经废弃掉他们的flash了
但后面我找到了一款叫Ruffle的工具，这玩意是个全新的开源Flash项目，旨在从本地到网页完全替代老旧的Flash
而且不同于带有安全漏洞的Flash，Ruffle采用了高效安全的Rust语言编写，同时完全开源保证了及时修补漏洞

搞这玩意的很多教程都是得在浏览器安装插件，让用户通过这个插件来实现播放flash
但我在Ruffle的官网找到个这玩意：
![官网截图](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20240525/msedge_3a7lLAiAqh.1ov9jby5xi.webp)
这玩意能通过引入在站点js的方式来让自己的站点再次适配swf

那就废话不多说，赶紧开始吧！
~~（话说好像在2024好像只有我对flash依然这么感兴趣。。。。。。。）~~
# 配置Ruffle教程
## 基础
只需要在站点下面引入这行代码就可以了
```html
<script src="https://jsd.onmicrosoft.cn/npm/@ruffle-rs/ruffle"></script>
```
如果你想用swfobject来引入swf的话，还得另外引入这个代码：
```html
<script src="https://jsd.onmicrosoft.cn/gh/swfobject/swfobject@master/swfobject/swfobject.js"></script>
```
之后就可以在站点放置flash动画了！
不过估计也有人不知道flash动画怎么放，我这里就写个Demo吧！
# Demo
## 1.Flash音乐播放器（没有SWFObject的）
测试音乐：[Rain And Tears (纯音乐) - Pop Mania](https://y.qq.com/n/ryqq/songDetail/00366bJo34aPAd)
（这首歌是一个虎牙中的一位MC实况主经常用的背景音乐，这位实况主还是我第一位关注的玩MC的实况主，然后我就对这个bgm印象很深）
{% tabs Flash音乐播放器Demo %}
<!-- tab 新浪博客swf音乐播放器 -->
{% raw %}
<div id="sinaplayer"></div>
<button id="loadsinaplayer" class="btn-beautify block orange center larger" onclick="loadsinamusic()">点我测试</button>
<script>
function loadsinamusic() {
    document.getElementById("sinaplayer").innerHTML='<embed width="238" height="24" name="FlashVars" wmode="opaque" play="true" loop="true" scale="showall" src="https://files.blog.sinzmise.top/swf/sina_music_player.swf" FlashVars="url=https%3A%2F%2Ffiles.blog.sinzmise.top%2Fmp3%2FRainAndTears.mp3" type="application/x-shockwave-flash"></embed>';
    document.getElementById("loadsinaplayer").style.visibility = 'hidden';
}
</script>
{% endraw %}
<!-- endtab -->

<!-- tab 人人网日志swf音乐播放器 -->
{% raw %}
<div id="renrenplayer"></div>
<button id="loadrenrenplayer" class="btn-beautify block orange center larger" onclick="loadrenrenmusic()">点我测试</button>
<script>
function loadrenrenmusic() {
    document.getElementById("renrenplayer").innerHTML='<embed width="360" height="30" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowfullscreen="false" allowscriptaccess="sameDomain" bgcolor="#ffffff" scale="noscale" quality="high" menu="false" loop="false" wmode="transparent" src="https://files.blog.sinzmise.top/swf/renren_music_player.swf?url=https%3A%2F%2Ffiles.blog.sinzmise.top%2Fmp3%2FRainAndTears.mp3&Autoplay=0" />';
    document.getElementById("loadrenrenplayer").style.visibility = 'hidden';
}
</script>
{% endraw %}
<!-- endtab -->

<!-- tab 开心网日志swf音乐播放器 -->
{% raw %}
<div id="kaixinplayer"></div>
<button id="loadkaixinplayer" class="btn-beautify block orange center larger" onclick="loadkaixinmusic()">点我测试</button>
<script>
function loadkaixinmusic() {
    document.getElementById("kaixinplayer").innerHTML='<embed width="365" height="50" align="middle" flashvars="url=https%3A%2F%2Ffiles.blog.sinzmise.top%2Fmp3%2FRainAndTears.mp3&autoplay=0" src="https://files.blog.sinzmise.top/swf/kaixin_music_player.swf" wmode="transparent" loop="false" menu="false" quality="high" scale="noscale" salign="lt" bgcolor="#ffffff" allowscriptaccess="sameDomain" allowfullscreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"/>';
    document.getElementById("loadkaixinplayer").style.visibility = 'hidden';
}
</script>
{% endraw %}
<!-- endtab -->
<!-- tab Demo源码 -->
新浪的
```html
<embed width="238" height="24" name="FlashVars" wmode="opaque" play="true" loop="true" scale="showall" src="https://files.blog.sinzmise.top/swf/sina_music_player.swf" FlashVars="url=https%3A%2F%2Ffiles.blog.sinzmise.top%2Fmp3%2FRainAndTears.mp3" type="application/x-shockwave-flash"></embed>
```
人人网的
```html
<embed width="360" height="30" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowfullscreen="false" allowscriptaccess="sameDomain" bgcolor="#ffffff" scale="noscale" quality="high" menu="false" loop="false" wmode="transparent" src="https://files.blog.sinzmise.top/swf/renren_music_player.swf?url=https%3A%2F%2Ffiles.blog.sinzmise.top%2Fmp3%2FRainAndTears.mp3&Autoplay=0" />
```
开心网的
```html
<embed width="365" height="50" align="middle" flashvars="url=https%3A%2F%2Ffiles.blog.sinzmise.top%2Fmp3%2FRainAndTears.mp3&autoplay=0" src="https://files.blog.sinzmise.top/swf/kaixin_music_player.swf" wmode="transparent" loop="false" menu="false" quality="high" scale="noscale" salign="lt" bgcolor="#ffffff" allowscriptaccess="sameDomain" allowfullscreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"/>
```
<!-- endtab -->
{% endtabs %}

还没写完，后续再写更多Demo