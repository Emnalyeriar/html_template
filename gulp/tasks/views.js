'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var browserSync  = require('browser-sync');

gulp.task('views', function(){

    return gulp.src(config.views.src)
        .pipe(gulp.dest(config.views.dest))
        .pipe(gulpif(browserSync.active), browserSync.reload({stream: true}));

});
