'use strict';

class Document {
	constructor () {
		this.cookies = [];
	}
	set cookie (cookie) {
		this.cookies.push(cookie);
	}
	get cookie () {
		return this.cookie.join('; ');
	}
}

var document = new Document();
document.cookie = 'name=ksm';
document.cookie = 'age=18';
console.log(document.cookie);
