const { parallel } = require('gulp');
const { series } = require('gulp');
const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function html() {
  return src('./src/*.html')
    .pipe(dest('./dist'));
}

function javascript() {
  return src('./src/scripts/**/*.js')
    .pipe(dest('./dist/scripts'));
}

function css(cb) {
  return src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist/css'));
}

function images() {
  return src('./src/images/**/*',{encoding: false})
    .pipe(dest('./dist/images'));
}

exports.build = parallel(html, javascript, css, images);