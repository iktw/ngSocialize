/* Gulp packages */
var gulp = require('gulp'),
    path = require('path'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    compass = require('gulp-compass'),
    rename = require('gulp-rename'),
    angularTemplates = require('gulp-angular-templates');

var application_name = 'ngSocialize';

gulp.task('build-js', function () {
    gulp.src('assets/js/**/*.js')
        .pipe(concat(application_name + '.js'))
        .pipe(rename({suffix: '.min'}))
//        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('build-compass', function () {
    gulp.src('assets/sass/**/*.scss').
        pipe(compass({
            config_file: 'config.rb',
            css: 'dist/css/',
            sass: 'assets/sass'
        })).
        pipe(concat(application_name + '.css')).
        pipe(rename({suffix: '.min'})).
        pipe(gulp.dest('dist/css'));
});

gulp.task('build-angular-templates', function () {
    return gulp.src('assets/templates/**/*.html')
        .pipe(angularTemplates({module: application_name}))
        .pipe(gulp.dest('assets/js/tmp'));
});

gulp.task('deploy', function () {
    gulp.run(['build-compass', 'build-angular-templates', 'build-js']);
});

gulp.task('watch', ['deploy'], function () {
    gulp.watch(['assets/sass/**/*.scss'], ['build-compass']);
    gulp.watch(['assets/templates/**/*.html'], ['build-angular-templates']);
    gulp.watch(['assets/js/**/*.js'], ['build-js']);
});