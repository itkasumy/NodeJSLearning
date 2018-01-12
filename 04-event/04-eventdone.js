var fs = require('fs');
var EventEmitter = require('events');

var event = new EventEmitter();

var person = {};

event.on('data', output);

fs.readFile('name.txt', 'utf8', (err, data) => {
	person.name = data;
	event.emit('data');
});

fs.readFile('age.txt', 'utf8', (err, data) => {
	person.age = data;
	event.emit('data');
});

function output() {
	if (person.name && person.age)
		console.log(person.name, person.age);
}