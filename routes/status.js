var validCodes = require('../resources/valid-codes.json');

var send = function(req, res, next) {
	var statusCode = req.params.statusCode;
	var validCode = validCodes[statusCode];
	if (!validCode) {
		statusCode = '404';
		validCode = validCodes['404'];
	} 
	res.render('status', {
		'title': statusCode + ' ' + validCode.description,
		'image': validCode.image
	});
};

module.exports.send = send;