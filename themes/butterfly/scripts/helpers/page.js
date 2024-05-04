/**
 * Butterfly
 * @example
 *  page_description()
 *  cloudTags(source, minfontsize, maxfontsize, limit)
 */

'use strict'

const { stripHTML, escapeHTML, prettyUrls } = require('hexo-util')
const crypto = require('crypto')

hexo.extend.helper.register('page_description', function () {
  const { config, page } = this
  let description = page.description || page.content || page.title || config.description

  if (description) {
    description = escapeHTML(stripHTML(description).substring(0, 150)
      .trim()
    ).replace(/\n/g, ' ')
    return description
  }
})

hexo.extend.helper.register('cloudTags', function (options = {}) {
  const env = this
  let source = options.source
  const minfontsize = options.minfontsize
  const maxfontsize = options.maxfontsize
  const limit = options.limit
  const unit = options.unit || 'px'

  let result = ''
  if (limit > 0) {
    source = source.limit(limit)
  }

  const sizes = []
  source.sort('length').forEach(tag => {
    const { length } = tag
    if (sizes.includes(length)) return
    sizes.push(length)
  })

  const length = sizes.length - 1
  source.forEach(tag => {
    const ratio = length ? sizes.indexOf(tag.length) / length : 0
    const size = minfontsize + ((maxfontsize - minfontsize) * ratio)
    let style = `font-size: ${parseFloat(size.toFixed(2))}${unit};`
    const color = 'rgb(' + Math.floor(Math.random() * 201) + ', ' + Math.floor(Math.random() * 201) + ', ' + Math.floor(Math.random() * 201) + ')' // 0,0,0 -> 200,200,200
    style += ` color: ${color}`
    result += `<a href="${env.url_for(tag.path)}" style="${style}">${tag.name}</a>`
  })
  return result
})

hexo.extend.helper.register('urlNoIndex', function (url = null, trailingIndex = false, trailingHtml = false) {
  return prettyUrls(url || this.url, { trailing_index: trailingIndex, trailing_html: trailingHtml })
})

hexo.extend.helper.register('md5', function (path) {
  return crypto.createHash('md5').update(decodeURI(this.url_for(path))).digest('hex')
})

hexo.extend.helper.register('injectHtml', function (data) {
  let result = ''
  if (!data) return ''
  for (let i = 0; i < data.length; i++) {
    result += data[i]
  }
  return result
})

hexo.extend.helper.register('findArchivesTitle', function (page, menu, date) {
  if (page.year) {
    const dateStr = page.month ? `${page.year}-${page.month}` : `${page.year}`
    const dateFormat = page.month ? hexo.theme.config.aside.card_archives.format : 'YYYY'
    return date(dateStr, dateFormat)
  }

  const defaultTitle = this._p('page.archives')
  if (!menu) return defaultTitle

  const loop = (m) => {
    for (const key in m) {
      if (typeof m[key] === 'object') {
        loop(m[key])
      }

      if (/\/archives\//.test(m[key])) {
        return key
      }
    }
  }

  return loop(menu) || defaultTitle
})

hexo.extend.helper.register('isImgOrUrl', function (path) {
  const imgTestReg = /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/
  if (path.indexOf('//') !== -1 || imgTestReg.test(path)) {
    return true
  }
  return false
})

// 最新文章
hexo.extend.helper.register('newPost', function() {
  let name, time;
  hexo.locals.get('posts').map((item, index) => {
    if (index == 0) name = item.title, time = item.date
    else if (item.date > time) { name = item.title, time = item.date }
  });
  return name
})
hexo.extend.helper.register('updatePost', function() {
  let name, time=0;
  hexo.locals.get('posts').map((item, index) => {
    if (item.updated > time && item.updated > item.date) { name = item.title, time = item.updated}
  });
  return name
})