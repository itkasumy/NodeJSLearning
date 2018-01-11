// console.log(global);
// var name = 'ksm';
// exports.name = name;
// console.log(this);

process.stdin.on('data', function (data) {
	// console.log(data);
	// console.log(data.toString());
	// console.log(process.pid);
});

process.stdout.write('Hello');

process.on('exit', () => {
	console.log('退出之前执行');	
});

try {
	console.log(bczdbl);
} catch (e) {
	console.log(e.message);
}

process.on('uncaughtException', (e) => {
	console.log('uncaughtException:', e.message);
});

console.log(b);
