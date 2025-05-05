const gulp = require('gulp');
const { parallel } = require('gulp');
const { series } = require('gulp');
const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function serve(cb) {
  browserSync.init({
      server: {
          baseDir: "./dist"
      }
  });

  gulp.watch("./src/scss/**/*.scss", css);
  gulp.watch("./src/scripts/**/*.js", javascript);
  gulp.watch("./src/images/**/*", images);
  gulp.watch("./src/*.html", html);

  cb();
}

function html(cb) {
  return src('./src/*.html')
    .pipe(dest('./dist'));
}

function javascript(cb) {
  return src('./src/scripts/**/*.js')
    .pipe(dest('./dist/scripts'));
}

function css(cb) {
  return src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist/css'));
}

function images(cb) {
  return src('./src/images/**/*',{encoding: false})
    .pipe(dest('./dist/images'));
}

exports.build = parallel(html, javascript, css, images);
exports.default = series(html, javascript, css, images, serve);