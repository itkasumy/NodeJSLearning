var fs = require('fs');

var data = fs.readFileSync('index.txt', 'utf8');
console.log(data);

fs.readFile('index.txt', 'utf8', (err, data) => {
	console.log(data);	
});