const { parallel } = require('gulp');
const { series } = require('gulp');
const { src, dest } = require('gulp');

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

exports.build = parallel(javascript, css);
// exports.build = series(javascript, css);