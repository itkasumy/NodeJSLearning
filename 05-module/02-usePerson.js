var person = require('./person');

console.log(require.cache);
// delete require.cache[require.resolve('./person')];

var person = require('./person');

person.getName('welcome');
person.getName('ksm');