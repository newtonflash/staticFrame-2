
module.exports = function (app, siteConfig, express){

	app.use("/*.html", function(req, res){
		var fullUrl = req.originalUrl.substring(1,req.originalUrl.length).split(".html").join("");


		if(typeof req.query.prod !== undefined && req.query.prod){
			siteConfig.environment = "prod";
		} else {
			siteConfig.environment = "dev";
		}
		fullUrl = fullUrl.split("?")[0];
		if(fullUrl !== "/"){
			res.render(fullUrl, siteConfig);

		}
	});

	app.get("/", function(req, res){
        //console.log("%s", res);
		res.render('pages/index');
	});

	app.get('*', function(req, res, next) {

	  	var err = new Error();
	  	err.status = 404;
	  	next(err);
	});

	app.use(function(err, req, res, next) {
	  	if(err.status !== 404) {
	    	return next();
	  	}
	  	res.render('404', siteConfig);
	});


	app.post("/services/*", function(req, res){
        var url = "../public/services/"+req.originalUrl.split("services/").join("");
        var test = require(url);

        res.send(test);
    });

};

