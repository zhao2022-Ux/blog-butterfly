if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>a(e,d),f={module:{uri:d},exports:r,require:n};i[d]=Promise.all(s.map((e=>f[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-22632682"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"eea10229f4724263de4b50acb1273419"},{url:"404/index.html",revision:"1bd4761fadbaa8d33f4520d6c4b0d2e9"},{url:"about/index.html",revision:"abbbd80776ea03b7a857cefb1b77a4ec"},{url:"album/index.html",revision:"fdd694db35ab532b4d88cab4a3e2c5a8"},{url:"archives/2021/12/index.html",revision:"625850e9cf5b5931abffa655099501d5"},{url:"archives/2021/index.html",revision:"3e5265dd4b11fe1f3197a4950e6827c4"},{url:"archives/2022/12/index.html",revision:"da25fd4d5b82449fadc826efe901d5b6"},{url:"archives/2022/index.html",revision:"13ff239cc64eade59a096c093bb7d37c"},{url:"archives/2023/01/index.html",revision:"69d2cca1bd4c16369ba57d90cfb0085f"},{url:"archives/2023/02/index.html",revision:"4298f656fc8f6ab748d37de1e262701e"},{url:"archives/2023/03/index.html",revision:"986cd4cb8d1c38e4e00938a386cb2500"},{url:"archives/2023/04/index.html",revision:"6b50c671dbeb2432a049bf0a2df1b89b"},{url:"archives/2023/07/index.html",revision:"3aef047d75b3e55d19a8f5e8a5ea5be2"},{url:"archives/2023/08/index.html",revision:"9882e4aa6b7b0cb54c465d62255309a6"},{url:"archives/2023/09/index.html",revision:"e2bb0a9ade249bc32c9c23e13def2623"},{url:"archives/2023/10/index.html",revision:"aaa64a0c384f0b2a1ae98307d9d637d4"},{url:"archives/2023/11/index.html",revision:"6f20f22438a09b6976429f564cb87b38"},{url:"archives/2023/12/index.html",revision:"af4e705037b7737838cee0d02ef458c4"},{url:"archives/2023/index.html",revision:"3df19e41ccf957ca63edd50b94781ce5"},{url:"archives/2023/page/2/index.html",revision:"ed80f197c6c5c1fcb47ca21a32dd856d"},{url:"archives/2023/page/3/index.html",revision:"f40f3f77ee07ce33c160851363e615de"},{url:"archives/2024/01/index.html",revision:"3098c171add0a292f422486fb468e9d5"},{url:"archives/2024/02/index.html",revision:"6e2dbe50c29cdd96f51db3d4a2720c31"},{url:"archives/2024/03/index.html",revision:"390409220cde7b543f4c90903ccfacb8"},{url:"archives/2024/04/index.html",revision:"8a6e9666e0fad9405e5b5fbdd757f228"},{url:"archives/2024/index.html",revision:"5395b60d19f5970bda07c1208df6e958"},{url:"archives/index.html",revision:"3e6c3b1579dd10817cdbde7aadcb5893"},{url:"archives/page/2/index.html",revision:"59869639141a1dc21e11c527b7c05a8d"},{url:"archives/page/3/index.html",revision:"53c5f55e467329102e50b68963e5ee28"},{url:"archives/page/4/index.html",revision:"6aa0abe6de2f4f8931d08e315afe3c13"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"baidu_verify_codeva-NA6uDlCuZg.html",revision:"06f9b07824a68e7e8b8af09dcd1f1703"},{url:"bangumis/index.html",revision:"f6f88f171fb845b66d3a9d39fd233ec8"},{url:"bbs/index.html",revision:"75c96019026b93d62a9164faf9b400a6"},{url:"categories/index.html",revision:"07eedd7ad12de715aa9554ba898a5336"},{url:"categories/个人小记/index.html",revision:"9c0238c8345a057410847d33d5a1677a"},{url:"categories/个人小记/page/2/index.html",revision:"dc3674d95d6552c6ace58d14a5e63040"},{url:"categories/歌曲收集/index.html",revision:"0a69578586583eda3837e4266e16fb58"},{url:"categories/游戏相关/index.html",revision:"2327a64477d08a285ea10bc045076953"},{url:"categories/站点折腾/index.html",revision:"b52c50880db856a31675d2daa68bd420"},{url:"categories/站点折腾/page/2/index.html",revision:"a97deb447e9aa3e16ab1af76e0a979bb"},{url:"categories/项目折腾/index.html",revision:"f36c846d44558372f048b10479bed660"},{url:"charts/index.html",revision:"877d0bbb7eb03d3dddd290fd2720dcbd"},{url:"comments/index.html",revision:"fafc91e5e408a42bd80c5f3411c20d2e"},{url:"css/404.css",revision:"31a9c04f0e0bf636a051a3d6111260d7"},{url:"css/anzhiyu-var.css",revision:"1c87f9f91fe8fde100d54dc54d1b44be"},{url:"css/bywind-var.css",revision:"b2b30aaec1f84a21ac3eb872e7b93dbe"},{url:"css/categoryBar.css",revision:"a6afc0aa34ac95e26aac87963c8209f1"},{url:"css/console.css",revision:"6b58ca9ea9e2ffa77401507538d49db8"},{url:"css/custom.css",revision:"4943574c718f538c092183d06674ec94"},{url:"css/essay_page.css",revision:"3ba38cff85ec7f80338823e1cba8336f"},{url:"css/fcircle.css",revision:"001c608c1e5b70e08cd23064574fb020"},{url:"css/footer.css",revision:"fa0ab7b096f2c273c57668c138818153"},{url:"css/heo-var.css",revision:"d79ffd7b34766676a75e6d65124653a4"},{url:"css/iconfont.css",revision:"5055ebcf02646fdaa4da13f4fe354b08"},{url:"css/iconfont.ttf",revision:"8f80d63cc7e56b252ef8fec5670f26c0"},{url:"css/iconfont.woff",revision:"7abbf230e11a38ff6e24c53ef729071a"},{url:"css/iconfont.woff2",revision:"c51fb9504bd8cd0343fc8143c643f96b"},{url:"css/index.css",revision:"e2387bc8eab35bb25d2ecc1bec2df3c0"},{url:"css/orlike.css",revision:"79645cab91d5883ac08ac62b2ad54eb0"},{url:"css/rightmenu.css",revision:"494e548cfc9709388c2a8fe247fab9b8"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"6139e6678d90380050b7e1cc2b62f1a6"},{url:"fcircle/index.html",revision:"fe8df109932c470bbb7e76c89d20c39e"},{url:"google8073542809160a67.html",revision:"342e4bde344f3d5e0d300e6fc3eb7377"},{url:"images/siteicon/16.png",revision:"41e3967281878159110cc6ca09fd0fa4"},{url:"images/siteicon/32.png",revision:"75a26a44891ee25b703687fa5de3f8e0"},{url:"images/siteicon/apple-icon-180.png",revision:"9b24935c81e392200f6afddb72dc4623"},{url:"images/siteicon/manifest-icon-192.maskable.png",revision:"a1f47303530065e12dfe83d27d4dec22"},{url:"images/siteicon/manifest-icon-512.maskable.png",revision:"02606076e382d76015528bd55dcc2084"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/512.png",revision:"bcbb6361052ad267d4854f9107249a04"},{url:"img/avatar.png",revision:"02606076e382d76015528bd55dcc2084"},{url:"img/bili.jpg",revision:"9300a67bcb69b68214f2c9bda2fd372f"},{url:"img/dark.jpg",revision:"42f8fb9601dd79888fd45bf358510863"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"1ca1e59470896763eec670b89085842c"},{url:"img/icon-dark.png",revision:"262df31d0e2342d15e584b749350b324"},{url:"img/icon-light.png",revision:"1ec82f13300dd7f9b0bcdc0672efa9e8"},{url:"img/icons/api.svg",revision:"167a81a4837ececc0442b00cb3829778"},{url:"img/icons/diary.svg",revision:"62a6f9194b5429b0cde07c0b24751123"},{url:"img/icons/homepage.svg",revision:"4116cf19dee9b8d2502d04e7f0c2f5d6"},{url:"img/icons/navi.svg",revision:"00fd00972042693a430b291629eec08f"},{url:"img/icons/pan.svg",revision:"500ed5ba588c41870090b22df79d4cd6"},{url:"img/icons/rtalk.svg",revision:"d9f6c6273cf678442de1e68dc6fba268"},{url:"img/light.jpg",revision:"cf9f27280d5644184dad9cfa1ddb8b19"},{url:"img/link.png",revision:"762f41548778b819efece6662892436d"},{url:"img/load-dark.png",revision:"c9fe1886c31c60ccaf6b2e4f79a27a79"},{url:"img/load-light.png",revision:"224ed753f03fb30e0ab4fe3e474ccea7"},{url:"img/longnian.webp",revision:"8abfc6e70195dd437fcc7ed0dce16d65"},{url:"img/longnian1.webp",revision:"7488f4b894eeef8aef5a88f209aae45e"},{url:"img/longnian2.webp",revision:"cf8c0d50a522681770cb9c58bff8cef6"},{url:"img/longnian3.webp",revision:"11875dcf8fddec13efc1d01a0ec19a39"},{url:"img/siteicon/android-chrome-144x144.png",revision:"e3ce6e38bdb79145f544187e7b573740"},{url:"img/siteicon/android-chrome-192x192.png",revision:"749ca2a5351cb0b22a88f71c4945d6d8"},{url:"img/siteicon/android-chrome-256x256.png",revision:"577f93d4b5273160c67cec1ba4c1915a"},{url:"img/siteicon/android-chrome-36x36.png",revision:"f40bafc6110837e09d05526b1ec2e2df"},{url:"img/siteicon/android-chrome-384x384.png",revision:"288aa3c41c9295de78cbaad923175137"},{url:"img/siteicon/android-chrome-48x48.png",revision:"3428fb5ba7f1a007a2000e9fe9dafd6c"},{url:"img/siteicon/android-chrome-512x512.png",revision:"3725e2811098c78d82adc0f66367d2a8"},{url:"img/siteicon/android-chrome-72x72.png",revision:"3aae9af0269938754a26cda672c33ca7"},{url:"img/siteicon/android-chrome-96x96.png",revision:"4a58d6ada32d9471ed275558be769c4b"},{url:"img/siteicon/apple-splash-1125-2436.jpg",revision:"e91b53057765528d8b4994ba87bbd5e1"},{url:"img/siteicon/apple-splash-1136-640.jpg",revision:"30e1d2e3960c90ce6cc348ff3a9e8e19"},{url:"img/siteicon/apple-splash-1170-2532.jpg",revision:"e824b06a66694122bb815bcbb61c46a0"},{url:"img/siteicon/apple-splash-1179-2556.jpg",revision:"f4cbd8d22983c8fa6a321bf3a7156342"},{url:"img/siteicon/apple-splash-1242-2208.jpg",revision:"f3b15b9997306f792be6d410b8dcd5e5"},{url:"img/siteicon/apple-splash-1242-2688.jpg",revision:"0f0f718211e49aa01f322600339f740d"},{url:"img/siteicon/apple-splash-1284-2778.jpg",revision:"0b567e0758c67545dea52dd3f267b68d"},{url:"img/siteicon/apple-splash-1290-2796.jpg",revision:"40da85df67178343203e0782f29e62e4"},{url:"img/siteicon/apple-splash-1334-750.jpg",revision:"7aad92d965681d5f1c5ff751b3d4495f"},{url:"img/siteicon/apple-splash-1536-2048.jpg",revision:"4265299350da0e6bcf5f158f802b12f7"},{url:"img/siteicon/apple-splash-1620-2160.jpg",revision:"bd444ade8d73ef3fdd56a50efd3527fa"},{url:"img/siteicon/apple-splash-1668-2224.jpg",revision:"cd4d7afd732db6e5d38c0e0086a2e40c"},{url:"img/siteicon/apple-splash-1668-2388.jpg",revision:"8761d3b72e1661f9a7adca8e8c12c044"},{url:"img/siteicon/apple-splash-1792-828.jpg",revision:"c4ab0aaa1b40e011a49b750a533b0b5a"},{url:"img/siteicon/apple-splash-2048-1536.jpg",revision:"be9cfe0eb3b413ff7470643b1fe69b17"},{url:"img/siteicon/apple-splash-2048-2732.jpg",revision:"70015855f6f40033554b44687a12522c"},{url:"img/siteicon/apple-splash-2160-1620.jpg",revision:"d0f41dc0a7139082a18885cab06d61eb"},{url:"img/siteicon/apple-splash-2208-1242.jpg",revision:"e8f77489b228e2cd8d9df6d183d6f5a3"},{url:"img/siteicon/apple-splash-2224-1668.jpg",revision:"f389fcc61e142cec5568fdb6bd63c09f"},{url:"img/siteicon/apple-splash-2388-1668.jpg",revision:"14534597596c732d4e111e79cb3c6f23"},{url:"img/siteicon/apple-splash-2436-1125.jpg",revision:"3c091d8554db743999f7810df532e4a0"},{url:"img/siteicon/apple-splash-2532-1170.jpg",revision:"6d08f4cc07f0730ebed76092e934aab6"},{url:"img/siteicon/apple-splash-2556-1179.jpg",revision:"b8e2dee6b94f19db046da7b80e87deed"},{url:"img/siteicon/apple-splash-2688-1242.jpg",revision:"b5d02a3a2b59b91c80ea2168fccc27a4"},{url:"img/siteicon/apple-splash-2732-2048.jpg",revision:"5d6d83b2bd6868c5f63ce34eca439208"},{url:"img/siteicon/apple-splash-2778-1284.jpg",revision:"60f4c9a508cc71f80334e18b5fb4f1c9"},{url:"img/siteicon/apple-splash-2796-1290.jpg",revision:"ff78c997776f89b2b2faf65d59099aa6"},{url:"img/siteicon/apple-splash-640-1136.jpg",revision:"9e45e3170931c24fb4b7fc7e1a2f84e4"},{url:"img/siteicon/apple-splash-750-1334.jpg",revision:"4345a23d86d796936a412f990df9e984"},{url:"img/siteicon/apple-splash-828-1792.jpg",revision:"fc85cbc7d03a92459598e8e83b0208a3"},{url:"img/siteicon/apple-touch-icon.png",revision:"e9712f388baf6e184c7772e8a6faab42"},{url:"img/siteicon/favicon-16x16.png",revision:"716e57fdeb966ff4aaf35283c4c4dba7"},{url:"img/siteicon/favicon-32x32.png",revision:"f9d7bb4a969e310ea843f0f82d947a21"},{url:"img/siteicon/mstile-150x150.png",revision:"651ef46e012493de7b2ce1ed4691f54c"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"851cf3bedd2976acde6efc437e1500ca"},{url:"img/theta.svg",revision:"0291551675c16a9f3d6b2e190e936c86"},{url:"index.html",revision:"94d028f8c757227951fec36e07fd5a48"},{url:"js/about.js",revision:"52b09215dcc968cb19ff2d4a789734bf"},{url:"js/autoload.js",revision:"6254d09f551de324e370be766031f585"},{url:"js/categoryBar.js",revision:"8d79fb84740b5fa4ad17139a0f9a5c74"},{url:"js/commentdanmaku.js",revision:"1e1a8a7a6cf8e2c3fa44bfc8a96f2025"},{url:"js/console.js",revision:"359ffbb82527d690ee362cff60343cd5"},{url:"js/custom.js",revision:"18782b5ca3db3a7775cd59b26d7ff317"},{url:"js/easy-Danmaku.js",revision:"b246c9b76d753826c4da361095893d57"},{url:"js/fcircle.js",revision:"de029419576ed9036daaa2c099663fd2"},{url:"js/fish.js",revision:"0a8d87ac3704b61824c5c3154c8e2b4f"},{url:"js/fps.js",revision:"383182c1160a37001704e1cc2706228b"},{url:"js/hometop.js",revision:"134bd184ce1463ea2a9c23df5460c5aa"},{url:"js/kslink.js",revision:"b85ceca043f4018b0979dc484c834945"},{url:"js/main.js",revision:"793e6861668298d001d2eca8ab9a5c97"},{url:"js/nav.js",revision:"e306aabdf69e4c7e53ddde509f48d458"},{url:"js/newyear.js",revision:"f516b5e3ffbc2fe5e66b1365cd419537"},{url:"js/orlike.js",revision:"cd5d03a37019b7b1b89a4adb1c276638"},{url:"js/owobig.js",revision:"59252bd6e41da14eb368166c3ee13c32"},{url:"js/random-friends-post.js",revision:"a28ca1953538dd18aece3c7e51deea0a"},{url:"js/randompost.js",revision:"a535a3527d4a4e280b16ea62e8afd920"},{url:"js/rightmenu.js",revision:"b9bec674130c5308f3e60143e378f006"},{url:"js/sakura.js",revision:"0cac8ee3645e794620959ff201b21661"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"aea55acb22a3b51ad16057b0ea52c0a9"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/txmap.js",revision:"82bbcb06ce462fb9bd64d0eb4de87baa"},{url:"js/utils.js",revision:"e95ad73d5170f72ae1596b3d9abb7ed3"},{url:"js/waterfall/waterfall.js",revision:"6b3f21ab5352e2ed8c84b1833dbc8cf2"},{url:"js/welcome.js",revision:"892bfc0885e0f2e4e714e0a4dddcef9d"},{url:"lib/tag_plugins.css",revision:"9dbc2e84fda35370433ef0faac822e83"},{url:"link/index.html",revision:"800382956e9f1eec5445377074da7984"},{url:"music/index.html",revision:"bced3fc2a3183248f36297a54c1f9675"},{url:"page/2/index.html",revision:"4406f1dd09a2ef5988ff7998e05bdff3"},{url:"page/3/index.html",revision:"ca9dd14b0dc905a37f2e4c5b98d2074c"},{url:"page/4/index.html",revision:"0f0a7b81be05b4153a27f73eef12841e"},{url:"posts/10045/index.html",revision:"c1f4eaf0fa17d143e24bb7f2b6a47bda"},{url:"posts/10996/index.html",revision:"00e65d270191dea1d62c5fa1e32129de"},{url:"posts/12779/index.html",revision:"1b6b2bc31be384ded83d23e312baaa3f"},{url:"posts/13624/index.html",revision:"945e0bc2f8300bd0eedaeb1e743d4a38"},{url:"posts/15842/index.html",revision:"5f057a4bb3b4789f4045ecec9502224f"},{url:"posts/16107/index.html",revision:"f92cc610ca5fc860df6df7fb4d85887e"},{url:"posts/18063/index.html",revision:"4c6eca5dc7fe405dc5d487be808d74db"},{url:"posts/20412/index.html",revision:"596780c2b7777a7cfcff566f05eb9417"},{url:"posts/21375/index.html",revision:"e846afa6da4945f9acba4e904bb4e9eb"},{url:"posts/22945/index.html",revision:"b11e3b30da0acee549da264f111810ea"},{url:"posts/23021/index.html",revision:"86c54e25e75cedc8cee6dd5223a7c7fd"},{url:"posts/27531/index.html",revision:"c42f3003409759eededb8cb6d5d57c28"},{url:"posts/27762/index.html",revision:"e262c9df086256cc46b5093a769c5da5"},{url:"posts/28536/index.html",revision:"c2a7b27fca946ce3e097110fab11aa68"},{url:"posts/28733/index.html",revision:"23b1a87dd89f471f9c5aed08df0cb676"},{url:"posts/29196/index.html",revision:"f091a69f6944505b0b2cec6367bb8d35"},{url:"posts/38917/index.html",revision:"d3803e1879a26e343d63e214377a2df6"},{url:"posts/38964/index.html",revision:"e448bb205c9381ba0786e1cec1518c4e"},{url:"posts/42487/index.html",revision:"ab7c40db6056ed472712a13a37030c18"},{url:"posts/42580/index.html",revision:"eb64fb41e81f13dd9b8b2afddd4b6812"},{url:"posts/45875/index.html",revision:"2847b40e97b3e9a1f41a95832ba89b82"},{url:"posts/48762/index.html",revision:"a7629fae1918455d9529bea42023b57c"},{url:"posts/50710/index.html",revision:"7c2a46a34234e4131d344d361d047b20"},{url:"posts/52677/index.html",revision:"285657e5d2e935a0ed3d2e1771be061d"},{url:"posts/53662/index.html",revision:"d06ca299bb572802a7d19f09d4d94428"},{url:"posts/54386/index.html",revision:"bff166e2f5e0c072c6d110503b385542"},{url:"posts/54481/index.html",revision:"3d1ea4f973981ed17a7c660293868e62"},{url:"posts/54787/index.html",revision:"f626f638873753f5820e3ce9e1c690c8"},{url:"posts/56467/index.html",revision:"4b16bc1e8ff936d91a92579f2568cbe9"},{url:"posts/58203/index.html",revision:"11a655576f94b670fd860259aa0f42d7"},{url:"posts/61417/index.html",revision:"92e6903782d55d590a4784315587d354"},{url:"posts/646/index.html",revision:"4725f8d96ee4763670978826f18ce286"},{url:"redirect/index.html",revision:"930594715f52847cd3f2a62106d2dac1"},{url:"seas/index.html",revision:"bb26a8875cbeb1ed6a0b1cbd9acc8b2d"},{url:"tags/index.html",revision:"993e1ad6693a4eb32ea7c153df16381a"},{url:"tags/Steam游戏/index.html",revision:"8c64852582b29e3fbdc7312eff8ecc4f"},{url:"tags/Windows软件/index.html",revision:"ad4f2ea23fcbd8d0ac990753256fbb19"},{url:"tags/个人小记/index.html",revision:"693b480ad632cb898534436d818754f6"},{url:"tags/个人小记/page/2/index.html",revision:"d2d0f27c5117b37728e5a62e35d10e54"},{url:"tags/其它游戏/index.html",revision:"c2afa30627a3d3c4b9a770dd95029fda"},{url:"tags/悬浮宠物-看板娘/index.html",revision:"ee32f90b4994c1af81991e320696ddfe"},{url:"tags/歌曲收集/index.html",revision:"a22af277e1f60d3d3bfe344d46e48f11"},{url:"tags/游戏相关/index.html",revision:"94b2bc31dc755ae9c3e0d9a6fdbee552"},{url:"tags/站点底部魔改/index.html",revision:"04568d6e789a650f9e86af23843403a2"},{url:"tags/站点折腾/index.html",revision:"1ca2950a6ba620152f00f9f936743a8f"},{url:"tags/站点折腾/page/2/index.html",revision:"c8dcb122abfb324a31307566efbea378"},{url:"tags/自建部署/index.html",revision:"f30fd03185cda35006ab5b7da5c7265f"},{url:"tags/页面魔改/index.html",revision:"652f01ce37b1019e1393f74816968975"},{url:"tags/项目折腾/index.html",revision:"566746158178024ee156119b86533f2c"},{url:"weichuncai/css/style.css",revision:"a1729c6aba367df186684a27db5d7085"},{url:"weichuncai/imgs/chat_bottom.gif",revision:"28237e6983fb90452cfed4b18f8b8111"},{url:"weichuncai/imgs/chat_top.gif",revision:"55d8afbfd1abd414eb188db757162176"},{url:"weichuncai/imgs/loading.gif",revision:"89e31e5265ed90600b70fe11367a077e"},{url:"weichuncai/imgs/menu.jpg",revision:"e4fabef017dc6ff62a8ceb1246b72e27"},{url:"weichuncai/imgs/ok.jpg",revision:"55a79a12edb9581eba53e97c1b027d14"},{url:"weichuncai/js/common.js",revision:"da5e9699d94c33c93a5047c06468f7a7"},{url:"weichuncai/js/jquery.js",revision:"10092eee563dec2dca82b77d2cf5a1ae"},{url:"weichuncai/skin/default/face1.gif",revision:"c56da003f4e49e77a6afdf59f5f3ff91"},{url:"weichuncai/skin/default/face2.gif",revision:"a45121a80b5bca867e2eeded3c34c6e1"},{url:"weichuncai/skin/default/face3.gif",revision:"7fdb05e5a9d570537190f15416e92790"},{url:"weichuncai/skin/ikamusume/ikamusume001.gif",revision:"2d1a8218aba89fbd77a0fa175ddf264e"},{url:"weichuncai/skin/ikamusume/ikamusume002.gif",revision:"e64a731cd4d96c76fa9dcb09d39429e1"},{url:"weichuncai/skin/ikamusume/ikamusume003.gif",revision:"fa9d249a92e41dcbaa80dd508aa2f1b8"},{url:"weichuncai/skin/rakutori/face1.gif",revision:"d056945c32bfe2aeb02db6d8ac60b209"},{url:"weichuncai/skin/rakutori/face2.gif",revision:"a45121a80b5bca867e2eeded3c34c6e1"},{url:"weichuncai/skin/rakutori/face3.gif",revision:"7fdb05e5a9d570537190f15416e92790"},{url:"weichuncai/wcc-config.js",revision:"56cf0be141a728199b29994e07eb5353"}],{})}));