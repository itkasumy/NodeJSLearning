var http = require('http');

var options = {
	hostname: 'localhost',
	port: 8080,
	headers: {
		'Content-Type': 'application/json'
	},
	path: '/',
	method: 'POST'
};

var request = http.request(options, (response) => {
	response.setEncoding('utf8');
	var str = '';

	response.on('data', (data) => {
		str += data;
	});

	response.on('end', (data) => {
		console.log(JSON.parse(str));
	});
});

request.write(JSON.stringify({"name": "ksm"}));

request.end();