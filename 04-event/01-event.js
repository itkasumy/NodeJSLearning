function Person (name) {
	this.name = name;
	this._events = {};
}

Person.prototype.on = function (eventName, callback) {
	if (this._events[eventName]) {
		this._events[eventName].push(callback);
	} else {
		this._events[eventName] = [callback];
	}
}

Person.prototype.emit = function (eventName) {
	var args = Array.prototype.slice.call(arguments, 1);

	var callbacks = this._events[eventName];
	callbacks.forEach(callback => {
		// console.log(this);		
		callback.apply(this, args);
	})
}
var girl = new Person('ksm');

girl.on('longhair', function () {
	console.log('少年娶我可好？');
});

girl.on('longhair', function () {
	console.log('记得撩！！！');
});

girl.emit('longhair');