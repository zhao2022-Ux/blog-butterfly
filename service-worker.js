if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>a(e,d),f={module:{uri:d},exports:r,require:n};i[d]=Promise.all(c.map((e=>f[e]||n(e)))).then((e=>(s(...e),r)))}}define(["./workbox-22632682"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"299840fe1b22a60eeaf8a29987b95592"},{url:"404/index.html",revision:"60c5f8a6c8cf33e057b4e75a0a8324e5"},{url:"about/index.html",revision:"06f54397ebcbdc1c19c34468bfce65d3"},{url:"album/index.html",revision:"12346bab4ab4c6455385296abd9e701a"},{url:"archives/2021/12/index.html",revision:"64944ee095e50a53792f6ca6a3154aae"},{url:"archives/2021/index.html",revision:"35a90368dfea7e0cd65c3e14fd5453b8"},{url:"archives/2022/12/index.html",revision:"64e0e1eaba6be91e3c7a232294987e66"},{url:"archives/2022/index.html",revision:"c4cc62eab96fa6ba43162c65fa62a7a9"},{url:"archives/2023/01/index.html",revision:"cf125cfd4f52cd9e8b42e268faa90a62"},{url:"archives/2023/02/index.html",revision:"91afaa5cb85634bf567e75a6eb1adfdb"},{url:"archives/2023/03/index.html",revision:"3cd66e17c64ee4518234b5f2ef91bd5e"},{url:"archives/2023/04/index.html",revision:"556ad869f6c8a1442772ea292099ed8e"},{url:"archives/2023/07/index.html",revision:"4428bea0c65ee72613bee84fb423c347"},{url:"archives/2023/08/index.html",revision:"b3fd90b8c5d5d9d52f19682885607e67"},{url:"archives/2023/09/index.html",revision:"8921448a4b358ab18edc6b1039d592f4"},{url:"archives/2023/10/index.html",revision:"7c977cc8fda8d1beef483ed54220937b"},{url:"archives/2023/11/index.html",revision:"76c9cd3d1354e268347fb0a13d525537"},{url:"archives/2023/12/index.html",revision:"305a9c46d39ceb5524adec63d3f41ae3"},{url:"archives/2023/index.html",revision:"c84195d2bbecbf301c50f54270f274e2"},{url:"archives/2023/page/2/index.html",revision:"ad50c0acdc2be21e7809977148011958"},{url:"archives/2023/page/3/index.html",revision:"7b2f1593fd60f2ac290ad55592874718"},{url:"archives/2024/01/index.html",revision:"5b9e1483f0dac68bbbf68da691f0755a"},{url:"archives/2024/02/index.html",revision:"05586c047a5fb708876610d2777922a1"},{url:"archives/2024/03/index.html",revision:"387dff7576248be0b63fd6fb5e5cd900"},{url:"archives/2024/04/index.html",revision:"167972b46a9d7ca7d4573aacf148b059"},{url:"archives/2024/index.html",revision:"b3a65b3ff43a52baeae24860459f372a"},{url:"archives/index.html",revision:"8e8bdae156186653a7b4122773af7351"},{url:"archives/page/2/index.html",revision:"75c89d20a320ca7c60e51859fe1e0d64"},{url:"archives/page/3/index.html",revision:"884f60c6d78b262341bd7cc2bc1f6508"},{url:"archives/page/4/index.html",revision:"6e39ac6b732e5cdae35503f24d647b6d"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"baidu_verify_codeva-NA6uDlCuZg.html",revision:"e45cbf30b4f03fd7686947d570139925"},{url:"bangumis/index.html",revision:"a2074f1e962ebd95ff1d3868189d1899"},{url:"bbs/index.html",revision:"99b68ecdf7138fa8941ce26fab199cfa"},{url:"categories/index.html",revision:"498f1e9b92750e396d2e0eeca959a2f6"},{url:"categories/个人小记/index.html",revision:"c1d0dfcfbb52cdf4cb9da16a05fa9b27"},{url:"categories/个人小记/page/2/index.html",revision:"c3fb87665f7bb89a812048703d80ce46"},{url:"categories/歌曲收集/index.html",revision:"60e3d63ce65e2c6664fa8f03ef285282"},{url:"categories/游戏相关/index.html",revision:"a5b46a4d172f433442b8c964657da5e4"},{url:"categories/站点折腾/index.html",revision:"78b4e98af76462b103f3374ef19a2aee"},{url:"categories/站点折腾/page/2/index.html",revision:"192986de785058219a322513aa064305"},{url:"categories/项目折腾/index.html",revision:"12582425a5821ec1f3e0a4fcd2e9baf5"},{url:"charts/index.html",revision:"437704e957d9937cf32584c753c17e0d"},{url:"comments/index.html",revision:"fbb2bc9c65dd89dedc9df4e57491a804"},{url:"css/404.css",revision:"31a9c04f0e0bf636a051a3d6111260d7"},{url:"css/anzhiyu-var.css",revision:"1c87f9f91fe8fde100d54dc54d1b44be"},{url:"css/bywind-var.css",revision:"b2b30aaec1f84a21ac3eb872e7b93dbe"},{url:"css/categoryBar.css",revision:"a6afc0aa34ac95e26aac87963c8209f1"},{url:"css/console.css",revision:"7ed43988d36344a541dc4334c2ed48b5"},{url:"css/custom.css",revision:"4943574c718f538c092183d06674ec94"},{url:"css/essay_page.css",revision:"3ba38cff85ec7f80338823e1cba8336f"},{url:"css/fcircle.css",revision:"001c608c1e5b70e08cd23064574fb020"},{url:"css/footer.css",revision:"fa0ab7b096f2c273c57668c138818153"},{url:"css/heo-var.css",revision:"d79ffd7b34766676a75e6d65124653a4"},{url:"css/iconfont.css",revision:"5055ebcf02646fdaa4da13f4fe354b08"},{url:"css/iconfont.ttf",revision:"8f80d63cc7e56b252ef8fec5670f26c0"},{url:"css/iconfont.woff",revision:"7abbf230e11a38ff6e24c53ef729071a"},{url:"css/iconfont.woff2",revision:"c51fb9504bd8cd0343fc8143c643f96b"},{url:"css/index.css",revision:"b1b36916a1835520ddd76ed8ba1c7364"},{url:"css/orlike.css",revision:"79645cab91d5883ac08ac62b2ad54eb0"},{url:"css/rightmenu.css",revision:"494e548cfc9709388c2a8fe247fab9b8"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"18ec6fe0caf48b1c0e7e596f64555412"},{url:"fcircle/index.html",revision:"13b026c1b89ab4ecf7bb7b4c16d13c31"},{url:"google8073542809160a67.html",revision:"a55a288656b4b16062a9ab597b3cb234"},{url:"images/siteicon/16.png",revision:"41e3967281878159110cc6ca09fd0fa4"},{url:"images/siteicon/32.png",revision:"75a26a44891ee25b703687fa5de3f8e0"},{url:"images/siteicon/apple-icon-180.png",revision:"9b24935c81e392200f6afddb72dc4623"},{url:"images/siteicon/manifest-icon-192.maskable.png",revision:"a1f47303530065e12dfe83d27d4dec22"},{url:"images/siteicon/manifest-icon-512.maskable.png",revision:"02606076e382d76015528bd55dcc2084"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/512.png",revision:"bcbb6361052ad267d4854f9107249a04"},{url:"img/avatar.png",revision:"02606076e382d76015528bd55dcc2084"},{url:"img/bili.jpg",revision:"9300a67bcb69b68214f2c9bda2fd372f"},{url:"img/dark.jpg",revision:"42f8fb9601dd79888fd45bf358510863"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"1ca1e59470896763eec670b89085842c"},{url:"img/icon-dark.png",revision:"262df31d0e2342d15e584b749350b324"},{url:"img/icon-light.png",revision:"1ec82f13300dd7f9b0bcdc0672efa9e8"},{url:"img/icons/api.svg",revision:"167a81a4837ececc0442b00cb3829778"},{url:"img/icons/diary.svg",revision:"62a6f9194b5429b0cde07c0b24751123"},{url:"img/icons/homepage.svg",revision:"4116cf19dee9b8d2502d04e7f0c2f5d6"},{url:"img/icons/navi.svg",revision:"00fd00972042693a430b291629eec08f"},{url:"img/icons/pan.svg",revision:"500ed5ba588c41870090b22df79d4cd6"},{url:"img/icons/rtalk.svg",revision:"d9f6c6273cf678442de1e68dc6fba268"},{url:"img/light.jpg",revision:"cf9f27280d5644184dad9cfa1ddb8b19"},{url:"img/link.png",revision:"762f41548778b819efece6662892436d"},{url:"img/load-dark.png",revision:"c9fe1886c31c60ccaf6b2e4f79a27a79"},{url:"img/load-light.png",revision:"224ed753f03fb30e0ab4fe3e474ccea7"},{url:"img/longnian.webp",revision:"8abfc6e70195dd437fcc7ed0dce16d65"},{url:"img/longnian1.webp",revision:"7488f4b894eeef8aef5a88f209aae45e"},{url:"img/longnian2.webp",revision:"cf8c0d50a522681770cb9c58bff8cef6"},{url:"img/longnian3.webp",revision:"11875dcf8fddec13efc1d01a0ec19a39"},{url:"img/siteicon/android-chrome-144x144.png",revision:"e3ce6e38bdb79145f544187e7b573740"},{url:"img/siteicon/android-chrome-192x192.png",revision:"749ca2a5351cb0b22a88f71c4945d6d8"},{url:"img/siteicon/android-chrome-256x256.png",revision:"577f93d4b5273160c67cec1ba4c1915a"},{url:"img/siteicon/android-chrome-36x36.png",revision:"f40bafc6110837e09d05526b1ec2e2df"},{url:"img/siteicon/android-chrome-384x384.png",revision:"288aa3c41c9295de78cbaad923175137"},{url:"img/siteicon/android-chrome-48x48.png",revision:"3428fb5ba7f1a007a2000e9fe9dafd6c"},{url:"img/siteicon/android-chrome-512x512.png",revision:"3725e2811098c78d82adc0f66367d2a8"},{url:"img/siteicon/android-chrome-72x72.png",revision:"3aae9af0269938754a26cda672c33ca7"},{url:"img/siteicon/android-chrome-96x96.png",revision:"4a58d6ada32d9471ed275558be769c4b"},{url:"img/siteicon/apple-splash-1125-2436.jpg",revision:"e91b53057765528d8b4994ba87bbd5e1"},{url:"img/siteicon/apple-splash-1136-640.jpg",revision:"30e1d2e3960c90ce6cc348ff3a9e8e19"},{url:"img/siteicon/apple-splash-1170-2532.jpg",revision:"e824b06a66694122bb815bcbb61c46a0"},{url:"img/siteicon/apple-splash-1179-2556.jpg",revision:"f4cbd8d22983c8fa6a321bf3a7156342"},{url:"img/siteicon/apple-splash-1242-2208.jpg",revision:"f3b15b9997306f792be6d410b8dcd5e5"},{url:"img/siteicon/apple-splash-1242-2688.jpg",revision:"0f0f718211e49aa01f322600339f740d"},{url:"img/siteicon/apple-splash-1284-2778.jpg",revision:"0b567e0758c67545dea52dd3f267b68d"},{url:"img/siteicon/apple-splash-1290-2796.jpg",revision:"40da85df67178343203e0782f29e62e4"},{url:"img/siteicon/apple-splash-1334-750.jpg",revision:"7aad92d965681d5f1c5ff751b3d4495f"},{url:"img/siteicon/apple-splash-1536-2048.jpg",revision:"4265299350da0e6bcf5f158f802b12f7"},{url:"img/siteicon/apple-splash-1620-2160.jpg",revision:"bd444ade8d73ef3fdd56a50efd3527fa"},{url:"img/siteicon/apple-splash-1668-2224.jpg",revision:"cd4d7afd732db6e5d38c0e0086a2e40c"},{url:"img/siteicon/apple-splash-1668-2388.jpg",revision:"8761d3b72e1661f9a7adca8e8c12c044"},{url:"img/siteicon/apple-splash-1792-828.jpg",revision:"c4ab0aaa1b40e011a49b750a533b0b5a"},{url:"img/siteicon/apple-splash-2048-1536.jpg",revision:"be9cfe0eb3b413ff7470643b1fe69b17"},{url:"img/siteicon/apple-splash-2048-2732.jpg",revision:"70015855f6f40033554b44687a12522c"},{url:"img/siteicon/apple-splash-2160-1620.jpg",revision:"d0f41dc0a7139082a18885cab06d61eb"},{url:"img/siteicon/apple-splash-2208-1242.jpg",revision:"e8f77489b228e2cd8d9df6d183d6f5a3"},{url:"img/siteicon/apple-splash-2224-1668.jpg",revision:"f389fcc61e142cec5568fdb6bd63c09f"},{url:"img/siteicon/apple-splash-2388-1668.jpg",revision:"14534597596c732d4e111e79cb3c6f23"},{url:"img/siteicon/apple-splash-2436-1125.jpg",revision:"3c091d8554db743999f7810df532e4a0"},{url:"img/siteicon/apple-splash-2532-1170.jpg",revision:"6d08f4cc07f0730ebed76092e934aab6"},{url:"img/siteicon/apple-splash-2556-1179.jpg",revision:"b8e2dee6b94f19db046da7b80e87deed"},{url:"img/siteicon/apple-splash-2688-1242.jpg",revision:"b5d02a3a2b59b91c80ea2168fccc27a4"},{url:"img/siteicon/apple-splash-2732-2048.jpg",revision:"5d6d83b2bd6868c5f63ce34eca439208"},{url:"img/siteicon/apple-splash-2778-1284.jpg",revision:"60f4c9a508cc71f80334e18b5fb4f1c9"},{url:"img/siteicon/apple-splash-2796-1290.jpg",revision:"ff78c997776f89b2b2faf65d59099aa6"},{url:"img/siteicon/apple-splash-640-1136.jpg",revision:"9e45e3170931c24fb4b7fc7e1a2f84e4"},{url:"img/siteicon/apple-splash-750-1334.jpg",revision:"4345a23d86d796936a412f990df9e984"},{url:"img/siteicon/apple-splash-828-1792.jpg",revision:"fc85cbc7d03a92459598e8e83b0208a3"},{url:"img/siteicon/apple-touch-icon.png",revision:"e9712f388baf6e184c7772e8a6faab42"},{url:"img/siteicon/favicon-16x16.png",revision:"716e57fdeb966ff4aaf35283c4c4dba7"},{url:"img/siteicon/favicon-32x32.png",revision:"f9d7bb4a969e310ea843f0f82d947a21"},{url:"img/siteicon/mstile-150x150.png",revision:"651ef46e012493de7b2ce1ed4691f54c"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"851cf3bedd2976acde6efc437e1500ca"},{url:"img/theta.svg",revision:"0291551675c16a9f3d6b2e190e936c86"},{url:"index.html",revision:"72f00e6509f0dbe5cb0da37007f60d3b"},{url:"js/about.js",revision:"52b09215dcc968cb19ff2d4a789734bf"},{url:"js/autoload.js",revision:"6254d09f551de324e370be766031f585"},{url:"js/categoryBar.js",revision:"8d79fb84740b5fa4ad17139a0f9a5c74"},{url:"js/commentdanmaku.js",revision:"1e1a8a7a6cf8e2c3fa44bfc8a96f2025"},{url:"js/console.js",revision:"359ffbb82527d690ee362cff60343cd5"},{url:"js/custom.js",revision:"18782b5ca3db3a7775cd59b26d7ff317"},{url:"js/easy-Danmaku.js",revision:"b246c9b76d753826c4da361095893d57"},{url:"js/fcircle.js",revision:"de029419576ed9036daaa2c099663fd2"},{url:"js/fish.js",revision:"0a8d87ac3704b61824c5c3154c8e2b4f"},{url:"js/fps.js",revision:"383182c1160a37001704e1cc2706228b"},{url:"js/hometop.js",revision:"134bd184ce1463ea2a9c23df5460c5aa"},{url:"js/kslink.js",revision:"b85ceca043f4018b0979dc484c834945"},{url:"js/main.js",revision:"793e6861668298d001d2eca8ab9a5c97"},{url:"js/nav.js",revision:"e306aabdf69e4c7e53ddde509f48d458"},{url:"js/newyear.js",revision:"f516b5e3ffbc2fe5e66b1365cd419537"},{url:"js/orlike.js",revision:"cd5d03a37019b7b1b89a4adb1c276638"},{url:"js/owobig.js",revision:"59252bd6e41da14eb368166c3ee13c32"},{url:"js/random-friends-post.js",revision:"a28ca1953538dd18aece3c7e51deea0a"},{url:"js/randompost.js",revision:"9167c88c519faeaec763297323144853"},{url:"js/rightmenu.js",revision:"b9bec674130c5308f3e60143e378f006"},{url:"js/sakura.js",revision:"0cac8ee3645e794620959ff201b21661"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"aea55acb22a3b51ad16057b0ea52c0a9"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/txmap.js",revision:"82bbcb06ce462fb9bd64d0eb4de87baa"},{url:"js/utils.js",revision:"e95ad73d5170f72ae1596b3d9abb7ed3"},{url:"js/waterfall/waterfall.js",revision:"6b3f21ab5352e2ed8c84b1833dbc8cf2"},{url:"js/welcome.js",revision:"892bfc0885e0f2e4e714e0a4dddcef9d"},{url:"lib/tag_plugins.css",revision:"9dbc2e84fda35370433ef0faac822e83"},{url:"link/index.html",revision:"c3740b90a22233e6004685fe72cfe527"},{url:"music/index.html",revision:"07715c155b6f462a024921796b4bbbc1"},{url:"page/2/index.html",revision:"8181b067f4bf058915ba6b9bb275ba9f"},{url:"page/3/index.html",revision:"a15279160dc6cd50c6c91fffa0b542fc"},{url:"page/4/index.html",revision:"1269fd2928b0c0d1176e5b10d5ee5f73"},{url:"posts/10045/index.html",revision:"8ec668702effa2b1c47acce27f693f87"},{url:"posts/10996/index.html",revision:"c69f2c8d72f397fc95e4498b288ce604"},{url:"posts/12779/index.html",revision:"2369b19e8b1e4a24873f7cc869dde5a0"},{url:"posts/13624/index.html",revision:"684a7d96452d4b93d29bb0f19fc30f25"},{url:"posts/15842/index.html",revision:"cf2459f2d369607589588de04b100264"},{url:"posts/16107/index.html",revision:"2d46db38f36a35c9962c56d3e618a448"},{url:"posts/18063/index.html",revision:"3ab33a9f0e1f7774e3bdf0d94ba2d103"},{url:"posts/20412/index.html",revision:"7f2f1806833c6aa8b64c37c167f8b71c"},{url:"posts/21375/index.html",revision:"3aa9b5783cfbce7a5cd6ad54d15553c3"},{url:"posts/22945/index.html",revision:"65f5b3c10d30b591367da1aecac5ed0e"},{url:"posts/23021/index.html",revision:"96567645671becfab0bba6b0be882bc9"},{url:"posts/27531/index.html",revision:"62cb2717d684666a2dbdb154b651f00c"},{url:"posts/27762/index.html",revision:"7e9b9ef74d8115413a0aeed80455403e"},{url:"posts/28536/index.html",revision:"a3188733c1f23bf19337bd47f02f61db"},{url:"posts/28733/index.html",revision:"e513f0430f7928c9037c7a2b764841ca"},{url:"posts/29196/index.html",revision:"43c740c4119f8d5735647bbc5e699d21"},{url:"posts/38917/index.html",revision:"6f4d9b4889eca264dfd098ffd3015ea9"},{url:"posts/38964/index.html",revision:"59f8423882b4f9f840f55f4e468de0e4"},{url:"posts/42487/index.html",revision:"8f8510dd587f30dc3f3aa8ebff41dc39"},{url:"posts/42580/index.html",revision:"4fba1556b63eddd885e29c3911c772a1"},{url:"posts/45875/index.html",revision:"e73ff9e9f46da9e54e9feb7896a384b8"},{url:"posts/48762/index.html",revision:"df3d18adf65c5d0154e2cf83857cb976"},{url:"posts/50710/index.html",revision:"28d43e740e8cca13eeedefe16cc88aa5"},{url:"posts/52677/index.html",revision:"748b965e6a8f98e1a5f55389b339ff6c"},{url:"posts/53662/index.html",revision:"da67a7e9bb6ca173f0e7d752660f3ef9"},{url:"posts/54386/index.html",revision:"b57c74e8b81ae9d1c278bd6e276a3bdf"},{url:"posts/54481/index.html",revision:"3a20a51dea2a076559a7588c9733feb2"},{url:"posts/54787/index.html",revision:"21a2d95d51768b0ea3d8ccbc9beb8412"},{url:"posts/56467/index.html",revision:"d78fe82646968910727eec2794954e7d"},{url:"posts/58203/index.html",revision:"e8c1b770fc11f052b6ce12df96bfb1f2"},{url:"posts/61417/index.html",revision:"db32f7dc9d93ac57acf43c20d09ac4f0"},{url:"posts/646/index.html",revision:"e2816a10c66d50f14563ddf47e300fd7"},{url:"redirect/index.html",revision:"930594715f52847cd3f2a62106d2dac1"},{url:"seas/index.html",revision:"32c07d078869f5e676baa98fff29b55b"},{url:"tags/index.html",revision:"42c484ea56875de7d4fbcdf669c6a6ff"},{url:"tags/Steam游戏/index.html",revision:"e85a0d42100f49315461a2d486862c3a"},{url:"tags/Windows软件/index.html",revision:"804ce9752ef572d4f7083be68d887f84"},{url:"tags/个人小记/index.html",revision:"a989347896d0e1d908912ae611b9564e"},{url:"tags/个人小记/page/2/index.html",revision:"95c4ac8989f560885953d34935392040"},{url:"tags/其它游戏/index.html",revision:"d1e039523c95caa4de93cd5c28e233d1"},{url:"tags/悬浮宠物-看板娘/index.html",revision:"2a58b34fc327b20da8e2d2dfef211a07"},{url:"tags/歌曲收集/index.html",revision:"cd832bcd4c8dc7ed69cfdf367dc14122"},{url:"tags/游戏相关/index.html",revision:"2dba0fa14181871ef168944c8b564b74"},{url:"tags/站点底部魔改/index.html",revision:"22d538380edaa418ef25586fa9af9396"},{url:"tags/站点折腾/index.html",revision:"38c3660ff8639140f89f048955e0da05"},{url:"tags/站点折腾/page/2/index.html",revision:"02a743b2dd001dcd7fec9b37e27b7510"},{url:"tags/自建部署/index.html",revision:"4590be2be2d4ca66ead9a437821b5d21"},{url:"tags/页面魔改/index.html",revision:"8ac49be8b404281e05b2d6f49c721ebb"},{url:"tags/项目折腾/index.html",revision:"7058f7458d67fc96ed9a974d013a9630"},{url:"weichuncai/css/style.css",revision:"a1729c6aba367df186684a27db5d7085"},{url:"weichuncai/imgs/chat_bottom.gif",revision:"28237e6983fb90452cfed4b18f8b8111"},{url:"weichuncai/imgs/chat_top.gif",revision:"55d8afbfd1abd414eb188db757162176"},{url:"weichuncai/imgs/loading.gif",revision:"89e31e5265ed90600b70fe11367a077e"},{url:"weichuncai/imgs/menu.jpg",revision:"e4fabef017dc6ff62a8ceb1246b72e27"},{url:"weichuncai/imgs/ok.jpg",revision:"55a79a12edb9581eba53e97c1b027d14"},{url:"weichuncai/js/common.js",revision:"da5e9699d94c33c93a5047c06468f7a7"},{url:"weichuncai/js/jquery.js",revision:"10092eee563dec2dca82b77d2cf5a1ae"},{url:"weichuncai/skin/default/face1.gif",revision:"c56da003f4e49e77a6afdf59f5f3ff91"},{url:"weichuncai/skin/default/face2.gif",revision:"a45121a80b5bca867e2eeded3c34c6e1"},{url:"weichuncai/skin/default/face3.gif",revision:"7fdb05e5a9d570537190f15416e92790"},{url:"weichuncai/skin/ikamusume/ikamusume001.gif",revision:"2d1a8218aba89fbd77a0fa175ddf264e"},{url:"weichuncai/skin/ikamusume/ikamusume002.gif",revision:"e64a731cd4d96c76fa9dcb09d39429e1"},{url:"weichuncai/skin/ikamusume/ikamusume003.gif",revision:"fa9d249a92e41dcbaa80dd508aa2f1b8"},{url:"weichuncai/skin/rakutori/face1.gif",revision:"d056945c32bfe2aeb02db6d8ac60b209"},{url:"weichuncai/skin/rakutori/face2.gif",revision:"a45121a80b5bca867e2eeded3c34c6e1"},{url:"weichuncai/skin/rakutori/face3.gif",revision:"7fdb05e5a9d570537190f15416e92790"},{url:"weichuncai/wcc-config.js",revision:"56cf0be141a728199b29994e07eb5353"}],{})}));