var fs = require('fs');

// var rs = fs.createReadStream('./read.txt', {
// 	start: 0,
// 	end: 5,
// 	encoding: 'utf8',
// 	highWaterMark: 3
// });

var rs = fs.createReadStream('./read.txt', {
	start: 0,
	end: 5,
	highWaterMark: 3
});

rs.setEncoding('utf8');

rs.on('data', (data) => {
	console.log(data);
	rs.pause();

	setTimeout(() => {
		rs.resume();
	}, 3000);
	// setTimeout(() => {
	// 	console.log(data);
	// }, 500);
});

rs.on('end', () => {
	console.log('读取完毕!');	
});

rs.on('close', () => {
	console.log('文件关闭!');
});

rs.on('open', () => {
	console.log('文件打开!');
});