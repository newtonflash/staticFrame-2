/* Use this config if you ever want to ES6+ in your project */

var path = require('path');
var siteConfig = require('./site-config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = require("../node_modules/webpack/lib/optimize/CommonsChunkPlugin");

var entryObj = {};

var vendorList = [];
for(var i = 0; i< siteConfig.vendorJSList.length; i++){
    vendorList.push(path.resolve(__dirname, siteConfig.jsSourceDirectory  + siteConfig.vendorJSList[i]));
}
if(vendorList[0]){
    entryObj[siteConfig.nameSpace + "." + 'vendor-scripts']   =  vendorList;
}

entryObj[siteConfig.nameSpace + "." + 'scripts']          =  path.resolve(__dirname, siteConfig.jsSourceDirectory + 'index.js');
entryObj['global-framework'] =  path.resolve(__dirname, siteConfig.sassSourceDirectory + 'global-framework.scss');
entryObj['components']       =  path.resolve(__dirname, siteConfig.sassSourceDirectory + 'components.scss');

module.exports = {
    entry: entryObj,
    output: {
        path: path.resolve(__dirname, '../public/js/'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: path.resolve(__dirname, '../src/javascript/'),
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ["es2015"]
                }
            },

            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, '../src/scss/'),
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: '../css/[name].css',
            allChunks: true
        }),
        new CommonsChunkPlugin({
            // The order of this array matters
            names: ["common", "vendor-scripts"],
            minChunks: 2
        })
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 5000,
        ignored: /node_modules/
    },
    devtool: 'source-map'
};