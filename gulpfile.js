const gulp = require('./.gulp')([
    'gt-uglify',
    'gt-assets',
    'gt-watch'
]);

gulp.task('default', ['gt-assets', 'gt-uglify']);
gulp.task('watch', ['gt-watch']);