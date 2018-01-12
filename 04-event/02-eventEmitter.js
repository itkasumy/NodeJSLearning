var EventEmitter = require('events');
var util = require('util');

function Bell (name) {
	this.name = name;
}

util.inherits(Bell, EventEmitter);

var ksmBell = new Bell('ksm');

ksmBell.on('ring', () => {
	console.log('收到礼物01');
});

ksmBell.addListener('ring', () => {
	console.log('收到礼物02');	
});

const drop = (who) => {
	console.log(who, 'ring lost');	
}

ksmBell.once('drop', drop);

// ksmBell.removeListener('drop', drop);
// ksmBell.removeAllListeners('ring');

ksmBell.emit('ring');
ksmBell.emit('drop', '鹿');
ksmBell.emit('drop', '老人');
