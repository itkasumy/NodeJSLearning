var url = require('url');

var urlObj = url.parse('http://ksm:123@www.baidu.com:80/mypath/sub?name=ksm#top', true);

console.log(urlObj);

console.log(url.format(urlObj));
