const gulp = require('gulp');

module.exports = () => {
    gulp.watch('./app/**/*.js', ['gt-uglify']);
};