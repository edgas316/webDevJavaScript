Array.prototype.asyncPrintArray = function () {
  for (var i = 0; i < this.length; i++ ) {
    (function(j) {
      setTimeout(function() {
        console.log("j = " + this[j])
      }.bind(this), 0)
    }.bind(this))(i)
  }
};
// OR
Array.prototype.asyncPrintArrayNoBind = function(){
	for(var i = 0; i < this.length; ++i){
		((j)=>{
			setTimeout(() => {
				console.log(this[j])
			})
		})(i)
	}
}

//==================================================
//Bind
// Bind fallback for older brousers
// Credit to Douglas Crockford for this bind method​
if (!Function.prototype.bind) {
	Function.prototype.bind = function (oThis) {
		if (typeof this !== "function") {
			// closest thing possible to the ECMAScript 5 internal IsCallable function​
			throw new TypeError ("Function.prototype.bind - what is trying to be bound is not callable");
		}		​
		var aArgs = Array.prototype.slice.call(arguments, 1),
		fToBind = this,
		fNOP = function(){},
		fBound = function(){
			return fToBind.apply(this instanceof fNOP && oThis	? this​ : oThis,
			aArgs.concat(Array.prototype.slice.call (arguments)));
		};		​
		fNOP.prototype = this.prototype;
		fBound.prototype = new fNOP ();		​
		return fBound;
	};
}
//=========================================
var user = {
	data:[
		{name:"T.Woods", age:37},
		{name:"P.Mickelson", age:43}
	],

	clickHandler:function(event){
		var randomNum = ((Math.random() * 2 | 0) + 1) - 1 // random number betwin 0 and 1
		$('input').val(this.data[randomNum].name + ' ' + this.data[randomNum].age)
	}
}

// this will throw an error because "this" - is a button itself not the user object...
$('button').click(user.clickHandler) 
$('button').click(user.clickHandler.bind(user))


// This data variable is a global variable​
var data = [
    {name:"Samantha", age:12},
    {name:"Alexis", age:14}
]
var user = {
    // local data variable​
    data:[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
    ],
    showData:function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​​
        console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
    }
}
// Assign the showData method of the user object to a variable​
var showDataVar = user.showData;
showDataVar(); // Samantha 12 (from the global data array, not from the local data array)​

// to fix this we have to use Bind
var showDataVar = user.showData.bind (user);
showDataVar (); // P. Mickelson 43

// we can barrow the method 
var cars = {
	data:[{name:"Honda", age:14}, {name:"Jaguar", age:2}]
}

cars.showData = user.showData.bind(cars)
cars.showData()

// Using Bind to Curry a Function
function greet(gender, age, name){
	var salutation = gender === 'male' ? 'Mr.':'Ms.'

	if(age > 37){
		return "Hello, " + salutation + name + "."
	}else{
		return "Hey, " + name + "."
	}
}

var greetAtAdultMale = greet.bind(null, 'male', 36)
greetAtAdultMale('Edwin')
var greetAYoungster = greet.bind (null, "", 16);
greetAYoungster ("Alex"); // "Hey, Alex."​
greetAYoungster ("Emma Waterloo"); // "Hey, Emma Waterloo."​

// Call method
var avgScore = "Global avgScore"
function avg(arrayOfScores){
	var sumOfScores = arrayOfScores.reduce(function(prev, next){
		return prev+next
	})
	this.avgScore = sumOfScores/arrayOfScores.length
}

var gameController = {
	scores:[20, 34, 55, 77],
	avgScore:null
}

avg(gameController.scores)
console.log(avgScore) // will return 46.5
console.log(gameController.avgScore) // will return null

//to fix this we can use call
avg.call(gameController, gameController.scores)

// Use Call or Apply To Set this in Callback Functions
var clientData = {
	id:098345,
	fullName:'Not Set',
	setUserName:function(firstName, lastName){
		this.fullName = firstName + " " + lastName
	}
} 

function getUserInput(firstName, lastName, callback, callbackObj){
	callback.apply(callbackObj, [firstName, lastName])
}

// The clientData object will be used by the Apply method to set the "this" value​
getUserInput ("Barack", "Obama", clientData.setUserName, clientData);
// the fullName property on the clientData was correctly set​
console.log (clientData.fullName); // Barack Obama​
//======================================

function foo(one, two, three){
	console.log(two)
}

var arr = [1,2,3]

foo(arr)// gives undefind
//but
foo.apply(null, arr)// logs 2