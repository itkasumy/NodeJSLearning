console.log('a客人');

setTimeout(() => {
	console.log('setTimeout ...');
});

process.nextTick(() => {
	console.log('a扫地nextTick1');
	process.nextTick(() => {
		console.log('a扫地nextTick2');
		process.nextTick(() => {
			console.log('a扫地nextTick3');
		});
	});
});

console.log('b厨师');
console.log('c厨师');
