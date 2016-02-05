// === Recursion === \\
// A recursive function typically is formed when a 
// function calls itself by name, as in the following example:
var factorial = (function f(num){
    if(num <=1){
        return 1
    }else{
        return num * f(num-1)
    }
})
var anotherFactorial = factorial
factorial = null
console.log(anotherFactorial(5))// error!

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

var compareNames  = createComparisonFunction("name")
var result        = compareNames({name:"Edwin"}, {name:"Marine"})
compareNames      = null

// ========================================
function celebrityName(firstName){
    var nameIntro = "This celebrity is "
    function fullName(theLastName){
        return nameIntro + firstName + " " + theLastName
    }
    return fullName
}
var mjName = celebrityName("Michael")
var fullname = mjName("Jackson")
console.log(fullname)
console.log(mjName)
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
    var i;
    var uniqueID = 100
    for(i=0; i<theCelebrities.length; i++){
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
var stalloneID = createIdForActionCelebs[0]
console.log(stalloneID.id)// 100
var cruiseID = createIdForActionCelebs[1];
console.log(cruiseID.id)// 101