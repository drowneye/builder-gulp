const {src, dest, watch} = require('gulp');

const g_stylus = require('gulp-stylus');
const stylusSvgImport = require('stylus-svg');

function renderStylus() {
  return src('./#src/stylus/style.styl') 
    .pipe(g_stylus({
      use: [
        stylusSvgImport()
      ]
    }))
    .pipe(dest('./dist/css')) 
}

function toWatch(params) {
  watch(['#src/stylus/**/*.styl'], renderStylus);
}

exports.renderStylus = renderStylus;
exports.toWatch = toWatch;