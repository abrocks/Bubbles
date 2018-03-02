var data = "My name is <b>Bo</b>, I'm <b>18</b> years old, I like <b>code</b>.";
var expression = /<b>(.*?)<\/b>/g;

var matches = data.match(expression);
console.log(matches);
