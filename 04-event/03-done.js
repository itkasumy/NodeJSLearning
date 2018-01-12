var fs = require('fs');

var person = {};
var count = 0;

fs.readFile('name.txt', 'utf8', (err, data) => {
	person.name = data;
	if (++count === 2) {
		output();
	}
});

fs.readFile('age.txt', 'utf8', (err, data) => {
	person.age = data;
	if (++count === 2 ) {
		output();
	}
});

function output () {
	console.log(person.name, person.age);	
}