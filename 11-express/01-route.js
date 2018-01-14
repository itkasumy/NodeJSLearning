var http = require('http');
var url = require('url');
var querystring = require('querystring');

var articles = {
	"1": "第一篇文章详情",
	"2": "第二篇文章详情",
	"3": "第三篇文章详情"
};

http.createServer((req, res) => {
	var urlObj = url.parse(req.url, true);
	var pathname = urlObj.pathname;
	var query = urlObj.query;

	if (pathname === '/') {
		// res.writeHead(200, {
		// 	'Content-Type': 'text/html;charset=utf8'
		// });
		// res.end('<ul><li><a href="/article?id=1">第一篇</a></li><li><a href="/article?id=2">第二篇</a></li><li><a href="/article?id=3">第三篇</a></li></ul>');
		send('<ul><li><a href="/article?id=1">第一篇</a></li><li><a href="/article?id=2">第二篇</a></li><li><a href="/article?id=3">第三篇</a></li></ul>');
	} else if (pathname === '/article') {
		// res.writeHead(200, {
		// 	'Content-Type': 'text/html;charset=utf8'
		// });
		// res.end(articles[query.id]);
		send(articles[query.id]);
	} else {
		res.end('404');
	}

	function send (html) {
		res.writeHead(200, {
			'Content-Type': 'text/html;charset=utf8'
		});
		res.end(html);
	}

}).listen(8080, () => {
	console.log('server started at 8080');	
});