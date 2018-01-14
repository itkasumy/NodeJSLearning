var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer((req, res) => {
	var contentType = req.headers['content-type'];
	req.setEncoding('utf8');
	var str = '';

	req.on('data', (data) => {
		str += data;	
	});

	req.on('end', (data) => {
		var obj;
		if (contentType === 'application/json') {
			obj = JSON.parse(str);
		} else if (contentType === 'application/x-www-form-urlencoded') {
			obj = querystring.parse(str);
		}
		console.log(JSON.parse(str));
		res.end(util.inspect(obj));
	});
}).listen(8080, () => {
	console.log('server started at 8080');
});