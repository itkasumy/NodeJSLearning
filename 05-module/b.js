exports.loaded = function () {
	console.log(module.loaded);
};

console.log('B开始加载...');

var a = require('./a');

console.log(a.name);
