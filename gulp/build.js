/**
 * Created by jmongiat on 9/2/2014.
 */
"use strict";

var gulp = require('gulp'),
    path = require('path'),
    config = require('./config/config'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'del', 'run-sequence']
    });

var assets = $.useref.assets();


gulp.task('compile', ['clean-dist'], function () {
    $.runSequence('dist');
});
gulp.task('compile-dev', ['clean-dev'], function () {
    $.runSequence('dev');
});


/*
 * Cleans output files and temporary files
 */
gulp.task('clean', function () {
    $.del.sync([
        config.build.tempFolder
    ]);
});

gulp.task('clean-dev', ['clean'], function () {
    $.del.sync([
      path.join(config.build.root, config.build.devFolder)
    ]);
});
gulp.task('clean-dist', ['clean'], function () {
    $.del.sync([
      path.join(config.build.root, config.build.distFolder)
    ]);
});


// Set is production build flag
// build for productigulon (minify)
gulp.task('build', ['prod', 'default']);

gulp.task('prod', function () {
    config.build.isProduction = true;
});

// build option to
// build with sourcemaps (no minify)
gulp.task('sourcemaps', ['usesources', 'default']);
gulp.task('usesources', function () {
    config.build.useSourceMaps = true;
});

gulp.task('dev', ['start', 'templates'], function () {

    gulp.src([config.build.html])
        .pipe(assets)
        .pipe($.rev())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest(path.join(config.build.root, config.build.devFolder)));
});
gulp.task('dist', ['prod', 'start', 'templates'], function () {

    gulp.src([config.build.html])
        .pipe(assets)
        .pipe($.rev())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest(path.join(config.build.root, config.build.distFolder)));
});
