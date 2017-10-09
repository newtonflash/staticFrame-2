var path            = require('path');
var express         = require('express');
var bodyParser      = require('body-parser');
var app             = express();
var fs 				= require('fs');
var siteConfig 		= require('./core/site-config.js');

var serveIndex      = require('serve-index');
var exphbs          = require('express-handlebars');
var favicon         = require('serve-favicon');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'views/services')));
app.use('/images',express.static(path.join(__dirname, 'public/images')));
app.use('/js',express.static(path.join(__dirname, 'public/js')));
app.use('/css',express.static(path.join(__dirname, 'public/css')));
app.use('/components', serveIndex('views/components/', {'icons': true}));
app.use('/js', serveIndex('public/js/', {'icons': true}));

app.use(favicon(path.join(__dirname, 'public/images', 'favicon.png')));

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    partialsDir: [
        'src/components/',
        'views/partials/'
    ]
}));
app.set('view engine', siteConfig.templateEngine);


require("./core/routes")(app, siteConfig, express);

var server = app.listen(siteConfig.portNo, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('StaticFrame app listening at http://%s:%s', host, port);
});
