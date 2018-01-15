var express = require('express');
var cookieParser = require('cookie-parser');
var querystring = require('querystring');
var app = express();

app.set('view engine', 'html');
app.set('views', __dirname);
app.engine('html', require('ejs').__express)

app.use(cookieParser());

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/login', (req, res) => {
	res.cookie('username', req.query.username);
	// res.statusCode = '302';
	// res.setHeader('Location', '/user');
	// res.end();
	// res.end(req.query.username);
	res.redirect('/user');
});

app.get('/user', (req, res) => {
	res.render('user', {
		username: req.cookies.username
	});
});

app.listen(8080);