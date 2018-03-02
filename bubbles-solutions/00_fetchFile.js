var fetch = require('node-fetch');


var makeRequest = async function (url) {
    var response = await fetch(url);
    var text     = await response.text();
    return text;
};  

var url = 'http://student.mit.edu/catalog/m1a.html';

var receiveText = function(text){
	console.log(text);
};

makeRequest(url).then(receiveText);