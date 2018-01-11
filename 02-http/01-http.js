var http = require('http');
var fs = require('fs');

function server (req, res) {
	console.log(req.method, req.url);
	// console.log(req.headers);

	fs.readFile('index.html', (err, data) => {
		res.write(data);
		res.end();
	});

	// res.statusCode = 404;
	// res.setHeader('name', 'ksm');
	// res.setHeader('Content-Type', 'text/html; charset=utf-8');

	// res.write(new Date().toString());

	// res.end();
}

var server = http.createServer(server);

server.listen(8080, 'localhost');