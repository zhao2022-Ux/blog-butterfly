if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>a(e,d),f={module:{uri:d},exports:r,require:n};i[d]=Promise.all(c.map((e=>f[e]||n(e)))).then((e=>(s(...e),r)))}}define(["./workbox-22632682"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"c48e2ef4fbce24d64168db1ce4fa2949"},{url:"404/index.html",revision:"60c5f8a6c8cf33e057b4e75a0a8324e5"},{url:"about/index.html",revision:"06f54397ebcbdc1c19c34468bfce65d3"},{url:"album/index.html",revision:"ded03b657de71924df95c3302670f685"},{url:"archives/2021/12/index.html",revision:"e41475f4f84ae69d190711ab50d1f483"},{url:"archives/2021/index.html",revision:"2284c3a3831dc942aec9f65d996b337c"},{url:"archives/2022/12/index.html",revision:"6d32aca35242d8985743d32181ecbccd"},{url:"archives/2022/index.html",revision:"8f08f74fad100d67c1caf2b826e11c2c"},{url:"archives/2023/01/index.html",revision:"a0b4802cfbd1df84ebb8c9060e935505"},{url:"archives/2023/02/index.html",revision:"3c50c615e2ffa20a1e0b38be79bedfba"},{url:"archives/2023/03/index.html",revision:"012f31a5092ad0c067e84abc156452b3"},{url:"archives/2023/04/index.html",revision:"aefe0e729d74e8ddab1a200f0bf8b0cd"},{url:"archives/2023/07/index.html",revision:"76ec0b6aef28f3805b2cbb5f6de3496c"},{url:"archives/2023/08/index.html",revision:"a1ef499c1bb3ddcc63ec43baa7e018cf"},{url:"archives/2023/09/index.html",revision:"bc98ebb6808793144789a6c67183d7d1"},{url:"archives/2023/10/index.html",revision:"4cd85c99f67dea589ae8ae679067dffd"},{url:"archives/2023/11/index.html",revision:"a0183a700cdc3262d66402b601bd1fad"},{url:"archives/2023/12/index.html",revision:"b7bcfe5551e2ca746c031c025fac2953"},{url:"archives/2023/index.html",revision:"c7727b669324043fa23e056707dc1906"},{url:"archives/2023/page/2/index.html",revision:"d3f09f3e4f650a8e9ed1d80a8ea9e8a5"},{url:"archives/2023/page/3/index.html",revision:"0fafa6a3bbf886ccea784fde1e9c4722"},{url:"archives/2024/01/index.html",revision:"191a1eaf865ae0cf7d4b2bb5f92c8615"},{url:"archives/2024/02/index.html",revision:"0897124d8240f6d8a993f6fe720ca194"},{url:"archives/2024/03/index.html",revision:"6ba29e8e588d28da76c4daee7c3a81c5"},{url:"archives/2024/04/index.html",revision:"06d23c53b00d254160969de425cb1263"},{url:"archives/2024/index.html",revision:"88946633399cc149f3c4f71693ef45fe"},{url:"archives/index.html",revision:"aacc12cb40f9280e4539a31954733418"},{url:"archives/page/2/index.html",revision:"bf9f16216b9c845c0c3d317059ed04aa"},{url:"archives/page/3/index.html",revision:"1419db75529ccd64af6285afbeea8878"},{url:"archives/page/4/index.html",revision:"f0cd78e8658e3a31daeb286bb5a0a49e"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"baidu_verify_codeva-NA6uDlCuZg.html",revision:"2ab8276d1d4090ed869b296d921d2c94"},{url:"bangumis/index.html",revision:"13c83e3e9841827e0e21aad853b306e1"},{url:"bbs/index.html",revision:"99b68ecdf7138fa8941ce26fab199cfa"},{url:"categories/index.html",revision:"7fb71dda66a09658133772d0ac872512"},{url:"categories/个人小记/index.html",revision:"1432278c48127aad8869ef18466a8c9e"},{url:"categories/个人小记/page/2/index.html",revision:"145363579604e8e7d4fd04b6fa68ae98"},{url:"categories/歌曲收集/index.html",revision:"ccb8db62c3eb7e95f2708d0bb3362e66"},{url:"categories/游戏相关/index.html",revision:"23110558537e68e63c5489ce227564df"},{url:"categories/站点折腾/index.html",revision:"cbb1a61246a5407aee4c70e92b65ad3b"},{url:"categories/站点折腾/page/2/index.html",revision:"a0bcd85d29d40424769f3d5b3054857a"},{url:"categories/项目折腾/index.html",revision:"924e4f1a67eefb8c0f332a52c073c078"},{url:"charts/index.html",revision:"c9ce8d90defc24b53373f5669c80ae33"},{url:"comments/index.html",revision:"cc0965883b853becd7984e9fccdde189"},{url:"css/404.css",revision:"31a9c04f0e0bf636a051a3d6111260d7"},{url:"css/anzhiyu-var.css",revision:"1c87f9f91fe8fde100d54dc54d1b44be"},{url:"css/bywind-var.css",revision:"b2b30aaec1f84a21ac3eb872e7b93dbe"},{url:"css/categoryBar.css",revision:"a6afc0aa34ac95e26aac87963c8209f1"},{url:"css/console.css",revision:"6b58ca9ea9e2ffa77401507538d49db8"},{url:"css/custom.css",revision:"4943574c718f538c092183d06674ec94"},{url:"css/essay_page.css",revision:"3ba38cff85ec7f80338823e1cba8336f"},{url:"css/fcircle.css",revision:"001c608c1e5b70e08cd23064574fb020"},{url:"css/footer.css",revision:"fa0ab7b096f2c273c57668c138818153"},{url:"css/heo-var.css",revision:"d79ffd7b34766676a75e6d65124653a4"},{url:"css/iconfont.css",revision:"5055ebcf02646fdaa4da13f4fe354b08"},{url:"css/iconfont.ttf",revision:"8f80d63cc7e56b252ef8fec5670f26c0"},{url:"css/iconfont.woff",revision:"7abbf230e11a38ff6e24c53ef729071a"},{url:"css/iconfont.woff2",revision:"c51fb9504bd8cd0343fc8143c643f96b"},{url:"css/index.css",revision:"e2387bc8eab35bb25d2ecc1bec2df3c0"},{url:"css/orlike.css",revision:"79645cab91d5883ac08ac62b2ad54eb0"},{url:"css/rightmenu.css",revision:"494e548cfc9709388c2a8fe247fab9b8"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"fa364b174fc9e806458c76975e749278"},{url:"fcircle/index.html",revision:"a1b6c3c7296ac601f8f512985dfc9f2d"},{url:"google8073542809160a67.html",revision:"a308cfc401594284331a0fc3a0506346"},{url:"images/siteicon/16.png",revision:"41e3967281878159110cc6ca09fd0fa4"},{url:"images/siteicon/32.png",revision:"75a26a44891ee25b703687fa5de3f8e0"},{url:"images/siteicon/apple-icon-180.png",revision:"9b24935c81e392200f6afddb72dc4623"},{url:"images/siteicon/manifest-icon-192.maskable.png",revision:"a1f47303530065e12dfe83d27d4dec22"},{url:"images/siteicon/manifest-icon-512.maskable.png",revision:"02606076e382d76015528bd55dcc2084"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/512.png",revision:"bcbb6361052ad267d4854f9107249a04"},{url:"img/avatar.png",revision:"02606076e382d76015528bd55dcc2084"},{url:"img/bili.jpg",revision:"9300a67bcb69b68214f2c9bda2fd372f"},{url:"img/dark.jpg",revision:"42f8fb9601dd79888fd45bf358510863"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"1ca1e59470896763eec670b89085842c"},{url:"img/icon-dark.png",revision:"262df31d0e2342d15e584b749350b324"},{url:"img/icon-light.png",revision:"1ec82f13300dd7f9b0bcdc0672efa9e8"},{url:"img/icons/api.svg",revision:"167a81a4837ececc0442b00cb3829778"},{url:"img/icons/diary.svg",revision:"62a6f9194b5429b0cde07c0b24751123"},{url:"img/icons/homepage.svg",revision:"4116cf19dee9b8d2502d04e7f0c2f5d6"},{url:"img/icons/navi.svg",revision:"00fd00972042693a430b291629eec08f"},{url:"img/icons/pan.svg",revision:"500ed5ba588c41870090b22df79d4cd6"},{url:"img/icons/rtalk.svg",revision:"d9f6c6273cf678442de1e68dc6fba268"},{url:"img/light.jpg",revision:"cf9f27280d5644184dad9cfa1ddb8b19"},{url:"img/link.png",revision:"762f41548778b819efece6662892436d"},{url:"img/load-dark.png",revision:"c9fe1886c31c60ccaf6b2e4f79a27a79"},{url:"img/load-light.png",revision:"224ed753f03fb30e0ab4fe3e474ccea7"},{url:"img/longnian.webp",revision:"8abfc6e70195dd437fcc7ed0dce16d65"},{url:"img/longnian1.webp",revision:"7488f4b894eeef8aef5a88f209aae45e"},{url:"img/longnian2.webp",revision:"cf8c0d50a522681770cb9c58bff8cef6"},{url:"img/longnian3.webp",revision:"11875dcf8fddec13efc1d01a0ec19a39"},{url:"img/siteicon/android-chrome-144x144.png",revision:"e3ce6e38bdb79145f544187e7b573740"},{url:"img/siteicon/android-chrome-192x192.png",revision:"749ca2a5351cb0b22a88f71c4945d6d8"},{url:"img/siteicon/android-chrome-256x256.png",revision:"577f93d4b5273160c67cec1ba4c1915a"},{url:"img/siteicon/android-chrome-36x36.png",revision:"f40bafc6110837e09d05526b1ec2e2df"},{url:"img/siteicon/android-chrome-384x384.png",revision:"288aa3c41c9295de78cbaad923175137"},{url:"img/siteicon/android-chrome-48x48.png",revision:"3428fb5ba7f1a007a2000e9fe9dafd6c"},{url:"img/siteicon/android-chrome-512x512.png",revision:"3725e2811098c78d82adc0f66367d2a8"},{url:"img/siteicon/android-chrome-72x72.png",revision:"3aae9af0269938754a26cda672c33ca7"},{url:"img/siteicon/android-chrome-96x96.png",revision:"4a58d6ada32d9471ed275558be769c4b"},{url:"img/siteicon/apple-splash-1125-2436.jpg",revision:"e91b53057765528d8b4994ba87bbd5e1"},{url:"img/siteicon/apple-splash-1136-640.jpg",revision:"30e1d2e3960c90ce6cc348ff3a9e8e19"},{url:"img/siteicon/apple-splash-1170-2532.jpg",revision:"e824b06a66694122bb815bcbb61c46a0"},{url:"img/siteicon/apple-splash-1179-2556.jpg",revision:"f4cbd8d22983c8fa6a321bf3a7156342"},{url:"img/siteicon/apple-splash-1242-2208.jpg",revision:"f3b15b9997306f792be6d410b8dcd5e5"},{url:"img/siteicon/apple-splash-1242-2688.jpg",revision:"0f0f718211e49aa01f322600339f740d"},{url:"img/siteicon/apple-splash-1284-2778.jpg",revision:"0b567e0758c67545dea52dd3f267b68d"},{url:"img/siteicon/apple-splash-1290-2796.jpg",revision:"40da85df67178343203e0782f29e62e4"},{url:"img/siteicon/apple-splash-1334-750.jpg",revision:"7aad92d965681d5f1c5ff751b3d4495f"},{url:"img/siteicon/apple-splash-1536-2048.jpg",revision:"4265299350da0e6bcf5f158f802b12f7"},{url:"img/siteicon/apple-splash-1620-2160.jpg",revision:"bd444ade8d73ef3fdd56a50efd3527fa"},{url:"img/siteicon/apple-splash-1668-2224.jpg",revision:"cd4d7afd732db6e5d38c0e0086a2e40c"},{url:"img/siteicon/apple-splash-1668-2388.jpg",revision:"8761d3b72e1661f9a7adca8e8c12c044"},{url:"img/siteicon/apple-splash-1792-828.jpg",revision:"c4ab0aaa1b40e011a49b750a533b0b5a"},{url:"img/siteicon/apple-splash-2048-1536.jpg",revision:"be9cfe0eb3b413ff7470643b1fe69b17"},{url:"img/siteicon/apple-splash-2048-2732.jpg",revision:"70015855f6f40033554b44687a12522c"},{url:"img/siteicon/apple-splash-2160-1620.jpg",revision:"d0f41dc0a7139082a18885cab06d61eb"},{url:"img/siteicon/apple-splash-2208-1242.jpg",revision:"e8f77489b228e2cd8d9df6d183d6f5a3"},{url:"img/siteicon/apple-splash-2224-1668.jpg",revision:"f389fcc61e142cec5568fdb6bd63c09f"},{url:"img/siteicon/apple-splash-2388-1668.jpg",revision:"14534597596c732d4e111e79cb3c6f23"},{url:"img/siteicon/apple-splash-2436-1125.jpg",revision:"3c091d8554db743999f7810df532e4a0"},{url:"img/siteicon/apple-splash-2532-1170.jpg",revision:"6d08f4cc07f0730ebed76092e934aab6"},{url:"img/siteicon/apple-splash-2556-1179.jpg",revision:"b8e2dee6b94f19db046da7b80e87deed"},{url:"img/siteicon/apple-splash-2688-1242.jpg",revision:"b5d02a3a2b59b91c80ea2168fccc27a4"},{url:"img/siteicon/apple-splash-2732-2048.jpg",revision:"5d6d83b2bd6868c5f63ce34eca439208"},{url:"img/siteicon/apple-splash-2778-1284.jpg",revision:"60f4c9a508cc71f80334e18b5fb4f1c9"},{url:"img/siteicon/apple-splash-2796-1290.jpg",revision:"ff78c997776f89b2b2faf65d59099aa6"},{url:"img/siteicon/apple-splash-640-1136.jpg",revision:"9e45e3170931c24fb4b7fc7e1a2f84e4"},{url:"img/siteicon/apple-splash-750-1334.jpg",revision:"4345a23d86d796936a412f990df9e984"},{url:"img/siteicon/apple-splash-828-1792.jpg",revision:"fc85cbc7d03a92459598e8e83b0208a3"},{url:"img/siteicon/apple-touch-icon.png",revision:"e9712f388baf6e184c7772e8a6faab42"},{url:"img/siteicon/favicon-16x16.png",revision:"716e57fdeb966ff4aaf35283c4c4dba7"},{url:"img/siteicon/favicon-32x32.png",revision:"f9d7bb4a969e310ea843f0f82d947a21"},{url:"img/siteicon/mstile-150x150.png",revision:"651ef46e012493de7b2ce1ed4691f54c"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"851cf3bedd2976acde6efc437e1500ca"},{url:"img/theta.svg",revision:"0291551675c16a9f3d6b2e190e936c86"},{url:"index.html",revision:"771f7f37a336263eefeae0a6ed0e8118"},{url:"js/about.js",revision:"52b09215dcc968cb19ff2d4a789734bf"},{url:"js/autoload.js",revision:"6254d09f551de324e370be766031f585"},{url:"js/categoryBar.js",revision:"8d79fb84740b5fa4ad17139a0f9a5c74"},{url:"js/commentdanmaku.js",revision:"1e1a8a7a6cf8e2c3fa44bfc8a96f2025"},{url:"js/console.js",revision:"359ffbb82527d690ee362cff60343cd5"},{url:"js/custom.js",revision:"18782b5ca3db3a7775cd59b26d7ff317"},{url:"js/easy-Danmaku.js",revision:"b246c9b76d753826c4da361095893d57"},{url:"js/fcircle.js",revision:"de029419576ed9036daaa2c099663fd2"},{url:"js/fish.js",revision:"0a8d87ac3704b61824c5c3154c8e2b4f"},{url:"js/fps.js",revision:"383182c1160a37001704e1cc2706228b"},{url:"js/hometop.js",revision:"134bd184ce1463ea2a9c23df5460c5aa"},{url:"js/kslink.js",revision:"b85ceca043f4018b0979dc484c834945"},{url:"js/main.js",revision:"793e6861668298d001d2eca8ab9a5c97"},{url:"js/nav.js",revision:"e306aabdf69e4c7e53ddde509f48d458"},{url:"js/newyear.js",revision:"f516b5e3ffbc2fe5e66b1365cd419537"},{url:"js/orlike.js",revision:"cd5d03a37019b7b1b89a4adb1c276638"},{url:"js/owobig.js",revision:"59252bd6e41da14eb368166c3ee13c32"},{url:"js/random-friends-post.js",revision:"a28ca1953538dd18aece3c7e51deea0a"},{url:"js/randompost.js",revision:"40806b35211fa0883c9cc3d5a1df0150"},{url:"js/rightmenu.js",revision:"b9bec674130c5308f3e60143e378f006"},{url:"js/sakura.js",revision:"0cac8ee3645e794620959ff201b21661"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"aea55acb22a3b51ad16057b0ea52c0a9"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/txmap.js",revision:"82bbcb06ce462fb9bd64d0eb4de87baa"},{url:"js/utils.js",revision:"e95ad73d5170f72ae1596b3d9abb7ed3"},{url:"js/waterfall/waterfall.js",revision:"6b3f21ab5352e2ed8c84b1833dbc8cf2"},{url:"js/welcome.js",revision:"892bfc0885e0f2e4e714e0a4dddcef9d"},{url:"lib/tag_plugins.css",revision:"9dbc2e84fda35370433ef0faac822e83"},{url:"link/index.html",revision:"dbb7e888aeec46ad4ae72d1d6ddd91f0"},{url:"music/index.html",revision:"07715c155b6f462a024921796b4bbbc1"},{url:"page/2/index.html",revision:"6f9213a822bcdf53aef4891edcd9a89e"},{url:"page/3/index.html",revision:"8e6117e0ef43e1ac4ed97db1f078c3de"},{url:"page/4/index.html",revision:"7a9dc963215065edd50d86dadd815f32"},{url:"posts/10045/index.html",revision:"26a8573ddd219d3a3245b380a8a09916"},{url:"posts/10996/index.html",revision:"624ff82d349bfa9930430510648611d1"},{url:"posts/12779/index.html",revision:"741738470d277dc2678fb9bc979dff3e"},{url:"posts/13624/index.html",revision:"d06eb7d4fdd4bbc417aa880e70d5587c"},{url:"posts/15842/index.html",revision:"1457c87221a1584728c479b60f8b0a7c"},{url:"posts/16107/index.html",revision:"314b5595e6aed6f023c0ae1c4dd2979d"},{url:"posts/18063/index.html",revision:"08e06fcc4fdcefd594c65f03523aa994"},{url:"posts/20412/index.html",revision:"a9eaf83f851a07bc35527e9c420a002f"},{url:"posts/21375/index.html",revision:"e7ce98095a625e654dc57c881087fcd4"},{url:"posts/22945/index.html",revision:"2d2c7c11442353224d394dc9f6ec0171"},{url:"posts/23021/index.html",revision:"4b34a94193e57b8fdf613ccf337cd86c"},{url:"posts/27531/index.html",revision:"331896372b4b252497f442a4e37ea65e"},{url:"posts/27762/index.html",revision:"7d23c7d5ea0178c3524261f073a183ff"},{url:"posts/28536/index.html",revision:"a76e579610e5679d5a957e32b8a35e73"},{url:"posts/28733/index.html",revision:"27e9ab511d0cc10235e7957bcda0f659"},{url:"posts/29196/index.html",revision:"6614e72eaac3469a0b3388d01e4fff0c"},{url:"posts/38917/index.html",revision:"b7ff8b5684d62ef13485ec765d058deb"},{url:"posts/38964/index.html",revision:"780ea8cea0f18c9ef74059504a2cbafb"},{url:"posts/42487/index.html",revision:"858448829d3578ad35dab3b70c92e64f"},{url:"posts/42580/index.html",revision:"059b2ae528ef47e26813ad8fd808f085"},{url:"posts/45875/index.html",revision:"8b98b735a21e9edbde638da6e00c26b4"},{url:"posts/48762/index.html",revision:"d3f0ea26ccee906478eda2a6e1ba9d05"},{url:"posts/50710/index.html",revision:"9e7277e0db9e03d8aa83783cdc4fe10d"},{url:"posts/52677/index.html",revision:"ea455c37f1ddaef9cf97812ca5ca7730"},{url:"posts/53662/index.html",revision:"4930a09b266402964127b96adc22c888"},{url:"posts/54386/index.html",revision:"0063c7f80df7ce8e19628360b3e247c2"},{url:"posts/54481/index.html",revision:"58e46b2c925fd3bec10e83f994bb533d"},{url:"posts/54787/index.html",revision:"869176d93846beebf2b3d9527eea475b"},{url:"posts/56467/index.html",revision:"de3e31589e332a34a7f29e6640e22a3e"},{url:"posts/58203/index.html",revision:"52e9c0be142d1ba856d90c935402c875"},{url:"posts/61417/index.html",revision:"04cc40a4faaa4cd2d62c2efba68bdf4a"},{url:"posts/646/index.html",revision:"0883f9b2a7f2bdba1cf19080b36a90c8"},{url:"redirect/index.html",revision:"930594715f52847cd3f2a62106d2dac1"},{url:"seas/index.html",revision:"f5fb56eb114550ee427b8238699ce096"},{url:"tags/index.html",revision:"d4c5e150f593dfba6099a8b7d8aeae99"},{url:"tags/Steam游戏/index.html",revision:"422dd3365e0f1ac0cec3daa9fc61c817"},{url:"tags/Windows软件/index.html",revision:"8f3775209569e76f5f48ec8564e46172"},{url:"tags/个人小记/index.html",revision:"f7e2ed63d1e121083aaafc3f0a07ecd8"},{url:"tags/个人小记/page/2/index.html",revision:"8123e2aaf0726e15e17cd01eb1a1cb78"},{url:"tags/其它游戏/index.html",revision:"5d6fd0c99893f2bbdce86291c3c116cd"},{url:"tags/悬浮宠物-看板娘/index.html",revision:"e5c86f4be0efc1b6662b1b2e7b19adde"},{url:"tags/歌曲收集/index.html",revision:"9271435991fa106a77beb799806244cc"},{url:"tags/游戏相关/index.html",revision:"1b8c377a32b07804f072d325ddb4ad62"},{url:"tags/站点底部魔改/index.html",revision:"61508283687f890a004fdd6d9a3a81dd"},{url:"tags/站点折腾/index.html",revision:"67dc5318d46d768f7f614aa666b04f5d"},{url:"tags/站点折腾/page/2/index.html",revision:"75b3beac98f53a22a960a8ac07f94ce0"},{url:"tags/自建部署/index.html",revision:"7ceabba068c0e63f01361b215bb3d39b"},{url:"tags/页面魔改/index.html",revision:"5a100a45871b4170adbe846e61637531"},{url:"tags/项目折腾/index.html",revision:"d5742a5bd636a822180855ac2f2c99ea"},{url:"weichuncai/css/style.css",revision:"a1729c6aba367df186684a27db5d7085"},{url:"weichuncai/imgs/chat_bottom.gif",revision:"28237e6983fb90452cfed4b18f8b8111"},{url:"weichuncai/imgs/chat_top.gif",revision:"55d8afbfd1abd414eb188db757162176"},{url:"weichuncai/imgs/loading.gif",revision:"89e31e5265ed90600b70fe11367a077e"},{url:"weichuncai/imgs/menu.jpg",revision:"e4fabef017dc6ff62a8ceb1246b72e27"},{url:"weichuncai/imgs/ok.jpg",revision:"55a79a12edb9581eba53e97c1b027d14"},{url:"weichuncai/js/common.js",revision:"da5e9699d94c33c93a5047c06468f7a7"},{url:"weichuncai/js/jquery.js",revision:"10092eee563dec2dca82b77d2cf5a1ae"},{url:"weichuncai/skin/default/face1.gif",revision:"c56da003f4e49e77a6afdf59f5f3ff91"},{url:"weichuncai/skin/default/face2.gif",revision:"a45121a80b5bca867e2eeded3c34c6e1"},{url:"weichuncai/skin/default/face3.gif",revision:"7fdb05e5a9d570537190f15416e92790"},{url:"weichuncai/skin/ikamusume/ikamusume001.gif",revision:"2d1a8218aba89fbd77a0fa175ddf264e"},{url:"weichuncai/skin/ikamusume/ikamusume002.gif",revision:"e64a731cd4d96c76fa9dcb09d39429e1"},{url:"weichuncai/skin/ikamusume/ikamusume003.gif",revision:"fa9d249a92e41dcbaa80dd508aa2f1b8"},{url:"weichuncai/skin/rakutori/face1.gif",revision:"d056945c32bfe2aeb02db6d8ac60b209"},{url:"weichuncai/skin/rakutori/face2.gif",revision:"a45121a80b5bca867e2eeded3c34c6e1"},{url:"weichuncai/skin/rakutori/face3.gif",revision:"7fdb05e5a9d570537190f15416e92790"},{url:"weichuncai/wcc-config.js",revision:"56cf0be141a728199b29994e07eb5353"}],{})}));