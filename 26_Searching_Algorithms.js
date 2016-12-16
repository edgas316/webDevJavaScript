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

function binSearch(arr, data) {
	var upperBound = arr.length-1;
	var lowerBound = 0;
	while (lowerBound <= upperBound) {
		var mid = Math.floor((upperBound + lowerBound) / 2);
		if (arr[mid] < data) {
			lowerBound = mid + 1;
		}else if (arr[mid] > data) {
			upperBound = mid - 1;
		}else {
			return {
				index:mid,
				value:arr[mid]
			}
		}
	}
	return -1;
}

function count(arr, data){
	var count = 0, positionInTheArray = [], position = binSearch(arr, data).index
	if(position > -1){
		positionInTheArray[position] = arr[position]
		++count
		for (var i = position - 1; i > 0; --i) {
			if(arr[i] == data){
				positionInTheArray[i] = arr[i]
				++count
			}else{
				break
			}
		}
		for (var i = position + 1; i < arr.length; ++i) {
			if(arr[i] == data){
				positionInTheArray[i] = arr[i]
				++count
			}else{
				break
			}
		}
	}
	return {
		accurances:count,
		positionInTheArray:positionInTheArray
	}
}


//========================================================
// Searching Textual Data
var str = "The nationalism of Hamilton was undemocratic. The democracy of Jefferson was, in the beginning, provincial. The historic mission of uniting nationalism and democracy was in the course of time given to new leaders from a region beyond the mountains, peopled by men and women from all sections and free from those state traditions which ran back to the early days of colonization. The voice of the democratic nationalism nourished in the West was heard when Clay of Kentucky advocated his American system of protection for industries; when Jackson of Tennessee condemned nullification in a ringing proclamation that has taken its place among the great American state papers; and when Lincoln of Illinois, in a fateful hour, called upon a bewildered people to meet the supreme test whether this was a nation destined to survive or to perish. And it will be remembered that Lincoln's party chose for its banner that earlier device--Republican--which Jefferson had made a sign of power. The 'rail splitter' from Illinois united the nationalism of Hamilton with the democracy of Jefferson, and his appeal was clothed in the simple language of the people, not in the sonorous rhetoric which Webster learned in the schools."

var strToArr = str.split(" ")