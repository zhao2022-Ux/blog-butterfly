var fdatalist=JSON.parse(localStorage.getItem("fdatalist")),fdata={jsonurl:"",apiurl:"",apipublicurl:fdatalist.apiurl,initnumber:fdatalist.initnumber,stepnumber:fdatalist.stepnumber,article_sort:"created",error_img:"https://sdn.geekzu.org/avatar/57d8260dfb55501c37dde588e7c3852c"};if("undefined"!=typeof fdataUser)for(var key in fdataUser)fdataUser[key]&&(fdata[key]=fdataUser[key]);var article_num="",sortNow="",UrlNow="",friends_num="",container=document.getElementById("fcircleContainer")||document.getElementById("cf-container"),localSortNow=localStorage.getItem("sortNow"),localUrlNow=localStorage.getItem("urlNow");function loadStatistical(a){article_num=a.article_num,friends_num=a.friends_num;a.friends_num,a.active_num,a.article_num;var t=`\n    <div id="cf-more" class="cf-new-add" onclick="loadNextArticle()"><i class="fas fa-angle-double-down"></i></div>\n    <div id="cf-footer" class="cf-new-add">\n     <span id="cf-version-up" onclick="checkVersion()"></span>\n     <span class="cf-data-lastupdated">更新于：${a.last_updated_time}</span>\n     <span class="cf-data-lastupdated">订阅:${a.friends_num} 活跃:${a.active_num} 日志:${a.article_num}</span>\n    </div>\n    <div id="cf-overlay" class="cf-new-add" onclick="closeShow()"></div>\n    <div id="cf-overshow" class="cf-new-add"></div>\n  `;container&&container.insertAdjacentHTML("afterend",t)}function loadArticleItem(a,t,e){var l="",r=e;if(e>article_num&&(r=article_num),t<article_num){for(var o=t;o<r;o++){var n=a[o];l+=`\n      <div class="cf-article">\n        <a class="cf-article-title" href="${n.link}" target="_blank" rel="noopener nofollow" data-title="${n.title}">${n.title}</a>\n        <span class="cf-article-floor">${n.floor}</span>\n        <div class="cf-article-avatar no-lightbox flink-item-icon">\n          <a onclick="openMeShow(event)" data-link="${n.link}" class="" target="_blank" rel="noopener nofollow" href="javascript:;"><img class="cf-img-avatar avatar" src="${n.avatar}" alt="avatar" onerror="this.src='${fdata.error_img}'; this.onerror = null;"><span class="cf-article-author">${n.author}</span></a>\n          <span class="cf-article-time">\n            <span class="cf-time-created" style="${"created"==sortNow?"":"display:none"}">${n.created}</span>\n            <span class="cf-time-updated" style="${"updated"==sortNow?"":"display:none"}"><i class="fas fa-history">更新于</i>${n.updated}</span>\n          </span>\n        </div>\n      </div>\n      `}container.insertAdjacentHTML("beforeend",l),fetchNextArticle()}else document.getElementById("cf-more").outerHTML='<div id="cf-more" class="cf-new-add" onclick="loadNoArticle()"><small>一切皆有尽头！</small></div>'}function loadFcircleShow(a,t){for(var e=`\n      <div class="cf-overshow">\n        <div class="cf-overshow-head">\n          <img class="cf-img-avatar avatar" src="${a.avatar}" alt="avatar" onerror="this.src='${fdata.error_img}'; this.onerror = null;">\n          <a class="" target="_blank" rel="noopener nofollow" href="${a.link}">${a.author}</a>\n        </div>\n        <div class="cf-overshow-content">\n  `,l=0;l<a.article_num;l++){var r=t[l];e+=`\n      <p><a class="cf-article-title"  href="${r.link}" target="_blank" rel="noopener nofollow" data-title="${r.title}">${r.title}</a><span>${r.created}</span></p>\n    `}e+="</div></div>",document.getElementById("cf-overshow").insertAdjacentHTML("beforeend",e),document.getElementById("cf-overshow").className="cf-show-now"}function fetchNextArticle(){var start=document.getElementsByClassName("cf-article").length,end=start+fdata.stepnumber,articleNum=article_num;if(end>articleNum&&(end=articleNum),start<articleNum){UrlNow=localStorage.getItem("urlNow");var fetchUrl=UrlNow+"rule="+sortNow+"&start="+start+"&end="+end;fetch(fetchUrl).then((a=>a.json())).then((json=>{var nextArticle=eval(json.article_data);console.log("已预载?rule="+sortNow+"&start="+start+"&end="+end),localStorage.setItem("nextArticle",JSON.stringify(nextArticle))}))}else(start=articleNum)&&(document.getElementById("cf-more").outerHTML='<div id="cf-more" class="cf-new-add" onclick="loadNoArticle()"><small>一切皆有尽头！</small></div>')}function loadNextArticle(){for(var a=JSON.parse(localStorage.getItem("nextArticle")),t="",e=0;e<a.length;e++){var l=a[e];t+=`\n      <div class="cf-article">\n        <a class="cf-article-title" href="${l.link}" target="_blank" rel="noopener nofollow" data-title="${l.title}">${l.title}</a>\n        <span class="cf-article-floor">${l.floor}</span>\n        <div class="cf-article-avatar no-lightbox flink-item-icon">\n          <a onclick="openMeShow(event)" data-link="${l.link}" class="" target="_blank" rel="noopener nofollow" href="javascript:;"><img class="cf-img-avatar avatar" src="${l.avatar}" alt="avatar" onerror="this.src='${fdata.error_img}'; this.onerror = null;"><span class="cf-article-author">${l.author}</span></a>\n          <span class="cf-article-time">\n            <span class="cf-time-created" style="${"created"==sortNow?"":"display:none"}">${l.created}</span>\n            <span class="cf-time-updated" style="${"updated"==sortNow?"":"display:none"}"><i class="fas fa-history">更新于</i>${l.updated}</span>\n          </span>\n        </div>\n      </div>\n      `}container.insertAdjacentHTML("beforeend",t),lazyLoadInstance.update(),fetchNextArticle()}function loadNoArticle(){var a=sortNow+"ArticleData";localStorage.removeItem(a),localStorage.removeItem("statisticalData"),document.getElementById("cf-more").remove(),window.scrollTo(0,document.getElementsByClassName("cf-state").offsetTop)}function clearLocal(){localStorage.removeItem("updatedArticleData"),localStorage.removeItem("createdArticleData"),localStorage.removeItem("nextArticle"),localStorage.removeItem("statisticalData"),localStorage.removeItem("sortNow"),localStorage.removeItem("urlNow"),location.reload()}function checkVersion(){var a=fdata.apiurl+"version";fetch(a).then((a=>a.json())).then((a=>{console.log(a);var t=a.status,e=a.current_version,l=a.latest_version,r=document.getElementById("cf-version-up");r.innerHTML=0==t?"当前版本：v"+e:1==t?"发现新版本：v"+e+" ↦ "+l:"网络错误，检测失败！"}))}function changeEgg(){if(fdata.jsonurl||fdata.apiurl){document.querySelectorAll(".cf-new-add").forEach((a=>a.remove())),localStorage.removeItem("updatedArticleData"),localStorage.removeItem("createdArticleData"),localStorage.removeItem("nextArticle"),localStorage.removeItem("statisticalData"),container.innerHTML="",UrlNow=localStorage.getItem("urlNow");var a=fdata.apipublicurl+"all?";UrlNow!==a?changeUrl=fdata.apipublicurl+"all?":fdata.jsonurl?changeUrl=fdata.apipublicurl+"postjson?jsonlink="+fdata.jsonurl+"&":fdata.apiurl&&(changeUrl=fdata.apiurl+"all?"),localStorage.setItem("urlNow",changeUrl),FetchFriendCircle(sortNow,changeUrl)}else clearLocal()}function FetchFriendCircle(sortNow,changeUrl){var end=fdata.initnumber,fetchUrl=UrlNow+"rule="+sortNow+"&start=0&end="+end;changeUrl&&(fetchUrl=changeUrl+"rule="+sortNow+"&start=0&end="+end),fetch(fetchUrl).then((a=>a.json())).then((json=>{var statisticalData=json.statistical_data,articleData=eval(json.article_data),articleSortData=sortNow+"ArticleData";loadStatistical(statisticalData),loadArticleItem(articleData,0,end),localStorage.setItem("statisticalData",JSON.stringify(statisticalData)),localStorage.setItem(articleSortData,JSON.stringify(articleData))}))}function changeSort(a){sortNow=a.currentTarget.dataset.sort,localStorage.setItem("sortNow",sortNow),document.querySelectorAll(".cf-new-add").forEach((a=>a.remove())),container.innerHTML="",changeUrl=localStorage.getItem("urlNow"),initFriendCircle(sortNow,changeUrl),fdata.apiurl&&checkVersion()}function openMeShow(a){a.preventDefault();var t=a.currentTarget.dataset.link.replace(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,"$1:$2$3");console.log(t);var e="";e=fdata.apiurl?fdata.apiurl+"post?link="+t:fdata.apipublicurl+"post?link="+t,"ok"==noClick&&(noClick="no",fetchShow(e))}function closeShow(){document.getElementById("cf-overlay").className-="cf-show-now",document.getElementById("cf-overshow").className-="cf-show-now",document.getElementById("cf-overshow").innerHTML=""}localSortNow&&localUrlNow?(sortNow=localSortNow,UrlNow=localUrlNow):(sortNow=fdata.article_sort,UrlNow=fdata.jsonurl?fdata.apipublicurl+"postjson?jsonlink="+fdata.jsonurl+"&":fdata.apiurl?fdata.apiurl+"all?":fdata.apipublicurl+"all?",console.log("当前模式："+UrlNow),localStorage.setItem("urlNow",UrlNow),localStorage.setItem("sortNow",sortNow));var noClick="ok";function openToShow(){var a="";a=fdata.apiurl?fdata.apiurl+"post":fdata.apipublicurl+"post","ok"==noClick&&(noClick="no",fetchShow(a))}function fetchShow(url){var closeHtml='\n    <div class="cf-overshow-close" onclick="closeShow()"></div>\n  ';document.getElementById("cf-overlay").className="cf-show-now",document.getElementById("cf-overshow").insertAdjacentHTML("afterbegin",closeHtml),console.log("开往"+url),fetch(url).then((a=>a.json())).then((json=>{noClick="ok";var statisticalData=json.statistical_data,articleData=eval(json.article_data);loadFcircleShow(statisticalData,articleData)}))}function initFriendCircle(a,t){var e=a+"ArticleData";JSON.parse(localStorage.getItem("statisticalData")),JSON.parse(localStorage.getItem(e));container.innerHTML="",FetchFriendCircle(a,t)}initFriendCircle(sortNow);