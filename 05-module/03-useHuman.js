var Person = require('./Human');

var boy = new Person('宗主', 24);
var girl = new Person('叶公子', 22);

console.log(girl.getName(), girl.getAge());
console.log(boy.getName(), boy.getAge());
console.log(Person.staticName);

