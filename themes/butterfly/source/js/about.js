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
                                element.innerText = totalComments + '条评论';
                            } else {
                                console.log(`魔法之屋提醒您：\n\n评论总数功能无法获取到正确的元素，请检查页面是否正常！`);
                            }
                        });
                    });
            });
    }, // 总评论数量
    Introduction: function() {
        const e = [
                "📔️ 喜欢分享故事的屋主",
                "✨ 星空之下的旅行者",
                "📚 一位平凡的学生",
            ],
            t = document.getElementById("Introduction");
        let o = e[Math.floor(Math.random() * e.length)];
        for (; o === lastSayHello;) o = e[Math.floor(Math.random() * e.length)];
        (t.textContent = o), (lastSayHello = o);
    }, // about 个人介绍词
    runtimen: function() {
        let t = new Date("2021/12/17 14:53:11")
                .getTime(),
            n = new Date()
                .getTime(),
            a = Math.round((n - t) / 1e3),
            l = (a / 7884e4)
                .toFixed(2);
        let c = document.getElementById("run-time");
        c && (c.innerHTML = `已稳定运行 ${l} 坤年 🏀`),
            setTimeout(meuicat.runtime, 1e3);
    }, // about 运行时间
    fiftyonela: function() {
        fetch('https://v6-widget.51.la/v6/K9WDMA2h2AfDg5GG/quote.js')
            .then(res => res.text())
            .then((data) => {
                let title = ['今日人数', '今日访问', '昨日人数', '昨日访问', '本月访问']
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
                    TBoxEl.innerHTML = '最近活跃：' + activeVisitors + '&ensp;|&ensp;' + TBoxEl.innerHTML
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
