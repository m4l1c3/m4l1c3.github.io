var gulp = require('gulp'),
    bundler = require('gulp-bundle-files'),
    bundles = require('./bundles.json');

gulp.task('bundle', function() {
    bundler(bundles);
});

gulp.task('default', ['bundle']);
