var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('sass', require('./gulp-tasks/sass')(gulp, plugins));