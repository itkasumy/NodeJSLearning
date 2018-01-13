var fs = require('fs');

var rs = fs.createReadStream('./read.txt', {
	start: 0,
	end: 5,
	highWaterMark: 3
});

rs.on('readable', () => {
	console.log('=========readable=========');
	var buff;
	while ((buff = rs.read(1)) !== null) {
		var char = buff[0];
	}
	console.log(rs.read(1));
});

rs.on('end', () => {

});