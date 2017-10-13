const webpack_stream = require('webpack-stream')
const WEBPACK_CONFIG = require('../webpack.config.js');

module.exports = function (gulp, plugins, config) {
    gulp.task('webpack',function() {
        return webpack_stream(WEBPACK_CONFIG);
    });
};
