const JS_SOURCE_DIRECTORY = "../src/javascript/";
const SASS_SOURCE_DIRECTORY = "../src/scss/";
const JS_VENDOR_LIST = ['vendor/vendor-script.js'];

var config = {
    "framework": "STATIC FRAME - 2",
    "nameSpace": "ns",
    "sassSourceDirectory" : SASS_SOURCE_DIRECTORY,
    "jsSourceDirectory" : JS_SOURCE_DIRECTORY,
    "vendorJSList" : JS_VENDOR_LIST,
    "environment": "dev",
    "portNo": "3200",
    "templateEngine": "handlebars",
    "siteName": "Website name",
    "author": "author name",
    "version": "1.0.0"
};

module.exports = config;