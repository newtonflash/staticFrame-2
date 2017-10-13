
module.exports = function (gulp, plugins, config) {
    'use strict';

    gulp.task('default', [
        'sass:compile-dev',
        'js:compile',
        'watch'
    ]);
};