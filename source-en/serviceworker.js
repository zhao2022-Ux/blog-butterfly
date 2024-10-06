importScripts('https://jsd.cdn.storisinz.site/npm/workbox-cdn@5.1.3/workbox/workbox-sw.js');

workbox.setConfig({
    modulePathPrefix: 'https://jsd.cdn.storisinz.site/npm/workbox-cdn@5.1.3/workbox/'
});

//关闭日志
self.__WB_DISABLE_DEV_LOGS = true;

const { core, precaching, routing, strategies, expiration } = workbox;
const { CacheFirst, NetworkFirst, NetworkOnly, StaleWhileRevalidate } = strategies;
const { ExpirationPlugin } = expiration;

const cacheSuffixVersion = '_20200610';

core.setCacheNameDetails({
    prefix: 'bycg',
    suffix: cacheSuffixVersion
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(keys.map((key) => {
                if (!key.includes(cacheSuffixVersion)) return caches.delete(key);
            }));
        })
    );
});


core.skipWaiting();
core.clientsClaim();

/**
 * 缓存第三方引用
 */
routing.registerRoute(
    /.*(cdn.jsdelivr.net|at.alicdn.com)/,
    new CacheFirst({
        cacheName: 'static-cdn' + cacheSuffixVersion,
        fetchOptions: {
            mode: 'cors',
            credentials: 'omit'
        },
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 30 * 24 * 60 * 60,
                purgeOnQuotaError: true
            })
        ]
    })
);

//不作缓存
routing.registerRoute(
    /\/sw.js/,
    new NetworkOnly()
);


//缓存图片
routing.registerRoute(
    /.*\.(?:png|jpg|jpeg|svg|gif|webp)/,
    new CacheFirst({
        cacheName: 'static-image' + cacheSuffixVersion,
    })
);

//缓存js css
routing.registerRoute(
    /.*\.(css|js)$/,
    new CacheFirst({
        cacheName: 'static-js-css' + cacheSuffixVersion,
    })
);

//本站其他文件
routing.registerRoute(
    ({ url }) => {
        return url.hostname === location.hostname
    },
    new NetworkFirst({
        cacheName: 'static-other' + cacheSuffixVersion,
        plugins: [
            new ExpirationPlugin({
                maxEntries: 50,
                purgeOnQuotaError: true
            })
        ]
    })
);

//全站npm化
const CACHE_NAME = 'CetaHouseCache'; //修改为自己的CacheName
let cachelist = [];
self.addEventListener('install', async function (installEvent) {
    self.skipWaiting();
    installEvent.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(cachelist);
            })
    );
});
self.addEventListener('fetch', async event => {
    try {
        event.respondWith(handle(event.request))
    } catch (msg) {
        event.respondWith(handleerr(event.request, msg))
    }
});
const handleerr = async (req, msg) => {
    return new Response(`<h1>CDN分流器遇到了致命错误</h1>
    <b>${msg}</b>`, { headers: { "content-type": "text/html; charset=utf-8" } })
}
const lfetch = async (urls, url) => {
    let controller = new AbortController();
    const PauseProgress = async (res) => {
        return new Response(await (res).arrayBuffer(), { status: res.status, headers: res.headers });
    };
    if (!Promise.any) {
        Promise.any = function (promises) {
            return new Promise((resolve, reject) => {
                promises = Array.isArray(promises) ? promises : []
                let len = promises.length
                let errs = []
                if (len === 0) return reject(new AggregateError('All promises were rejected'))
                promises.forEach((promise) => {
                    promise.then(value => {
                        resolve(value)
                    }, err => {
                        len--
                        errs.push(err)
                        if (len === 0) {
                            reject(new AggregateError(errs))
                        }
                    })
                })
            })
        }
    }
    return Promise.any(urls.map(urls => {
        return new Promise((resolve, reject) => {
            fetch(urls, {
                signal: controller.signal
            })
                .then(PauseProgress)
                .then(res => {
                    if (res.status == 200) {
                        controller.abort();
                        resolve(res)
                    } else {
                        reject(res)
                    }
                })
        })
    }))
}
const fullpath = (path) => {
    path = path.split('?')[0].split('#')[0]
    if (path.match(/\/$/)) {
        path += 'index'
    }
    if (!path.match(/\.[a-zA-Z]+$/)) {
        path += '.html'
    }
    return path
}
const generate_blog_urls = (packagename, blogversion, path) => {
    const npmmirror = [
        `https://jsd.cdn.storisinz.site/npm/${packagename}@${blogversion}`,
        // `https://npm.elemecdn.com/${packagename}@${blogversion}`,
        // `https://cdn1.tianli0.top/npm/${packagename}@${blogversion}`,
        // `https://cdn.afdelivr.top/npm/${packagename}@${blogversion}`,
        //`https://ariasakablog.s3.ladydaily.com`,
        `https://registry.npmmirror.com/${packagename}/${blogversion}/files`
    ]
    for (var i in npmmirror) {
        npmmirror[i] += path
    }
    return npmmirror
}
const mirror = [
    `https://mirrors.cloud.tencent.com/npm/sinzmise-cetastories-en/latest`,
    `https://registry.npmjs.org/sinzmise-cetastories-en/latest`,
    `https://registry.npmmirror.com/sinzmise-cetastories-en/latest`
]
const get_newest_version = async (mirror) => {
    return lfetch(mirror, mirror[0])
        .then(res => res.json())
        .then(res.version)
}
self.db = { //全局定义db,只要read和write,看不懂可以略过
    read: (key, config) => {
        if (!config) { config = { type: "text" } }
        return new Promise((resolve, reject) => {
            caches.open(CACHE_NAME).then(cache => {
                cache.match(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`)).then(function (res) {
                    if (!res) resolve(null)
                    res.text().then(text => resolve(text))
                }).catch(() => {
                    resolve(null)
                })
            })
        })
    },
    write: (key, value) => {
        return new Promise((resolve, reject) => {
            caches.open(CACHE_NAME).then(function (cache) {
                cache.put(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`), new Response(value));
                resolve()
            }).catch(() => {
                reject()
            })
        })
    }
}

const set_newest_version = async (mirror) => { //改为最新版本写入数据库
    return lfetch(mirror, mirror[0])
        .then(res => res.json()) //JSON Parse
        .then(async res => {
            await db.write('blog_version', res.version) //写入
            return;
        })
}

setInterval(async() => {
    await set_newest_version(mirror) //定时更新,一分钟一次
}, 60*1000);

setTimeout(async() => {
    await set_newest_version(mirror)//打开五秒后更新,避免堵塞
},5000)
function getFileType(fileName) {
    suffix=fileName.split('.')[fileName.split('.').length-1]
    if(suffix=="html"||suffix=="htm") {
        return 'text/html';
    }
    if(suffix=="js") {
        return 'text/javascript';
    }
    if(suffix=="css") {
        return 'text/css';
    }
    if(suffix=="jpg"||suffix=="jpeg") {
        return 'image/jpeg';
    }
    if(suffix=="ico") {
        return 'image/x-icon';
    }
    if(suffix=="png") {
        return 'image/png';
    }
    return 'text/plain';
}
const handle = async(req)=>{
    const urlStr = req.url
    const urlObj = new URL(urlStr);
    const urlPath = urlObj.pathname;
    const domain = urlObj.hostname;
    //从这里开始
    lxs=[]
    if(domain === "en.blog.sinzmise.top"){//这里写你需要拦截的域名
        var l=lfetch(generate_blog_urls('sinzmise-cetastories-en',await db.read('blog_version') || 'latest',fullpath(urlPath))) //将`karunari`改为自己的npm包名
        return l
            .then(res=>res.arrayBuffer())
            .then(buffer=>new Response(buffer,{headers:{"Content-Type":`${getFileType(fullpath(urlPath).split("/")[fullpath(urlPath).split("/").length-1].split("\\")[fullpath(urlPath).split("/")[fullpath(urlPath).split("/").length-1].split("\\").length-1])};charset=utf-8`}}));//重新定义header
    }
    else{
        return fetch(req);
    }
}
