var path = require("path");


const JS_SOURCE_DIRECTORY = "../src/javascript/";
const SASS_SOURCE_DIRECTORY = "../src/scss/";
const JS_VENDOR_LIST = ['vendor/vendor-script.js'];
const CSS_ENTRY_LIST = ['global-framework', "components"];
var  PUBLIC_DIRECTORY = path.join(__dirname + "/../public");



var config = {
    "framework"             : "STATIC FRAME - 2",
    "version"               : "2.0.0",
    "nameSpace"             : "ns",
    "publicDirectory"       : PUBLIC_DIRECTORY,
    "sassSourceDirectory"   : SASS_SOURCE_DIRECTORY,
    "jsSourceDirectory"     : JS_SOURCE_DIRECTORY,
    "vendorJSList"          : JS_VENDOR_LIST,
    "cssEntryList"          : CSS_ENTRY_LIST,

    "environment"           : "dev",
    "portNo"                : "3200",
    "templateEngine"        : "handlebars",
    "siteName"              : "Website name",
    "author"                : "author name",
    "jsReportingFile"       : "views/pages/reports/js-hint-report.html"

};

module.exports = config;