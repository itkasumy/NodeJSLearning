var express = require('express');

var app = express();

app.get('/list', (req, res) => {
	res.send('get:' + req.url);
});

app.post('/list', (req, res) => {
	res.send('post:' + req.url);
});

app.all('/all', (req, res) => {
	res.send('all:' + req.url);
});

app.all('*', (req, res) => {
	res.send('页面走丢了...');
});

app.listen(8080);