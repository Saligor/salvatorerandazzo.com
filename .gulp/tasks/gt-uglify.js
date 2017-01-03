const gulp = require('gulp')
    , sourcemaps = require('gulp-sourcemaps')
    , concat    = require('gulp-concat')
    , uglify    = require('gulp-uglify');


module.exports = () => {
    gulp.src([
            './node_modules/pixi.js/dist/pixi.js',
            './app/views/**/*.js'
        ],  { base: './' })
        .pipe(sourcemaps.init())
        .pipe(concat('min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/js'));
};