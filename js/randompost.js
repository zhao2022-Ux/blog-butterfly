var posts=["posts/27531/","posts/52677/","posts/15842/","posts/21375/","posts/20412/","posts/23021/","posts/18063/","posts/28733/","posts/13624/","posts/22945/","posts/16107/","posts/38964/","posts/48762/","posts/42580/","posts/10045/","posts/54481/","posts/53662/","posts/27762/","posts/56467/","posts/50710/","posts/54386/","posts/38917/","posts/42487/","posts/45875/","posts/646/","posts/29196/","posts/12779/","posts/54787/","posts/61417/","posts/28536/","posts/58203/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};