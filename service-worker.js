if(!self.define){let e,n={};const t=(t,s)=>(t=new URL(t+".js",s).href,n[t]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=n,document.head.appendChild(e)}else e=t,importScripts(t),n()})).then((()=>{let e=n[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let c={};const r=e=>t(e,o),d={module:{uri:o},exports:c,require:r};n[o]=Promise.all(s.map((e=>d[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-a69a5c93"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"3a5021fdc5593ca38c56cfb1ec605a8e"},{url:"css/index.css",revision:"4f6300f40410666544a80ded237082f8"},{url:"/",revision:"index-20240414001829786"},{url:"music/",revision:"music-20240414001829786"},{url:"about/",revision:"about-20240414001829786"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/jsd\.cdn\.zzko\.cn/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/files\.blog\.sinzmise\.top/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/npm\.onmicrosoft\.cn/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdn\.staticfile\.org/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdn\.staticaly\.com/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/jsd\.cdn\.sininno\.eu\.org/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/jsd\.onmicrosoft\.cn/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/www\.jsdelivr\.ren/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
