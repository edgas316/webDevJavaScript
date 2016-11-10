// Stacks
function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function peek() {
	return this.dataStore[this.top-1];
}

function pop() {
	return this.dataStore[--this.top];
}

function clear() {
	this.top = 0;
}

function length() {
	return this.top;
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length()); // length: 3
console.log(s.peek()); // Bryan

var popped = s.pop();
console.log("The popped element is: " + popped); // The popped element is: Bryan
console.log(s.peek()); // Raymond

s.push("Cynthia");
console.log(s.peek()); // Cynthia

s.clear();
console.log("length: " + s.length()); // length: 0
console.log(s.peek()); // undefined

s.push("Clayton");
console.log(s.peek()); // Clayton

// Using the Stack Class
// Multiple Base Convention
// works only with base 2 through 9
function mulBase(num, base){
	var s = new Stack()
	do{
		s.push(num % base)
		num = Math.floor(num /= base)
	}while(num > 0)
	var converted = ''
	while(s.length() > 0){
		converted += s.pop()
	}
	return converted
}

var num = 32
var base = 2
var newNum = mulBase(num, base)
console.log(num + " converted to base " + base + " is " + newNum) // 32 converted to base 2 is 100000
num = 125
base = 8
newNum = mulBase(num, base)
console.log(num + " converted to base " + base + " is " + newNum) // 125 converted to base 8 is 175


// Palindrome
function isPalindrom(word){
	var s = new Stack()
	for(var i = 0; i < word.length; ++i){
		s.push(word[i])
	}
	var rword = ''
	while(s.length() > 0){
		rword += s.pop()
	}
	if(word == rword){
		console.log(word + " is Palindrome")
	}else{
		console.log(word + " is not Palindrome")
	}
}

// calculate factorial using Recursion

function factorial(n) {
	if(n === 0){
		return 1
	}else{
		return n * factorial(n-1)
	}
}

// Simulating recursive using stack

function fact(n){
	var s = new Stack()
	while(n > 1){
		s.push(n--)
	}
	var product = 1
	while(s.length() > 0){
		product *= s.pop()
	}
	return product
}