var fs = require('fs');

/**
 * 0 stdin
 * 1 stdout
 * 2 error
 */
// fs.write(2, 'abcd', (err, fd) => {

// });

setTimeout(() => {
	var buffer = new Buffer(1);
	fs.read(0, buffer, 0, 1, 0, (err) => {
		console.log(buffer.toString());		
	});
}, 3000);

process.stdin.on('data', (err, data) => {
	console.log(data);	
});
