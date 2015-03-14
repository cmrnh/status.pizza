var validCodes = require('./valid-codes.json');

var send = function(req, res, next) {
	var statusCode = req.params.statusCode;
	var code = validCodes[statusCode];
	if (!code) code = validCodes[statusCode];
	res.render('status', validCode);
};

module.exports.send = send;