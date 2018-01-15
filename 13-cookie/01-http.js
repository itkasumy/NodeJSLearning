var http = require('http');

http.createServer((req, res) => {
	var time = new Date(new Date().getTime() + 60 * 1000).toGMTString();
	// res.writeHead(200, {
	// 	'Set-Cookie': 'name=ksm; path=/; Expires=' + time
	// });
	console.log(req.headers.cookie);	
	res.setHeader('Set-Cookie', ['name=ksm; path=/;', 'age=6; path=/;']);
	res.end('Hello');
}).listen(8080, () => {
	console.log('server started at port 8080');	
});