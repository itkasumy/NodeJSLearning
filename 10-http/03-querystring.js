var querystring = require('querystring');

var obj = querystring.parse('name=ksm&age=18');

console.log(obj);

var obj1 = querystring.parse('name@ksm;age@18', ';', '@', {maxKeys: 2});

console.log(obj1);
console.log(querystring.stringify(obj1, ':', '@'));

