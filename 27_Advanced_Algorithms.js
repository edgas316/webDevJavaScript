// Fibonachi sequence
// not efficient !!!
function recurFib(n){
	if(n<2){
		return n
	}else{
		return recurFib(n-1) + recurFib(n-2)
	}
}


// More efficient dynamic function 
function dynFib(n){
	var val = []
	if(n == 0){ 
		return 0
	}else if(n == 1 || n == 2){
		return 1
	}else{
		for(var i = 0; i <= n; ++i){
			val[i] = 0
		}
		val[1] = 1
		val[2] = 2
		for(var i = 3; i <= n; ++i){
			val[i] = val[i-1] + val[i-2]
		}
		return val[n-1]
	}
}

// Fibonachi without using array
function iterFib(n){
	if(n == 0){
		return n
	}
	var last = 1,
		next = 1,
		result = 1
	for(var i = 2; i < n; ++i){
		result = last + next
		next = last
		last = result
	}
	return result
}