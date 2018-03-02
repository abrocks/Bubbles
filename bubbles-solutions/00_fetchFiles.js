var urls = [];
urls.push('http://student.mit.edu/catalog/m1a.html');


var fetch = require('node-fetch');
var fs = require('fs');

const writeFile = (path, data, opts = 'utf8') =>
    new Promise((res, rej) => {
        fs.writeFile(path, data, opts, (err) => {
            if (err) rej(err)
            else res()
    })
})

var makeRequest = async function (url,counter) {
    var res = await fetch(url);
    await writeFile('data/' + counter + '.html', await res.text());
    return 'done - ' + counter;        
};  

urls.forEach(function(url,i){
    makeRequest(url,i).then((result) =>{
        console.log(result);
    });    
})