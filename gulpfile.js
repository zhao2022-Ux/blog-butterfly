let gulp = require('gulp')
let cleanCSS = require('gulp-clean-css')
let htmlmin = require('gulp-htmlmin')
let htmlclean = require('gulp-htmlclean')
let babel = require('gulp-babel') /* 转换为es2015 */
let uglify = require('gulp-uglify')
let imagemin = require('gulp-imagemin')
const workbox = require("workbox-build");

gulp.task('generate-service-worker', () => {
    return workbox.injectManifest({
        swSrc: './sw-template.js',
        swDest: './public/sw.js',
        globDirectory: './public',
        globPatterns: [
            // 缓存所有以下类型的文件，极端不推荐
            // "**/*.{html,css,js,json,woff2,xml}"
            // 推荐只缓存404，主页和主要样式和脚本。
            "404.html","index.html","js/main.js","css/index.css"
        ],
        modifyURLPrefix: {
            "": "./"
        }
    });
});
// 设置根目录
const root = './public'

// 匹配模式， **/*代表匹配所有目录下的所有文件
const pattern = '**/*'

// 压缩html
gulp.task('minify-html', function() {
    return gulp
        // 匹配所有 .html结尾的文件
        .src(`${root}/${pattern}.html`)
        .pipe(htmlclean())
        .pipe(
            htmlmin({
                removeComments: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            })
        )
        .pipe(gulp.dest('./public'))
})

// 压缩css
gulp.task('minify-css', function() {
    return gulp
        // 匹配所有 .css结尾的文件
        .src(`${root}/${pattern}.css`)
        .pipe(
            cleanCSS({
                compatibility: 'ie8'
            })
        )
        .pipe(gulp.dest('./public'))
})

// 压缩js
gulp.task('minify-js', function() {
    return gulp
        // 匹配所有 .js结尾的文件
        .src(`${root}/${pattern}.js`)
        .pipe(
            babel({
                presets: ['env']
            })
        )
        .pipe(uglify())
        .pipe(gulp.dest('./public'))
})

// 压缩图片
gulp.task('minify-images', function() {
    return gulp
        // 匹配public/images目录下的所有文件
        .src(`${root}/images/${pattern}`)
        .pipe(
            imagemin(
                [
                    imagemin.gifsicle({ optimizationLevel: 3 }),
                    imagemin.jpegtran({ progressive: true }),
                    imagemin.optipng({ optimizationLevel: 7 }),
                    imagemin.svgo()
                ],
                { verbose: true }
            )
        )
        .pipe(gulp.dest('./public/images'))
})

gulp.task('default', gulp.series('generate-service-worker', 'minify-html', 'minify-css', 'minify-js'))