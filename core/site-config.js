const JS_SOURCE_DIRECTORY = "../src/javascript/";
const SASS_SOURCE_DIRECTORY = "../src/scss/";
const JS_VENDOR_LIST = ['vendor/vendor-script.js'];
const CSS_ENTRY_LIST = ['global-framework', "components"];


var config = {
    "framework"             : "STATIC FRAME - 2",
    "version"               : "2.0.0",
    "nameSpace"             : "ns",
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