module.exports = function (gulp, plugins, config) {

    gulp.task('sass:compile-dev', function () {
        return gulp.src([
                config.sass.source
            ])
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass({
                errLogToConsole: true,
                outputStyle: 'expanded'
            }))
            .pipe(plugins.sourcemaps.write('/'))
            .pipe(gulp.dest(config.sass.destination));
    });

    gulp.task('sass:compile-prod', function () {
        return gulp.src([
                config.sass.source
            ])
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass({
                errLogToConsole: false,
                outputStyle: 'compressed'
            }))
            .pipe(plugins.sourcemaps.write('/'))
            .pipe(gulp.dest(config.sass.destination));
    });
};