var express = require('express');
var routes 	= require('./routes');
var validCodes = require('./resources/valid-codes.json');
var jade = require('jade');
var app			= express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req,res,next) {
	var keys = Object.keys(validCodes);
	var min = 0;
	var max = keys.length - 1;
	res.redirect('/' + keys[ Math.floor(Math.random() * (max - min + 1)) + min ])
});

app.get('/:statusCode([0-9]{3})', routes.status.send);

app.get('*', function(req,res,next) {
	req.params = { 
		statusCode: "404"
	};
	routes.status.send(req,res,next);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})