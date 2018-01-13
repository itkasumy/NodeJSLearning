var fs = require('fs');

var rs = fs.createReadStream('./read.txt', {
	highWaterMark: 1
});
var ws = fs.createWriteStream('./write.txt', {
	highWaterMark: 2
});

rs.on('data', (data) => {
	var flag = ws.write(data);
	console.log(flag);	
});

ws.on('drain', () => {
	console.log('drain');	
});