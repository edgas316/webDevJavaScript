// function declaration and function expression
var expression = function(){
    console.log("this is a function expression")
}
expression()// if you call function expression before it is defined it will cause an error...

declaration()// you can call the function declaration even before it is created
function declaration(){
    console.log("this is a function declaration")
}

// Functions as values
function callSomeFunction(someFunction, someArgument){
    return someFunction(someArgument)
}
function add10(num){
    return num + 10
}

var result1 = callSomeFunction(add10, 10)
console.log(result1)// 20

function getGreeting(name){
    return "Hello, "+name
}

var myName = callSomeFunction(getGreeting, "Edwin")
console.log(myName)

// ==========================================
function createComparison(propertyName, direction){
    return function(obj1, obj2){
        var value1 = obj1[propertyName]
        var value2 = obj2[propertyName]
        
        if(value1<value2){
            return direction ? -1 : 1
        }else if(value1>value2){
            return direction ? 1 : -1
        }else{
            return 0
        }
    }
}

var data = [{name:"Edwin", age:36}, {name:"Marine", age:29}, {name:"David", age:5}]

data.sort(createComparison("name"))// sort by name
console.log(data)
//data.sort(createComparison("age"))// sort by age
console.log(data)

// fuctorial function..
function factorial(num){
    if(num<=1){
        return 1
    }else{
        return num * factorial(num-1)
    }
}

var trueFactorial = factorial
console.log(trueFactorial(5))// 120
console.log(factorial(5))// 120
factorial = function(){
    return 0
}

console.log(trueFactorial(5))// 0
console.log(factorial(5))// 0

function outer(){
    inner()
}

function inner(){
    console.log(inner.caller)       // function outer(){inner()}
    console.log(arguments.callee)   // function inner(){console.log(inner.caller) 
                                    //console.log(arguments.callee)console.log(arguments.callee.caller)}
    console.log(arguments.callee.caller)// // function outer(){inner()}
}
outer()


// Callback Functions
function getUserInput(firstName, lastName, gender, callback){
    var fullName = firstName+" "+lastName
    if(typeof callback === 'function'){
        callback(fullName, gender)
    }
}

function genericPoemMaker(name, gender){
    console.log(name + " is finer than fine wine.");
    console.log("Altruistic and noble for the modern time.");
    console.log("Always admirably adorned with the latest style.");
    console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile");
}
getUserInput("Michael", "Fassbender", "Man", genericPoemMaker);

function greetUser(customerName, sex){
    var salutation = sex && sex === "Man"?"Mr":"Ms"
    console.log("Hello, "+salutation+" "+customerName)
}
getUserInput("Bill", "Gates","Man",greetUser)

//=============================================
//promice function
function asyncRequest() {
  // your code here
  return Promise(
    resolve("OK"))
  
  
}

