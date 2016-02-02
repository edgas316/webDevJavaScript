//Three supported fl ags represent matching modes, as follows:
//g — Indicates global mode, meaning the pattern will be applied to all of the string instead of stopping after the fi rst match is found.
//i — Indicates case-insensitive mode, meaning the case of the pattern and the string are ignored when determining matches.
//m — Indicates multiline mode, meaning the pattern will continue looking for matches after reaching the end of one line of text.

// Match all instances of "at" in a string
var pattern1 = /at/g

// Matches the first instance of "bat" or "cat", regardless of case
var pattern2 = /[bc]at/i
// Matches all three-character combinations ending with "at", regardless of case.
var pattern3 = /.at/gi


/*
* Match the first instance of ”[bc]at”, regardless of case.
*/
var pattern4 = /\[bc\]at/i;

/*
* Match all instances of ”.at”, regardless of case.
*/
var pattern5 = /\.at/gi;

var re = null
var i 

for(i=0; i<10; i++){
    re = /cat/g
    re.test("catastrophe")
}

for(i=0; i<10; i++){
    re = new RegExp("cat", "g")
    re.test("catastrophe")
}


var patt1 = /\[bc\]at/i;
console.log(patt1.global);      //  false
console.log(patt1.ignoreCase);  //  true
console.log(patt1.multiline);   //  false
console.log(patt1.lastIndex);   //  0
console.log(patt1.source);      //  \[bc\]at

var patt2 = new RegExp("\\[bc\\]at", "i");
console.log(patt2.global);      //  false
console.log(patt2.ignoreCase);  //  true
console.log(patt2.multiline);   //  false
console.log(patt2.lastIndex);   //  0
console.log(patt2.source);      //  \[bc\]at


// === RegExp Instance Methods === \\
// exec(string)
var text = "mom and dad and baby"
var patt = /mom( and dad( and baby)?)?/gi

var matches = patt.exec(text)
console.log(matches.index)  // 0
console.log(matches.input)  // mom and dad and baby
console.log(matches[0])     // mom and dad and baby
console.log(matches[1])     //  and dad and baby
console.log(matches[2])     //  and baby

var text1 = "cat, bat, sat, fat";

var patt1 = /.at/;
var matches1 = patt1.exec(text1);
console.log(matches1.index); //0
console.log(matches1[0]); //cat
console.log(patt1.lastIndex); //0

matches = patt1.exec(text1);
console.log(matches1.index); //0
console.log(matches1[0]); //cat
console.log(patt1.lastIndex); //0

var patt2 = /.at/g;
var matches2 = patt2.exec(text1);
console.log(matches2.index); //0
console.log(matches2[0]); //cat
console.log(patt2.lastIndex); //3

matches2 = patt2.exec(text1);
console.log(matches2.index); //5
console.log(matches2[0]); //bat
console.log(patt2.lastIndex); //8

// test(string)
// accepts a string argument and returns true if the pattern matches the argument 
// and false if it does not. This method is useful when you want to know if a pattern is matched, 
// but you have no need for the actual matched text.
var testText = "(000)-000-0000";
var testPattern = /\(\d{3}\)-\d{3}-\d{4}/;
if (testPattern.test(testText)){
    console.log("The pattern was matched.");
}else{
    console.log("The pattern didn't matche.")
}// The pattern was matched.


var texttest = "this has been a short summer"
var pattern = /(.)hort/g
if(pattern.test(texttest)){
    console.log(RegExp.$_)      //this has been a short summer
    console.log(RegExp["$`"])   //this has been a 
    console.log(RegExp["$'"])   // summer
    console.log(RegExp["$&"])   //short
    console.log(RegExp["$+"])   //s
    console.log(RegExp["$*"])   //undefined
}


















