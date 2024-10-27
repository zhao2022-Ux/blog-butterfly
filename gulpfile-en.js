const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-html-minifier-terser');
const htmlclean = require('gulp-htmlclean');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');

// 压缩css文件
const minify_css = () => (
    gulp.src(['./public-en/**/*.css','!./public-en/{lib,lib/**}','!./public-en/{libs,libs/**}','!./public-en/{media,media/**}'])
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public-en'))
);

// 压缩html文件
const minify_html = () => (
    gulp.src(['./public-en/**/*.html','!./public-en/{lib,lib/**}','!./public-en/{libs,libs/**}','!./public-en/{media,media/**}'])
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public-en'))
)

// 压缩js文件
const minify_js = () => (
    gulp.src(['./public-en/**/*.js', '!./public-en/**/*.min.js','!./public-en/{lib,lib/**}','!./public-en/{libs,libs/**}','!./public-en/{media,media/**}'])
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public-en'))
)

gulp.task('one', gulp.parallel(
    minify_html,
    minify_css,
    minify_js
))

gulp.task('default', gulp.series('one'));