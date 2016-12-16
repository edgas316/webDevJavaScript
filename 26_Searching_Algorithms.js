// Sequential serch
// with self organisation 

// util function 
function swap(arr, index1, index2){
	var temp = arr[index1]
	arr[index1] = arr[index2]
	arr[index2] = temp
}

function seqSearch(arr, data){
	for(var i = 0; i < arr.length; ++i){
		if(arr[i] == data && i > (arr.length * 0.2)){
			swap(arr, i, 0)
			return true
		}else if(arr[i] == data){
			return true
		}
	}
	return false
}

//========================================================
// Binary Search

function binSearch(arr, data){
	var upperBound = arr.length-1
	var lowerBound = 0
	while(lowerBound <= upperBound){
		var mid = Math.floor((upperBound + lowerBound) / 2)
		if(arr[mid] < data){
			upperBound = mid-1
		}else{
			return mid
		}
	}
	return -1
}