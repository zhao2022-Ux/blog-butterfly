if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>c(e,d),f={module:{uri:d},exports:r,require:n};i[d]=Promise.all(a.map((e=>f[e]||n(e)))).then((e=>(s(...e),r)))}}define(["./workbox-22632682"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"354a3cfbdf4efb7328424347a2af8831"},{url:"404/index.html",revision:"d65161b31f8c915386948f4fac49b3c7"},{url:"about/index.html",revision:"cfd50f9be95ab3586473513365593f38"},{url:"album/index.html",revision:"f4c784c0b19eeeceb91f28dc6c241bdf"},{url:"archives/2021/12/index.html",revision:"7cef3f330c44b7c558f71273ed886c1f"},{url:"archives/2021/index.html",revision:"8e7494a7c7a3bc0800eed992c9b8ba88"},{url:"archives/2022/12/index.html",revision:"21246333373536ac46c98dbea0b29e88"},{url:"archives/2022/index.html",revision:"9d5945307dabb25848eae51ea58bd4c6"},{url:"archives/2023/01/index.html",revision:"5bcb45fb01a0f37e5621b0794a70ec64"},{url:"archives/2023/02/index.html",revision:"fad1868ab93d25aedf682cc7a22bbebb"},{url:"archives/2023/03/index.html",revision:"425cd0f94287d01bd71369c45f2ecedd"},{url:"archives/2023/04/index.html",revision:"9205ba58a736ff61086fa9bc207c4963"},{url:"archives/2023/07/index.html",revision:"66e54a34e35e763dfb0afe3a04156a4f"},{url:"archives/2023/08/index.html",revision:"9dc8786472dc460fa3428fb10ef84d5d"},{url:"archives/2023/09/index.html",revision:"9d978a6eb1250f511431229472481e94"},{url:"archives/2023/10/index.html",revision:"23c83e173c966efea09ed45a36c466f6"},{url:"archives/2023/11/index.html",revision:"aafa457c94ee5cd04eb6200b9b98f420"},{url:"archives/2023/12/index.html",revision:"bd1b209db2c4eaa3ffe23c3eb4ed5acd"},{url:"archives/2023/index.html",revision:"d3ed674f2fc3fb6ede6a57a79e874c1c"},{url:"archives/2023/page/2/index.html",revision:"c39097859373ac07967aa5ba6ac4d1bb"},{url:"archives/2023/page/3/index.html",revision:"48cbf54f67e15bb993be2ffb9dcd0b71"},{url:"archives/2024/01/index.html",revision:"030879edde13ab784b046fe5146556fd"},{url:"archives/2024/02/index.html",revision:"9ecfde7b9cf79bca8971de8a87725ac6"},{url:"archives/2024/03/index.html",revision:"db00667d13b13e7dc3d07dd0e809342f"},{url:"archives/2024/04/index.html",revision:"f0fa49d91e09519952aa4a7c73b7591f"},{url:"archives/2024/index.html",revision:"013ec68c5f35c0f3319085f70834b69f"},{url:"archives/index.html",revision:"fefebfef93263020e148454539c23d10"},{url:"archives/page/2/index.html",revision:"6be4d655731773e7234f4a2a370b401a"},{url:"archives/page/3/index.html",revision:"4ac34bf69dbc66c9c4f02aee7ceef2df"},{url:"archives/page/4/index.html",revision:"031e1ba3382ba5b5f159d6e1fad1188c"},{url:"baidu_verify_codeva-NA6uDlCuZg.html",revision:"a4b49ea9310d35e595e0c9e37910a39b"},{url:"bangumis/index.html",revision:"90b9c793dfcfc63c145d8107e8ee7b30"},{url:"bbs/index.html",revision:"413e8a4ef74114b82cba5bb2e66b2e86"},{url:"categories/index.html",revision:"53227a61f3e1aca35edba85b8ce190d4"},{url:"categories/个人小记/index.html",revision:"ecca9374351ddc1f575ad699a3caccf4"},{url:"categories/个人小记/page/2/index.html",revision:"7aa965e4a216f606fd47410f0422d26e"},{url:"categories/歌曲收集/index.html",revision:"73902711e221c9e1e924ccd612612cf8"},{url:"categories/游戏相关/index.html",revision:"09979de03bfe473d854a94b03f7cb480"},{url:"categories/站点折腾/index.html",revision:"06fb3815f14456570b8cb27f3e2bbc9f"},{url:"categories/站点折腾/page/2/index.html",revision:"e0dec4e67f6ffebc5f1367f498158e40"},{url:"categories/项目折腾/index.html",revision:"a2c3b5e8b190879d8895e9fdafda4a08"},{url:"charts/index.html",revision:"2ab92a38d2fb7ca542ddd827963523ca"},{url:"comments/index.html",revision:"093efe7b7bc254b02cdbe642ef5b4be3"},{url:"css/404.css",revision:"31a9c04f0e0bf636a051a3d6111260d7"},{url:"css/anzhiyu-var.css",revision:"1c87f9f91fe8fde100d54dc54d1b44be"},{url:"css/bywind-var.css",revision:"b2b30aaec1f84a21ac3eb872e7b93dbe"},{url:"css/categoryBar.css",revision:"a6afc0aa34ac95e26aac87963c8209f1"},{url:"css/console.css",revision:"0ff70f2babae00c3382c17f99c1b3a13"},{url:"css/custom.css",revision:"4943574c718f538c092183d06674ec94"},{url:"css/essay_page.css",revision:"3ba38cff85ec7f80338823e1cba8336f"},{url:"css/fcircle.css",revision:"001c608c1e5b70e08cd23064574fb020"},{url:"css/footer.css",revision:"e7fd58ab6824e67e9363ff260adc8fdd"},{url:"css/heo-var.css",revision:"d79ffd7b34766676a75e6d65124653a4"},{url:"css/iconfont.css",revision:"5055ebcf02646fdaa4da13f4fe354b08"},{url:"css/iconfont.ttf",revision:"8f80d63cc7e56b252ef8fec5670f26c0"},{url:"css/iconfont.woff",revision:"7abbf230e11a38ff6e24c53ef729071a"},{url:"css/iconfont.woff2",revision:"c51fb9504bd8cd0343fc8143c643f96b"},{url:"css/index.css",revision:"a41547e1d303805be41c4087c26233a9"},{url:"css/orlike.css",revision:"79645cab91d5883ac08ac62b2ad54eb0"},{url:"css/rightmenu.css",revision:"494e548cfc9709388c2a8fe247fab9b8"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"167858b3301af99125c71a650558be24"},{url:"fcircle/index.html",revision:"aae9b2fd6698a5e07036ff073154898c"},{url:"google8073542809160a67.html",revision:"c57c52f64057d603cf911e40a49145d6"},{url:"images/siteicon/16.png",revision:"41e3967281878159110cc6ca09fd0fa4"},{url:"images/siteicon/32.png",revision:"75a26a44891ee25b703687fa5de3f8e0"},{url:"images/siteicon/apple-icon-180.png",revision:"9b24935c81e392200f6afddb72dc4623"},{url:"images/siteicon/manifest-icon-192.maskable.png",revision:"a1f47303530065e12dfe83d27d4dec22"},{url:"images/siteicon/manifest-icon-512.maskable.png",revision:"02606076e382d76015528bd55dcc2084"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/512.png",revision:"bcbb6361052ad267d4854f9107249a04"},{url:"img/avatar.png",revision:"02606076e382d76015528bd55dcc2084"},{url:"img/bili.jpg",revision:"9300a67bcb69b68214f2c9bda2fd372f"},{url:"img/dark.jpg",revision:"42f8fb9601dd79888fd45bf358510863"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"1ca1e59470896763eec670b89085842c"},{url:"img/icon-dark.png",revision:"262df31d0e2342d15e584b749350b324"},{url:"img/icon-light.png",revision:"1ec82f13300dd7f9b0bcdc0672efa9e8"},{url:"img/icons/api.svg",revision:"167a81a4837ececc0442b00cb3829778"},{url:"img/icons/diary.svg",revision:"62a6f9194b5429b0cde07c0b24751123"},{url:"img/icons/homepage.svg",revision:"4116cf19dee9b8d2502d04e7f0c2f5d6"},{url:"img/icons/navi.svg",revision:"00fd00972042693a430b291629eec08f"},{url:"img/icons/pan.svg",revision:"500ed5ba588c41870090b22df79d4cd6"},{url:"img/icons/rtalk.svg",revision:"d9f6c6273cf678442de1e68dc6fba268"},{url:"img/light.jpg",revision:"cf9f27280d5644184dad9cfa1ddb8b19"},{url:"img/link.png",revision:"762f41548778b819efece6662892436d"},{url:"img/load-dark.png",revision:"c9fe1886c31c60ccaf6b2e4f79a27a79"},{url:"img/load-light.png",revision:"224ed753f03fb30e0ab4fe3e474ccea7"},{url:"img/longnian.webp",revision:"8abfc6e70195dd437fcc7ed0dce16d65"},{url:"img/longnian1.webp",revision:"7488f4b894eeef8aef5a88f209aae45e"},{url:"img/longnian2.webp",revision:"cf8c0d50a522681770cb9c58bff8cef6"},{url:"img/longnian3.webp",revision:"11875dcf8fddec13efc1d01a0ec19a39"},{url:"img/siteicon/android-chrome-144x144.png",revision:"e3ce6e38bdb79145f544187e7b573740"},{url:"img/siteicon/android-chrome-192x192.png",revision:"749ca2a5351cb0b22a88f71c4945d6d8"},{url:"img/siteicon/android-chrome-256x256.png",revision:"577f93d4b5273160c67cec1ba4c1915a"},{url:"img/siteicon/android-chrome-36x36.png",revision:"f40bafc6110837e09d05526b1ec2e2df"},{url:"img/siteicon/android-chrome-384x384.png",revision:"288aa3c41c9295de78cbaad923175137"},{url:"img/siteicon/android-chrome-48x48.png",revision:"3428fb5ba7f1a007a2000e9fe9dafd6c"},{url:"img/siteicon/android-chrome-512x512.png",revision:"3725e2811098c78d82adc0f66367d2a8"},{url:"img/siteicon/android-chrome-72x72.png",revision:"3aae9af0269938754a26cda672c33ca7"},{url:"img/siteicon/android-chrome-96x96.png",revision:"4a58d6ada32d9471ed275558be769c4b"},{url:"img/siteicon/apple-touch-icon.png",revision:"e9712f388baf6e184c7772e8a6faab42"},{url:"img/siteicon/favicon-16x16.png",revision:"716e57fdeb966ff4aaf35283c4c4dba7"},{url:"img/siteicon/favicon-32x32.png",revision:"f9d7bb4a969e310ea843f0f82d947a21"},{url:"img/siteicon/mstile-150x150.png",revision:"651ef46e012493de7b2ce1ed4691f54c"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"851cf3bedd2976acde6efc437e1500ca"},{url:"index.html",revision:"9ad9159d032cf89d5028e8b405d8e4ad"},{url:"js/about.js",revision:"c052e93688188a58c607a23ab21047c3"},{url:"js/autoload.js",revision:"6254d09f551de324e370be766031f585"},{url:"js/categoryBar.js",revision:"8d79fb84740b5fa4ad17139a0f9a5c74"},{url:"js/commentdanmaku.js",revision:"1e1a8a7a6cf8e2c3fa44bfc8a96f2025"},{url:"js/console.js",revision:"e56987fcc310816a1464cffa017f71c0"},{url:"js/custom.js",revision:"18782b5ca3db3a7775cd59b26d7ff317"},{url:"js/easy-Danmaku.js",revision:"b246c9b76d753826c4da361095893d57"},{url:"js/fcircle.js",revision:"de029419576ed9036daaa2c099663fd2"},{url:"js/fish.js",revision:"0a8d87ac3704b61824c5c3154c8e2b4f"},{url:"js/fps.js",revision:"383182c1160a37001704e1cc2706228b"},{url:"js/hometop.js",revision:"134bd184ce1463ea2a9c23df5460c5aa"},{url:"js/kslink.js",revision:"b85ceca043f4018b0979dc484c834945"},{url:"js/main.js",revision:"793e6861668298d001d2eca8ab9a5c97"},{url:"js/nav.js",revision:"e306aabdf69e4c7e53ddde509f48d458"},{url:"js/newyear.js",revision:"f516b5e3ffbc2fe5e66b1365cd419537"},{url:"js/orlike.js",revision:"cd5d03a37019b7b1b89a4adb1c276638"},{url:"js/owobig.js",revision:"59252bd6e41da14eb368166c3ee13c32"},{url:"js/random-friends-post.js",revision:"a28ca1953538dd18aece3c7e51deea0a"},{url:"js/randompost.js",revision:"1602f0dcb4378b8855a4638b22f46b84"},{url:"js/rightmenu.js",revision:"b9bec674130c5308f3e60143e378f006"},{url:"js/sakura.js",revision:"0cac8ee3645e794620959ff201b21661"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"aea55acb22a3b51ad16057b0ea52c0a9"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/txmap.js",revision:"82bbcb06ce462fb9bd64d0eb4de87baa"},{url:"js/utils.js",revision:"e95ad73d5170f72ae1596b3d9abb7ed3"},{url:"js/waterfall/waterfall.js",revision:"6b3f21ab5352e2ed8c84b1833dbc8cf2"},{url:"js/welcome.js",revision:"892bfc0885e0f2e4e714e0a4dddcef9d"},{url:"lib/tag_plugins.css",revision:"9dbc2e84fda35370433ef0faac822e83"},{url:"link/index.html",revision:"c2920222966126a19cbc5d51d7e508e0"},{url:"music/index.html",revision:"d327eb67e9eeba3dcc7d60d5cdbae8f3"},{url:"page/2/index.html",revision:"547420954e780cc608738b33d80abf55"},{url:"page/3/index.html",revision:"80115d3f33bee5113c9ac1d0868773d9"},{url:"page/4/index.html",revision:"4f8c19c482cb54fa459c41364524bee4"},{url:"posts/10045/index.html",revision:"7a9f0dc002be5da5d00cd64ff1ee81d1"},{url:"posts/12779/index.html",revision:"b5d32d53ba1e012eb5a3ccdd1dc0aa80"},{url:"posts/13624/index.html",revision:"3413634a99ff6fcc4c964c6cb179cd34"},{url:"posts/15842/index.html",revision:"e441e30db7623c576bf32b3255517879"},{url:"posts/16107/index.html",revision:"6b8185ae0b83688755198ca81b543492"},{url:"posts/18063/index.html",revision:"d4710063af7d619b7a7757e06133a729"},{url:"posts/20412/index.html",revision:"3e9d108d89d0b7c7070afdb6edb93acb"},{url:"posts/21375/index.html",revision:"87b4ac73995afd1cdeed110c29c0c3ca"},{url:"posts/22945/index.html",revision:"25333fb5b190b60020c21f4f0a9cfe99"},{url:"posts/23021/index.html",revision:"2e3a1786e81f2838646b8cc662a06a4e"},{url:"posts/27531/index.html",revision:"24b61dba79e4e52f465af84f05ec1fb1"},{url:"posts/27762/index.html",revision:"184783063e61062acc06336041f8a2eb"},{url:"posts/28536/index.html",revision:"8fda9245fc21ad0900e6a2ad49ede8d7"},{url:"posts/28733/index.html",revision:"f84b08e0606b8263859bfd8e6b658170"},{url:"posts/29196/index.html",revision:"72bcaee0de37f8ee59c3b85b9d532ea9"},{url:"posts/38917/index.html",revision:"e8868e6fe50815f71d2052819f0fa847"},{url:"posts/38964/index.html",revision:"49ca0bd6c24f30ee3c6df5946cdb18ab"},{url:"posts/42487/index.html",revision:"bdf1df4f0c920d2395cce8d916d68fe9"},{url:"posts/42580/index.html",revision:"1e26c563de9b397818750aa12b20985c"},{url:"posts/45875/index.html",revision:"1ab5504fd837860ed7bf6e8afdcee7a6"},{url:"posts/48762/index.html",revision:"3ba1aaca4eb61f512fbfcca705620d58"},{url:"posts/50710/index.html",revision:"33b764dd68aa7fa8928c90a66db25f6c"},{url:"posts/52677/index.html",revision:"57aa72b0b0d6ddbc9d8f9854508730b7"},{url:"posts/53662/index.html",revision:"98e2d970bd5cc6770aae9611daf8bec1"},{url:"posts/54386/index.html",revision:"bcdd05520fd3df7cc1e614e9bc41455e"},{url:"posts/54481/index.html",revision:"3cbceb424ed3346a6d5a972da30d248f"},{url:"posts/54787/index.html",revision:"a917a102899a487ccc81a18be28977af"},{url:"posts/56467/index.html",revision:"b6527a60eb072207aeeb069f7569fe13"},{url:"posts/58203/index.html",revision:"ef290ea8bd418b32212b76deabc97d74"},{url:"posts/61417/index.html",revision:"36ff11df2e82c59ebee6ce2e15803251"},{url:"posts/646/index.html",revision:"bf5e79206c74142666a8ec932ed4e628"},{url:"redirect/index.html",revision:"930594715f52847cd3f2a62106d2dac1"},{url:"seas/index.html",revision:"75d3ccf1ba75996f43a75f92d12d6550"},{url:"tags/index.html",revision:"ca7faf8a45c748fb8490e292512033b9"},{url:"tags/Steam游戏/index.html",revision:"acd6af840fcec472797d62d789855b8c"},{url:"tags/Windows软件/index.html",revision:"a55a3ff7475a1cdf7c1ccdb4e19bc9b8"},{url:"tags/个人小记/index.html",revision:"83c8211bb1768b4335c90883c1fd3b12"},{url:"tags/个人小记/page/2/index.html",revision:"e28f90903c543b7231af7cf2521a6c67"},{url:"tags/其它游戏/index.html",revision:"3338f73228ea2750dee8c88a0241d192"},{url:"tags/悬浮宠物-看板娘/index.html",revision:"739fa40ec9722298b08b4e065ece1aa5"},{url:"tags/歌曲收集/index.html",revision:"da10ba871492743c6255d1a13abbd205"},{url:"tags/游戏相关/index.html",revision:"2845cab6f53952827f32d3aba3ea5fe8"},{url:"tags/站点底部魔改/index.html",revision:"ba7e5aa4392e915a5c20a326f2ef752f"},{url:"tags/站点折腾/index.html",revision:"14916c110e14c33fa0bed2e676a3e04d"},{url:"tags/站点折腾/page/2/index.html",revision:"dd6dd4665f61ccde99fa6932cecf9a32"},{url:"tags/自建部署/index.html",revision:"8b0671a3c63bd0c0bc0d3335daf77ff8"},{url:"tags/页面魔改/index.html",revision:"3564be24c75b36c34a2e1ced5416ebe2"},{url:"tags/项目折腾/index.html",revision:"af9ee137644bdee17e67309fc211ceaf"},{url:"weichuncai/css/style.css",revision:"a1729c6aba367df186684a27db5d7085"},{url:"weichuncai/imgs/chat_bottom.gif",revision:"28237e6983fb90452cfed4b18f8b8111"},{url:"weichuncai/imgs/chat_top.gif",revision:"55d8afbfd1abd414eb188db757162176"},{url:"weichuncai/imgs/loading.gif",revision:"89e31e5265ed90600b70fe11367a077e"},{url:"weichuncai/imgs/menu.jpg",revision:"e4fabef017dc6ff62a8ceb1246b72e27"},{url:"weichuncai/imgs/ok.jpg",revision:"55a79a12edb9581eba53e97c1b027d14"},{url:"weichuncai/js/common.js",revision:"da5e9699d94c33c93a5047c06468f7a7"},{url:"weichuncai/js/jquery.js",revision:"10092eee563dec2dca82b77d2cf5a1ae"},{url:"weichuncai/skin/default/face1.gif",revision:"c56da003f4e49e77a6afdf59f5f3ff91"},{url:"weichuncai/skin/default/face2.gif",revision:"a45121a80b5bca867e2eeded3c34c6e1"},{url:"weichuncai/skin/default/face3.gif",revision:"7fdb05e5a9d570537190f15416e92790"},{url:"weichuncai/skin/ikamusume/ikamusume001.gif",revision:"2d1a8218aba89fbd77a0fa175ddf264e"},{url:"weichuncai/skin/ikamusume/ikamusume002.gif",revision:"e64a731cd4d96c76fa9dcb09d39429e1"},{url:"weichuncai/skin/ikamusume/ikamusume003.gif",revision:"fa9d249a92e41dcbaa80dd508aa2f1b8"},{url:"weichuncai/skin/rakutori/face1.gif",revision:"d056945c32bfe2aeb02db6d8ac60b209"},{url:"weichuncai/skin/rakutori/face2.gif",revision:"a45121a80b5bca867e2eeded3c34c6e1"},{url:"weichuncai/skin/rakutori/face3.gif",revision:"7fdb05e5a9d570537190f15416e92790"},{url:"weichuncai/wcc-config.js",revision:"56cf0be141a728199b29994e07eb5353"}],{})}));