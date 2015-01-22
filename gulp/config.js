'use strict';

module.exports = {

    'serverport': 3000,

    'styles': {
        'src' : 'styles/**/*.scss',
        'dest': 'build/css'
    },

    'scripts': {
        'src' : 'js/**/*.js',
        'dest': 'build/js'
    },

    'images': {
        'src' : 'images/**/*',
        'dest': 'build/images'
    },

    'views': {
        'src': ['templates/**/*.html', '!./templates/{partials,partials/**}'],
        'dest': 'build'
    },

    'dist': {
        'root'  : 'build'
    },

    'browserify': {
        'entries'   : 'scripts/main.js',
        'bundleName': 'main.js'
    }

};
