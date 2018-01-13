var fs = require('fs');

// fs.open('line.txt', 'w', (err, fd) => {
// 	fs.write(fd, new Buffer('叶公子'), 0, 9, 0, (err, byteWritten) => {
// 		console.log(byteWritten);		
// 	});
// });

var buffer = new Buffer('叶公子好');

fs.open('line.txt', 'w', (err, fd) => {
	console.log('first:', fd);	
	fs.write(fd, buffer, 6, 6, 6, (err, byteWritten) => {
		// console.log(byteWritten);
		fs.write(fd, buffer, 0, 6, 0, (err, byteWritten) => {
			// console.log(byteWritten);
			fs.close(fd);
			fs.open('line.txt', 'w', (err, fd) => {
				console.log('second:', fd);
			});
		});
	});
});

// fs.open('line.txt', 'w', (err, fd) => {
// 	console.log('second:', fd);	
// });