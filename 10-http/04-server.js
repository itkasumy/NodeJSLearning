var http = require('http');

http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');
	console.log(res.getHeader('Content-Type'));
	res.removeHeader('Content-Type');
	console.log(res.getHeader('Content-Type'));

	console.log(res.headersSent);
	res.sendDate = false;
	res.statusCode = 400;
	res.write('hello');
	console.log(res.headersSent);
	res.end(' world!');
}).listen(8080, () => {
	console.log('server started at 8080');	
});