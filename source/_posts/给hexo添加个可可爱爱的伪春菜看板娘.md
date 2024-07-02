---
title: 给你的站点添加个可可爱爱的看板娘——伪春菜
tags:
  - 站点折腾
  - 悬浮宠物/看板娘
categories:
  - 站点折腾
cover: >-
  https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20240216/16V9BANNER091002000.4rmqc30bwnc0.jpg
abbrlink: 54787
date: 2024-02-16 17:17:26
lang: zh-CN
---
# 前言
什么是伪春菜？[请看这里](https://mzh.moegirl.org.cn/%E4%BC%AA%E6%98%A5%E8%8F%9C)
作为一个早在xp时代就出现的桌面精灵，伪春菜有了爆火的人气
后来不知道什么时候开始在国内由盛转衰，直到现在我对这个圈子少之又少
我自己也下载了ssp并且应用了后来某位大佬复活的Taromati2人格

某次我逛逛某个博客站点时发现有个站点将伪春菜当成了看板娘
就去去搜了一下，得到的结果是：http://www.lmyoaoa.com/inn/archives/4504/
又因为这玩意已经很久没更新，所以我将这个的js、css和图片提取出来，然后魔改了一下，方便放在hexo里面
废话不多说，开始吧！
# 引入js和css
{blogroot}/source/weichuncai/css/style.css
```css
#smchuncai {opacity:0.85;width:160px;height:160px;position:fixed;top:400px;left:800px;font-size:12px;}
* html #smchuncai {position:absolute;}
#chuncaiface {width:160px;height:160px;background-repeat:no-repeat;position:absolute;top:0px;left:0px;}
/*#chuncaimenu {width:46px;line-height:16px;float:left;font-size:12px;cursor:pointer;background-color:#666;color:#FFF;text-align:center;}*/
#showchuncaimenu {float:left;text-align:left;width:100%;overflow:hidden;display:none;}
/*#showchuncaimenu ul, */#tempsaying ul {margin:1px 0px 0px 0px;padding:0px 0px 0px 5px;float:left;width:100%;line-height:16px;cursor:pointer;overflow:hidden;}
.wcc_mlist {text-align:center;width:47%;float:left;line-height:16px;margin:0;padding:0px 0px 4px 0px;cursor:pointer;overflow:hidden;}
#tempsaying ul {width:96%;}
#callchuncai {position:fixed;width:60px;line-height:16px;cursor:pointer;display:none;font-size:12px;border:1px solid #e87a73;background-color:#FFF;}
* html #callchuncai {position:absolute;}
#dialog_chat {position:absolute;top:0px;left:-205px;width:200px;line-height:23px;text-align:left;}
#dialog_chat_loading {width:200px;height:30px;background:url("../imgs/loading.gif") no-repeat center center;display:none;}
#chat_top {float:left;width:200px;height:5px;overflow:hidden;background:url("../imgs/chat_top.gif") no-repeat;}
#dialog_chat_contents, #chuncaisaying, #getmenu, #tempsaying {float:left;margin:0;padding-left:0px;width:198px;line-height:23px;background-color:#ffffee;}
#getmenu, #tempsaying,#chuncaisaying {padding:0px 0px 0px 2px; width:196px;}
#dialog_chat_contents {width:198px;border-left:1px solid #e87a73;border-right:1px solid #e87a73;}
#chat_bottom {width:200px;height:10px;float:left;background:url("../imgs/chat_bottom.gif") no-repeat;}
#chat_top, #chat_bottom {}
#tempsaying, #hiddenfaces {display:none;}
#getmenu {width:95%;height:16px;margin:0;padding:0;cursor:pointer;background:url("../imgs/menu.jpg") no-repeat top right;}
#addinput {width:240px;height:20px;position:absolute;top:150px;left:-260px;border:1px solid #888;background-color:#FFF;padding-top:2px;overflow:hidden;display:none;}
#inp_l {float:left;width:220px;height:20px;}
#inp_r {float:right;width:20px;height:20px;font-size:12px;text-align:center;cursor:pointer;}
#talk {border:none;float:left;width:180px;height:16px;}
#talkto {float:left;border:none;width:30px;height:16px;background:url("../imgs/ok.jpg");cursor:pointer;}
```
{blogroot}/source/weichuncai/js/common.js
```javascript
var smjq = jQuery;
var _typei = 0;
var weichuncai_text = '';
smjq(document).ready(function(){
		var getwidth = getCookie("historywidth");
		var getheight = getCookie("historyheight");
		if(getwidth != null && getheight != null){
			var width = getwidth;
			var height = getheight;
		}else{
			var width = document.documentElement.clientWidth- 200 - imagewidth;
			var height = document.documentElement.clientHeight- 180 - imageheight;
		}

		var cwidth = document.documentElement.clientWidth-100;
		var cheight = document.documentElement.clientHeight-20;
		//var height = document.body.clientHeight-200;
		var moveX = 0;
		var moveY = 0;
		var moveTop = 0;
		var moveLeft = 0;
		var moveable = false;
		var docMouseMoveEvent = document.onmousemove;
		var docMouseUpEvent = document.onmouseup;

		smjq("body").append('<div id="smchuncai" onfocus="this.blur();" style="color:#626262;z-index:999;"><div id="chuncaiface"></div><div id="dialog_chat"><div id="chat_top"></div><div id="dialog_chat_contents"><div id="dialog_chat_loading"></div><div id="tempsaying"></div><div id="showchuncaimenu"><ul class="wcc_mlist" id="shownotice">显示公告</ul><ul class="wcc_mlist" id="chatTochuncai">聊&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;天</ul><ul class="wcc_mlist" id="foods">吃 零 食</ul><ul class="wcc_mlist" id="aboutmanage">关&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;于</ul><ul class="wcc_mlist" id="lifetimechuncai">生存时间</ul><ul class="wcc_mlist" id="closechuncai">关闭春菜</ul></div><div><ul id="chuncaisaying"></ul></div><div id="getmenu"> </div></div><div id="chat_bottom"></div></div></div>');
		smjq("#smchuncai").append('<div id="addinput"><div id="inp_l"><input id="talk" type="text" name="mastersay" value="" /> <input id="talkto" type="button" value=" " /></div><div id="inp_r"> X </div></div>');
		smjq("body").append('<div id="callchuncai">召唤春菜</div>');
		//判断春菜是否处于隐藏状态
		var is_closechuncai = getCookie("is_closechuncai");
		if(is_closechuncai == 'close'){
			closechuncai_init();
		}
		//设置初始状态
		getdata("getnotice");
		setFace(1);

		smjq("#smchuncai").css('left', width+'px');
		smjq("#smchuncai").css('top', height+'px');
		smjq("#smchuncai").css('width', imagewidth+'px');
		smjq("#smchuncai").css('height', imageheight+'px');
		smjq("#callchuncai").attr("style", "top:"+cheight+"px; left:"+cwidth+"px; text-align:center;");

		smcc = document.getElementById("smchuncai");
		smcc.onmousedown = function(){
			var ent = getEvent();
			moveable = true;
			moveX = ent.clientX;
			moveY = ent.clientY;
			var obj = document.getElementById("smchuncai");
			moveTop = parseInt(obj.style.top);
			moveLeft = parseInt(obj.style.left);
			if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
				window.getSelection().removeAllRanges();
			}			
			document.onmousemove = function(){
				if(moveable){
					var ent = getEvent();
					var x = moveLeft + ent.clientX - moveX;
					var y = moveTop + ent.clientY - moveY;
					var w = 200;
					var h = 200;	//w,h为浮层宽高
					obj.style.left = x + "px";
					obj.style.top = y + "px";
				}
			};
			document.onmouseup = function(){
				if(moveable){
					var historywidth = obj.style.left;
					var historyheight = obj.style.top;
					historywidth = historywidth.replace('px', '');
					historyheight = historyheight.replace('px', '');
					setCookie("historywidth", historywidth, 60*60*24*30*1000);
					setCookie("historyheight", historyheight, 60*60*24*30*1000);
					document.onmousemove = docMouseMoveEvent;
					document.onmouseup = docMouseUpEvent;
					moveable = false; 
					moveX = 0;
					moveY = 0;
					moveTop = 0;
					moveLeft = 0;
				}
			}
		};
		smjq("#getmenu").click(function(){
				chuncaiMenu();
				setFace(1);
				});
		smjq("#shownotice").click(function(){
				getdata("getnotice");
                                setFace(1);
		});
		smjq("#closechuncai").click(function(){
				setFace(3);
				closechuncai();
				});
		smjq("#callchuncai").click(function(){
				setFace(2);
				callchuncai();
				setCookie("is_closechuncai", '', 60*60*24*30*1000);
				});
		smjq("#shownotice").click(function(){
				setFace(1);
				closeChuncaiMenu();
				});
		smjq("#lifetimechuncai").click(function(){
				closeChuncaiMenu();
				closeNotice();
				setFace(2);
				getdata('showlifetime');
				});
		smjq("#chatTochuncai").click(function(){
				showInput();
				});
		smjq("#inp_r").click(function(){
				closeInput();
				chuncaiSay('不聊天了吗？(→_→)');
				setFace(3);
				});
		smjq("#talkto").click(function(){
				getdata("talking");
				});
		smjq("#aboutmanage").click(function(){
				closeChuncaiMenu();
				closeNotice();
				smjq("#getmenu").css("display", "none");
				chuncaiSay("你想了解我主人？跟我来吧～～～");
				setFace(2);
				setTimeout(function(){
					window.location.href = _about_path ;
					}, 2000);
				});
		smjq("#foods").click(function(){
				closeChuncaiMenu();
				closeNotice();
				getdata("foods");
				});
/*		smjq("#showchuncaimenu").hover(function(){
				},function(){
				smjq("#showchuncaimenu").slideUp('slow').show();
				});*/
		document.onmousemove = function(){
			stoptime();
			tol = 0;
			setTime();
			//chuncaiSay("啊，野生的主人出现了！ ～～～O口O");
		}
		talkSelf(talktime);
		document.getElementById("smchuncai").onmouseover = function(){
			if(talkobj){
				clearTimeout(talkobj);
			}
			talktime = 0;
			talkSelf(talktime);
		}
		});

function getEvent() {
	return window.event || arguments.callee.caller.arguments[0];
}

var eattimes = 0;
function eatfood(obj){
	var gettimes = getCookie("eattimes");
	if(parseInt(gettimes) > parseInt(9)){
		chuncaiSay("主人是个大混蛋！！");
		setFace(3);
		closechuncai_evil();
	}else if(parseInt(gettimes) > parseInt(7)){
		chuncaiSay(".....................肚子要炸了，死也不要再吃了～～！！！TAT");
		setFace(3);
	}else if(parseInt(gettimes) == parseInt(5)){
		chuncaiSay("我已经吃饱了，不要再吃啦......");
		setFace(3);
	}else if(parseInt(gettimes) == parseInt(3)){
		chuncaiSay("多谢款待，我吃饱啦～～～ ╰（￣▽￣）╭");
		setFace(2);
	}else{
		var id = obj.replace("f",'');
		getdata('eatsay', id);
	}
	eattimes++;
	setCookie("eattimes", eattimes, 60*10*1000);
}
function chuncaiMenu(){
	//smjq("#showchuncaimenu").slideDown('fast').show();
	clearChuncaiSay();
	closeInput();
	chuncaiSay("准备做什么呢？");
	smjq("#showchuncaimenu").css("display", "block");
	smjq("#getmenu").css("display", "none");
	smjq("#chuncaisaying").css("display", "none");
}
function closeChuncaiMenu(){
	clearChuncaiSay();
	smjq("#showchuncaimenu").css("display", "none");
	//smjq("#chuncaisaying").css("display", "block");
	showNotice();
	smjq("#getmenu").css("display", "block");
}
function showNotice(){
	smjq("#chuncaisaying").css("display", "block");
}
function closechuncai(){
	stopTalkSelf();
	chuncaiSay("记得再叫我出来哦...");
	smjq("#showchuncaimenu").css("display", "none");
	setTimeout(function(){
			smjq("#smchuncai").fadeOut(1200);
			smjq("#callchuncai").css("display", "block");}, 2000);
	//保存关闭状态的春菜
	setCookie("is_closechuncai", 'close', 60*60*24*30*1000);
}
function closechuncai_evil(){
	stopTalkSelf();
	smjq("#showchuncaimenu").css("display", "none");
	setTimeout(function(){
			smjq("#smchuncai").fadeOut(1200);
			smjq("#callchuncai").css("display", "block");}, 2000);
}
function closechuncai_init(){
	stopTalkSelf();
	smjq("#showchuncaimenu").css("display", "none");
	setTimeout(function(){
			smjq("#smchuncai").css("display", "none");
			smjq("#callchuncai").css("display", "block");}, 30);
}
function callchuncai(){
	talkSelf(talktime);
	smjq("#smchuncai").fadeIn('normal');
	smjq("#callchuncai").css("display", "none");
	closeChuncaiMenu();
	closeNotice();
	chuncaiSay("我回来啦～");
	setCookie("is_closechuncai", '', 60*60*24*30*1000);
}

function chuncaiSay(s){
	clearChuncaiSay();
	smjq("#tempsaying").append(s);
	smjq("#tempsaying").css("display", "block");
	weichuncai_text = s;
	typeWords();
}
function clearChuncaiSay(){
	document.getElementById("tempsaying").innerHTML = '';
}
function closeNotice(){
	smjq("#chuncaisaying").css("display", "none");
}
function showInput(){
	closeChuncaiMenu();
	closeNotice();
	chuncaiSay("............?");
	//setFace(1);
	smjq("#addinput").css("display", "block");
}
function closeInput(){
	setFace(3);
	smjq("#addinput").css("display", "none");
}
function clearInput(){
	document.getElementById("talk").value = '';
}
function createFace(a, b, c){
	smjq("head").append('<div id="hiddenfaces"><img id="hf1" src="'+a+'" /><img id="hf2" src="'+b+'" /><img id="hf3" src="'+c+'" /></div>');
	setFace(1);
}
function setFace(num){
	obj = document.getElementById("hf"+num).src;
	smjq("#chuncaiface").attr("style", "background:url("+obj+") no-repeat scroll 50% 0% transparent; width:"+imagewidth+"px;height:"+imageheight+"px;");
}
function getdata(el, id){
	smjq.ajax({
		type:	'GET',
		url:	_weichuncai_jsonpath,
		cache:	'false',
		dataType: 'html',
		contentType: 'application/json; charset=utf8',
		beforeSend: function(){
			//smjq("#dialog_chat").fadeOut("normal");
			smjq("#tempsaying").css('display', "none");
			smjq("#dialog_chat_loading").fadeIn("normal");
		},
		success: function(data){
			smjq("#dialog_chat_loading").css('display', "none");
			//smjq("#dialog_chat").fadeIn("normal");
			smjq("#tempsaying").css('display', "");
			var dat = eval("("+data+")");
            if(el == 'getnotice'){
				chuncaiSay(dat.notice);
				setFace(1);
			}else if(el == 'showlifetime'){
				BirthDay=new Date(dat.showlifetime);//建站日期
				today=new Date();
				timeold=(today.getTime()-BirthDay.getTime());
				sectimeold=timeold/1000
				secondsold=Math.floor(sectimeold);
				msPerDay=24*60*60*1000
				e_daysold=timeold/msPerDay
				daysold=Math.floor(e_daysold);
				e_hrsold=(daysold-e_daysold)*-24;
				hrsold=Math.floor(e_hrsold);
				e_minsold=(hrsold-e_hrsold)*-60;
				minsold=Math.floor((hrsold-e_hrsold)*-60);
				seconds=Math.floor((minsold-e_minsold)*-60);
				chuncaiSay("我已经与主人 一起生存了 "+daysold+" 天 "+hrsold+" 小时 "+minsold+" 分钟 "+seconds+" 秒的快乐时光啦～*^_^*");
			}else if(el == 'talking'){
				var talkcon = smjq("#talk").val();
				var i = in_array(talkcon, dat.ques);
				var types = typeof(i);
				if(types != 'boolean'){
					chuncaiSay(dat.ans[i]);
					setFace(2);
				}else{
					chuncaiSay('.......................嗯？');
					setFace(3);
				}
				clearInput();
			}else if(el == 'foods'){
				var str='';
				var arr = dat.foods;
				var preg = /function/;	
				for(var i in arr){
					if(arr[i] != '' && !preg.test(arr[i]) ){
						str +='<ul id="f'+i+'" class="eatfood" onclick="eatfood(this.id)">'+arr[i]+'</ul>';
					}
				}
				chuncaiSay(str);
			}else if(el = "eatsay"){
				var str = dat.eatsay[id];
				chuncaiSay(str);
				setFace(2);
			}else if(el = "talkself"){
				var arr = dat.talkself;
				return arr;
			}
		},
		error: function(){
			chuncaiSay('好像出错了，是什么错误呢...请联系管理猿');
		}
		});
}

function in_array(str, arr){
	for(var i in arr){
		if(arr[i] == str){
			return i;
		}
	}
	return false;
}

var timenum;
var tol=0;
//10分钟后页面没有响应就停止活动
var goal = 10*60;
function setTime(){
	tol++;
	//document.body.innerHTML(tol);
	timenum = window.setTimeout("setTime('"+tol+"')", 1000);
	if(parseInt(tol) == parseInt(goal)){
		stopTalkSelf();
		closeChuncaiMenu();
		closeNotice();
		closeInput();
		chuncaiSay("主人跑到哪里去了呢....");
		setFace(3);
		stoptime();
	}
}
function stoptime(){
	if(timenum){
		clearTimeout(timenum);
	}
}
var talktime = 0;
//设置自言自语频率（单位：秒）
var talkself = 60;
var talkobj;
var tsi = 0;
var talkself_arr = [
	["白日依山尽，黄河入海流，欲穷千里目，更上.....一层楼？", "1"],
	["我看见主人熊猫眼又加重了！", "3"],
	["我是不是很厉害呀～～？", "2"],
	["5555...昨天有个小孩子跟我抢棒棒糖吃.....", "3"],
	["昨天我好像看见主人又在众人之前卖萌了哦～", "2"]
];

function talkSelf(talktime){
	talktime++;
	var yushu = talktime%talkself;
	if(parseInt(yushu) == parseInt(9)){
		closeChuncaiMenu();
		closeNotice();
		closeInput();
		tsi = Math.floor(Math.random() * talkself_arr.length + 1)-1;
		chuncaiSay(talkself_arr[tsi][0]);
		setFace(talkself_arr[tsi][1]);
	}
	talkobj = window.setTimeout("talkSelf("+talktime+")", 1000);
}
function stopTalkSelf(){
	if(talkobj){
		clearTimeout(talkobj);
	}
}
function arrayShuffle(arr){
	var result = [],
	len = arr.length;
	while(len--){
		result[result.length] = arr.splice(Math.floor(Math.random()*(len+1)),1);
	}
	return result;
}


function typeWords() {
	var p = 1;
	var str = weichuncai_text.substr(0,_typei);
	var w = weichuncai_text.substr(_typei,1);
	if(w=="<"){
		str += weichuncai_text.substr(_typei,weichuncai_text.substr(_typei).indexOf(">")+1);
		p= weichuncai_text.substr(_typei).indexOf(">")+1;
	}
	_typei+=p;
	document.getElementById("tempsaying").innerHTML = str;
	txtst = setTimeout("typeWords()",20);
	if (_typei> weichuncai_text.length){
		clearTimeout(txtst);
		_typei = 0;
	}
}

function setCookie(name, val, ex){
	var times = new Date();
	times.setTime(times.getTime() + ex);
	if(ex == 0){
		document.cookie = name+"="+val+";";
	}else{
		document.cookie = name+"="+val+"; expires="+times.toGMTString();
	}
}

function getCookie(name){
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));   
	if(arr != null) return unescape(arr[2]); return null;
}
```
{blogroot}/source/weichuncai/js/chuncai.json（这个地方可以自行配置）
```json
{
    "notice": "欢迎来到我的新家，没想到在2024我会被人注意到，真幸福~~",
    "ques": [
        "早上好",
        "中午好",
        "下午好",
        "晚上好",
        "晚安"
    ],
    "ans": [
        "早上好～",
        "中午好～",
        "下午好～",
        "晚上好～",
        "晚安～"
    ],
    "foods": [
        "金坷垃",
        "咸梅干"
    ],
    "eatsay": [
        "吃了金坷垃，一刀能秒一万八～！",
        "吃咸梅干，变超人！哦耶～～～"
    ],
    "showlifetime":"02-16-2024 15:30:00"
}
```
{blogroot}/source/weichuncai/js/chuncai.json（这个地方可以自行配置）
```javascript
var _about_path = "https://blog.sinzmise.top/about"; //你的关于页面地址
var _weichuncai_jsonpath = "/weichuncai/chuncai.json"; //chuncai.json的位置
var imagewidth = '85'; //人格长度
var imageheight = '152'; //人格高度
//设置人格的自言自语，前面的双引号是内容后面的双引号是人格表情，后面的1、2、3对应createFace设置的第几个表情
var talkself_arr = [
  ["白日依山尽，黄河入海流，欲穷千里目，更上.....一层楼？", "1"],
  ["我看见主人熊猫眼又加重了！", "3"],
  ["我是不是很厉害呀～～？", "2"],
  ["5555...昨天有个小孩子跟我抢棒棒糖吃.....", "3"]
];
//设置表情
createFace(
  "https://dqapi.sininno.eu.org/weichuncai/skin/rakutori/face1.gif", 
  "https://dqapi.sininno.eu.org/weichuncai/skin/rakutori/face2.gif", 
  "https://dqapi.sininno.eu.org/weichuncai/skin/rakutori/face3.gif"
);
```
butterfly、anzhiyu主题引入：
```yaml
# Inject
# Insert the code to head (before '</head>' tag) and the bottom (before '</body>' tag)
# 插入代码到头部 </head> 之前 和 底部 </body> 之前
inject:
  head:
    # jQuery（必须在之前引入）
    - <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  bottom:
    # 主体
    - <link rel="stylesheet" type="text/css" href="/weichuncai/css/style.css">
    - <script src="/weichuncai/js/common.js"></script>
    - <script src="/weichuncai/wcc-config.js"></script>
```
# 后记
我为什么会将伪春菜定义为桌面精灵而不是桌宠？
是因为相比于桌宠来说，伪春菜比桌宠的功能还多得多
因此我即使开着虚拟桌宠模拟器，我有时也会开着伪春菜
![ssp_OgKZgUjISo](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20240216/ssp_OgKZgUjISo.1rssdhcjowjk.webp)
（甚至我电脑卡的时候也会提醒我，虽然我电脑没有卡死QWQ）

还有，我之前看[关于Kikka](https://steve02081504.github.io/2020/02/27/about-kikka/)这篇文章，有一句话很吸引我：
![msedge_h7th45Tk9U](https://jsd.cdn.storisinz.site/gh/SinzMise/picx-images-hosting@master/20240216/msedge_h7th45Tk9U.47mkdav98180.webp)
也据此可以看出，在2020年，伪春菜这个圈子越来越难活下去
更何况现在是2024。。。。。。

但不管怎么说，还是有人在用这个桌面精灵的，至少有我一个。。。。。。
后面我打算写个有关伪春菜的配置教程吧。。。。。。
