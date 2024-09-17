function whenDOMReady() {
    if (location.pathname.startsWith('/bbs/')) loadbbs();
}

whenDOMReady() // 打开网站先执行一次
document.addEventListener("pjax:complete", whenDOMReady) // pjax加载完成（切换页面）后再执行一次

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
    return new Promise((resolve, reject) => {
        let tag;

        if (type === "css") {
            tag = document.createElement("link");
            tag.rel = "stylesheet";
            tag.href = url;
        }
        else if (type === "js") {
            tag = document.createElement("script");
            tag.src = url;
        }
        if (tag) {
            tag.onload = () => resolve(url);
            tag.onerror = () => reject(url);
            document.getElementById('memobbs-static').appendChild(tag);
        }
    });
}

function loadbbs() {
    // 哔哔广场依赖的css
    loadExternalResource("https://jsd.cdn.storisinz.site/npm/artalk/dist/ArtalkLite.css", "css"),
    loadExternalResource("https://memobbs.app/memos.css", "css"),
    loadExternalResource("https://memobbs.app/grid.css", "css"),

    // 哔哔广场依赖的js
    loadExternalResource("https://jsd.cdn.storisinz.site/npm/twikoo", "js"),
    loadExternalResource("https://jsd.cdn.storisinz.site/npm/artalk/dist/ArtalkLite.js", "js"),
    loadExternalResource("https://jsd.cdn.storisinz.site/npm/marked/marked.min.js", "js"),
    loadExternalResource("https://jsd.cdn.storisinz.site/npm/lozad/dist/lozad.min.js", "js"),
    loadExternalResource("https://memobbs.app/memos.js", "js")
}