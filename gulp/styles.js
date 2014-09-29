/**
 * Created by jmongiat on 8/31/14.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'express', 'json-proxy', 'uglify-save-license', 'tiny-lr', 'opn', 'wiredep', 'karma']
});



gulp.task('styles', function () {
    return gulp.src('app/styles/*.less')
        //.pipe($.plumber())
        .pipe($.less())
        //.pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('.tmp/styles'))
        //.pipe($.size());
});
