function whenDOMReady() {
    if (location.pathname.startsWith('/bbs/')) window.setInterval("reinitIframe()", 200);
}
 
 
//iframe自适应高度,解决了动态更换页面高度无法自适应问题
function reinitIframe() {
    var iframe = document.getElementById("mainFrame");
    try {
        //bHeight 和 dHeight 如果相等，用其一等于iframe.height 即可
        // var bHeight = iframe.contentWindow.document.body.scrollHeight;
        var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        // var height = Math.max(bHeight, dHeight);
        console.log(dHeight)
        iframe.height = dHeight;
    } catch (ex) { }
}