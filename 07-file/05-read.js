var fs = require('fs');

var buffer = new Buffer(12);

// fs.open('line.txt', 'r', (err, fd) => {
// 	fs.read(fd, buffer, 0, 6, 0, (err, bytesRead, buffer) => {
// 		console.log('bytesRead:', bytesRead);
// 		fs.read(fd, buffer, 6, 6, 6, (err, bytesRead, buffer) => {
// 			console.log('bytesRead:', bytesRead);
// 			console.log(buffer.toString());
// 		});
// 	});
// });
