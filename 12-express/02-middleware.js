var express = require('express');
var app = express();

app.use((req, res, next) => {
	req.mny = 100;
	next();
});

app.use((req, res, next) => {
	req.mny -= 10;
	next();
});

app.use((req, res, next) => {
	req.mny -= 80;
	next();
});

app.all('*', (req, res) => {
	res.end('' + req.mny);
});

app.listen(8080);