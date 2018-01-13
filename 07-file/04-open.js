var fs = require('fs');

fs.readFile('index.txt');

// var fd = fs.openSync('line.txt', 'r');
// console.log(fd);

// process.stdout.write(); // 标准输出
// process.stdin; // 标准输入
// process.stderr; // 错误输出

fs.open('index.txt', 'r', (err, fd) => {
	console.log(fd);
	var buffer = new Buffer(3);
	/**
	 * fd 文件描述符
	 * buffer 存放数据的容器
	 * offset 往 buffer 里写的偏移量
	 * length 长度
	 * position 文件的当前读取位置
	 */
	fs.readSync(fd, buffer, 0, 3, 0);
	console.log(buffer.toString());	
});
