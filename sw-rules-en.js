/**
 * @see https://kmar.top/posts/b70ec88f/
 */

module.exports.config = {
    /**
     * 与 ServiceWorker 有关的配置项
     * 若想禁止插件自动生成 sw，此项填 false 即可
     * @type ?Object|boolean
     */
    serviceWorker: {
        cacheName: "StoriHouseCache"
    },
    register: {
        onerror: undefined
    },
    dom: {
        onsuccess: () => {
            caches.match('https://id.v3/').then(function(response) {
                if (response) {
                    // 如果找到了匹配的缓存响应
                    response.json().then(function(data) {
                        var snackbarBg =
                            document.documentElement.getAttribute('data-theme') === 'light' ?
                                GLOBAL_CONFIG.Snackbar.bgLight :
                                GLOBAL_CONFIG.Snackbar.bgDark
                        var snackbarPos = GLOBAL_CONFIG.Snackbar.position
                        Snackbar.show({
                            text: `Cache refreshed,Updated to version ${GLOBAL_CONFIG.uiversion} with the latest content.`,
                            backgroundColor: snackbarBg,
                            duration: 30000,
                            pos: snackbarPos,
                        })
                    });
                } else {
                    console.info('No matching cache response found');
                }
            }).catch(function(error) {
                console.error('Cache matching error:', error);
            });
        },
    },
    json: {
        merge: ['page', 'archives', 'categories', 'tags']
    },
    external: {
        stable: [
            /^https:\/\/npm\.elemecdn\.com\/[^/@]+\@[^/@]+\/[^/]+\/[^/]+$/,
            /^https:\/\/cdn\.cbd\.int\/[^/@]+\@[^/@]+\/[^/]+\/[^/]+$/,
            /^https:\/\/cdn\.jsdelivr\.net\/npm\/[^/@]+\@[^/@]+\/[^/]+\/[^/]+$/,
        ],
        replacer: srcUrl => {
            if (srcUrl.startsWith('https://npm.elemecdn.com')) {
                const url = new URL(srcUrl)
                return [
                    srcUrl,
                    `https://cdn.cbd.int` + url.pathname,
                    `https://cdn.anheyu.com/npm` + url.pathname,
                    `https://jsd.cdn.zzko.cn/npm` + url.pathname,
                    `https://cdn.jsdelivr.net/npm` + url.pathname,
                    `https://cdn1.tianli0.top/npm` + url.pathname,
                    `https://www.jsdelivr.ren/npm` + url.pathname,
                    `https://cdn.statically.io/npm` + url.pathname,
                    `https://jsd.onmicrosoft.cn/npm` + url.pathname,
                    `https://fastly.jsdelivr.net/npm` + url.pathname,
                    `https://jsd.cdn.storisinz.site/npm` + url.pathname
                ]
            } else {
                return srcUrl
            }
        },
    }
};

/** 跳过处理番剧封面 */
module.exports.skipRequest = request => request.url.startsWith('https://i0.hdslb.com');

/**
 * 缓存列表
 * @param clean 清理全站时是否删除其缓存
 * @param match {function(URL)} 匹配规则
 */
module.exports.cacheRules = {
    simple: {
        clean: true,
        search: false,
        match: (url, $eject) => {
            const allowedHost = $eject.domain;
            const allowedPaths = ["/404.html", "/css/index.css"];
            return url.host === allowedHost && allowedPaths.includes(url.pathname);
        },
    },
    cdn: {
        clean: true,
        match: url =>
            [
                "unpkg.com",
                "cdn.cbd.int",
                "lf26-cdn-tos.bytecdntp.com",
                "lf6-cdn-tos.bytecdntp.com",
                "lf3-cdn-tos.bytecdntp.com",
                "lf9-cdn-tos.bytecdntp.com",
                "npm.onmicrosoft.cn",
                "cdn.staticfile.org",
                "npm.elemecdn.com",
            ].includes(url.host) && url.pathname.match(/\.(js|css|woff2|woff|ttf|cur)$/),
    },
};

/**
 * 获取一个 URL 对应的备用 URL 列表，访问顺序按列表顺序，所有 URL 访问时参数一致
 * @param srcUrl {string} 原始 URL
 * @return {{list: string[], timeout: number}} 返回 null 或不返回表示对该 URL 不启用该功能。timeout 为超时时间（ms），list 为 URL 列表，列表不包含原始 URL 表示去除原始访问
 */
module.exports.getSpareUrls = srcUrl => {
    if (srcUrl.startsWith("https://npm.elemecdn.com")) {
        return {
            timeout: 3000,
            list: [srcUrl, `https://cdn.cbd.int/${new URL(srcUrl).pathname}`],
        };
    }
};

/**
 * 获取要插入到 sw 中的变量或常量
 * @param hexo hexo 对象
 * @param rules 合并后的 sw-rules 对象
 * @return {Object} 要插入的键值对
 */
module.exports.ejectValues = (hexo, rules) => {
    return {
        domain: {
            prefix: "const",
            value: new URL(hexo.config.url).host,
        },
        /* 全站npm化需要的变量 */
        mirror: {
            prefix: "const",
            value: [
                `https://registry.npmmirror.com/sinzmise-cetastories-en/latest`,
                `https://registry.npmjs.org/sinzmise-cetastories-en/latest`,
                `https://mirrors.cloud.tencent.com/npm/sinzmise-cetastories-en/latest`,
                `https://registry.npmmirror.com/sinzmise-cetastories-en/latest`
            ],
        },
    };
};

/* 全站npm化 */
module.exports.selfdb = () => {
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
}

module.exports.lfetch = async (urls, url) => {
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

module.exports.fullpath = (path) => {
    path = path.split('?')[0].split('#')[0]
    if (path.match(/\/$/)) {
        path += 'index'
    }
    if (!path.match(/\.[a-zA-Z]+$/)) {
        path += '.html'
    }
    return path
}

module.exports.generate_blog_urls = () => {
    const npmmirror = [
        `https://unpkg.zhimg.com/${packagename}@${blogversion}`,
        `https://npm.elemecdn.com/${packagename}@${blogversion}`,
        `https://cdn1.tianli0.top/npm/${packagename}@${blogversion}`,
        `https://cdn.afdelivr.top/npm/${packagename}@${blogversion}`,
        `https://registry.npmmirror.com/${packagename}/${blogversion}/files`
    ]
    for (var i in npmmirror) {
        npmmirror[i] += path
    }
    return npmmirror
}

module.exports.get_newest_version = async (ejectMirror) => {
    return lfetch(ejectMirror, ejectMirror[0])
        .then(res => res.json())
        .then(res.version)
}

module.exports.set_newest_version = async (ejectMirror) => {
    return lfetch(ejectMirror, ejectMirror[0])
        .then(res => res.json()) //JSON Parse
        .then(async res => {
            await db.write('blog_version', res.version) //写入
            return;
        })
}

module.exports.set_newest_time = () => {
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
}

module.exports.handle = async(req)=> {
    const urlStr = req.url
    const urlObj = new URL(urlStr);
    const urlPath = urlObj.pathname;
    const domain = urlObj.hostname;
    //从这里开始
    lxs=[]
    if(domain === "en.blog.sinzmise.top"){//这里写你需要拦截的域名
        var l=lfetch(generate_blog_urls('sinzmise-cetastories-en',await db.read('blog_version') || 'latest',fullpath(urlPath)))
        return l
            .then(res=>res.arrayBuffer())
            .then(buffer=>new Response(buffer,{headers:{"Content-Type":`${getFileType(fullpath(urlPath).split("/")[fullpath(urlPath).split("/").length-1].split("\\")[fullpath(urlPath).split("/")[fullpath(urlPath).split("/").length-1].split("\\").length-1])};charset=utf-8`}}));//重新定义header
    }
    else{
        return fetch(req);
    }
}

module.exports.external = ['selfdb','lfetch','fullpath','generate_blog_urls','get_newest_version','set_newest_version','set_newest_time','handle']