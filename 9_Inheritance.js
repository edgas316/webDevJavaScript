// === Inheritance is a setting up a prototypal chane of the objects === \\

// === Prototype chaining === \\
function SuperType(){
    this.property = true 
}

SuperType.prototype.getSuperValue = function(){
    return this.property
}

function SubType(){
    this.subproperty = false
}

// inherit from supertype
SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function(){
    return this.subproperty
}
var instance = new SubType()
console.log(instance.getSuperValue())// true
console.log(instance.getSubValue())// false
console.log(instance)
// so here we have this chain: 
// SubType => __proto__:SuperType => __proto__: SuperType.constructor... => __proto__:Object

// you can override existing methods..
SubType.prototype.getSuperValue = function(){
    return false
}

console.log(instance.getSuperValue())// false

// you can brake/nulify prototype chain
SubType.prototype = {
    getSubValue:function(){
        return this.subproperty
    },
    someotherMethod:function(){
        return false
    }
}
var instance = new SubType()
//  console.log(instance.getSuperValue())// Error: instance.getSuperValue is not a function...
//  Chain was broken so SubTypr is nto pointing to SuperType anymore but to Object()...

// But Prototype chaining has some issues...
function SuperIssue(){
    this.color = ["red", "blue", "green"] // a reference value...
}

function SubIssue(){}
SubIssue.prototype = new SuperIssue()
var instance1 = new SubIssue()
instance1.color.push("black")
console.log(instance1.color)// ["red", "blue", "green", "black"]
var instance2 = new SubIssue()
console.log(instance2.color)// ["red", "blue", "green", "black"]
//Because of this and some oter issues with reference values on the prototype, prototype chaining is rarely used alone.

// solve this issue use Constructor stealing pattern...

// === Consrtuctor Stealing === \\
// also sometimes called object masquerading or classical inheritance.
function SuperSteal(){
    this.color = ["red", "blue", "green"]
}

function SubSteal(){
    //inherit form SuperSteal
    SuperSteal.call(this)// or apply()
}

var instanceSteal1 = new SubSteal()
instanceSteal1.color.push("black")
console.log(instanceSteal1.color)// ["red", "blue", "green", "black"]
var instanceSteal2 = new SubSteal()
console.log(instanceSteal2.color)// ["red", "blue", "green"]

// you also can pass arguments..
function SuperArg(name){
    this.name = name
}
function SubArg(){
    SuperArg.call(this, "Edwin")
    this.age = 29
}
var instanceArg = new SubArg()
console.log(instanceArg.name)// Edwin
console.log(instanceArg.age)// 29
//The downside to using constructor stealing exclusively is that it introduces the same problems as the
//constructor pattern for custom types: methods must be defined inside the constructor, so there’s no
//function reuse. Furthermore, methods defined on the supertype’s prototype are not accessible on
//the subtype, so all types can use only the constructor pattern. 
// Because of these issues, constructor stealing is rarely used on its own.

// === Combination Inheritance === \\
// sometimes also called pseudoclassical inheritance...
// combines prototype chaining and constructor stealing...
function SuperComb(name){
    this.name = name
    this.colors = ["red", "blue", "green"]
}

SuperComb.prototype.sayName = function(){
    console.log("this is your name: " + this.name)
}

function SubComb(name, age){
    //inherit properties
    SuperComb.call(this, name)
    this.age = age
}

//inherit methods
SubComb.prototype = new SuperComb()

SubComb.prototype.sayAge = function(){
    console.log("This is your age: " + this.age)
}

var instanceComb1 = new SubComb("Marine", 25)
instanceComb1.colors.push("black")
console.log(instanceComb1.colors)// ["red", "blue", "green", "black"]
instanceComb1.sayName()// this is your name: Marine
instanceComb1.sayAge()// This is your age: 25

var instanceComb2 = new SubComb("David", 5)
console.log(instanceComb2.colors)// ["red", "blue", "green"]
instanceComb2.sayName()// this is your name: David
instanceComb2.sayAge()// This is your age: 5
console.log(instanceComb1)// SubComb {name: "Marine", colors: Array[4], age: 25}
console.log(instanceComb2)// SubComb {name: "David", colors: Array[3], age: 5}

// === Prototypal Inheritance === \\
function object(o){
    function F(){}
    F.prototype = o;
    return new F();
} // is the same as Object.create()

var pers = {
    name: "Marine",
    friends:["Gayush", "Karine", "Edwin"]
}

var anotherPers = Object.create(pers)
anotherPers.name = "Greg"
anotherPers.friends.push("Rob")

var yetAnotherPers = Object.create(pers)
yetAnotherPers.name = "linda"
yetAnotherPers.friends.push("Barbie")
console.log(pers.friends)// ["Gayush", "Karine", "Edwin", "Rob", "Barbie"]

// === Parasitic Inheritance === \\
function createAnother(original){
    var clone = Object.create(original)
    clone.sayHi = function(){
        console.log("hi")
    }
    return clone
}

var person = {
    name:"Edwin",
    friends: ["Marlen", "Hovo", "Timur"]
}

var anotherPerson = createAnother(person)
anotherPerson.sayHi()
console.log(anotherPerson)

// === Parasitic Combination Inheritance === \\

function inheritPrototype(subType, superType){
    var copyOfSuperType = Object.create(superType.prototype)  // create object
    copyOfSuperType.constructor = subType                     // augment object
    subType.prototype = copyOfSuperType                       // assign object
}

function SuperParazCombo(name){
    this.name = name
    this.colors = ["red", "blue", "green"]
}

SuperParazCombo.prototype.sayName = function(){
    console.log(this.name)
}

function SubParazCombo(name, age){
    SuperParazCombo.call(this, name)
    this.age = age
}

inheritPrototype(SubParazCombo, SuperParazCombo)

SubParazCombo.prototype.sayAge = function(){
    console.log(this.age)
}

var exper = new SubParazCombo("Edwin", 29)

exper.sayAge()// 29
console.log(exper.name)// Edwin
console.log(exper)// SubParazCombo {name: "Edwin", colors: Array[3], age: 29}
exper.colors.push("black")// 
var exper1 = new SubParazCombo()
console.log(exper1.colors)// ["red", "blue", "green"]
console.log(exper.colors)// ["red", "blue", "green", "black"]
console.log(Object.prototype.isPrototypeOf(exper))// true


// Composition / Concatinative Inheritance

var compose = function(f,g){
    return function(x){
        return g(f(x))
    }
}

var add1 = function(a){
    return a + 1
}

var times2 = function(a){
    return a * 2
}

var add1OfTimes2 = compose(add1, times2)
// Or ES6
const _compose = (f, g) => (x) => g(f(x))


















