var cheerio = require('cheerio');
var data = '<h3>1.032 Eng Geomaterials and Geomechanics</h3>space<h3>1.020 Eng Principles of Energy and Water Sustainability</h3>space<h3>1.054 Eng Mechanics and Design of Concrete Structures</h3>space<h3>1.068 Eng Nonlinear Dynamics and Turbulence</h3>';

var $ = cheerio.load(data);
var titles = [];
$('h3').each(function(i, title){
	titles.push($(title).text());
});
console.log(titles);

// get word arrays from titles, filter our punctuation/numbers
// use map
var words = titles.map(function(title){
	return title.toLowerCase().match(/([a-z]+)/g);
});
console.log(words);