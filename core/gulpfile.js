var path = require('path');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var siteConfig = require('./site-config.js');

var config = {
    //css: {
    //    files: path.join(siteConfig.css.destination, '**/**/*.css'),
    //    minifiedFiles: path.join(siteConfig.css.destination, '**/**/*.min.css'),
    //    filePath: path.join(siteConfig.css.destination),
    //    destination: path.join(siteConfig.css.destination)
    //},
    //cssLint: {
    //    postcss: require('gulp-postcss'),
    //    reporter: require('postcss-reporter'),
    //    syntax_scss: require('postcss-scss'),
    //    stylelint: require('stylelint')
    //},

    jslint: {
        source : path.resolve(__dirname, siteConfig.jsSourceDirectory + "**/*.js"),
        reportFile : siteConfig.jsReportingFile
    },
    //images: {
    //    source: path.join(siteConfig.images.source, '**/*.*'),
    //    devDist:path.join(siteConfig.images.destination)
    //},
    //fonts: {
    //    source: path.join(paths.fonts.source, '**/*.*'),
    //    destination: path.join(paths.fonts.destination)
    //}

};

require('./gulp-tasks/js')(gulp, plugins, config);
require('./gulp-tasks/webpack')(gulp, plugins, config);
require('./gulp-tasks/default')(gulp, plugins, config);