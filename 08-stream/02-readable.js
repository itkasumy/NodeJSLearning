var fs = require('fs');

var rs = fs.createReadStream('./read.txt', {
	start: 0,
	end: 5,
	highWaterMark: 3
});

var buffers = [];

rs.on('readable', () => {
	console.log('=========readable=========');
	var buff;
	while ((buff = rs.read(1)) !== null) {
		buffers.push(buff);
	}
	console.log(rs.read(1));	
});

rs.on('end', () => {
	var data  = Buffer.concat(buffers);
	console.log(data.toString());	
});