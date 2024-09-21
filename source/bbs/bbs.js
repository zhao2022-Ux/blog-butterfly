function whenDOMReady() {
    if (location.pathname.startsWith('/bbs/')) loadbbs();
}

whenDOMReady() // 打开网站先执行一次
document.addEventListener("pjax:complete", whenDOMReady) // pjax加载完成（切换页面）后再执行一次

function loadbbs(){
    $.get("/bbs/bbs.html",function(data){
        $("#memosbbs").html(data);
    });
}
