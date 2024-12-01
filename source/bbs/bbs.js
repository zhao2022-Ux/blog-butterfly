function loadbbs(){
    $.get("/bbs/bbs.html",function(data){
        $("#memos-bbsset").html(data);
    });
}

window.DOMReady = function () {
	if (document.querySelector('#memos-bbsset')) setTimeout("loadbbs()",10000); 
};

window.addEventListener("load", DOMReady)
document.addEventListener("pjax:complete", DOMReady)

