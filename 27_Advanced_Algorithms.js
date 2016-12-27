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
	let [last, next, result] = [1,1,1]
	for(let i = 2; i < n; ++i){
		result = last + next
		next = last
		last = result
	}
	return result
}

// Finding the Longest Commot Substring
function lcs(word1, word2) {
	var max = 0;
	var index = 0;
	var lcsarr = new Array(word1.length+1);
	for(var i = 0; i <= word1.length+1; ++i){
		lcsarr[i] = new Array(word2.length+1);
		for(var j = 0; j <= word2.length+1; ++j){
			lcsarr[i][j] = 0;
		}
	}
	for(var i = 0; i <= word1.length; ++i) {
		for(var j = 0; j <= word2.length; ++j){
			if(i == 0 || j == 0) {
				lcsarr[i][j] = 0;
			}else{
				if(word1[i-1] == word2[j-1]){
					lcsarr[i][j] = lcsarr[i-1][j-1] + 1;
				}else{
					lcsarr[i][j] = 0;
				}
			}
			if(max < lcsarr[i][j]){
				max = lcsarr[i][j];
				index = i;
			}
		}
	}
	var str = "";
	if(max == 0){
		return "";
	}else{
		for(var i = index-max; i <= max; ++i){
			str += word2[i];
		}
		return str;
	}
}

function searchText(text, word){
	var tArr = text.split(" ")
	var matchObj = []
	for(var i = 0; i < tArr.length; ++i){
		if(lcs(tArr[i], word) !== ""){
			if(lcs(tArr[i], word).length > 3){
				matchObj.push({position:i, string:tArr[i], substring:lcs(tArr[i], word)})
			}			
		}
	}
	return matchObj
}
