/*
 JADE Template processing
 */
"use strict";

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files']
});

//Shortcut vars
var jade = $.jade;
var changed = $.changed;
var prettify = $.htmlPrettify;

// Configs
var configDir = require('require-dir')('./config');
var vendor = configDir.vendorConfig;
var source = configDir.sourceConfig;
var build = configDir.buildConfig;
var options = configDir.options;

// Error handler
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('templates',
[
    'templates:app',
    'templates:views'
]);


//Wrapper task for all templates
gulp.task('templates', ['templates:app', 'templates:views']);

// Root App Templates
gulp.task('templates:app', function () {
    return gulp.src(source.templates.app.files)       
        .pipe(jade())
        .on("error", handleError)
        .pipe(prettify({
            indent_char: ' ',
            indent_size: 3,
            unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u']
        }))
        .pipe(gulp.dest(build.templates.app));
});

// Views
gulp.task('templates:views', function () {
    return gulp.src(source.templates.views.files)
        .pipe(jade())
        .on("error", handleError)
        .pipe(prettify({
            indent_char: ' ',
            indent_size: 3,
            unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u']
        }))
        .pipe(gulp.dest(build.templates.views));
});

