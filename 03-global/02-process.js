// process.argv.forEach((item, idx, arr) => {
// 	console.log(item, idx);
// });

// process.kill(5500);

console.log(process.cwd()); // current working directory 当前工作目录
console.log(__dirname);

process.chdir('..'); // change diretory 改变目录

console.log(process.cwd());
console.log(__dirname);
