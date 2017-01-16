// === Recursion === \\
// A recursive function typically is formed when a 
// function calls itself by name, as in the following example:
var factorial = (function f(num){
    if(num <=1){
        return 1
    }else{
        return num * f(num-1)
    }
});
var anotherFactorial = factorial;
//console.log(anotherFactorial(5))
factorial = null;
console.log(anotherFactorial(5));// error!

// === Closures === \\
// The terms anonymous functions and closures are often incorrectly used interchangeably. Closures
// are functions that have access to variables from another function’s scope. This is often accomplished
// by creating a function inside a function

function createComparisonFunction(propertyName){
    return function(obj1, obj2){
        var val1 = obj1[propertyName]
        var val2 = obj2[propertyName]
        if(val1 < val2){
            return -1
        }else if(val1 > val2){
            return 1
        }else{
            return 0
        }
    }
}

var data = [{name:"Edwin", age:36, id:1}, {name:"Marine", age:29, id:2}, {name:"David", age:5, id:3}]
data.sort(createComparisonFunction("age"))
console.log(data)

console.log(createComparisonFunction)// function createComparisonFunction(...){...}
var compareNames  = createComparisonFunction("name")
console.log(compareNames)// function(obj1, obj2){...}
var result        = compareNames({name:"Edwin"}, {name:"Marine"})
console.log(result)// -1
compareNames      = null

// ========================================
function celebrityName(firstName){
    var nameIntro = "This celebrity is "
    function fullName(theLastName){
        return nameIntro + firstName + " " + theLastName
    }
    return fullName
}
console.log(celebrityName)// function celebrityName(...){...}
var mjName = celebrityName("Michael")
console.log(mjName)// function fullName(...){...}
var fullname = mjName("Jackson")
console.log(fullname)// This celebrity is Michael Jackson

// =======================================
function celebrityID(){
    var celebrityID = 999
    return {
        getID:function(){
            return celebrityID
        },
        setID:function(theNewID){
            celebrityID = theNewID
        }
    }
}

var mjID = celebrityID()
console.log(mjID.getID())// 999
mjID.setID(567)
console.log(mjID.getID())// 567
// ========================================
function celebrityIDCreator(theCelebrities){
    var i, 
        uniqueID = 100, 
        len = theCelebrities.length
    
    for(i=0; i<len; i++){
        console.log(i)
        theCelebrities[i]["id"] = function(j){
            return function(){
                return uniqueID + j
            }()
        }(i)
    }
    return theCelebrities
}
var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}]

var createIdForActionCelebs = celebrityIDCreator(actionCelebs)
console.log(createIdForActionCelebs)// [Object, Object, Object]
var stalloneID = createIdForActionCelebs[0]
console.log(stalloneID)// Object {name: "Stallone", id: 100}
console.log(stalloneID.id)// 100
var cruiseID = createIdForActionCelebs[1];
console.log(cruiseID)// Object {name: "Cruise", id: 101}
console.log(cruiseID.id)// 101

// Closures and variables
function createFunctions(){
    var result = new Array()// result = [function function,...]; result = Array[10]
    for (var i = 0; i<10; i++){// i=10
        result[i] = function(){// result = Array[10]
            return i
        }
    }
    return result
}
console.log(createFunctions())// function (){return i}
var func = createFunctions()
console.log(func)

function createFunction1(){
    var result = new Array()// result = []; result = [function function, function function,...]
    for (var i = 0; i<10; i++){ // i=0
        result[i] = function(num){ // num=0-10; result = [function function, function function,...]
            return function(){
                return num //num = 0-10
            }
        }(i)
    }
    return result
}
console.log(createFunction1())// function (){return num}
var func1 = createFunction1()
console.log(func1)
var cel = func1[1]
console.log(cel)
var ex = cel(1)
console.log(ex)

// Preventing memory leaks...
// assigning handler to any element...
function assignHandler(element){
    var element = document.getElementById(element)
    var id = element.id
    element.onclick = function(){
        alert(id)
    }
    element = null
}
assignHandler("newId")

// Mimicking block scope
function outputNumbers(count){
    (function(){
        for(var i =0; i<count; i++){
            console.log(i)
        }
    })()
//    console.log(i)// Error... i is not defined... because it is destroed as soon as loop ends...
};
outputNumbers(5);

(function(){
    var now = new Date()
    if(now.getMonth() === 1 && now.getDate() === 5){
        console.log("Happy Friday!!!")
    }
})();

// Private Variables
function MyObject(){
    var privateVariable = 10
    function privateFunction(){
        return false
    }
    
    // privileged method
    this.publicMethod = function(){
        privateVariable++
        return privateFunction()
    }
};
var meth = new MyObject()
console.log(meth.publicMethod())// false

//======================
function Person(name){
    this.getName = function(){
        return name
    }
    this.setName = function(value){
        name = value
    }
}
var person = new Person("Edwin")
console.log(person.getName())
person.setName("Greg")
console.log(person.getName());

// Static Private Variables
(function(){
    var priveVar = 10
    
    function priveFunc(){
        return false
    }
    
    //constructor
    MyObj = function(){}
    
    //public and privileged methods
    MyObj.prototype.publicMethod = function(){
        priveVar++
        return priveFunc()
    }
})();

var newObj = new MyObj()
console.log(newObj);

(function(){
    var name = ""
    PersonStat = function(value){
        name = value
    }
    
    PersonStat.prototype.getName = function(){
        return name
    }
    
    PersonStat.prototype.setName = function(value){
        name = value
    }
})();

var pers1 = new PersonStat("Edwin")
console.log(pers1.getName())
pers1.setName("Marine")
console.log(pers1.getName())

var pers2 = new PersonStat("David")
console.log(pers2.getName())
console.log(pers1.getName())


// === Module Pattern === \\
//var singleton = {
//    name:value,
//    method:function(){
//        // method code here
//    }
//};

var singleton2 = function(){
    //private variables and fcuntions
    var privateVar = 10
    function privateFunc(){
        return false
    }
    
    // privileged/public methods and properties
    return{
        publicProperty:true,
        publicMethod:function(){
            privateVar++
            return privateFunc()
        }
    }
}();
//===============================================
function BaseComponent(){}
var application = function(){
    var components = new Array();
    components.push(new BaseComponent());
    
    return {
        getComponent:function(){
            return components.length
        },
        registerComponent: function(component){
            if(typeof component == "object"){
                component.push(component)
            }
        }
    };
}();
console.log(application)

// Module Augmentation pattern
var singletonAugment = function(){
    var privV = 10
    function privF(){
        return false
    }
    function CustomType(){}
    var object = new CustomType()
    
    object.publProp = true
    
    object.publicMethod = function(){
        privV++
        return privF()
    }
    
    return object
}();

var newCust
console.log(singletonAugment)
























