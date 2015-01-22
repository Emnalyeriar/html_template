'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', function(cb){
    cb = cb || function(){};
    runSequence('styles', 'images', 'views', 'browserify', 'watch', cb);
});