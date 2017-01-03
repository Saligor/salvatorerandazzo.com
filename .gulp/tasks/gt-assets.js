const gulp = require('gulp');

module.exports = () => {
    gulp.src('./app/assets/**/*.*')
        .pipe(gulp.dest('./public/assets/'))
};