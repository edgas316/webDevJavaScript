// Save type detection
function isArray(value){
    return Object.prototype.toString.call(value) == "[object Array]"
};

function isFunction(value){
    return Object.prototype.toString.call(value) == "[object Function]"
};

function isRegExp(value){
    return Object.prototype.toString.call(value) == "[object RegExp]"
};

var isNativeJSON = window.JSON && Object.prototype.toString.call(JSON) == "[object JSON]";

// Scope Safe Constructor
function Person(name, age, job){
    if(this instanceof Person){
        this.name = name
        this.age = age
        this.job = job
    }else{
        return new Person(name, age, job)
    }
}

var person = Person("Edwin", 32, "Web Developer");
console.log(window.name); // ""
console.log(person.name); // Edwin

function Poligon(sides){
    if(this instanceof Poligon){
        this.sides = sides
        this.getArea = function(){
            return 0
        }
    }else{
        return new Poligon(sides)
    }
}

function Rectangle(width, height){
    Poligon.call(this, 2)
    this.width = width
    this.height = height
    this.getArea = function(){
        return this.width + this.height
    }
};
Rectangle.prototype = new Poligon();
var rect = new Rectangle(5,10);
console.log(rect.sides);

// Lazy Loading Function
var createXHR = (function(){
    if(typeof XMLHttpRequest != "undefined"){
        return function(){
            return new XMLHttpRequest()
        }
    }else if(typeof ActiveXObject != "undefined"){
        return function(){
            if(typeof arguments.callee.activeXString != "string"){
                var version = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
                    i, len;
                for(i=0, len=version.length; i<len; i++){
                    try{
                        new ActiveXObject(version[i])
                        arguments.callee.activeXString = version[i]
                        break
                    }catch (ex){
                        
                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString)
        }
    }else{
        return function(){
            throw new Error("No XHR object available")
        }
    }
})();

// Function Binding

    var handler = {
        message:"Event handled",
        handleClick:function(event){
            console.log(this.message + " " + event.type)
        }
    }
    var btn = document.getElementById("my-btn")
    EventUtil.addHandler(btn, "click", handler.handleClick.bind(handler))


// Functiont Currying
function curry(fn){
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments),
            finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs);
    };
}

function add(num1, num2){
    return num1+num2
}

var currieAdd = curry(add, 5);
console.log(currieAdd(8));
var currieAdd2 = curry(add, 10, 12)
console.log(currieAdd2())


































