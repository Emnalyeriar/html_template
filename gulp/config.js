'use strict';

module.exports = {

    'serverport': 3000,

    'styles': {
        'src' : 'styles/*.scss',
        'dest': '_build/css'
    },

    'scripts': {
        'src' : 'js/**/*.js',
        'dest': '_build/js'
    },

    'fonts': {
        'src' : 'fonts/**/*',
        'dest': '_build/fonts'
    },

    'images': {
        'src' : 'images/**/*',
        'dest': '_build/images'
    },

    'views': {
        'watch': './templates/**/*.html',
        'src': ['./templates/**/*.html', '!./templates/{partials,partials/**}'],
        'dest': '_build'
    },

    'dist': {
        'root'  : '_build'
    },

    'browserify': {
        'entries'   : './scripts/main.js',
        'bundleName': 'main.js'
    }

};
