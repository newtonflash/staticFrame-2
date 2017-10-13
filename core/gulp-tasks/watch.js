
module.exports = function (gulp, plugins, config) {

    gulp.task('watch', ['watch:sass', 'watch:js']);

    gulp.task('watch:sass', function () {
        return gulp.watch(config.sass.source, ['sass:compile']);
    });

    gulp.task('watch:js', function () {
        return gulp.watch(config.js.source, ['js:compile']);
    });
};
