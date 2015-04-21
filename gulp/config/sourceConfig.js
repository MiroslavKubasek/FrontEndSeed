// ignore everything that begins with underscore
var hidden_files = '**/_*.*';
var ignored_files = '!' + hidden_files;

// SOURCES CONFIG
var source = {
    scripts: {
        app: ['src/main.js'],
        watch: ['src/**/*.js']
    },
    templates: {
        app: {
            files: ['src/index.jade'],
            watch: ['src/index.jade', hidden_files]
        },
        views: {
            files: ['src/**/*.jade', ignored_files],
            watch: ['src/**/*.jade']
        },
    },
    styles: {
        app: {
            main: ['src/less/app.less', '!src/less/themes/*.less'],
            dir: 'src/less',
            watch: ['src/less/*.less', 'src/less/**/*.less', '!src/less/themes/*.less']
        },
        themes: {
            main: ['src/less/themes/*.less', ignored_files],
            dir: 'src/less/themes',
            watch: ['src/less/themes/*.less']
        }
    },
    bootstrap: {
        main: 'src/less/bootstrap/bootstrap.less',
        dir: 'src/less/bootstrap',
        watch: ['src/less/bootstrap/*.less']
    },
    bower: {
        bowerDir: 'src/bower_components'   
    },
    tests: {
        testDir: 'tests',
        karmaConf: 'tests/karma.conf.js'
    }
};

module.exports = source;