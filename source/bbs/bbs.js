function startbbs() {
    if (location.pathname.startsWith('/bbs/')) reinitIframe();
}

//iframe自适应高度,解决了动态更换页面高度无法自适应问题
function reinitIframe() {
    var iframe = document.getElementById("mainFrame");
    try {
        //bHeight 和 dHeight 如果相等，用其一等于iframe.height 即可
        var bHeight = iframe.contentWindow.document.body.scrollHeight;
        var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        var height = Math.max(bHeight, dHeight);
        console.log(height)
        iframe.height = height;
    } catch (ex) { }
}

$(function () {
    //时间控制每隔200毫秒检查当前页面高度以及滚动高度，测试多遍，cpu占用极少，不明显影响程序运行速度
    window.setInterval("startbbs()", 200);
})