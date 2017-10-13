module.exports = function (gulp, plugins, config) {
    'use strict';

    /**
     * Build task does the following things
     * 1. Lint Javascript, CSS files
     * 2.
     *
     */
    gulp.task('build', [
        'sass:compile-prod',
        'js:compile-prod'
    ]);
};