var fs = require('fs');

fs.readFile('1.txt', (err, data) => {
	console.log(data.toString());
});

// process.nextTick(() => {
// 	console.log('a');
// 	process.nextTick(() => {
// 		console.log('b');
// 	});
// });

setImmediate(() => {
	console.log('a');
	setImmediate(() => {
		console.log('b');
	});
});

setTimeout(() => {
	console.log('setTimeout ...');
});