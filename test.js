var expression = function(){
	console.log('this is function expression')
}

function declaration(){
	console.log('this is function declaration')
}

function callSomeFunction(someFunction, someArgument){
	return someFunction(someArgument)
}

function getGreeting(name) {
	return "Hello, " + name
}

var myName = callSomeFunction(getGreeting, "Edwin")
console.log(myName)

function createComparison(prop){
	return function(arg1,arg2){
		var val1 = arg1[prop]
		var val2 = arg2[prop]
		if(val1<val2){
			return -1
		}else if(val1>val2){
			return 1
		}else{
			return 0
		}
	}
}

var obj = [{name:"Edwin", age:32},{name:"Marine", age:28}, {name:"marine", age:28}, {nane:"Marine1", age:28}, {name:"Marine2", age:28},{name:"Marine 1", age:28}]

function binarySearch(items, match){
	var low = 0,
		high = items.length -1

		while(low <= high){
			var mid = parseInt((low + high)/2)

			var current = items[mid]

			if(current > match){
				high = mid + 1
			}else if (current < match) {
				low = mid + 1
			}else{
				return mid
			}
		}
		return -1
	}