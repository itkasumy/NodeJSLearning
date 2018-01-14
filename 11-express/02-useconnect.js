var http = require('http');
var url = require('url');
var querystring = require('querystring');
var connect = require('./02-connect');

var app = connect();
require('./02-middle')(app);

var articles = {
	"1": "第一篇文章详情",
	"2": "第二篇文章详情",
	"3": "第三篇文章详情"
};

/* app.use((req, res, next) => {
	var urlObj = url.parse(req.url, true);
	var pathname = urlObj.pathname;
	var query = urlObj.query;

	req.path = pathname;
	req.query = query;
	next();
});

app.use((req, res, next) => {
	res.send = function (html) {
		res.writeHead(200, {
			'Content-Type': 'text/html;charset=utf8'
		});
		res.end(html);
	}
	next();
}); */

/* app.use((req, res) => {
	if (req.path === '/') {
		res.send('<ul><li><a href="/article?id=1">第一篇</a></li><li><a href="/article?id=2">第二篇</a></li><li><a href="/article?id=3">第三篇</a></li></ul>');
	} else if (req.path === '/article') {
		res.send(articles[req.query.id]);
	} else {
		res.end('404');
	}
}); */

app.use('/list', (req, res) => {
	res.send('<ul><li><a href="/article?id=1">第一篇</a></li><li><a href="/article?id=2">第二篇</a></li><li><a href="/article?id=3">第三篇</a></li></ul>');
});

app.use('/', (req, res) => {
	res.send(articles[req.query.id]);
});

app.use((req, res) => {
	res.end('404');
});

app.listen(8080);

/* var server = http.createServer(app);
server.listen(8080, () => {
	console.log('server started at 8080');
}); */