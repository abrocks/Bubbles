/*
firts go to the html
request that in my code
then I would use cheerio to pull the components
request: asking another server to say, hey give us this 
asynch: we make a call, but we dont know when we will get it back
start with li
get al the hrefs ; put the hrefs in a array


*/ 
var data = require('./mitcourses_one.js');
var request = require('sync-request'); //note that I am heavily copying the video Abel posted 
var minify = require('html-minifier').minify;
var cheerio = require('cheerio');
var fs = require('fs');
//so what does the above function do 
var exercise = {};

exercise.one = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Return the address of all the html pages in
    //  the MIT course catalog - string array.
    //  For example, the first page for Course 1 is:
    //  http://student.mit.edu/catalog/m1a.html
    //
    //  See homework guide document for more info.
    // -----------------------------------------------
    console.log('--- QUESTION 01 ---'); // going to print these steps out so I can see where I am when I trouleshoot 
    //why do I have two here 
    
    var $ = cheerio.load(data);
    
    var li = [];
    var urls = [];
    
    $('li').each(function(i,element){
        urls.push($(element).text());
    });
    //then pull ou the  href (that will get you mla.html) 
    li.map(function (){
        
    })
    //urls.push('http://student.mit.edu/catalog/mla1.html');
    //urls.push('http://student.mit.edu/catalog/mlb1.html');
    //he lists the urls: there has got to be a better way to get all those htmls
    return urls; 
};

exercise.two = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Download every course catalog page.
    //
    //  You can use the NPM package "request".
    //  Or curl with the NPM package shelljs.
    //
    //  Save every page to "your_folder/catalog"
    //
    //  See homework guide document for more info.
    // -----------------------------------------------
    console.log('--- QUESTION 02 ---');
    //get the urls from exercise one
    var urls = exercise.one();

    urls.forEach(function(url, index){
        var res = request ('GET', url);
        var filename = './catalog/' + index + '.html';
        fs.writeFileSync(filename, res.getBody().toString()); 
    });
};

exercise.three = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Combine all files into one,
    //  save to "your_folder/catalog/catalog.txt"
    //
    //  You can use the file system API,
    //  https://nodejs.org/api/fs.html
    //
    //  See homework guide document for more info.
    // -----------------------------------------------
    console.log('--- QUESTION 03 ---');

    var files = [];
    for (var i=0; i < 46 /*the number of websites*/; i++){
        files.push('./catalog/' + i + '.html'); //
    }

    files.forEach(function(file, index){
        var data = fs.readFileSync(file); //reading files in catalog folder
        console.log('adding ' + file + ' to catalog.txt');
        fs.appendFileSync('./catalog/catalog.txt', data); //write it to a single file 
        })};

exercise.four = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Remove line breaks and whitespaces
    //  from the file. Return a string of
    //  scrubbed HTML. In other words, HTML without
    //  line breaks or whitespaces.
    //
    //  You can use the NPM package "html-minifier".
    //
    //  See homework guide document for more info.
    // -----------------------------------------------
    console.log('---QUESTION 04---');
    var data = fs.readFileSync('./catalog/catalog.txt'); //cleaning up the content 
    var scrubbed = minify(data.toString(),{
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
    }); 
    var clean = scrubbed.replace(/'/g, ''); //if i have intermidenitae '' within text, things will break, so removing them 
    fs.writeFileSync('.catalog/clean.txt', clean); //once done, write back out (its clean without those '')
};

exercise.five = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Load your scrubbed HTML into the DOM.
    //  Use the DOM structure to get all the courses.
    //
    //  Return an array of courses.
    //
    //  You can use the NPM package "cheerio".
    //
    //  See homework guide document for more info.
    // -----------------------------------------------
    console.log('---QUESTION 05 ---');
    var data = fs.readFileSync('./catalog/clean.txt'); //this doesnt have the ''
    var $ = cheerio.load(data); //
    var courses = [];
    $('h3').each(function (i, element){
        courses.push($(element).text());
    });
    return courses; 
};

exercise.six = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Return an array of course titles.
    //
    //  You can use the NPM package cheerio.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------
    console.log('---QUESTION 06 --');
    var data = fs.readFileSync('./catalog/clean.txt');
    var $ = cheerio.load(data);
    var titles = [];
    $('h3').each(function(i, element){
        titles.push($(element).text());
    });
    return titles; 
};

exercise.seven = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Filter out punctuation, numbers,
    //  and common words like "and", "the", "a", etc.
    //
    //  Return clean array.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------
    console.log('--- TESTING PART 07---');
    var titles = exercise.six(); //starting to clean up the titles
    //get word arrays from titles, filter out punctuation/numbers
    //use the map function
    var words = titles.map(function(title){
        return title.toLowerCase().match(/([a-z]+)/g);
    });
    return words; 
};

exercise.eight = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Make an array of words from the titles.
    //
    //  Return array of words.
    //
    //  See homework guide document for more info.
    // creating one single array of the words have left 
    console.log('--- TEST PART 08---');
    var words = exercise.seven();
    var wordsFlat = words.reduce (function(previous, current){
        return previous.concat(current);
    },[]);
    return wordsFlat;
};

exercise.nine = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Count the word frequency.
    //
    //  Return a word count array.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------
    console.log('--ON PART 9 NOW AMEN--- ');
    var scores = wordsFlat.reduce(function(previous, current){
        if(current in previous){
            previous[current] += 1;
        }
        else{
            previous[curent] =1;
        }
        return previous; 
    },{})
    console.log(scores);
    return scores;
};


module.exports = exercise;
