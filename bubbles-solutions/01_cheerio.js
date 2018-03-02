var cheerio = require('cheerio');
var data = '<h3>Title 1</h3> space <h3>Title 2</h3>space<h3>Title 3</h3>space<h3>Title 4</h3>';

// sample file from course catalog
// var data = require('./mitcourses_one.js');

var $ = cheerio.load(data);

var matches = [];

var dosomething =function(i,element){
    matches.push($(element).text());
}
$('h3').each(dosomething(i,el));

console.log(matches);