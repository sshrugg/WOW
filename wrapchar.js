/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var allText;
var lineTextArr;
var charTextArr = [];
var lcArr = [];
var shuffleLcArr = [];
var capsArr = [];
var shuffleCapsArr = [];
    
//read the file
readTextFile("wow.txt");
console.log('WOW');
//console.log(allText);

//shuffle up an alphabet
alphabet();
console.log('lc='+lcArr);
console.log('cypher='+shuffleLcArr);
console.log('caps='+capsArr);
console.log('cypher='+shuffleCapsArr);

//encode and clear cypher
wow();
console.log('Did I drop something?...');
console.log(allText);
console.log('lc='+lcArr);
console.log('cypher='+shuffleLcArr);
console.log('caps='+capsArr);
console.log('cypher='+shuffleCapsArr);

//split into lines
lineTextArr = allText.split("\n");


//split lines into characters
for (i = 0; i < lineTextArr.length; i++) {
    charTextArr[i] = lineTextArr[i].split("");
}

function wow() {
    //for each lowercase cypher
    for (i = 0; i < lcArr.length; i++) {
     for(j=0;j<allText.length;j++){   
         //replace all the letters in the message
        allText = allText.replace(lcArr[i], shuffleLcArr[i]);
    }
    }
    
    //for each uppercase cypher
    for (i = 0; i < capsArr.length; i++) {
     for(j=0;j<allText.length;j++){   
         //replace all the letters in the message
        allText = allText.replace(capsArr[i], shuffleCapsArr[i]);
    }
    }
    
    //whoops! heheh
    lcArr = [];
    shuffleLcArr = [];
    capsArr = [];
    shuffleCapsArr = [];
}

function alphabet() {
    var caps = '';
    var lc = '';

    //get cap letters
    for (var i = 65; i <= 90; i++) {
        caps += String.fromCharCode(i);
    }
    //get lc letters
    for (var i = 97; i <= 122; i++) {
        lc += String.fromCharCode(i);
    }
    //create array from caps
    capsArr = caps.split("");
    shuffleCapsArr = caps.split("");
    //shuffle caps
    shuffle(shuffleCapsArr);
    //create array from lc
    lcArr = lc.split("");
    shuffleLcArr = lc.split("");
    //shuffle lc
    shuffle(shuffleLcArr);
    
    }

function shuffle(array) {
    var shuffledarray;
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if (rawFile.readyState === 4)
        {
            if (rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    };
    rawFile.send(null);
}