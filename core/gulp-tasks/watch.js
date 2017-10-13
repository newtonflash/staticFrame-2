
module.exports = function (gulp, plugins, config) {

    gulp.task('watch', []);

    gulp.task('watch:sass', function () {
        return gulp.watch(config.sass.source, ['sass:compile-dev']);
    });

    gulp.task('watch:js', function () {
        return gulp.watch(config.js.source, ['js:compile']);
    });
};
