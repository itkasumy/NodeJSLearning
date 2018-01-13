var fs = require('fs');

var rs = fs.createReadStream('./read.txt');
var ws = fs.createWriteStream('./write.txt', {
	autoClose: true
});

ws.on('open', () => {
	console.log('写入文件已打开!');	
});

rs.on('data', (data) => {
	ws.write(data);
});

rs.on('end', () => {
	ws.end('写入完成!', () => {
		ws.write('over')
		console.log('写入完成!');
		console.log(`共写入%d字节`, ws.bytesWritten);		
	});
});

ws.on('close', () => {
	console.log('文件关闭');	
});