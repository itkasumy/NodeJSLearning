var url = require('url');
var fs = require('fs');

var articles = {
	"1": "第一篇文章详情",
	"2": "第二篇文章详情",
	"3": "第三篇文章详情"
};

module.exports = (app) => {
	app.use('/list', (req, res) => {
		fs.createReadStream('./index.html').pipe(res);
		// res.send('<ul><li><a href="/article?id=1">第一篇</a></li><li><a href="/article?id=2">第二篇</a></li><li><a href="/article?id=3">第三篇</a></li></ul>');
	});

	app.use('/article', (req, res) => {
		// res.send(articles[req.query.id]);
		// fs.createReadStream('./detail.html').pipe(res);

		// fs.readFile('./detail.html', 'utf8', (err, data) =>{
		// 	data = data.replace('<%=content%>', articles[req.query.id])
		// 	res.send(data);
		// });

		res.render('./detail.html', {
			content: articles[req.query.id]
		});
	});

	app.use((req, res) => {
		res.end('<h1>404</h1>');
	});
}