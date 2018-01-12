var buf1 = new Buffer(3);

console.log(buf1);
buf1.fill(0);
console.log(buf1);

buf1[0] = 0x61;
buf1[1] = 0x62;
buf1[2] = 0x63;
var buf2 = new Buffer([0x61, 0x62, 0x63]);
var buf3 = new Buffer('abc');
var buf4 = new Buffer('abc', 'utf8');

console.log(buf1.toString() === buf2.toString());
console.log(buf2.toString() === buf3.toString());
console.log(buf1.toString() === buf3.toString());
console.log(buf1.toString() === buf4.toString());

var buf5 = new Buffer('米', 'utf8');
var buf6 = new Buffer('米', 'ascii');
console.log(buf5);
console.log(buf6);


var str = '叶公子';
var buf7 = new Buffer(str);

console.log(str.length);
console.log(buf7.length);

str[0] = '天';
console.log(str);
console.log(buf7);
buf7[0] = 0;
console.log(buf7);

var buf8 = new Buffer(12);
buf8.write('叶', 0, 3);
buf8.write('公子', 3, 6);
console.log(buf8.toString());

var buf_1 = buf8.slice(0, 5);
var buf_2 = buf8.slice(5);
console.log(buf_1.toString());
console.log(buf_2.toString());

var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder();
console.log(decoder.write(buf_1));
console.log(decoder.write(buf_2));


var srcBuf = new Buffer([4, 5, 6]);
var tarBuf = new Buffer(6);
tarBuf[0] = 1;
tarBuf[1] = 2;
tarBuf[2] = 3;
srcBuf.copy(tarBuf, 3, 0, 3);
console.log(tarBuf);


var buf9 = new Buffer([1, 2, 3]);
var buf10 = new Buffer([4, 5, 6]);
var buf11 = Buffer.concat([buf9, buf10], 6);
console.log(buf11);
