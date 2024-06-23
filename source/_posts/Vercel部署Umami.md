---
title: Vercel部署Umami
abbrlink: 28733
cover: https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230714/umami-x-vercel.37hd3icfx5y0.webp
date: 2023-07-14 08:48:13
tags:
  - 站点折腾
  - 自建部署
categories: 
  - 站点折腾
---
# 前言
之前我是想参考这个教程来部署：https://digu.plus/post/8034746f42b3495fbb19926e3fb8ec4f/
然而部署过程中翻了车
这个教程新版教程（顺便总结一下我翻的车）
# 数据库选择
Umami支持MySQL和PostgreSQL数据库，选择自己喜欢的数据库进行数据初始化即可。下面是几个免费的数据库服务，这里选择的是ElephantSQL，当然，并不限于这些。
目前www.jsdelivr.ren免费数据库如下：

- MySQL：[FREEDB.TECH](https://freedb.tech/)、[db4free](https://www.db4free.net/)、[SQLPub](https://sqlpub.com/)
- PostgreSQL：[ElephantSQL](https://www.elephantsql.com/)、[Supabase](https://supabase.com/)

# 数据库部署
{% note warning simple %}
目前已知Supabase部署失败原因：
![msedge_DL0IGBX6O1](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230716/msedge_DL0IGBX6O1.2876ewjv3lz4.webp)
{% endnote %}
{% tabs 数据库部署 %}
<!-- tab MySQL -->
{% tabs MySQL数据库 %}
<!-- tab FREEDB.TECH -->
打开[FREEDB.TECH](https://freedb.tech/)，注册登录，创建数据库和用户

![msedge_gi9vdCGiIt](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230714/msedge_gi9vdCGiIt.48n3g4pzzvw0.webp)

得到你的数据库和密码：
![msedge_fGVbS9POH4](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230714/msedge_fGVbS9POH4.409i0oz7v9k0.webp)

组合一下：
```url
mysql://（DATABASE USER）:（PASSWORD）@（HOST）:（PORT）/（DATABASE NAME）
```

<!-- endtab -->
<!-- tab db4free（不推荐，官网访问较慢） -->
{% note warning simple %}
注意事项：这个数据库疑似国人开办，建议用国内邮箱收验证码，国外的基本收不到
（转自：https://www.freeaday.com/2023/01/db4free/ 的一条评论）
{% endnote %}
打开[db4free](https://www.db4free.net/)，点击“注册免费账号”，输入信息然后点击“注册”，一会后你会收到如下邮件：

![网易灵犀办公_JmFVOuOEIc](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230714/网易灵犀办公_JmFVOuOEIc.30smaneqwfa0.webp)

访问邮件提供的确认网址，数据库就创建成功了

然后将你设置的信息替换掉下面括号里的内容（注意：括号得去掉）：
```url
mysql://（你设置的数据库用户名）:（你设置的数据库密码）@db4free.net:3306/（你设置的数据库名）
```
<!-- endtab -->
<!-- tab SQLPub（推荐） -->
访问[SQLPub](https://sqlpub.com/)，输入账号密码，点击申请，申请成功后会有如下提示
![msedge_8FyIBEs6Ja](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230714/msedge_8FyIBEs6Ja.14toupglasps.webp)
然后将里面的替换掉下面括号里的内容（注意：括号得去掉）：
```url
mysql://（数据库用户）:（数据库密码）@（数据库地址）/（数据库名称）
```
<!-- endtab -->
{% endtabs %}
<!-- endtab -->
<!-- tab PostgreSQL -->
{% tabs PostgreSQL %}
<!-- tab Supabase（推荐） -->

打开[Supabase](https://supabase.com/)，推荐使用Github登录。登陆成功后，创建一个新的项目New project->personal。

- Name：随意
- Database Password：建议点击Generate a password生成
- Region：建议选择US，因为Vercel的免费服务器在漂亮国
- Pricing Plan：Free白嫖

创建成功后，打开菜单Project Setting -> Database -> Connection string -> URI，如下图：
![image](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230714/image.3jutc7fp3fc0.webp)
将红框内的内容复制下来，然后把`[YOUR-PASSWORD]`替换成你生成的密码，复制备用
<!-- endtab -->
<!-- tab ElephantSQL -->
打开ElephantSQL，推荐使用Github登录，创建一个新的实例。Plan选择Tiny Turtle(Free)、Region随意，提交创建。
![msedge_ELQQZsgMsH](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230714/msedge_ELQQZsgMsH.68dwkz5in1w0.webp)
打开刚刚创建的示例，找到URL，点击眼睛图标，然后将URL复制下来备用
<!-- endtab -->
{% endtabs %}
<!-- endtab -->
{% endtabs %}
# Vercel部署

[![部署到Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmikecao%2Fumami&env=DATABASE_URL,HASH_SALT,TRACKER_SCRIPT_NAME&envDescription=These%20values%20are%20defined%20in%20the%20configure%20Umami%20step%20from%20Install&envLink=https%3A%2F%2Fumami.is%2Fdocs%2Finstall&project-name=umami&repo-name=umami)

1. 点击上方按钮，跳转至 Vercel 进行 Server 端部署
{% note warning simple %}如果你未登录的话，Vercel 会让你注册或登录，请使用 GitHub 账户进行快捷登录。{% endnote %}
2. 输入一个你喜欢的 Vercel 项目名称并点击 Create 继续:

![msedge_EtpjrPwPlG](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230714/msedge_EtpjrPwPlG.4zkys81bppo0.webp)

3. 配置环境变量

![msedge_EtpjrPwPlG](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230714/msedge_EtpjrPwPlG.4zkys81bppo0.webp)
部署完成后，会跳转到环境变量部分，请按照如下方式配置环境变量：
| 名称      | 说明	 |
| ----------- | ----------- |
|DATABASE_URL|（必填）数据库链接|
|HASH_SALT|（必填）任意字符串，推荐[这里](https://uuid.bmcx.com/)生成一串UUID|
|TRACKER_SCRIPT_NAME|（建议）任意字符串，推荐[这里](https://uuid.bmcx.com/)生成一串UUID（不填会导致去广告插件把这段脚本给拦截）|

![msedge_3VF46Qh4uk](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230714/msedge_3VF46Qh4uk.6ebntqavbmw.webp)

配置完成后点击Deploy开始部署，部署过程大概两分钟，部署成功后会有一个彩纸的喜庆页面。
# 绑定域名
点击Go to Dashboard，进入Settings---->Domains绑定域名

![image](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230714/image.6kbvzv14uic.webp)

你绑定的域名就是umami的后台网址
# 配置后台
点击你绑定的域名，进入Umami后台登录（默认用户名admin和密码umami）进入后第一时间修改密码。

![msedge_V6f3L8vvos](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230714/msedge_V6f3L8vvos.3pvc55z6eqw0.webp)

# 添加站点 & 获取代码
“网站”--->“添加网站”添加你自己的网站

![image](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230714/image.x9jagr7mvxc.webp)

保存后点击“编辑”--->“跟踪代码”，将获取到的代码放进你的站点

![msedge_trQnJ47k75](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230714/msedge_trQnJ47k75.20wh55o85wkg.webp)

不久后就能看到你的站点数据了

# 问题
- Umami无法登录，提示“Failed to load resource: the server responded with a status of 405”
等待几分钟后登录重试
- 使用Supabase数据库时，Vercel提示这个错误：

![msedge_D1X7RIZpUD](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20230714/msedge_D1X7RIZpUD.5wxtzukahdo0.webp)

建议重新新建数据库，还不行的话更换别的数据库