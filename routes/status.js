var validCodes = require('../resources/valid-codes.json');

var send = function(req, res, next) {
	var statusCode = req.params.statusCode;
	var validCode = validCodes[statusCode];
	if (!validCode) validCode = validCodes[statusCode];
	res.render('status', validCode);
};

module.exports.send = send;