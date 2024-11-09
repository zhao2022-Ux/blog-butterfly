---
uuid: 5f57d336-9dd9-11ef-8624-a3174cf555fc
title: 小康大佬的说说方案 ———— ispeak搭建教程
description: 这篇文章是我之前写过的教程的重写
swiper_index: 3
abbrlink: 38964
date: 2023-01-13 21:01:37
headimg: https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230114/msedge_GVRhG42nuu.1g9uz8t24io0.webp
tags:
  - 站点折腾
  - 页面魔改
categories:
  - 站点折腾
lang: zh-CN
---
搞ispeak时发现ispeak更新，能自定义评论了，也就是说我之前写的[ispeak教程](https://blog.xsnet.eu.org/posts/43224/)失效了
没办法我只能重新写了这篇教程
<!-- more -->
# 教程
## 后端部署
### 配置数据库

{% noteblock info %}
以下内容来自：https://discuss.js.org/guide/Get-MongoDB-DataBase.html
{% endnoteblock %}

- 注册[MongoDB](https://www.mongodb.com/cloud/atlas/register)账号，注册完成后会提示你创建一个组织，并且输入一个项目昵称，选择编程语言(不选也可以)，随后点击右下角的 `Continue`(继续)，如果没有可以跟如下图执行，点击 `Create an Organization`(创建组织)
   ![Organizations-Home](https://discuss.js.org/img/guide/Get-MongoDB-DataBase/Organizations-Home.png)
   ![Register-Organizations](https://discuss.js.org/img/guide/Get-MongoDB-DataBase/Register-Organizations.png)
   ![Create-Organization](https://discuss.js.org/img/guide/Get-MongoDB-DataBase/Create-Organization.png)
   ![New-Project](https://discuss.js.org/img/guide/Get-MongoDB-DataBase/New-Project.png)
   ![Project-Name](https://discuss.js.org/img/guide/Get-MongoDB-DataBase/Project-Name.png)
   ![Create-Project](https://discuss.js.org/img/guide/Get-MongoDB-DataBase/Create-Project.png)
   ![Build-Database](https://discuss.js.org/img/guide/Get-MongoDB-DataBase/Build-Database.png)
   ![Select-Free](https://discuss.js.org/img/guide/Get-MongoDB-DataBase/Select-Free.png)
   ![AWS-N.Virginia](https://discuss.js.org/img/guide/Get-MongoDB-DataBase/AWS-N.Virginia.png)
- 选择免费的共享数据库，随后会跳出选择地区(选择离你服务端近的即可)，点击 `Create Cluster`创建
- 随后您需要创建数据库用户，输入用户名和密码，继续向下滚动就是添加 IP 地址，最后点击下方的 `Finish and Close`(完成并关闭)按钮

{% noteblock warning %}
**注意**
服务器部署，则填服务器公网 IP
`无服务器(ServerLess)`ServerLess 一般都是动态 IP，你无法得到一个固定 IP，我们建议填写 `0.0.0.0`
{% endnoteblock %}

![Add IP](https://discuss.js.org/img/guide/Get-MongoDB-DataBase/Add-IP.png)

- 稍作等待创建好数据库即可，随后点击 `Connect`(连接)，点击选择 `Connect you application`(连接应用程序)，然后复制连接数据库字符串

{% noteblock warning %}
**注意**
需要将字符串中的 `<password>`替换为您在第三步创建的数据库用户密码，修改 `myFirstDatabase`为你想要的数据库名称例如:`Discuss`
{% endnoteblock %}

![Connect](https://discuss.js.org/img/guide/Get-MongoDB-DataBase/Connect.png)
![Get Connect](https://discuss.js.org/img/guide/Get-MongoDB-DataBase/Get-Connect.png)

### 部署kkapi

{% tabs 部署kkapi %}
<!-- tab Vercel部署（推荐） -->
- 点击下方按钮，跳转至 Vercel 进行部署。
[![部署到Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kkfive/kkapi-open/tree/vercel)
- 配置环境变量：
![msedge_wwcTzH8isA](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230114/msedge_wwcTzH8isA.10hmhosvut28.webp)
环境变量可能随项目的迭代而增加必填的环境变量，具体请参考[官网 —— kkapi环境变量](https://kkapi.js.org/reference/kkapi/environment.html)
- 重新部署
![msedge_owqMifozPi](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230114/msedge_owqMifozPi.37vcfu5vfpm0.webp)
![msedge_5WUBTLL0NZ](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230114/msedge_5WUBTLL0NZ.1nl1z1a7qiqo.webp)
![msedge_mMprAjHb9O](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230114/msedge_mMprAjHb9O.3b2527plrfg.webp)
- 绑定域名（建议）
![msedge_miAwQcdm9f](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/20230114/msedge_miAwQcdm9f.3htnm9dlllq0.webp)
- 初始化账户
浏览器访问：
你刚刚复制的地址/api/user/init?userName=你想设置的账户名
如果不指定用户名则自动将账户名设置为admin
<!-- endtab -->

<!-- tab 服务器部署 -->
{% noteblock info %}
以下内容来自：[第二种部署姿势：服务器部署](https://kkapi.js.org/guide/setup/deploy.html#%E7%AC%AC%E4%BA%8C%E7%A7%8D%E9%83%A8%E7%BD%B2%E5%A7%BF%E5%8A%BF%EF%BC%9A%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%83%A8%E7%BD%B2)
{% endnoteblock %}

- 克隆源代码
`git clone https://ghproxy.com/https://github.com/kkfive/kkapi-open.git`
- 安装依赖
`yarn install`
如果没有`yarn`则先允许`npm i yarn -g`进行安装
- 安装 pm2
`npm i pm2 -g`
- 编译项目
`yarn build`
- 配置环境变量
在项目目录新建文件`local.env`，将环境变量写入其中即可。例如：
``` 
PORT=3000
DATABASE_URL=mongodb://127.0.0.1:27017/kkpaiopen?authSource=admin
DATABASE_USER=root
DATABASE_PASSWORD=root
# 加密密钥 测试
SECRETKEY=xxxxxxxxxxxxxxx
```
其中 PORT 表示启动的端口
- 启动项目
`pm2 start pm2.json`
然后通过命令`curl http://127.0.0.1:3000/api/user/init`检查是否允许成功
![image-20220227101623911](https://file.acs.pw/picGo/2022/02/27/20220227101623.png)
- 更新项目
进入项目并执行一下命令
``` bash
git pull
yarn build
pm2 restart pm2.json
```
<!-- endtab -->

<!-- tab docker 部署 -->
尚未写完
<!-- endtab -->
{% endtabs %}
### 部署kkadmin
介绍：kkadmin是kkapi的后台，方便发布说说
{% noteblock tip %}
以下部署姿势你只需要任选其一即可，无需全部部署。
{% endnoteblock %}

{% tabs 部署kkadmin, 2 %}
<!-- tab Vercel部署 -->
{% noteblock warning %}
由于构建 kkadmin 时部分依赖文件需要 nodejs16 及以上版本才可以安装，因此不能将源代码扔给 vercel 进行构建。
所以只能够利用 GitHub actions 构建完成后将产物扔给 vercel 进行使用
{% endnoteblock %}

- Fork这个项目：https://github.com/kkfive/kkadmin-open/
   
![msedge_6HMaGfN000](https://jsd.cdn.storisinz.site/gh/StarWEB890/TuChuang@master/images/msedge_6HMaGfN000.1csf0rae8okg.webp)
![msedge_UPsCgr2okQ](https://jsd.cdn.storisinz.site/gh/StarWEB890/TuChuang@master/images/msedge_UPsCgr2okQ.7k0gi7brxoc0.webp)
- 配置变量
![msedge_ktuszZjpej](https://jsd.cdn.storisinz.site/gh/StarWEB890/TuChuang@master/images/msedge_ktuszZjpej.7ftbduod9uc0.webp)

VITE_GLOB_API_URL（必选）
![msedge_wqMbtdCCon](https://jsd.cdn.storisinz.site/gh/StarWEB890/TuChuang@master/images/msedge_wqMbtdCCon.26m2h3r94d7k.webp)

- 构建actions

![msedge_yymiOm8Kek](https://jsd.cdn.storisinz.site/gh/StarWEB890/TuChuang@master/images/msedge_yymiOm8Kek.23xjzofdum3.webp)
![msedge_4awdNaFJGz](https://jsd.cdn.storisinz.site/gh/StarWEB890/TuChuang@master/images/msedge_4awdNaFJGz.1rdq0mxyfhog.webp)
![msedge_2uYyc6Qh4I](https://jsd.cdn.storisinz.site/gh/StarWEB890/TuChuang@master/images/msedge_2uYyc6Qh4I.4p3ngtkhmh00.webp)



- 部署到Vercel
复制下面这个网址

```
https://vercel.com/new/import?s=https://github.com/SinInno/kkadmin-open/tree/vercel
```

并将“SinInno”改为你Github的用户名后访问你刚刚修改的网址
PS：如果你Fork的这个项目有改Repository name，那么请将上面的“kkapi-open”改为你这个项目的Repository name

然后直接部署

![msedge_GJbsx9xoOw](https://jsd.cdn.storisinz.site/gh/StarWEB890/TuChuang@master/images/msedge_GJbsx9xoOw.8zgxw8og644.webp)

部署完成后点“Go to Dashboard”，并点左上角的“Visit”

![msedge_Lyo0nIvIqF](https://jsd.cdn.storisinz.site/gh/StarWEB890/TuChuang@master/images/msedge_Lyo0nIvIqF.d4g2uabkljk.webp)

账号输入你之前初始化账户的账户名
密码请输入默认密码：123456
登入面板后请更改默认密码！
<!-- endtab -->

<!-- tab CF pages部署（推荐） -->
{% noteblock info %}
如果你已经在 GitHub actions 部署了，那么 cf pages 部署时也可以选择 vercel 进行部署。也可以使用主干分支进行打包部署。
接下来的教程以使用 cf pages 构建为例介绍
{% endnoteblock %}

- fork项目（可直接fork）
- 导入项目

![msedge_1bV5Of8ioS](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/msedge_1bV5Of8ioS.xtthsj95ytc.webp)
![msedge_CcnQ68DBFQ](https://jsd.cdn.storisinz.site/gh/SinzMise/MYPictures@master/msedge_CcnQ68DBFQ.2q893j8w72k0.webp)

- 配置环境变量

环境变量参考：[官网 —— kkadmin环境变量](https://kkapi.js.org/reference/kkadmin/environment.html)

![配置环境变量](https://file.acs.pw/picGo/2022/02/27/20220227113526.png)

- 等待构建完成后即可

![构建中](https://file.acs.pw/picGo/2022/02/27/20220227114643.png)

<!-- endtab -->

<!-- tab 其他环境部署 -->
其他环境部署基本可以直接使用 GitHub 构建后的 vercel 进行，毕竟只是 HTML
<!-- endtab -->
{% endtabs %}
## 前端配置
### 进入后台，查看个人ID
![查看个人ID](https://file.acs.pw/picGo/2022/02/27/20220227131425.png)
### 前端引入
{% noteblock info %}
ipseak 使用 marked 依赖和 highlight 依赖，为了减少打包体积，并没有将该依赖打包，因此需要使用 cdn 进行外部引入。
{% endnoteblock %}

{% tabs 前端引入ispeak, 2 %}
<!-- tab 使用Waline -->
- 在博客目录下运行`hexo new page speaks`
- 编辑[blogroot]\source\speaks\index.md，将里面的内容替换成：
``` markdown
---
title: 说说
comments: false
aside: false
---
{% raw %}

<style>
  .speak-footer,.wl-power{
    display:none;
  }
</style>
<div id="ispeak"></div>
<link
  rel="stylesheet"
  href="https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css"
/>
<link
  rel="stylesheet"
  href="https://npm.elemecdn.com/ispeak@4.4.0/style.css"
/>
<script src="https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js"></script>
<script src="https://cdn.staticfile.org/marked/2.0.0/marked.min.js"></script>
<!-- CSS -->
<link href="https://unpkg.com/@waline/client/dist/waline.css" rel="stylesheet" />
<script src="https://unpkg.com/@waline/client@v2/dist/waline.js"></script>
<script>
    function load_ispeak() {
        setTimeout(function() {
            var HEAD = document.getElementsByTagName('head')[0] || document.documentElement;
            var src = 'https://cdn1.tianli0.top/npm/ispeak/ispeak.umd.js'
            var script = document.createElement('script')
            script.setAttribute('type','text/javascript')
            script.onload = function() {
               pjax_ispeak()
            }
            script.setAttribute('src', src)
            HEAD.appendChild(script)
        }, 1);
    };
    function pjax_ispeak() {
        if(!document.querySelectorAll("#ispeak")[0])return;
        ispeak
          .init({
            el: '#ispeak',//不用改
            api: '', //填写你kkapi地址（不是kkadmin后台地址！）
            author: '',//填写个人ID
            pageSize: 10,//每页speak显示的条数（建议保持默认，除非你要魔改css）
            loading_img: 'https://bu.dusays.com/2021/03/04/d2d5e983e2961.gif',//加载动画
            comment: function (speak) {
              const { _id, title, content } = speak
              const contentSub = content.substring(0, 30)
              Waline.init({
                el: '.ispeak-comment',//不用改
                serverURL: '',//填写你的Waline服务端地址
                path:'/speak/info.html?q=' + _id,//不用改，除非你将上面的speak改为别的文件夹昵称
                //后面可按照https://waline.js.org/reference/client/props.html 修改（必须放在path后面！以下为一个例子）
                emoji: ["//unpkg.com/@waline/emojis@1.0.1/weibo","https://emoji.shojo.cn/bili/src/小黄脸","//unpkg.com/@waline/emojis@1.0.1/bilibili","https://emoji.shojo.cn/bili/src/枕边童话","https://emoji.shojo.cn/bili/src/咩栗","https://emoji.shojo.cn/bili/src/呜米","https://emoji.shojo.cn/bili/src/进击的冰糖","https://emoji.shojo.cn/bili/src/冰糖IO 蜕变·闪耀","https://emoji.shojo.cn/bili/src/多多poi","https://emoji.shojo.cn/bili/src/穆小泠","https://emoji.shojo.cn/bili/src/早稻叽"],// 表情包大全
              });
            }
          });
    }
    load_ispeak();
    document.addEventListener('pjax:complete', function () {
        pjax_ispeak();
    });
</script>
<!--建议标注末尾链接-->
<p style="width: 100%;text-align: end;font-size: .75em;color: #999;margin-top: 1em;">Powered by <a href="https://www.antmoe.com/speak/"><strong>iSpeak</strong></a> | Comment by <a href="https://discuss.js.org/"><strong>Waline</strong></a></p> 
{% endraw %}
```
- 在[blogroot]\source\speaks\下新建info.md，内容为下：
``` markdown
---
title: Speak
aside: false
comments: false
description: 欢迎来到SinzMise的日记，快来看看SinzMise分享了什么！ # speak介绍
---
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css" />
<link href="https://unpkg.com/@waline/client/dist/waline.css" rel="stylesheet" />
<div class='content'>
  <img src='https://bu.dusays.com/2022/05/01/626e88f349943.gif'>
</div>
{% btn '/speaks/',查看全部,far fa-hand-point-right,block center blue larger %}
<hr />
<div class='ispeak-comment'></div>
<!-- JS -->
<script src="https://unpkg.com/@waline/client@v2/dist/waline.js"></script>
<script src="https://unpkg.com/marked@4.0.18/marked.min.js"></script>
<script src="https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js"></script>
<script>
  const searchParams = new URLSearchParams(window.location.search);
  const speakId = searchParams.get('q');
  const path = window.location.pathname;
  const apiURL = 'https://（你的api地址）/api/ispeak';
  const markedRender = (body, loading_img='https://bu.dusays.com/2022/05/01/626e88f349943.gif') => {
    const renderer = {
      image(href, title, text) {
        return `<a href="${href}" target="_blank" data-fancybox="group" class="fancybox">
            <img speak-src="${href}" src=${loading_img} alt='${text}'>
            </a>`
      }
    }
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code) {
        if (hljs) {
          return hljs.highlightAuto(code).value
        } else {
          return code
        }
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: true,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    })
    marked.use({ renderer })
    return marked.parse(body)
  }
  fetch(`${apiURL}/get/${speakId}`)
  .then(response => response.json())
  .then(res => {
    const data = res.data;
    if(data){
      const {title,content} = data;
      const contentSub = content.substring(0, 30);
      document.querySelector('.content').innerHTML = markedRender(content);
      if(title){
        document.title = title;
      }
      Waline.init({
        el: '.ispeak-comment',//不用改
        serverURL: '',//填写你的Waline服务端地址
        path: path + '?q=' + _id,//不用改
        //后面可按照https://waline.js.org/reference/client/props.html 修改（必须放在path后面！以下为一个例子）
        emoji: ["//unpkg.com/@waline/emojis@1.0.1/weibo","https://emoji.shojo.cn/bili/src/小黄脸","//unpkg.com/@waline/emojis@1.0.1/bilibili","https://emoji.shojo.cn/bili/src/枕边童话","https://emoji.shojo.cn/bili/src/咩栗","https://emoji.shojo.cn/bili/src/呜米","https://emoji.shojo.cn/bili/src/进击的冰糖","https://emoji.shojo.cn/bili/src/冰糖IO 蜕变·闪耀","https://emoji.shojo.cn/bili/src/多多poi","https://emoji.shojo.cn/bili/src/穆小泠","https://emoji.shojo.cn/bili/src/早稻叽"],// 表情包大全
      });
    }
  });
</script>
```
<!-- endtab -->
<!-- tab 使用Twikoo -->
- 在博客目录下运行`hexo new page speaks`
- 编辑[blogroot]\source\speaks\index.md，将里面的内容替换成：
``` markdown
---
title: 说说
comments: false
aside: false
---
{% raw %}

<style>
  .speak-footer,.tk-footer{
    display:none;
  }
</style>
<div id="ispeak"></div>
<link
  rel="stylesheet"
  href="https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css"
/>
<link
  rel="stylesheet"
  href="https://npm.elemecdn.com/ispeak@4.4.0/style.css"
/>
<script src="https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js"></script>
<script src="https://cdn.staticfile.org/marked/2.0.0/marked.min.js"></script>
<script src="https://npm.elemecdn.com/ispeak@4.4.0/ispeak.umd.js"></script>
<script src="https://npm.elemecdn.com/twikoo"></script>
<script>
    function load_ispeak() {
        setTimeout(function() {
            var HEAD = document.getElementsByTagName('head')[0] || document.documentElement;
            var src = 'https://cdn1.tianli0.top/npm/ispeak/ispeak.umd.js'
            var script = document.createElement('script')
            script.setAttribute('type','text/javascript')
            script.onload = function() {
               pjax_ispeak()
            }
            script.setAttribute('src', src)
            HEAD.appendChild(script)
        }, 1);
    };
    function pjax_ispeak() {
        if(!document.querySelectorAll("#ispeak")[0])return;
        ispeak
          .init({
            el: '#ispeak',//不用改
            api: '', //填写你kkapi地址（不是kkadmin后台地址！）
            author: '',//填写个人ID
            pageSize: 10,//每页speak显示的条数（建议保持默认，除非你要魔改css）
            loading_img: 'https://bu.dusays.com/2021/03/04/d2d5e983e2961.gif',//加载动画
            comment: function (speak) {
              const { _id, title, content } = speak
              const contentSub = content.substring(0, 30)
              twikoo.init({
                envId: '', // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
                el: '.ispeak-comment', // 不用改
                //region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
                path: '/speak/info.html?q=' + _id, //不用改，除非你将上面的speak改为别的文件夹昵称
                lang: 'zh-CN', // 用于手动设定评论区语言，支持的语言列表 https://github.com/imaegoo/twikoo/blob/main/src/client/utils/i18n/index.js
              })
            }
          });
    }
    load_ispeak();
    document.addEventListener('pjax:complete', function () {
        pjax_ispeak();
    });
</script>
<!--建议标注末尾链接-->
<p style="width: 100%;text-align: end;font-size: .75em;color: #999;margin-top: 1em;">Powered by <a href="https://www.antmoe.com/speak/"><strong>iSpeak</strong></a> | Comment by <a href="https://twikoo.js.org/"><strong>Twikoo</strong></a></p> 
{% endraw %}
```
- 在[blogroot]\source\speaks\下新建info.md，内容为下：
``` markdown
---
title: Speak
aside: false
comments: false
description: 欢迎来到SinzMise的日记，快来看看SinzMise分享了什么！ # speak介绍
---
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css" />
<div class='content'>
  <img src='https://bu.dusays.com/2022/05/01/626e88f349943.gif'>
</div>
{% btn '/speaks/',查看全部,far fa-hand-point-right,block center blue larger %}
<hr />
<div class='ispeak-comment'></div>
<!-- JS -->
<script src="https://npm.elemecdn.com/twikoo"></script>
<script src="https://unpkg.com/marked@4.0.18/marked.min.js"></script>
<script src="https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js"></script>
<script>
  const searchParams = new URLSearchParams(window.location.search);
  const speakId = searchParams.get('q');
  const path = window.location.pathname;
  const apiURL = 'https://（你的api地址）/api/ispeak';
  const markedRender = (body, loading_img='https://bu.dusays.com/2022/05/01/626e88f349943.gif') => {
    const renderer = {
      image(href, title, text) {
        return `<a href="${href}" target="_blank" data-fancybox="group" class="fancybox">
            <img speak-src="${href}" src=${loading_img} alt='${text}'>
            </a>`
      }
    }
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code) {
        if (hljs) {
          return hljs.highlightAuto(code).value
        } else {
          return code
        }
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: true,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    })
    marked.use({ renderer })
    return marked.parse(body)
  }
  fetch(`${apiURL}/get/${speakId}`)
  .then(response => response.json())
  .then(res => {
    const data = res.data;
    if(data){
      const {title,content} = data;
      const contentSub = content.substring(0, 30);
      document.querySelector('.content').innerHTML = markedRender(content);
      if(title){
        document.title = title;
      }
      twikoo.init({
        envId: '', // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
        el: '.ispeak-comment', // 不用改
        //region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
        path: path + '?q=' + speakId, // 不用改
        lang: 'zh-CN', // 用于手动设定评论区语言，支持的语言列表 https://github.com/imaegoo/twikoo/blob/main/src/client/utils/i18n/index.js
      })
    }
  });
</script>
```
<!-- endtab -->
<!-- tab 使用Discuss -->
- 在博客目录下运行`hexo new page speaks`
- 编辑[blogroot]\source\speaks\index.md，将里面的内容替换成：
``` markdown
---
title: 说说
comments: false
aside: false
---
{% raw %}

<style>
  .speak-footer,.D-footer{
    display:none;
  }
</style>
<div id="ispeak"></div>
<link
  rel="stylesheet"
  href="https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css"
/>
<link
  rel="stylesheet"
  href="https://npm.elemecdn.com/ispeak@4.4.0/style.css"
/>
<script src="https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js"></script>
<script src="https://cdn.staticfile.org/marked/2.0.0/marked.min.js"></script>
<script src="https://npm.elemecdn.com/ispeak@4.4.0/ispeak.umd.js"></script>
<script src="https://npm.elemecdn.com/discuss@latest/dist/discuss.js"></script>
<script>
    function load_ispeak() {
        setTimeout(function() {
            var HEAD = document.getElementsByTagName('head')[0] || document.documentElement;
            var src = 'https://cdn1.tianli0.top/npm/ispeak/ispeak.umd.js'
            var script = document.createElement('script')
            script.setAttribute('type','text/javascript')
            script.onload = function() {
               pjax_ispeak()
            }
            script.setAttribute('src', src)
            HEAD.appendChild(script)
        }, 1);
    };
    function pjax_ispeak() {
        if(!document.querySelectorAll("#ispeak")[0])return;
        ispeak
          .init({
            el: '#ispeak',//不用改
            api: '', //填写你kkapi地址（不是kkadmin后台地址！）
            author: '',//填写个人ID
            pageSize: 10,//每页speak显示的条数（建议保持默认，除非你要魔改css）
            loading_img: 'https://bu.dusays.com/2021/03/04/d2d5e983e2961.gif',//加载动画
            comment: function (speak) {
              const { _id, title, content } = speak
              const contentSub = content.substring(0, 30)
              discuss.init({
                  el: '.ispeak-comment',// 不用改
                  serverURLs: '',//填写你的Discuss服务端地址
                  path: '/speak/info.html?q=' + _id,//不用改，除非你将上面的speak改为别的文件夹昵称
                  //后面可按照https://discuss.js.org/Quick-Start.html#%E5%AE%A2%E6%88%B7%E7%AB%AF-client 修改（必须放在path后面！以下为一个例子）
                  ph: '千山万水总是情，给个评论行不行' ,//评论框占位符
                  imgLoading: 'https://bu.dusays.com/2021/03/04/d2d5e983e2961.gif'//评论图片加载动画
                })
            }
          });
    }
    load_ispeak();
    document.addEventListener('pjax:complete', function () {
        pjax_ispeak();
    });
</script>
<!--建议标注末尾链接-->
<p style="width: 100%;text-align: end;font-size: .75em;color: #999;margin-top: 1em;">Powered by <a href="https://www.antmoe.com/speak/"><strong>iSpeak</strong></a> | Comment by <a href="https://discuss.js.org/"><strong>Discuss</strong></a></p> 
{% endraw %}
```
- 在[blogroot]\source\speaks\下新建info.md，内容为下：
``` markdown
---
title: Speak
aside: false
comments: false
description: 欢迎来到SinzMise的日记，快来看看SinzMise分享了什么！ # speak介绍
---
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css" />
<div class='content'>
  <img src='https://bu.dusays.com/2022/05/01/626e88f349943.gif'>
</div>
{% btn '/speaks/',查看全部,far fa-hand-point-right,block center blue larger %}
<hr />
<div class='ispeak-comment'></div>
<!-- JS -->
<script src="https://npm.elemecdn.com/discuss@latest/dist/discuss.js"></script>
<script src="https://unpkg.com/marked@4.0.18/marked.min.js"></script>
<script src="https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js"></script>
<script>
  const searchParams = new URLSearchParams(window.location.search);
  const speakId = searchParams.get('q');
  const path = window.location.pathname;
  const apiURL = 'https://（你的api地址）/api/ispeak'; //api地址
  const markedRender = (body, loading_img='https://bu.dusays.com/2022/05/01/626e88f349943.gif') => {
    const renderer = {
      image(href, title, text) {
        return `<a href="${href}" target="_blank" data-fancybox="group" class="fancybox">
            <img speak-src="${href}" src=${loading_img} alt='${text}'>
            </a>`
      }
    }
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code) {
        if (hljs) {
          return hljs.highlightAuto(code).value
        } else {
          return code
        }
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: true,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    })
    marked.use({ renderer })
    return marked.parse(body)
  }
  fetch(`${apiURL}/get/${speakId}`)
  .then(response => response.json())
  .then(res => {
    const data = res.data;
    if(data){
      const {title,content} = data;
      const contentSub = content.substring(0, 30);
      document.querySelector('.content').innerHTML = markedRender(content);
      if(title){
        document.title = title;
      }
      discuss.init({
            el: '.ispeak-comment',// 不用改
            serverURLs: '',//填写你的Discuss服务端地址
            path: path + '?q=' + speakId,// 不用改
            //后面可按照https://discuss.js.org/Quick-Start.html#%E5%AE%A2%E6%88%B7%E7%AB%AF-client 修改（必须放在path后面！以下为一个例子）
            ph: '千山万水总是情，给个评论行不行' ,//评论框占位符
            imgLoading: 'https://bu.dusays.com/2021/03/04/d2d5e983e2961.gif'//评论图片加载动画
          })
    }
  });
</script>
```
<!-- endtab -->

<!-- tab 使用Artalk -->
- 在博客目录下运行`hexo new page speaks`
- 编辑[blogroot]\source\speaks\index.md，将里面的内容替换成：
``` markdown
---
title: 说说
comments: false
aside: false
---
{% raw %}
<style>
  .speak-footer,.atk-list-footer{
    display:none;
  }
</style>
<div id="ispeak"></div>
<link
  rel="stylesheet"
  href="https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css"
/>
<link
  rel="stylesheet"
  href="https://npm.elemecdn.com/ispeak@4.4.0/style.css"
/>
<script src="https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js"></script>
<script src="https://cdn.staticfile.org/marked/2.0.0/marked.min.js"></script>
<script src="https://npm.elemecdn.com/ispeak@4.4.0/ispeak.umd.js"></script>
<!-- CSS -->
<link href="https://unpkg.com/artalk@2.3.4/dist/Artalk.css" rel="stylesheet" />
<!-- JS -->
<script src="https://unpkg.com/artalk@2.3.4/dist/Artalk.js"></script>
<script>
    function load_ispeak() {
        setTimeout(function() {
            var HEAD = document.getElementsByTagName('head')[0] || document.documentElement;
            var src = 'https://cdn1.tianli0.top/npm/ispeak/ispeak.umd.js'
            var script = document.createElement('script')
            script.setAttribute('type','text/javascript')
            script.onload = function() {
               pjax_ispeak()
            }
            script.setAttribute('src', src)
            HEAD.appendChild(script)
        }, 1);
    };
    function pjax_ispeak() {
        if(!document.querySelectorAll("#ispeak")[0])return;
        ispeak
          .init({
            el: '#ispeak',//不用改
            api: '', //填写你kkapi地址（不是kkadmin后台地址！）
            author: '',//填写个人ID
            pageSize: 10,//每页speak显示的条数（建议保持默认，除非你要魔改css）
            loading_img: 'https://bu.dusays.com/2021/03/04/d2d5e983e2961.gif',//加载动画
            comment: function (speak) {
              const { _id, title, content } = speak
              const contentSub = content.substring(0, 30)
              new Artalk({
            el: '.ispeak-comment', // 不用改
            pageKey: '/speak/info.html?q=' + _id, //不用改，除非你将上面的speak改为别的文件夹昵称
            pageTitle: title || contentSub, // 不用改
            server: '', //填写你的Artalk服务端地址
            site: '' // 填写你的站点名
          })
            }
          });
    }
    load_ispeak();
    document.addEventListener('pjax:complete', function () {
        pjax_ispeak();
    });
</script>
<!--建议标注末尾链接-->
<p style="width: 100%;text-align: end;font-size: .75em;color: #999;margin-top: 1em;">Powered by <a href="https://www.antmoe.com/speak/"><strong>iSpeak</strong></a> | Comment by <a href="https://artalk.js.org/"><strong>Artalk</strong></a></p> 
{% endraw %}
```
- 在[blogroot]\source\speaks\下新建info.md，内容为下：
``` markdown
---
title: Speak
aside: false
comments: false
description: 欢迎来到SinzMise的日记，快来看看SinzMise分享了什么！ # speak介绍
---
<!-- CSS -->
<link href="https://unpkg.com/artalk@2.3.4/dist/Artalk.css" rel="stylesheet" />
<link rel="stylesheet" href="https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css" />
<div class='content'>
  <img src='https://bu.dusays.com/2022/05/01/626e88f349943.gif'>
</div>
{% btn '/speaks/',查看全部,far fa-hand-point-right,block center blue larger %}
<hr />
<div class='ispeak-comment'></div>
<!-- JS -->
<script src="https://unpkg.com/artalk@2.3.4/dist/Artalk.js"></script>
<script src="https://unpkg.com/marked@4.0.18/marked.min.js"></script>
<script src="https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js"></script>
<script>
  const searchParams = new URLSearchParams(window.location.search);
  const speakId = searchParams.get('q');
  const path = window.location.pathname;
  const apiURL = 'https://（你的api地址）/api/ispeak';
  const markedRender = (body, loading_img='https://bu.dusays.com/2022/05/01/626e88f349943.gif') => {
    const renderer = {
      image(href, title, text) {
        return `<a href="${href}" target="_blank" data-fancybox="group" class="fancybox">
            <img speak-src="${href}" src=${loading_img} alt='${text}'>
            </a>`
      }
    }
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code) {
        if (hljs) {
          return hljs.highlightAuto(code).value
        } else {
          return code
        }
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: true,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    })
    marked.use({ renderer })
    return marked.parse(body)
  }
  fetch(`${apiURL}/get/${speakId}`)
  .then(response => response.json())
  .then(res => {
    const data = res.data;
    if(data){
      const {title,content} = data;
      const contentSub = content.substring(0, 30);
      document.querySelector('.content').innerHTML = markedRender(content);
      if(title){
        document.title = title;
      }
      new Artalk({
            el: '.ispeak-comment', // 不用改
            pageKey: path + '?q=' + speakId, // 不用改
            pageTitle: title || contentSub, // 不用改
            server: '', //填写你的Artalk服务端地址
            site: '' // 填写你的站点名
          })
    }
  });
</script>
```
<!-- endtab -->
{% endtabs %}