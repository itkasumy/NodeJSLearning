var http = require('http');
var fs = require('fs');
var mime = require('mime');
var url = require('url');

var server = http.createServer(server);

server.listen(8080, 'localhost');

// function server (req, res) {
// 	var url = req.url;

// /* 	if (url === '/') {
// 		res.setHeader('Content-Type', 'text/html; charset=utf-8');
// 		fs.readFile('index.html', (err, data) => {
// 			res.write(data);
// 			res.end();
// 		});
// 	} else if (url === '/style.css') {
// 		res.setHeader('Content-Type', 'text/css; charset=utf-8');
// 		fs.readFile('style.css', (err, data) => {
// 			res.write(data);
// 			res.end();
// 		});
// 	} else if (url === '/index.js') {
// 		res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
// 		fs.readFile('index.js', (err, data) => {
// 			res.write(data);
// 			res.end();
// 		});
// 	} */

// 	if (url === '/') {
// 		res.setHeader('Content-Type', 'text/html; charset=utf-8');
// 		fs.readFile('index.html', (err, data) => {
// 			res.write(data);
// 			res.end();
// 		});
// 	} else {
// 		static(url, res);
// 	}

// }

function server(req, res) {
	var urlObj = url.parse(req.url, true);
	var pathname = urlObj.pathname;
	if (pathname === '/') {
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		fs.readFile('index.html', (err, data) => {
			res.write(data);
			res.end();
		});
	} else if (pathname === '/clock') {
		var counter = 1;
		var timerId = setInterval(function () {
			res.write(new Date().toString());
			counter++;
			if (counter === 5) {
				clearInterval(timerId);
				res.end();
			}
		}, 1000);
	} else {
		static(pathname, res);
	}

}

function static (url, res) {
	res.setHeader('Content-Type', mime.getType(url) + '; charset=utf-8');
	fs.readFile(url.slice(1), (err, data) => {
		res.write(data);
		res.end();
	});
}