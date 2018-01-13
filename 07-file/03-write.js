var fs = require('fs');

// fs.writeFile('line.txt', '叶公子,', {flag: 'w', encoding: 'utf8'}, (err) => {
// 	console.log(err);
// });

// fs.writeFile('line.txt', new Buffer('叶公子'), { flag: 'a', encoding: 'utf8' }, (err) => {
// 	console.log(err);
// });

// fs.appendFile('line.txt', new Buffer('叶公子-我的公主'), (err) => {
// 	console.log(err);	
// });

var buf = new Buffer('珠');
console.log(buf); // e7 8f a0
console.log(parseInt('e7', 16)); // 231
console.log(parseInt('8f', 16)); // 143
console.log(parseInt('a0', 16)); // 160
console.log((231).toString(2)); // 11100111
console.log((143).toString(2)); // 10001111
console.log((160).toString(2)); // 10100000
// 111001 	11 1000 	1111 10 	100000
// 00111001 	00111000 	00111110 	00100000

console.log(parseInt('00111001', 2)); // 57
console.log(parseInt('00111000', 2)); // 56
console.log(parseInt('00111110', 2)); // 62
console.log(parseInt('00100000', 2)); // 32

var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str += str.toLowerCase();
str += '0123456789';
str += '+/';
console.log(str[57] + str[56] + str[62] + str[32]); // 54+g

function base64 (str) {
	var result;
	return result;
}
