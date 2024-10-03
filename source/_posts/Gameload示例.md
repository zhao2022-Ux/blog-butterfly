---
title: Gameload示例
description: 一个普通的GameLoad示例
cover: 'https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/6624169a523e7.ic3h96k1t.webp'
tags:
  - 项目折腾
  - Windows软件
categories: 
  - 项目折腾
abbrlink: 20412
date: 2023-04-08 18:25:26
lang: zh-CN
---
## 安装GameLoad
{% raw %}
<a href="https://files.blog.sinzmise.top/unity3d/gameload.exe" class="css-button post-button-gameload"><i class="fa-solid fa-arrows-rotate"></i>&nbsp;&nbsp;安装GameLoad</a>
{% endraw %}

## 游戏示例——优米酱GO
点击游玩：
{% raw %}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-browser/0.0.8/jquery.browser.min.js"></script>
<script>
$(document).ready(function(){
    if ($.browser.chrome === true && $.browser.versionNumber >= 45) { //detect Chrome 45+
        var myJsonString = JSON.stringify({ title: 'Game Title', file: 'https://files.blog.sinzmise.top/unity3d/yumichan.unity3d', type: "unity", width: 800, height: 600 });
        try{ //IE8 does not support window.btoa   
            var insert_data = window.btoa(myJsonString); 
        }catch(e){ 
        functionToHandleError(e);
        }

        $('#unityPlayer-yumichan').prepend('<a href="gameload://' + insert_data + '/" class="css-button post-button-gameload"><i class="fa-solid fa-arrows-rotate"></i>&nbsp;&nbsp;使用GameLoad游玩</a>');
    }
});
</script>
<div id="unityPlayer-yumichan"></div>
{% endraw %}
源码示例
``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-browser/0.0.8/jquery.browser.min.js"></script>
<script>
$(document).ready(function(){
    if ($.browser.chrome === true && $.browser.versionNumber >= 45) { //detect Chrome 45+
        var myJsonString = JSON.stringify({ title: 'Game Title', file: 'https://files.blog.sinzmise.top/unity3d/yumichan.unity3d', type: "unity", width: 800, height: 600 });
        try{ //IE8 does not support window.btoa   
            var insert_data = window.btoa(myJsonString); 
        }catch(e){ 
        functionToHandleError(e);
        }

        $('#unityPlayer-yumichan').prepend('<a href="gameload://' + insert_data + '/" class="css-button post-button-gameload"><i class="fa-solid fa-arrows-rotate"></i>&nbsp;&nbsp;使用GameLoad游玩</a>');
    }
});
</script>
<div id="unityPlayer-yumichan"></div>
```