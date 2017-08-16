//  String Pattern-Matching Methods
//  match()
var text = "cat, bat, sat, fat"
var pattern = /.at/
var matches = text.match(pattern)
console.log(matches.index)// 0
console.log(matches[0])// cat
console.log(pattern.lastIndex)// 0

// search()
var pos = text.search(/at/)
console.log(pos)// 1

//replace()
var result = text.replace("at", "ond")
console.log(result)// cond, bat, sat, fat

result1 = text.replace(/at/g, "ond")
console.log(result1)//cond, bond, sond, fond

result2 = text.replace(/(.at)/g, "world ($1)")
console.log(result2)// world (cat), world (bat), world (sat), world (fat)

function htmlEscape(text){
    return text.replace(/[<>"&]/g, function(match, pos, originalText){
        switch(match){
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "\"":
                return "&quot";
                
        }
    });
}

console.log(htmlEscape("<p class=\"greeting\">Hello World!</p>"))

//split()
var color = "red,blue,green,yellow";
var colors1 = color.split(",")
var colors2 = color.split(",", 2)
var colors3 = color.split(/[^\,]+/)
console.log(colors1)// ["red", "blue", "green", "yellow"]
console.log(colors2)// ["red", "blue"]
console.log(colors3)// ["", ",", ",", ",", ""]

// localeCompare()
var stringValue = "yellow"
console.log(stringValue.localeCompare("black"))// 1
console.log(stringValue.localeCompare("yellow"))// 0
console.log(stringValue.localeCompare("zoo"))// -1

function determineOrder(value){
    var result = stringValue.localeCompare(value)
    if(result < 0){
        console.log("The String 'yellow' comes before the string '"+value+"'.")
    }else if(result > 0){
        console.log("The string 'yellow' comes after the string '"+value+"'.")
    }else{
        console.log("The string 'yellow' is equal to the string '"+value+"'.")
    }
}
determineOrder("brick")// The string 'yellow' comes after the string 'brick'.
determineOrder("yellow")// The string 'yellow' is equal to the string 'yellow'.
determineOrder("zoo")// The String 'yellow' comes before the string 'zoo'.



function toCamelCase(sentenceCase) {
    var out = "";
    sentenceCase.split(" ").forEach(function (el, idx) {
        var add = el.toLowerCase() || " ";
        var item = add[0].toUpperCase() + add.slice(1)
        out += (idx === 0 ? item : " " + item);
    });
    return out;
}
toCamelCase("hello there i am here");

var dateString = "2016-03-25T10:16:38.000+0000"
// if you yse this string with new Date() it will give undefined in IE
// because last 0000 should be 00:00
// so we need to add ":" to the string using this function

function addColumn(data) {                    
    console.log("ticket")
    var date = data
    date = new Date(date.substring(0, date.length-2) + ":" + date.substring(date.length-2))                    
    return date.toLocaleString()
}
addColumn(dateString)



var arrLower = new RegExp("[a-j]")
var arrUpper = new RegExp ("[ZMKPQ]")
var messagIinput = {val:"a b ab cd c d w x y Z M Za Mb Qcb Pbd Zjc YDj ZMp"}


function validateMessage(lower, upper, input){
    var splitedArr = input.val.split(" "),
        isolatedLowerValid = [],
        isolatedLowerInvalid = [],
        mixed = [],
        invalid = [],
        validMessage = [],
        enteredIsolatedValid
        
    splitedArr.forEach(function(item, index,array){
        if(item.length === 1 && lower.test(item)){
            isolatedLowerValid.push(item)
            validMessage.push(item)
        }else if(item.length > 1 && upper.test(item) && lower.test(item)){
            if(lower.test(item)){
                mixed.push(item)
                validMessage.push(item)
            }
        }else{
            invalid.push(item)
        }

    })

    console.log(isolatedLowerValid)    
    console.log(mixed)
    console.log(invalid)
    console.log(validMessage)    
}

// if(~item.indexOf('string')){
//     console.log('do something')
// }

function isPalindrom(str){
    var string = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'')
    var len = Math.floor(string.length/2)
    for(var i=0; i<len; i++)
        if(string[i] !== string[string.length - i-1])
            return false
    return true    
}
// ============================================
// find if parentheses are balanced
var findIfBalanced = function(str){
    var pattern = "(){}[]"
    var len = str.length/2
    var bul
    if(str.length % 2 != 0){
        return false
    }else{
        for(var i = 0; i<len; i++){
            if(pattern[pattern.indexOf(str[i]) + 1] !== str[str.length - i - 1]){
                bul = false
                break
            }else{
                bul = true
            }
        }
    }
    return bul  
}

// Better way
function parenthesesAreBalanced(string) {
    var parentheses = "[]{}()",
        stack = [],
        i, character, bracePosition;

    for(i = 0; character = string[i]; i++) {
        bracePosition = parentheses.indexOf(character);
        if(bracePosition === -1) {
            return false;
        }
        if(bracePosition % 2 === 0) {
            stack.push(bracePosition + 1); // push next expected brace position
        }else{
            if(stack.pop() !== bracePosition) {
                return false;
            }
        }
    }
    return stack.length === 0;
}


function isAnagram(a,b){
    let str1 = a.toLowerCase().replace(/[^a-zA-Z0-9]+/g,''),
        str2 = b.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'')
    if(str1.length !== str2.length){
        return false
    }
    function strToObj(str){
        let o = {}
        for(let i = 0; i < str.length; ++i){
            if(!o[str[i]]){                
                o[str[i]] = 1
            }else{
                o[str[i]]+=1
            }            
        }
        return o
    }
    let obj1 = strToObj(str1),
        obj2 = strToObj(str2)
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false
    }
    for(prop in obj1){
        if(!obj2[prop] || obj1[prop] !== obj2[prop]){
            return false
        }
    }
    return true
}




