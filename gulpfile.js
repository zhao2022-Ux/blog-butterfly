var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-html-minifier-terser');
var htmlclean = require('gulp-htmlclean');

// 使用terser压缩js
var terser = require('gulp-terser');

// minify js - gulp-tester
gulp.task('compress', () =>
    gulp.src(['./public/**/*.js', '!./public/**/*.min.js', '!./public/**/custom.js', '!./public/**/console.js'])
        .pipe(terser())
        .pipe(gulp.dest('./public'))
)
//css
gulp.task('minify-css', () => {
    return gulp.src('./public/**/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie11'
        }))
        .pipe(gulp.dest('./public'));
});


// 壓縮 public 目錄內 html
gulp.task('minify-html', () => {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true, //清除 HTML 註釋
            collapseWhitespace: true, //壓縮 HTML
            collapseBooleanAttributes: true, //省略布爾屬性的值 <input checked="true"/> ==> <input />
            removeEmptyAttributes: true, //刪除所有空格作屬性值 <input id="" /> ==> <input />
            removeScriptTypeAttributes: true, //刪除 <script> 的 type="text/javascript"
            removeStyleLinkTypeAttributes: true, //刪除 <style> 和 <link> 的 type="text/css"
            minifyJS: true, //壓縮頁面 JS
            minifyCSS: true, //壓縮頁面 CSS
            minifyURLs: true
        }))
        .pipe(gulp.dest('./public'))
});

// 執行 gulp 命令時執行的任務
gulp.task("default", gulp.parallel(
    'compress','minify-html', 'minify-css'
));