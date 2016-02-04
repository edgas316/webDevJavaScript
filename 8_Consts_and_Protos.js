// Object Oriented Programming
// best practices...

// === Combination Constructor/Prototype Pattern === \\
function Person(name, age, job){
    this.name = name
    this.age = age
    this.job = job
    this.friends = []
}

Person.prototype = {
    constructor:Person,
    sayName:function(){
        return "Hello "+ this.name
    },
    addFriend:function(newFriend){
        this.friends.push(newFriend)
    }
}

var newPerson = new Person("Edwin", 36, "Web Developer")
newPerson.addFriend("Mike")
newPerson.addFriend("John")
newPerson.addFriend("Navroop")
console.log(newPerson.friends)
console.log(newPerson.name)
console.log(newPerson.sayName())

// === Dinamic Prototype Pattern === \\
function Dinamic(name, age, job){
    // properties
    this.name = name
    this.age = age
    this.job = job
    
    //mathods
    if(typeof this.sayName != "function"){
        Dinamic.prototype.sayName = function(){
            console.log( this.name)
        }
    }
}

var newDinamic = new Dinamic("Edwin", 27, "Software Engineer")
newDinamic.sayName()// Edwin

Dinamic.prototype.sayName = function(){console.log("This is your new name " + this.name)}
newDinamic.sayName()// This is your new name Edwin
// You cannot overwrite the prototype using an object literal when using 
// the dynamic prototype pattern. As described previously, overwriting a prototype
// when an instance already exists effectively cuts off that instance from the new prototype.

// === Parasitic Constructor Pattern === \\
//The parasitic constructor pattern is typically a fallback when the other patterns fail.
function Paraz(name, age, job){
    var o = new Object()
    o.name = name
    o.age = age
    o.job = job
    o.sayName = function(){
        console.log(this.name)
    }
    return o
}

var parazFriend = new Paraz("David", 4, "My Son")
parazFriend.sayName()
// This pattern allows you to create constructors for objects that may not be possible otherwise. For
// example, you may want to create a special array that has an extra method. Since you don’t have
// direct access to the Array constructor, this pattern works:
function SpecialArray(/*arguments*/){
    //create the array
    var values = new Array()
    
    //add the values
    values.push.apply(values, arguments)
    
    //assign the method
    values.toPipedString = function(){
        return this.join(" | ")
    }
    
    //return it
    return values
}
var colors = new SpecialArray("red", "blue", "green")
console.log(colors.toPipedString())// red | blue | green
console.log(colors)// ["red", "blue", "green"]

// === Durable Constructor Pattern === \\
function Durable(name, age, job){
    //create the object to return
    var o = new Object()
    //optional: define private variables/functions here
    
    //attach methods
    o.sayName = function(){
        console.log(name)
    }
    //return the object
    return o
}

var dur = new Durable("Edwin", 29, "Web developer")
dur.sayName()// Edwin
console.log(dur.name)// undefined






























