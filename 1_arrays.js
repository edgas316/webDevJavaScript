// === Arrey manipulation === \\
var color = ["red", "blue", "black"]
color[color.length] = "brown" // this adds "brown" to the and of the array
color.push("new Color")// the same as previous...
console.log(color)// ["red", "blue", "black", "brown", "new Color"]
color[99] = "far color in the end"// adds a color in the position 99...!!!
console.log(color.length)// 100
console.log(color)// ["red", "blue", "black", "brown", "new Color", 99: "far color in the end"]
//color[4294967294] = "this is really the last color...;)"
console.log(color)// ["red", "blue", "black", "brown", "new Color", 99: "far color in the end", 4294967294: "far color in the end"]
console.log(color.length)// 4,294,967,295

if(color instanceof Array){
    console.log("this is array")
}
// OR Better...
if(Array.isArray(color)){
    console.log("This is an Array")
}

// === Conversion Methods === \\
// toString()
// toLocalString()
// valueOf()
console.log(color.toString())       // red,blue,black,brown,new Color,,,...far color in the end
console.log(color.valueOf())        // ["red", "blue", "black", "brown", "new Color", 99: "far color in the end"]
console.log(color.toLocaleString()) // red,blue,black,brown,new Color,,,...far color in the end
var count = color.push("purple", "yellow")
console.log(count)// 102
var item = color.pop()
console.log(item)// yellow
console.log(color.length)// 101

// === Queue Methods === \\
// shift() // deletes the first item in array
// unshift() // pushes red to the beginning of the array
var shiftArr = color.shift()// deletes the first item in array
console.log(shiftArr)// red
console.log(color.length)// 100
var add = color.unshift("red") // pushes red to the beginning of the array

// === Reordering Methods === \\
// reverce()
// sort()
color.reverse()
console.log(color)// ["purple", "far color in the end", 96: "new Color", 97: "brown", 98: "black", 99: "blue", 100: "red"]
color.sort()// working good with string values but not numeric values...
console.log(color)// ["black", "blue", "brown", "far color in the end", "new Color", "purple", "red"]
// better way to sort is using sort function 
function compare(value1,value2){
    if(value1 < value2){
        return -1
    }else if(value1 > value2){
        return 1
    }else{
        return 0
    }
}
color.push(1,5,3,8,3)
color.sort(compare)
console.log(color)// ["black", 1, "brown", "far color in the end", "new Color", "purple", "blue", 3, 3, 5, 8, "red"]

// === Manipulation Methods === \\
// slice()
var color2 = color.concat("pink", ["bordo", "murena"])
console.log(color)
console.log(color2)
color3 = color.slice(1)// creates an array starting from element 1 (excluding element 0) an on to the end of array...
color4 = color.slice(1,4)// creates an array starting from element 1 till element 3...!!! excludes 0 and 4 and all after 4...

// splice()
// deletion     ==  splice(0, 2) == deletes the first 2 items
// insertion    ==  splice(2, 0, "red", "green") inserts the string into the array at position 2
// replacement  ==  splice(2, 1, "red", "green") deletes one item at position 2 and then inserts the strings into the array at position 2
// First number is Where to start secont number How Many items to delete...

// === Location Methods === \\
// array.indexOf(item, start)        starts searching from the front of the array to the back/end
// array.lastIndexOf(item, start)   starts from the last item in the array and continues to the front.
console.log(color.indexOf("new Color", 3))      // 4 ... Gives -1 if can't find
console.log(color.lastIndexOf("new Color", 2))  // -1... Gives -1 if can't find

// === Iterative Methodes === \\
/* every()   —  Runs the given function on every item in the array and returns true if the function returns true for every item.*/
/* some()    —  Runs the given function on every item in the array and returns true if the function returns true for any one item.*/
/* filter()  —  Runs the given function on every item in the array and returns an array of all items for which the function returns true. 
                the function returns a new array consisting of those elements that satisfy the Boolean function. */
// map()     — Runs the given function on every item in the array and returns the result of each function call in an array.
// forEach() — Runs the given function on every item in the array. This method has no return value.

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

var everyResult = numbers.every(function(item, index, array){
    return (item > 2)
})
console.log(everyResult)// false

var someResult = numbers.some(function(item, index, array){
    return (item > 2)
})
console.log(someResult)// true

var filterResult = numbers.filter(function(item, index, array){
    return (item > 6 && item < 11)
})
console.log(filterResult)// [7, 8, 9, 10]
console.log(Array.isArray(filterResult))// true

var mapResult = numbers.map(function(item, index, array){
    return item *2
})
console.log(mapResult)// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28]

var arr = []
numbers.forEach(function(item, index, array){
    if(item > 2 && item < 9){
        arr.push(item)
    }
//    console.log(arr)
})
console.log(arr)// [3, 4, 5, 6, 7, 8]

// === Reduction Method === \\
// reduce()      starts at the first item and traveling toward the last
// reduceRight() starts at the last item and travels toward the first.

var sum = numbers.reduce(function(prev, cur, index, array){
    return prev + cur
})
console.log(sum)// 105

var sum2 = numbers.reduceRight(function(prev, next, index, array){
    return prev + next
})
console.log(sum2)// 105

// or
function sumUp(p,n){
    if(isNaN(p) && isNaN(n))
        return p + " " + n
    return p+n
}

var suumedUp = numbers.reduce(sumUp) // 105
// use to concatenate to string string
var words = ['the','quick','brouwn','fox']
var sentance = words.reduce(sumUp)


//============================================================================
//============================================================================
// Arrays
// Deep copy 
var arr = []
for(var i = 0; i<100; ++i){
    arr[i] = i+1
}

function arrDeepCopy(a,b){
    for(var i = 0; i<a.length; ++i){
        b[i] = a[i]
    }
}

var arrCopy = []
arrDeepCopy(arr, arrCopy)
arr[0] = 400
console.log(arrCopy[0])

// Acessor Functions
var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"]
var name = "David"

function findItemInArray(item, array){
    var position = array.indexOf(item)
    if(position >=0){
        console.log("Found " +item+" at position " + position)
    }else{
        console.log(item + " not found in the array")
    }
}

findItemInArray(name, names) // Found David at position 0

// Adding Element to an Array
// push() - adds element to the end of the array
// unshift() - adds element to the beginning of the array
names.unshift(1,2,3,4,5) // you can add as one as well as myltiple elements to the beginning of the array
// also you can use "length" property to add element to the array
names[names.length] = 456 // this will add "456" at the end of the array

// Removing elements from an Array
names.pop() // removes from the end
names.shift() // removes from the beginning
names.splice(2,0,"Edwin","Marine") // will incert two elements in hte middle at position 2 will delete 0 elements
names.splice(2,2) // Will remove two elements at position 2


// Creating Two-Dementional Array
Array.matrix = function(numrows, numcols, initial){
    var arr = []
    for(var i = 0; i < numrows; ++i){
        var colls = []
        for(var j = 0; j < numcols; ++j){
            colls[j] = initial
        }
        arr[i] = colls
    }
    return arr
}

var multiDementionalArray = Array.matrix(5,3,{name:"", value:""}) // this will create array of 5 arrays with 3 objects in each of them
/*[
    [{name:"", value:""},{name:"", value:""},{name:"", value:""}],
    [{name:"", value:""},{name:"", value:""},{name:"", value:""}],
    [{name:"", value:""},{name:"", value:""},{name:"", value:""}],
    [{name:"", value:""},{name:"", value:""},{name:"", value:""}],
    [{name:"", value:""},{name:"", value:""},{name:"", value:""}],
]*/

// Processing Two-Dementional Array
var multArr = []
arrDeepCopy(multiDementionalArray, multArr)
var total = 0;
var average = 0.0
var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];

function findAverage(arr, total, average){
    for(var row = 0; row < arr.length; ++row){
        for(var col = 0; col < arr[row].length; ++col){
            total += arr[row][col]
        }
        average = total / arr[row].length
        console.log('Student ' + parseInt(row+1) + " average " + average.toFixed(2))
        total = 0
        average = 0.0
    }
}

findAverage(grades, total, average)

