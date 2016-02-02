// Object creation
var perosn = {
    name:"Edwin",
    age:36,
    job:"Software Engineer",
    sayName: function(){
        console.log(this.name)
    }
};

// Types of properties

// Data properties
// [[Configurable]]
// [[Enumerable]]
// [[Writable]]
// [[Value]]
var dataProperty = {}
Object.defineProperty(dataProperty, "name",{
    configurable:true,
    enumerable:true,
    writable:true,
    value:"Edwin"
})

console.log(dataProperty.name)
dataProperty.name = "Greg"
console.log(dataProperty.name)

// Accessor Properties
// [[Configurable]]
// [[Enumerable]]
// [[Get]]
// [[Set]]
var book = {
    _year:2004,
    edition:1
}

Object.defineProperty(book, "year", {
    configurable:true,
    enumerable:true,
    get:function(){
        return this._year
    },
    set:function(value){
        if(value>2004){
            this._year = value
            this.edition+=value-2004
        }
    }
})

book.year = 2005
console.log(book.edition)//2

// === Object Ctration Patterns === \\
// Factory Pattern

function createPerson(name, age, job){
    var o = new Object()
    o.name = name
    o.age = age
    o.job = job
    o.sayName = function(){
        return this.name + " is working as " + this.job
    }
    return o
}

var person1 = createPerson("Edwin", 29, "Software Engineer")
var person2 = createPerson("Greg", 27, "Sistem Administrator")
console.log(person1.sayName())

// Constructor Pattern
function Person(name, age, job){
    this.name = name
    this.age = age
    this.job = job
    this.sayInfo = function(){
        return this.name + " is working as a " + this.job
    }
}

var newPerson = new Person("Edwin Gasparian", 36, "Front End Web Developer")
console.log(newPerson.name)
console.log(newPerson.sayInfo())

// Prototype Pattern
function PersonProto(){}
PersonProto.prototype.name = "Edwin"
PersonProto.prototype.age = 36
PersonProto.prototype.job = "Software Developer"
PersonProto.prototype.sayInfo = function(){
    return this.name + " is a good " + this.job
}
var newPersonProto = new PersonProto()
console.log(newPersonProto.sayInfo())
console.log(Object.getPrototypeOf(newPersonProto))// PersonProto {name: "Edwin", age: 36, job: "Software Developer"}
console.log(PersonProto.prototype.isPrototypeOf(newPersonProto))// true