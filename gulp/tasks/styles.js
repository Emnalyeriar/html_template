'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var gulpif       = require('gulp-if');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function(){

    return gulp.src(config.styles.src)
        .pipe(sass({
            sourceComments: 'map',
            sourceMaps: 'sass',
            outputStyle: 'nested'
        }))
        .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
        .pipe(gulp.dest(config.styles.dest))
        .pipe(gulpif(browserSync.active), browserSync.reload({stream: true}));

});
