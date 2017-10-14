const webpack_stream = require('webpack-stream')
const WEBPACK_CONFIG = require('../webpack.config.js');

module.exports = function (gulp, plugins, config) {


    gulp.task('webpack',function() {
        console.log("%", config.siteConfig.publicDirectory);
        return webpack_stream(WEBPACK_CONFIG)
            .pipe(gulp.dest(config.siteConfig.publicDirectory));

    });
};
