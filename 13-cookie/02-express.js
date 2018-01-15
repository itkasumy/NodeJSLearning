var express = require('express');
// var cookieParser = require('cookie-parser');
var querystring = require('querystring');

var app = express();
// app.use(cookieParser());
app.use((req, res, next) => {
	// if (!req.headers.cookie)
	// 	return next();
	req.cookies = querystring.parse(req.headers.cookie, ':', '=');
	req.cookie = cookie();
	next();
});

app.get('/', (req, res) => {
	if (req.cookies.visited) {
		res.send('You are welcome!');
	} else {
		res.cookie('visited', 1, {
			maxAge: 10 * 60 * 1000
		});
		res.send('欢迎新朋友!');
	}
});

app.listen(8080);

function cookie (name, val, options) {
	var opt = options || {};
	var parts = [name + '=' + val];
	if (opt.maxAge !== null) {
		parts.push('Max-Age=' + Number(opt.maxAge));
	}
	if (opt.domain)
		parts.push('Domain=' + opt.domain);
	if (opt.path)
		parts.push('Path=' + opt.path);
	if (opt.expires)
		parts.push('Expires=' + opt.expires.toUTCString());
	if (opt.httpOnly)
		parts.push('HttpOnly');
	if (opt.secure)
		parts.push('Secure');
	return parts.join('; ');
}