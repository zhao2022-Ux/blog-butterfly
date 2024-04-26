document.addEventListener("DOMContentLoaded",(function(){let t,e,n=!1;const o=n=>{const o=t=>{let e=0;return t.length&&Array.from(t).forEach((t=>{e+=t.offsetWidth})),e};if(n){const n=o(document.querySelector("#blog-info > a").children),i=o(document.getElementById("menus").children);t=n+i,e=document.getElementById("nav")}let i="";i=window.innerWidth<=768||t>e.offsetWidth-120,i?e.classList.add("hide-menu"):e.classList.remove("hide-menu")},i=()=>{btf.sidebarPaddingR(),document.body.style.overflow="hidden",btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),n=!0},c=()=>{const t=document.body;t.style.overflow="",t.style.paddingRight="",btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),n=!1},s=function(){const t=GLOBAL_CONFIG.highlight;if(!t)return;const e=t.highlightCopy,n=t.highlightLang,o=GLOBAL_CONFIG_SITE.isHighlightShrink,i=t.highlightHeightLimit,c=e||n||void 0!==o,s="highlighjs"===t.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if(!c&&!i||!s.length)return;const a="prismjs"===t.plugin;let l="",r="";const d=!0===o?"closed":"";void 0!==o&&(l=`<i class="fas fa-angle-down expand ${d}"></i>`),e&&(r='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>');const u=t=>{const e=t.parentNode;e.classList.add("copy-true");const n=window.getSelection(),o=document.createRange();a?o.selectNodeContents(e.querySelectorAll("pre code")[0]):o.selectNodeContents(e.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o);n.toString();((t,e)=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy"))if(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar)btf.snackbarShow(GLOBAL_CONFIG.copy.success);else{const t=e.previousElementSibling;t.innerText=GLOBAL_CONFIG.copy.success,t.style.opacity=1,setTimeout((()=>{t.style.opacity=0}),700)}else void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):e.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport})(0,t.lastChild),n.removeAllRanges(),e.classList.remove("copy-true")},m=function(t){const e=t.target.classList;e.contains("expand")?(t=>{const e=[...t.parentNode.children].slice(1);t.firstChild.classList.toggle("closed"),btf.isHidden(e[e.length-1])?e.forEach((t=>{t.style.display="block"})):e.forEach((t=>{t.style.display="none"}))})(this):e.contains("copy-button")&&u(this)},g=function(){this.classList.toggle("expand-done")};function f(t,e,n){const o=document.createDocumentFragment();if(c){const e=document.createElement("div");e.className=`highlight-tools ${d}`,e.innerHTML=l+t+r,e.addEventListener("click",m),o.appendChild(e)}if(i&&e.offsetHeight>i+30){const t=document.createElement("div");t.className="code-expand-btn",t.innerHTML='<i class="fas fa-angle-double-down"></i>',t.addEventListener("click",g),o.appendChild(t)}"hl"===n?e.insertBefore(o,e.firstChild):e.parentNode.insertBefore(o,e)}n?a?s.forEach((function(t){const e=`<div class="code-lang">${t.getAttribute("data-language")?t.getAttribute("data-language"):"Code"}</div>`;btf.wrap(t,"figure",{class:"highlight"}),f(e,t)})):s.forEach((function(t){let e=t.getAttribute("class").split(" ")[1];"plain"!==e&&void 0!==e||(e="Code");f(`<div class="code-lang">${e}</div>`,t,"hl")})):a?s.forEach((function(t){btf.wrap(t,"figure",{class:"highlight"}),f("",t)})):s.forEach((function(t){f("",t,"hl")}))};const a=function(){const t=document.getElementById("rightside"),e=window.innerHeight+56;if(document.body.scrollHeight<=e)return void(t.style.cssText="opacity: 1; transform: translateX(-58px)");let n=0,o=!0;const i=document.getElementById("page-header"),c="function"==typeof chatBtnHide,s="function"==typeof chatBtnShow,a=GLOBAL_CONFIG.percent.rightside,l=btf.throttle((()=>{const l=window.scrollY||document.documentElement.scrollTop,r=function(t){const e=t>n;return n=t,e}(l);l>56?(i.classList.add("is-top-bar"),r?(i.classList.contains("nav-visible")&&i.classList.remove("nav-visible"),s&&!0===o&&(chatBtnHide(),o=!1)):(i.classList.contains("nav-visible")||i.classList.add("nav-visible"),c&&!1===o&&(chatBtnShow(),o=!0)),i.classList.add("nav-fixed"),"0"===window.getComputedStyle(t).getPropertyValue("opacity")&&(t.style.cssText="opacity: 0.8; transform: translateX(-58px)")):(0===l&&i.classList.remove("is-top-bar"),t.style.cssText="opacity: ''; transform: ''"),a&&(t=>{const e=btf.getScrollPercent(t,document.body),n=document.getElementById("go-up");e<95?(n.classList.add("show-percent"),n.querySelector(".scroll-percent").textContent=e):n.classList.remove("show-percent")})(l),document.body.scrollHeight<=e&&(t.style.cssText="opacity: 0.8; transform: translateX(-58px)")}),200);window.scrollCollect=l,window.addEventListener("scroll",scrollCollect)},l=function(){const t=GLOBAL_CONFIG_SITE.isToc,e=GLOBAL_CONFIG.isAnchor,n=document.getElementById("article-container");if(!n||!t&&!e)return;let o,i,c,s,a;if(t){const t=document.getElementById("card-toc");i=t.getElementsByClassName("toc-content")[0],o=i.querySelectorAll(".toc-link"),s=t.querySelector(".toc-percentage"),a=i.classList.contains("is-expand"),window.mobileToc={open:()=>{t.style.cssText="animation: toc-open .3s; opacity: 1; right: 55px"},close:()=>{t.style.animation="toc-close .2s",setTimeout((()=>{t.style.cssText="opacity:''; animation: ''; right: ''"}),100)}},i.addEventListener("click",(t=>{t.preventDefault();const e=t.target.classList;if(e.contains("toc-content"))return;const n=e.contains("toc-link")?t.target:t.target.parentElement;btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(n.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&window.mobileToc.close()})),c=t=>{const e=t.getBoundingClientRect().top,n=i.scrollTop;e>document.documentElement.clientHeight-100&&(i.scrollTop=n+150),e<100&&(i.scrollTop=n-150)}}const l=n.querySelectorAll("h1,h2,h3,h4,h5,h6");let r="";window.tocScrollFn=btf.throttle((()=>{const d=window.scrollY||document.documentElement.scrollTop;t&&GLOBAL_CONFIG.percent.toc&&(s.textContent=btf.getScrollPercent(d,n)),function(n){if(0===n)return!1;let s="",d="";if(l.forEach((function(t,e){if(n>btf.getEleTop(t)-80){const n=t.id;s=n?"#"+encodeURI(n):"",d=e}})),r!==d&&(e&&btf.updateAnchor(s),r=d,t)){if(i.querySelectorAll(".active").forEach((t=>{t.classList.remove("active")})),""===s)return;const t=o[d];if(t.classList.add("active"),setTimeout((()=>{c(t)}),0),a)return;let e=t.parentNode;for(;!e.matches(".toc");e=e.parentNode)e.matches("li")&&e.classList.add("active")}}(d)}),100),window.addEventListener("scroll",tocScrollFn)},r=()=>{const t=document.body;t.classList.add("read-mode");const e=document.createElement("button");e.type="button",e.className="fas fa-sign-out-alt exit-readmode",t.appendChild(e),e.addEventListener("click",(function n(){t.classList.remove("read-mode"),e.remove(),e.removeEventListener("click",n)}))},d=()=>{"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"function"==typeof changeGiscusTheme&&changeGiscusTheme(),"object"==typeof FB&&window.loadFBComment&&window.loadFBComment(),"function"==typeof runMermaid&&window.runMermaid()},u=t=>{const e=document.getElementById("rightside-config-hide").classList;e.toggle("show"),t.classList.contains("show")&&(e.add("status"),setTimeout((()=>{e.remove("status")}),300)),t.classList.toggle("show")},m=()=>{btf.scrollToDest(0,500)},g=()=>{const t=document.documentElement.classList;t.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),t.toggle("hide-aside")},f=()=>{"0"===window.getComputedStyle(document.getElementById("card-toc")).getPropertyValue("opacity")?window.mobileToc.open():window.mobileToc.close()};document.getElementById("rightside").addEventListener("click",(function(t){const e=t.target.id?t.target:t.target.parentNode;switch(e.id){case"go-up":m();break;case"rightside_config":u(e);break;case"mobile-toc-button":f();break;case"readmode":r();break;case"darkmode":d();break;case"hide-aside-btn":g()}}));const h=()=>{document.querySelectorAll("#sidebar-menus .site-page.group").forEach((function(t){t.addEventListener("click",(function(){this.classList.toggle("hide")}))}))},p=function(){document.querySelectorAll("#article-container .tab > button").forEach((function(t){t.addEventListener("click",(function(t){const e=this,n=e.parentNode;if(!n.classList.contains("active")){const t=n.parentNode.nextElementSibling,o=btf.siblings(n,".active")[0];o&&o.classList.remove("active"),n.classList.add("active");const i=e.getAttribute("data-href").replace("#","");[...t.children].forEach((t=>{t.id===i?t.classList.add("active"):t.classList.remove("active")}));const c=t.querySelectorAll(`#${i} .fj-gallery`);c.length>0&&btf.initJustifiedGallery(c)}}))}))},y=()=>{document.querySelectorAll("#article-container .tabs .tab-to-top").forEach((function(t){t.addEventListener("click",(function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)}))}))},L=function(t){t.forEach((t=>{const e=t,n=e.getAttribute("datetime");e.innerText=btf.diffDate(n,!0),e.style.display="inline"}))};window.refreshFn=function(){o(!0),e.classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&function(){const t=GLOBAL_CONFIG.noticeOutdate,e=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(e>=t.limitDay){const n=document.createElement("div");n.className="post-outdate-notice",n.textContent=t.messagePrev+" "+e+" "+t.messageNext;const o=document.getElementById("article-container");"top"===t.position?o.insertBefore(n,o.firstChild):o.appendChild(n)}}(),GLOBAL_CONFIG.relativeDate.post&&L(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&L(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(()=>{const t=document.getElementById("runtimeshow");if(t){const e=t.getAttribute("data-publishDate");t.innerText=btf.diffDate(e)+" "+GLOBAL_CONFIG.runtime}})(),(()=>{const t=document.getElementById("last-push-date");if(t){const e=t.getAttribute("data-lastPushDate");t.innerText=btf.diffDate(e,!0)}})(),function(){const t=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i");t.length&&t.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),this.classList.toggle("expand");const e=this.parentNode.nextElementSibling;btf.isHidden(e)?e.style.display="block":e.style.display="none"}))}))}()),l(),GLOBAL_CONFIG_SITE.isHome&&(()=>{const t=document.getElementById("scroll-down");t&&t.addEventListener("click",(function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}))})(),s(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach((function(t){const e=t.parentNode,n=t.title||t.alt;if(n&&!e.parentNode.classList.contains("justified-gallery")){const o=document.createElement("div");o.className="img-alt is-center",o.textContent=n,e.insertBefore(o,t.nextSibling)}})),a();const t=document.querySelectorAll("#article-container .fj-gallery");t.length&&function(t){const e=t=>{let e="";const n=t=>t.replace(/"/g,"&quot;");return t.forEach((t=>{const o=t.alt?`alt="${n(t.alt)}"`:"",i=t.title?`title="${n(t.title)}"`:"";e+=`<div class="fj-gallery-item"><img src="${t.url}" ${o+i}"></div>`})),e},n=(t,n)=>{const o=t.getAttribute("data-limit"),i=n.length;return i>o?t.insertAdjacentHTML("beforeend",e(n.splice(0,o))):(t.insertAdjacentHTML("beforeend",e(n)),t.classList.remove("lazyload")),i>o?o:i};t.forEach((t=>{const o=JSON.parse(t.querySelector(".gallery-data").textContent);if(t.classList.contains("lazyload")){n(t,o);const e=t.getAttribute("data-limit"),i=()=>{const c=n(t,o);fjGallery(t,"appendImages",t.querySelectorAll(`.fj-gallery-item:nth-last-child(-n+${c})`)),btf.loadLightbox(t.querySelectorAll("img")),c<e&&t.nextElementSibling.removeEventListener("click",i)};t.nextElementSibling.addEventListener("click",i)}else t.innerHTML=e(o)})),window.fjGallery?setTimeout((()=>{btf.initJustifiedGallery(t)}),100):(getCSS(`${GLOBAL_CONFIG.source.justifiedGallery.css}`),getScript(`${GLOBAL_CONFIG.source.justifiedGallery.js}`).then((()=>{btf.initJustifiedGallery(t)})))}(t),btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),(()=>{const t=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table");t.length&&t.forEach((t=>{btf.wrap(t,"div",{class:"table-wrap"})}))})(),function(){const t=document.querySelectorAll("#article-container .hide-button");t.length&&t.forEach((function(t){t.addEventListener("click",(function(t){this.classList.add("open");const e=this.nextElementSibling.querySelectorAll(".fj-gallery");e.length&&btf.initJustifiedGallery(e)}))}))}(),p(),y(),function(){let t=!1;const e=document.querySelector("#comment-switch > .switch-btn");e&&e.addEventListener("click",(function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach((function(t){btf.isHidden(t)?t.style.cssText="display: block;animation: tabshow .5s":t.style.cssText="display: none;animation: ''"})),t||"function"!=typeof loadOtherComment||(t=!0,loadOtherComment())}))}(),document.getElementById("toggle-menu").addEventListener("click",(()=>{i()}))},refreshFn(),window.addEventListener("resize",(()=>{o(!1),btf.isHidden(document.getElementById("toggle-menu"))&&n&&c()})),document.getElementById("menu-mask").addEventListener("click",(t=>{c()})),h(),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(()=>{const t=GLOBAL_CONFIG.copyright;document.body.oncopy=e=>{let n;e.preventDefault();const o=window.getSelection(0).toString();return n=o.length>t.limitCount?o+"\n\n\n"+t.languages.author+"\n"+t.languages.link+window.location.href+"\n"+t.languages.source+"\n"+t.languages.info:o,e.clipboardData?e.clipboardData.setData("text",n):window.clipboardData.setData("text",n)}})()}));