function whenDOMReady() {
    if (location.pathname.startsWith('/about/')) meuicat.comments(), meuicat.Introduction(), meuicat.runtimen(), meuicat.fiftyonela(), document.getElementById('ui-version').innerHTML=GLOBAL_CONFIG.uiversion;
}

whenDOMReady() // 打开网站先执行一次
document.addEventListener("pjax:complete", whenDOMReady) // pjax加载完成（切换页面）后再执行一次

let lastSayHello = "";
var meuicat = {
    comments: function() {
        fetch('/article.json')
            .then(res => res.json())
            .then(articleData => {
                const urls = Object.keys(articleData);

                fetch('https://tk.pl.blog.sinzmise.top/', {
                    method: "POST",
                    body: JSON.stringify({ event: "GET_RECENT_COMMENTS", accessToken: "f230dc1bac8bbb58af81860f1c6b5ca4", includeReply: true, pageSize: -1 }),
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then(res => res.json())
                    .then(({ data }) => {
                        const totalComments = data.length;
                        const commentElements = document.querySelectorAll('.N_comments');
                        commentElements.forEach(element => {
                            if (element.classList.contains('N_comments')) {
                                element.innerText = totalComments + GLOBAL_LANG.about.comments;
                            } else {
                                console.error(GLOBAL_LANG.about.comment_error);
                            }
                        });
                    });
            });
    }, // 总评论数量
    Introduction: function() {
        const e = GLOBAL_LANG.about.introduction,
            t = document.getElementById("Introduction");
        let o = e[Math.floor(Math.random() * e.length)];
        for (; o === lastSayHello;) o = e[Math.floor(Math.random() * e.length)];
        (t.textContent = o), (lastSayHello = o);
    }, // about 个人介绍词
    runtimen: function() {
        let t = new Date(GLOBAL_CONFIG.date)
                .getTime(),
            n = new Date()
                .getTime(),
            a = (n - t),
            l = (a / 7884e4)
                .toFixed(2)
        let c = document.getElementById("run-time");
        c && (c.innerHTML = `已稳定运行 ${l} 年 `),
            setTimeout(meuicat.runtime, 1e3);
    }, // about 运行时间
    fiftyonela: function() {
        fetch('https://v6-widget.51.la/v6/K9WDMA2h2AfDg5GG/quote.js')
            .then(res => res.text())
            .then((data) => {
                let title = [GLOBAL_LANG.stats.today_users, GLOBAL_LANG.stats.today_uv,GLOBAL_LANG.stats.yesterday_users,GLOBAL_LANG.stats.yesterday_uv,GLOBAL_LANG.stats.month_uv]
                let num = data.match(/(<\/span><span>).*?(\/span><\/p>)/g)

                num = num.map((el) => {
                    let val = el.replace(/(<\/span><span>)/g, '')
                    let str = val.replace(/(<\/span><\/p>)/g, '')
                    return str
                })

                let statisticEl = document.getElementById('statistic')
                let activeVisitors = num[0]

                // 添加最近活跃访客的内容
                let TBoxEl = document.querySelector('.T-box')
                if (TBoxEl) {
                    TBoxEl.innerHTML = GLOBAL_LANG.stats.recent + '：' + activeVisitors + '&ensp;|&ensp;' + TBoxEl.innerHTML
                }

                // 自定义不显示哪个或者显示哪个，如下不显示总访问量
                for (let i = 0; i < num.length; i++) {
                    if (!statisticEl) return
                    if (i == 0 || i == num.length - 1) continue;
                    statisticEl.innerHTML += '<div><span class="tips">' + title[i - 1] + '</span><span id=' + title[i - 1] + '>' + num[i] + '</span></div>'
                }
            });
    } // about 51la统计显示
}
