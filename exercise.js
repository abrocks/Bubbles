/*
first go to the html
request that in my code
then I would use cheerio to pull the components
request: asking another server to say, hey give us this 
asynch: we make a call, but we dont know when we will get it back
start with li
get al the hrefs ; put the hrefs in a array
*/ 
//var data = require('./mitcourses_one.js');
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
    console.log('--- QUESTION 01 ---'); // going to print these steps out so I can see where I am when I troubleshoot 
    //why do I have two here 
    
   // var $ = cheerio.load(data);
    
    //var li = [];
    var urls = [];
    
    /*
    $('li').each(function(i,element){
       urls.push($(element).text());
    });
    //then pull ou the  href (that will get you mla.html) 
    li.map(function (){
        
    })
    */ 
   urls.push('http://student.mit.edu/catalog/m1c.html');
    urls.push('http://student.mit.edu/catalog/m2a.html');
    urls.push('http://student.mit.edu/catalog/m2b.html');
    urls.push('http://student.mit.edu/catalog/m2c.html');
    urls.push('http://student.mit.edu/catalog/m3a.html');
    urls.push('http://student.mit.edu/catalog/m3b.html');
    urls.push('http://student.mit.edu/catalog/m4a.html');
    urls.push('http://student.mit.edu/catalog/m4b.html');
    urls.push('http://student.mit.edu/catalog/m4c.html');
    urls.push('http://student.mit.edu/catalog/m4d.html');
    urls.push('http://student.mit.edu/catalog/m4e.html');
    urls.push('http://student.mit.edu/catalog/m4f.html');
    urls.push('http://student.mit.edu/catalog/m4g.html');
    urls.push('http://student.mit.edu/catalog/m5a.html');
    urls.push('http://student.mit.edu/catalog/m5b.html');
    urls.push('http://student.mit.edu/catalog/m6a.html');
    urls.push('http://student.mit.edu/catalog/m6b.html');
    urls.push('http://student.mit.edu/catalog/m6c.html');
    urls.push('http://student.mit.edu/catalog/m7a.html');
    urls.push('http://student.mit.edu/catalog/m8a.html');
    urls.push('http://student.mit.edu/catalog/m8b.html');
    urls.push('http://student.mit.edu/catalog/m9a.html');
    urls.push('http://student.mit.edu/catalog/m9b.html');
    urls.push('http://student.mit.edu/catalog/m10a.html');
    urls.push('http://student.mit.edu/catalog/m10b.html');
    urls.push('http://student.mit.edu/catalog/m11a.html');
    urls.push('http://student.mit.edu/catalog/m11b.html');
    urls.push('http://student.mit.edu/catalog/m11c.html');
    urls.push('http://student.mit.edu/catalog/m12a.html');
    urls.push('http://student.mit.edu/catalog/m12b.html');
    urls.push('http://student.mit.edu/catalog/m12c.html');
    urls.push('http://student.mit.edu/catalog/m14a.html');
    urls.push('http://student.mit.edu/catalog/m14b.html');
    urls.push('http://student.mit.edu/catalog/m15a.html');
    urls.push('http://student.mit.edu/catalog/m15b.html');
    urls.push('http://student.mit.edu/catalog/m15c.html');
    urls.push('http://student.mit.edu/catalog/m16a.html');
    urls.push('http://student.mit.edu/catalog/m16b.html');
    urls.push('http://student.mit.edu/catalog/m18a.html');
    urls.push('http://student.mit.edu/catalog/m18b.html');
    urls.push('http://student.mit.edu/catalog/m20a.html');
    urls.push('http://student.mit.edu/catalog/m22a.html');
    urls.push('http://student.mit.edu/catalog/m22b.html');
    urls.push('http://student.mit.edu/catalog/m22c.html'); 

//     urls.push('http://student.mit.edu/catalog/m1a.html');
//     urls.push('http://student.mit.edu/catalog/m1b.html');
//     urls.push('http://student.mit.edu/catalog/m1c.html');
//     urls.push('http://student.mit.edu/catalog/m2a.html');
//     urls.push('http://student.mit.edu/catalog/m2b.html');
//     urls.push('http://student.mit.edu/catalog/m2c.html');
//     urls.push('http://student.mit.edu/catalog/m3a.html');
//     urls.push('http://student.mit.edu/catalog/m3b.html');
//     urls.push('http://student.mit.edu/catalog/m4a.html');
//     urls.push('http://student.mit.edu/catalog/m4b.html');
//     urls.push('http://student.mit.edu/catalog/m4c.html');
//     urls.push('http://student.mit.edu/catalog/m4d.html');
//     urls.push('http://student.mit.edu/catalog/m4e.html');
//     urls.push('http://student.mit.edu/catalog/m4f.html');
//     urls.push('http://student.mit.edu/catalog/m4g.html');
//     urls.push('http://student.mit.edu/catalog/m5a.html');
//     urls.push('http://student.mit.edu/catalog/m5b.html');
//     urls.push('http://student.mit.edu/catalog/m6a.html');
//     urls.push('http://student.mit.edu/catalog/m6b.html');
//     urls.push('http://student.mit.edu/catalog/m6c.html');
//     urls.push('http://student.mit.edu/catalog/m7a.html');
//     urls.push('http://student.mit.edu/catalog/m8a.html');
//     urls.push('http://student.mit.edu/catalog/m8b.html');
//     urls.push('http://student.mit.edu/catalog/m9a.html');
//     urls.push('http://student.mit.edu/catalog/m9b.html');
//     urls.push('http://student.mit.edu/catalog/m10a.html');
//     urls.push('http://student.mit.edu/catalog/m10b.html');
//     urls.push('http://student.mit.edu/catalog/m11a.html');
//     urls.push('http://student.mit.edu/catalog/m11b.html');
//     urls.push('http://student.mit.edu/catalog/m11c.html');
//     urls.push('http://student.mit.edu/catalog/m12a.html');
//     urls.push('http://student.mit.edu/catalog/m12b.html');
//     urls.push('http://student.mit.edu/catalog/m12c.html');
//     urls.push('http://student.mit.edu/catalog/m14a.html');
//     urls.push('http://student.mit.edu/catalog/m14b.html');
//     urls.push('http://student.mit.edu/catalog/m15a.html');
//     urls.push('http://student.mit.edu/catalog/m15b.html');
//     urls.push('http://student.mit.edu/catalog/m15c.html');
//     urls.push('http://student.mit.edu/catalog/m16a.html');
//     urls.push('http://student.mit.edu/catalog/m16b.html');
//     urls.push('http://student.mit.edu/catalog/m17a.html');
//     urls.push('http://student.mit.edu/catalog/m17b.html');
//     urls.push('http://student.mit.edu/catalog/m18a.html');
//     urls.push('http://student.mit.edu/catalog/m18b.html');
//     urls.push('http://student.mit.edu/catalog/m20a.html');
//     urls.push('http://student.mit.edu/catalog/m21a.html');
//     urls.push('http://student.mit.edu/catalog/m21Aa.html');
//     urls.push('http://student.mit.edu/catalog/mCMSa.html');
//     urls.push('http://student.mit.edu/catalog/m21Ga.html');
//     urls.push('http://student.mit.edu/catalog/m21Gb.html');
//     urls.push('http://student.mit.edu/catalog/m21Gc.html');
//     urls.push('http://student.mit.edu/catalog/m21Gd.html');
//     urls.push('http://student.mit.edu/catalog/m21Ge.html');
//     urls.push('http://student.mit.edu/catalog/m21Gf.html');
//     urls.push('http://student.mit.edu/catalog/m21Gg.html');
//     urls.push('http://student.mit.edu/catalog/m21Gh.html');
//     urls.push('http://student.mit.edu/catalog/m21Gq.html');
//     urls.push('http://student.mit.edu/catalog/m21Gr.html');
//     urls.push('http://student.mit.edu/catalog/m21Gs.html');
//     urls.push('http://student.mit.edu/catalog/m21Ha.html');
//     urls.push('http://student.mit.edu/catalog/m21Hb.html');
//     urls.push('http://student.mit.edu/catalog/m21La.html');                        
//     urls.push('http://student.mit.edu/catalog/m21Ma.html');     
//    // urls.push('http://student.mit.edu/catalog/mWGSa.html');
//     urls.push('http://student.mit.edu/catalog/m22a.html');
//     // urls.push('http://student.mit.edu/catalog/m24a.html');   
//     // urls.push('http://student.mit.edu/catalog/mCCa.html');        
//     // urls.push('http://student.mit.edu/catalog/mCSBa.html');
//     // urls.push('http://student.mit.edu/catalog/mECa.html');
//     // urls.push('http://student.mit.edu/catalog/mEMa.html');
//     // urls.push('http://student.mit.edu/catalog/mESa.html'); 
//     // urls.push('http://student.mit.edu/catalog/mHSTa.html');                           
//     // urls.push('http://student.mit.edu/catalog/mIDSa.html');                             
//     // urls.push('http://student.mit.edu/catalog/mMASa.html');
//     // urls.push('http://student.mit.edu/catalog/mSCMa.html');
//     // urls.push('http://student.mit.edu/catalog/mASa.html');                  
//     // urls.push('http://student.mit.edu/catalog/mMSa.html');                     
//     // urls.push('http://student.mit.edu/catalog/mNSa.html');
//     // urls.push('http://student.mit.edu/catalog/mSTSa.html');
//     // urls.push('http://student.mit.edu/catalog/mSWEa.html');
//     // urls.push('http://student.mit.edu/catalog/mSPa.html');


    //he lists the urls: there has got to be a better way to get all those htmls with scraping 
    //he has a list of 46 
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
        var res = request('GET', url);
        console.log(res);
        var filename = './catalog/' + index + '.html';
        fs.writeFileSync(filename, res.body.toString()); 
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
    var urls = exercise.one();
    for (var i=0; i < urls.length; i++){
        files.push('./catalog/' + i + '.html'); //
        }

    files.forEach(function(file, index){
        var data = fs.readFileSync(file); //reading files in catalog folder
        console.log('adding ' + file + ' to catalog.txt');
        fs.appendFileSync('./catalog/catalog.txt', data); //write it to a single file 
        //it is writing to a single file now 
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
    //we are not creating this clean file 
    var data = fs.readFileSync('./catalog/catalog.txt');
    console.log('---=reading completed ---');
    //cleaning up the content 
    var scrubbed = minify(data.toString(),{
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
    }); 

    console.log('--- minify completed ---');
    var clean = scrubbed.replace(/'/g, ''); //if i have intermedate single quotes'' within text, things will break, so removing them 
  
    
    fs.writeFileSync('catalog/clean.txt', clean); //once done, write back out (its clean without those '')
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
    console.log(titles);

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
    //here is where I want to take out the ugly stuff 
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
    var junkWords = ['the', 'and', 'in', 'of', 'to', 'i', 'ii', 'an', 'j', 'with', 's','tht','as'];
    //console.log(wordsFlat);
    //var test = junkWords.includes('and');
    //console.log(test);
    
    var result = wordsFlat.filter(word =>  !(junkWords.includes(word)));
    console.log(result);
    return result; 
   // return wordsFlat;
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
    wordsFlat = exercise.eight();
    var scores = wordsFlat.reduce(function(previous, current){
        if(current in previous){
            previous[current] += 1;
        }
        else{
            previous[current] =1;
        }
        return previous; 
    },{})
    console.log(scores);
    fs.writeFileSync('catalog/finalResult.js', 'var scores = '+ JSON.stringify(scores));
    return scores;
     
};


module.exports = exercise;
