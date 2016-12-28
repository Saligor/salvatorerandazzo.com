const gulp      = require('gulp')
    , sourcemaps = require('gulp-sourcemaps')
    , concat    = require('gulp-concat')
    , uglify    = require('gulp-uglify');


gulp.task('build-js', () => {
    gulp.src('./app/views/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['build-js']);