var posts=["posts/15842/","posts/27531/","posts/52677/","posts/21375/","posts/20412/","posts/23021/","posts/22945/","posts/18063/","posts/28733/","posts/13624/","posts/16107/","posts/48762/","posts/38964/","posts/42580/","posts/54481/","posts/10045/","posts/27762/","posts/56467/","posts/53662/","posts/54386/","posts/50710/","posts/42487/","posts/38917/","posts/646/","posts/12779/","posts/29196/","posts/45875/","posts/54787/","posts/61417/","posts/58203/","posts/28536/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};