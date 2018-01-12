function say (name, words) {
	console.log(name, ':', words);	
}

// say('ksm', 'I love you');

// var newSay = say.bind(this, 'ksm');

function newSay () {
	say.apply(null, ['ksm'].concat(Array.prototype.slice.call(arguments)));
}

newSay('I love you!');