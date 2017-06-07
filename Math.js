// min() and max()
var max = Math.max(3,35,57,15)
console.log(max)
var min = Math.min(3,35,57,15)
console.log(min)

var values = [1,2,3,4,5,6,7,8,9]
var maxVal = Math.max.apply(Math, values)
console.log(maxVal)

// Rounding Methods
// Math.ceil() Math.floor(), Math.round()
console.log(Math.ceil(25.9))// 26
console.log(Math.ceil(25.5))// 26
console.log(Math.ceil(25.1))// 26

console.log(Math.round(25.9))// 26
console.log(Math.round(25.5))// 26
console.log(Math.round(25.1))// 25

console.log(Math.floor(25.9))// 25
console.log(Math.floor(25.5))// 25
console.log(Math.floor(25.1))// 25

// random()
// formula: number = Math.floor(Math.random() * total_number_of_choices + first_possible_value)
var num = Math.floor(Math.random() * 10 + 1)
console.log(num)

// using function
function selectFrom(lowerValue, upperValue){
    var choices = upperValue - lowerValue + 1
    return Math.floor(Math.random() * choices + lowerValue)
}

var num1 = selectFrom(2,10)
console.log(num1)

// other methods
Math.abs(num)// Returns the absolute value of (num )
Math.exp(num)// Returns Math.E raised to the power of (num )
Math.log(num)// Returns the natural logarithm of (num )
Math.pow(num, power)// Returns num raised to the power of power
Math.sqrt(num)// Returns the square root of (num )
Math.acos(x)// Returns the arc cosine of x
Math.asin(x)// Returns the arc sine of x
Math.atan(x)// Returns the arc tangent of x
Math.atan2(y, x)// Returns the arc tangent of y/x
Math.cos(x)// Returns the cosine of x
Math.sin(x)// Returns the sine of x
Math.tan(x)// Returns the tangent of x