var url = require('url');
var fs = require('fs');

module.exports = function (app) {
	app.use((req, res, next) => {
		res.render = (path, data) => {
			var str = fs.readFileSync(path, 'utf8');
			var tpl = str.replace(/<%=([\s\S]+?)%>/g, (match, group) => {
				return "' + obj." + group + "+'"
			});
			tpl = " var tpl = '" + tpl + "'\n return tpl";
			var compile = new Function('obj', tpl);
			res.send(compile(data));
		}
		next();
	});

	app.use((req, res, next) => {
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
	});
}