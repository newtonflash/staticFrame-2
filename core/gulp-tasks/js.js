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
};

