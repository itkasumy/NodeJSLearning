var http = require('http');

http.createServer((req, res) => {
	console.log(req.method);
	console.log(req.url);
	console.log(req.headers);
	console.log(req.httpVersion);
	
	res.end('over');
}).listen(8080, () => {
	console.log('server started at 8080');	
});