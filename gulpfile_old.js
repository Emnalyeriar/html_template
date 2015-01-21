var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    swig = require('gulp-swig'),
    del = require('del'),
    webserver = require('gulp-webserver');

swig({'defaults': {'cache': false}});

gulp.task('styles', function() {
    return gulp.src('styles/**/*')
    .pipe(concat('main.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./_build/styles/'))
});

gulp.task('scripts', function() {
    return gulp.src('scripts/*')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./_build/scripts/'))
});

gulp.task('libs', function() {
    return gulp.src('scripts/libs/*')
    .pipe(gulp.dest('./_build/scripts/libs'))
})

gulp.task('images', function() {
    return gulp.src('images/**/*')
    .pipe(cache(imagemin({optimizationLevel: 3, progessive: true, interlaced: true})))
    .pipe(gulp.dest('./_build/images/'))
});

gulp.task('clean', function(cb) {
    del('./_build/**/*', cb)
});

gulp.task('fonts', function() {
    return gulp.src('fonts/**/*')
    .pipe(gulp.dest('./_build/fonts/'))
})

gulp.task('templates', function() {
    return gulp.src('templates/**/*')
    .pipe(swig())
    .pipe(gulp.dest('./_build/'))
})

gulp.task('server', function() {
    return gulp.src('')
    .pipe(webserver({
        livereload: true,
        directoryListing: true
    }))
})

gulp.task('watch', function() {
    gulp.watch('styles/**/*', ['styles'])
    gulp.watch('scripts/**/*', ['scripts', 'libs'])
    gulp.watch('images/**/*', ['images'])
    gulp.watch('fonts/**/*', ['fonts'])
    gulp.watch('templates/**/*', ['templates'])
})

gulp.task('default',['templates', 'styles', 'libs', 'scripts', 'images', 'fonts', 'watch', 'server'])
