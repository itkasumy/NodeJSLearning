var express = require('express');
var session = require('express-session');
var app = express();

app.use(session({
	secret: 'ksm',
	cookie: {
		maxAge: 60 * 1000 * 30
	},
	resave: true,
	saveUninitialized: true
}));

app.get('/', (req, res) => {
	if (req.session.sign) {
		console.log(req.session);		
	}
})