---
title: 朋友圈
date: 2024-05-02 12:01:50
top_img: false
aside: false
top_page: true
top_bg: https://image.sretna.cn/comic/pc/6ea9ab1baa0efb9e19094440c317e21b.jpg
top_item: 友联朋友圈
top_title: 来看看发生了什么有趣的事情吧！
top_tips: 使用 友链朋友圈 订阅友链最新文章
top_link: /link/
top_text: 跳转友链
comments: false
---
{% raw %}
<div id="friend-circle-lite-root"></div>
<script>
    if (typeof UserConfig === 'undefined') {
        var UserConfig = {
            // 填写你的fc Lite地址
            private_api_url: 'https://fc.blog.sinzmise.top/',
            // 点击加载更多时，一次最多加载几篇文章，默认20
            page_turning_number: 24,
            // 头像加载失败时，默认头像地址
            error_img: 'https://blog.sinzmise.top/img/friend_404.gif',
        }
    }
</script>
<link rel="stylesheet" href="https://jsd.cdn.storisinz.site/gh/willow-god/Friend-Circle-Lite/main/fclite.min.css">
<script src="https://jsd.cdn.storisinz.site/gh/willow-god/Friend-Circle-Lite/main/fclite.min.js"></script>

{% endraw %}