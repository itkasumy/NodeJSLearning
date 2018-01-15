function render(str, data) {
	var tpl = str.replace(/<%=([\s\S]+?)%>/g, (match, group) => {
		return "' + obj." + group + "+'"
	});
	tpl = " var tpl = '" + tpl + "'\n return tpl";
	// console.log(tpl);

	var compile = new Function('obj', tpl);
	return compile(data);
}

var obj = {
	username: 'ksm',
	age: 6
};

// var result = render('Hello <%=username%> <%=age%>', obj);
// console.log(result);


/* var tpl = 'hello ' + obj.username + ' ' + obj.age;
console.log(tpl); */

