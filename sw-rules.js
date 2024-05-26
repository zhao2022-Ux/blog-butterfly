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
              text: `已刷新缓存，更新为${GLOBAL_CONFIG.uiversion}版本最新内容`,
              backgroundColor: snackbarBg,
              duration: 30000,
              pos: snackbarPos,
              actionText: '查看更新日志',
              actionTextColor: '#fff',
              onActionClick: function(e) {
                  location.assign("/update/");
              },
            })
          });
        } else {
          console.info('未找到匹配的缓存响应');
        }
      }).catch(function(error) {
        console.error('缓存匹配出错:', error);
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
  };
};


module.exports.modifyRequest = async (request, $eject) => {
    const lfetch = async (urls, url) => {
        let controller = new AbortController(); //针对此次请求新建一个AbortController,用于打断并发的其余请求
        const PauseProgress = async (res) => {
            //这个函数的作用时阻塞响应,直到主体被完整下载,避免被提前打断
            return new Response(await (res).arrayBuffer(), { status: res.status, headers: res.headers });
        };
        if (!Promise.any) { //Polyfill,避免Promise.any不存在,无需关注
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
        return Promise.any(urls.map(urls => {//并发请求
            return new Promise((resolve, reject) => {
                fetch(urls, {
                    signal: controller.signal//设置打断点
                })
                    .then(PauseProgress)//阻塞当前响应直到下载完成
                    .then(res => {
                        if (res.status == 200) {
                            controller.abort()//打断其余响应(同时也打断了自己的,但本身自己已下载完成,打断无效)
                            resolve(res)//返回
                        } else {
                            reject(res)
                        }
                    })
            })
        }))
    }
    const mirror = [
        `https://registry.npmmirror.com/chenyfan-blog/latest`,
        `https://registry.npmjs.org/chenyfan-blog/latest`,
        `https://mirrors.cloud.tencent.com/npm/chenyfan-blog/latest`
    ]
    const get_newest_version = async (mirror) => {
        return lfetch(mirror, mirror[0])
            .then(res => res.json())
            .then(res.version)
    }
    const npmmirror = [
        `https://www.jsdelivr.ren/npm/sinzmise-cetastories@` + await get_newest_version() || + 'latest',
        `https://cdn.jsdelivr.us/npm/sinzmise-cetastories@` + await get_newest_version() || + 'latest',
        `https://jsd.cdn.storisinz.site/npm/sinzmise-cetastories@` + await get_newest_version() || + 'latest'
    ]
    const uri = request.url
    const endings = ['jpg', 'png', 'js', 'css', 'woff2', 'woff', 'ttf', 'cur', 'webp', 'jpeg', 'gif', 'mp4', 'svg', 'ico', 'json'];
    const denyendings = ['update.json', 'cacheList.json', 'sw.js', 'sw-dom.js'];
    if (uri.startsWith('https://blog.sinzmise.top/') && endings.some(ending => uri.endsWith('.' + ending)) && !denyendings.some(denyending => uri.endsWith(denyending))) {
        const source = uri.replace('https://blog.sinzmise.top', '');
        return new Request(npmmirror[i] + source, {...request, mode: 'cors'})
            .then(res => res.arrayBuffer())//arrayBuffer最科学也是最快的返回
            .then(buffer => new Response(buffer, {headers: {"Content-Type": "text/html;charset=utf-8"}}))//重新定义header
    }
}