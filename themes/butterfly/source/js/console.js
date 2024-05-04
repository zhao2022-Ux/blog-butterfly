document.addEventListener('pjax:complete', tosetting);
document.addEventListener('DOMContentLoaded', tosetting);
function tosetting(){
    $("#settingWindow").hide();
    if(localStorage.getItem("blur")=="false"){
        blur=0;
    }else{
        blur=1;

    }
    if(localStorage.getItem("yjjs")=="true"){
        yjjs=1;
    }else{
        yjjs=0;

    }
    if(localStorage.getItem("fpson")==undefined){
        localStorage.setItem("fpson","1");
    }
    if(!blur){
        document.getElementById("settingStyle").innerText=`
    *,*:not(.card-info)::before,*::after{
        -webkit-backdrop-filter: none!important;
        backdrop-filter: none!important;
        -webkit-filter: none!important;
        filter: none!important;
    }`}
    else{
        document.getElementById("settingStyle").innerText=''
    }
    setBlur=function(){
        blur=!blur;
        localStorage.setItem("blur",blur);
        if(!blur){
            document.getElementById("settingStyle").innerText=`
    *{
        -webkit-backdrop-filter: none!important;
        backdrop-filter: none!important;
        -webkit-filter: none!important;
        filter: none!important;
    }`}
        else{
            document.getElementById("settingStyle").innerText=''
        }
    }
// if(yjjs){
//     document.getElementById("yjjs").innerText=`
//     *:not(#web_bg){
//         transform:translateZ(0);
//         backface-visibility: hidden
//     }`}
//     else{
//         document.getElementById("yjjs").innerText=``
//     }
    yjjs1=function(){
        yjjs=!yjjs;
        localStorage.setItem("yjjs",yjjs)
        // if(yjjs){
        // document.getElementById("yjjs").innerText=`
        // *:not(#web_bg){
        //     transform:translateZ(0);
        //     backface-visibility: hidden
        // }`}
        // else{
        //     document.getElementById("yjjs").innerText=``
        // }
    }
    if(localStorage.getItem("blogTheme")=="acrylic"){
        document.getElementById("css").href="";
    }
    switchTheme=function(){
        if(document.getElementById("css").href==window.location.protocol+"//"+window.location.host+"/css/stylessimple.css"){
            document.getElementById("css").href=""
            localStorage.setItem("blogTheme","acrylic");
        }else{
            document.getElementById("css").href="/css/stylessimple.css"
            localStorage.setItem("blogTheme","simple");
        }
    }
    setColor=function(c){
        document.getElementById("themeColor").innerText=`:root{--story-theme:var(--story-${c})!important}`;
        localStorage.setItem("themeColor",c);

    }
    setFont=function(n){
        localStorage.setItem("font",n);
        if(n=="main"){
            var s=document.querySelectorAll("body,.aplayer")
            for(var i = 0; i <s.length; i++) {
                s[i].style.fontFamily="-apple-system, IBM Plex Mono ,monospace,'寰蒋闆呴粦', sans-serif"
            }
        }
        else if(n=="HYPailou"){
            var s=document.querySelectorAll("body,.aplayer")
            for(var i = 0; i <s.length; i++) {
                s[i].style.fontFamily="Fredoka,HYPailou,KyoukashoProL,-apple-system, IBM Plex Mono ,monospace,'寰蒋闆呴粦', sans-serif"
            }
        }
        else{
            var s=document.querySelectorAll("body,.aplayer")
            for(var i = 0; i <s.length; i++) {
                s[i].style.fontFamily="var(--global-font),KyoukashoProL,-apple-system, IBM Plex Mono ,monosapce,\"寰蒋闆呴粦\", sans-serif"
            }
            document.body.style.fontFamily="var(--global-font),KyoukashoProL,-apple-system, IBM Plex Mono ,monosapce,'寰蒋闆呴粦', sans-serif"
            document.documentElement.style.setProperty('--global-font', n)
        }
    }
    if(localStorage.getItem("themeColor")==undefined){
        localStorage.setItem("themeColor","orange");
    }

    setColor(localStorage.getItem("themeColor"));



    if(localStorage.getItem("hideRightside")==undefined){
        localStorage.setItem("hideRightside","0");
    }

    if(localStorage.getItem("hideRightside")=="1"){
        $("#rightside").toggle()
    }
    toggleRightside=function(){
        $("#rightside").toggle();
        localStorage.setItem("hideRightside",Math.abs(Number(localStorage.getItem("hideRightside"))-1))
    }
    if(localStorage.getItem("font")==undefined){
        localStorage.setItem("font","HYTMR")
    }
    setFont(localStorage.getItem("font"))
// 瀛樻暟鎹�
// name锛氬懡鍚� data锛氭暟鎹�
    saveData=function(name, data) {
        localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
    }

// 鍙栨暟鎹�
// name锛氬懡鍚� time锛氳繃鏈熸椂闀�,鍗曚綅鍒嗛挓,濡備紶鍏�30,鍗冲姞杞芥暟鎹椂濡傛灉瓒呭嚭30鍒嗛挓杩斿洖0,鍚﹀垯杩斿洖鏁版嵁
    loadData=function(name, time) {
        let d = JSON.parse(localStorage.getItem(name));
        // 杩囨湡鎴栨湁閿欒杩斿洖 0 鍚﹀垯杩斿洖鏁版嵁
        if (d) {
            let t = Date.now() - d.time
            if (t < (time * 60 * 1000) && t > -1) return d.data;
        }
        return 0;
    }
// 鍒囨崲鑳屾櫙鍑芥暟
// 姝ゅ鐨刦lag鏄负浜嗘瘡娆¤鍙栨椂閮介噸鏂板瓨鍌ㄤ竴娆�,瀵艰嚧杩囨湡鏃堕棿涓嶇ǔ瀹�
// 濡傛灉flag涓�0鍒欏瓨鍌�,鍗宠缃儗鏅�. 涓�1鍒欎笉瀛樺偍,鍗虫瘡娆″姞杞借嚜鍔ㄨ鍙栬儗鏅�.
    changeBg=function(s, flag) {
        let bg = document.getElementById('web_bg')
        if (s.charAt(0) == '#') {
            bg.style.backgroundColor = s
            bg.style.backgroundImage = 'none'
        } else bg.style.backgroundImage = s
        if (!flag) { saveData('blogbg', s) }
    }
// 涓婇潰涓や釜鍑芥暟濡傛灉浣犳湁鍏朵粬闇€瑕佸瓨鍙栨暟鎹殑鍔熻兘锛屼篃鍙互鐩存帴浣跨敤

// 璇诲彇鑳屾櫙
    try {
        let data = loadData('blogbg', 1440)
        if (data) changeBg(data, 1)
        else localStorage.removeItem('blogbg');
    } catch (error) { localStorage.removeItem('blogbg'); }



    fpssw=function(){
        if(localStorage.getItem("fpson")=="1"){
            localStorage.setItem("fpson","0");
        }else{
            localStorage.setItem("fpson","1");
        }
    }
    $(".asetting").hide();
    $('#backer').hide();
    $('#stt-style').hide();
    $('#stt-font').hide();
    $('#stt-background').hide();
    $('#stt-count').hide();
    $('#stt-about').hide();
    $("#"+localStorage.getItem("themeColor")).attr("checked", true);
    if(localStorage.getItem("blur")=="false"){
        document.getElementById("blur").checked=true;
    }
    if(localStorage.getItem("yjjs")=="true"){
        document.getElementById("yjjs").checked=true;
    }
    if(localStorage.getItem("fpson")=="1"){
        document.getElementById("fpson").checked=true;
    }


    if(localStorage.getItem("sakurahide")=="false"){
        document.getElementById("hideSakura").checked=true;
        isSakura=1;
    }
    else if(localStorage.getItem("sakurahide")==null){
        localStorage.setItem("sakurahide","false");
        document.getElementById("hideSakura").checked=true;
        isSakura=1;
    }
    else{
        setTimeout(
            stopp,1000);
        isSakura=0;
    }
    if(localStorage.getItem("aplayerhide")=="true"){
        document.getElementById("hideAplayer").checked=false;
        Snackbar.show({
            text: '本站配合音乐播放器最佳（可在设置里关闭）',
            pos: 'bottom-right',
            actionText: "开启播放器",
            onActionClick: function (element) {
                toggleAplayer()
            },
        })
    }
    else if(localStorage.getItem("aplayerhide")==null){
        localStorage.setItem("aplayerhide","true");
        document.getElementById("hideAplayer").checked=false;
    }
    else{
        document.getElementById("hideAplayer").checked=true;
        var script = document.createElement('script');
        script.id = 'xplayer';
        script.src = 'https://y.cenguigui.cn/Static/player13/js/player.js';
        script.setAttribute('key','661a038c31f2b');
        script.setAttribute('m','1');
        document.getElementsByTagName('body')[0].appendChild(script);
    }

    document.getElementsByClassName("reSettings")[0].onclick=function(){
        localStorage.clear()
        window.location.reload()
    }

    toggleWinbox=function(){
        $("#settingWindow").fadeToggle();
        if(document.getElementById("settingWindow").style.display!="none"){
            document.getElementById("settingWindow").style.display="flex";
        }
    }
    fullScreen=function() {
        if (document.fullscreenElement) document.exitFullscreen()
        else document.documentElement.requestFullscreen();
    }
    toggleAside=function(){
        const $htmlDom = document.documentElement.classList
        $htmlDom.contains('hide-aside')
            ? saveToLocal.set('aside-status', 'show', 2)
            : saveToLocal.set('aside-status', 'hide', 2)
        $htmlDom.toggle('hide-aside')
    }
    toggleAplayer=function(){
        var playerid = document.getElementById('guiguiplayer');
        var playertips = document.getElementById('guiguiTips');
        var playerksc = document.getElementById('guiguiKsc');
        var playerlrc = document.getElementById('guiguiKsc');
        if(localStorage.getItem("aplayerhide")=="false"){
            localStorage.setItem("aplayerhide",true);
            playerid.style.visibility = 'hidden';
            playertips.style.visibility = 'hidden';
            playerksc.style.visibility = 'hidden';
            playerlrc.style.visibility = 'hidden';
            hasgeci = false;
            $("li", $albumList).eq(albumId).addClass(cur).find(".artist").html("暂停播放 > ").parent().siblings().removeClass(cur).find(".artist").html("").parent();
            guiguiTips.show("暂停播放 - " + songSheetList[albumId].songNames[songId]);
            $cover.removeClass("coverplay");
            audio.pause();
            var obj = document.getElementsByClassName('pause');
            obj[0].style.display = "none";

            var play_obj = document.getElementsByClassName('play');
            play_obj[0].style.display = "block";

            $.cookie("auto_playre", "no")
        }
        else{
            localStorage.setItem("aplayerhide",false);
            if(playerid && playertips && playerksc && playerlrc){
                playerid.style.visibility = 'visible';
                playertips.style.visibility = 'visible';
                playerksc.style.visibility = 'visible';
                playerlrc.style.visibility = 'visible';
            }else{
                var script = document.createElement('script');
                script.id = 'xplayer';
                script.src = 'https://y.cenguigui.cn/Static/player13/js/player.js';
                script.setAttribute('key','661a038c31f2b');
                script.setAttribute('m','1');
                document.getElementsByTagName('body')[0].appendChild(script);
            }
        }
    }
// position = $(window).scrollTop();
// $(window).scroll(function () {

//     scroll = $(window).scrollTop();

//     if (scroll > position) {
//       document.getElementsByTagName("header")[0].style.transform="translateY(58px)";
//     } else {


//         document.getElementsByTagName("header")[0].style.transform="";

//     }

//     position = scroll;
//   });
    toggleSakuras=function(){
        isSakura=!isSakura;
        stopp(isSakura);
        if(localStorage.getItem("sakurahide")=="true"){
            localStorage.setItem("sakurahide",false);
        }
        else{
            localStorage.setItem("sakurahide",true);
        }
    }
    switchAside=function(){
        if(left){
            document.getElementById("aside-content").classList.add("right");
            document.querySelector(".layout > div:first-child").classList.add("left");
            localStorage.setItem("leftAside","false");
        }
        else{
            document.getElementById("aside-content").className="aside-content";
            document.querySelector(".layout > div:first-child").className="";
            try{
                document.querySelector("#recent-posts").className="recent-posts";
            }catch(err){}localStorage.setItem("leftAside","true");}
        left=!left;
    }
    left=1;
    if(localStorage.getItem("leftAside")=="true"||localStorage.getItem("leftAside")==null){

    }else{
        switchAside();
    }
    if(localStorage.getItem("autoTheme")=="true"){
        localStorage.setItem("autoTheme","false");
        document.getElementById("autoTheme").checked=true;
        var time=new Date();
        if(time.getHours()<=7||time.getHours()>=19){
            activateDarkMode()
            saveToLocal.set('theme', 'dark', 2)
            GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
        }
        else{
            activateLightMode()
            saveToLocal.set('theme', 'light', 2)
            GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
        }
    }
    toggleAutoTheme=()=>{
        if(localStorage.getItem("autoTheme")=="true"){
            localStorage.setItem("autoTheme","false");
            $("#con-mode").show();
        }
        else{
            localStorage.setItem("autoTheme","true");
            var time=new Date();
            if(time.getHours()<=7||time.getHours()>=19){
                activateDarkMode()
                saveToLocal.set('theme', 'dark', 2)
                GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
            }
            else{
                activateLightMode()
                saveToLocal.set('theme', 'light', 2)
                GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
            }
            $("#con-mode").hide();
        }
    }
}
switchDarkMode = function () {
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
        activateDarkMode()
        saveToLocal.set('theme', 'dark', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
    } else {
        activateLightMode()
        saveToLocal.set('theme', 'light', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
    }
    // handle some cases
    typeof utterancesTheme === 'function' && utterancesTheme()
    typeof FB === 'object' && window.loadFBComment()
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
};