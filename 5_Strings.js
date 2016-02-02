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
