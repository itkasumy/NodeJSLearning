var util = require('util');

// function Parent () {
// 	this.name = 'Parent';
// 	this.age = 6;
// 	this.say = function () {
// 		console.log('hello', this.name);		
// 	}
// }

// Parent.prototype.showName = function () {
// 	console.log(this.name);	
// };

// function Child() {
// 	this.name = 'Child';
// }

// util.inherits(Child, Parent)

// Child.prototype = new Parent();

// var child = new Child();

// child.showName();

function Person () {
	this.name = 'ksm';
	this.parent = {
		name: 'parent'
	}
}

Person.prototype.toString = function () {
	console.log('this is' + this.name);	
}

var p = new Person();
/**
 * showHidden 是否显示隐藏属性
 * 对象的递归显示的深度
 * 是否显示演示
 */
console.log(util.inspect(p, true, 4, true));
console.log(util.inspect(p, true, 0, true));

console.log(util.isArray([]));

console.log(util.isRegExp(/\d/));

console.log(util.isDate(new Date()));

