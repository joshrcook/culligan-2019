const { src, dest, series, watch } = require('gulp');
const gulpSass = require('gulp-sass');

gulpSass.compiler = require('node-sass');

const assets = {
    scss: {
        src: './static/scss/**/*.scss',
        dest: './static/css',
    },
};

function sass() {
    return src(assets.scss.src)
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(dest(assets.scss.dest));
}

function watchSass() {
    return watch([assets.scss.src], sass);
}

exports.default = series(sass, watchSass);