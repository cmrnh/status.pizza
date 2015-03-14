var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/:statusCode([0-9]{3})', function(req, res, next) {
	var statusCode = req.params.statusCode;
	res.status(200).send('Hello ' + statusCode);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})