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
  <div class="title-h2-a">
    <div class="title-h2-a-left">
      <h2 style="padding-top: 0;margin:0.6rem 0 0.6rem;">🎣 钓鱼</h2><a class="random-post-start" href="javascript:fetchRandomPost();"><i class="fa-solid fa-arrow-rotate-right"></i></a>
    </div>
  </div>
  <div id="random-post"></div>
  <script type="text/javascript">
    var fdataUser = {
    apiurl: 'https://fcircle.blog.sinzmise.top/',
    defaultFish: 500,
    hungryFish: 500,
    }
  </script>
  <link rel="stylesheet" type="text/css" href="https://jsd.cdn.storisinz.site/gh/zhheo/JS-Heo@main/moments/random-friends-post.css">
  <script src = "https://jsd.cdn.storisinz.site/gh/zhheo/JS-Heo@main/moments/random-friends-post.js"></script>
  <div id="hexo-circle-of-friends-root"></div>
  <script>
      let UserConfig = {
          // 填写你的api地址
          private_api_url: 'https://fcircle.blog.sinzmise.top/',
          // 点击加载更多时，一次最多加载几篇文章，默认10
          page_turning_number: 12,
          // 头像加载失败时，默认头像地址
          error_img: '/img/friend_404.gif',
          // 进入页面时第一次的排序规则
          sort_rule: 'created'
      }
  </script>
  <script type="text/javascript" src="https://jsd.cdn.storisinz.site/gh/zhheo/JS-Heo@master/moments5/app.min.js"></script>
  <script type="text/javascript" src="https://jsd.cdn.storisinz.site/gh/zhheo/JS-Heo@master/moments5/bundle.js"></script>
{% endraw %}