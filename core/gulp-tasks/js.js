module.exports = function (gulp, plugins, config) {
    'use strict';


    gulp.task('js:lint', function() {
        return gulp.src(config.jslint.source)
            .pipe(jshint())
            .pipe(jshint.reporter('gulp-jshint-html-reporter', {
                filename: config.jslint.reportFile,
                createMissingFolders : false
            }));
    });

    gulp.task('js:compile', function () {
        return gulp.src([
                config.js.source
            ])
            .pipe(plugins.plumber())
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.babel({
                presets: ['es2015']
            }))
            .pipe(plugins.sourcemaps.write())
            .pipe(plugins.plumber.stop())
            .pipe(gulp.dest(config.js.destination));
    });
}

