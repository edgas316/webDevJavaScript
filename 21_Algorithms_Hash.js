function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.betterHash = betterHash;
	this.showDistro = showDistro;
	this.put = put;
	this.get = get;
	this.buildChains = buildChains
	this.values = [];
}
// function put(data) {
// 	var pos = this.betterHash(data);
// 	this.table[pos] = data;
// }
function simpleHash(data) {
	var total = 0;
	for (var i = 0; i < data.length; ++i) {
		total += data.charCodeAt(i);
	}
	console.log("Hash value: " + data + " -> " + total);
	return total % this.table.length;
}
function showDistro() {
	var n = 0;
	for (var i = 0; i < this.table.length; ++i) {
		if (this.table[i][0] != undefined) {
			console.log(i + ": " + this.table[i]);
		}
	}
}
function betterHash(string) {
	const H = 37;
	var total = 0;
	for (var i = 0; i < string.length; ++i) {
		total += H * total + string.charCodeAt(i);
	}
	total = total % this.table.length;
	if (total < 0) {
		total += this.table.length-1;
	}
	return parseInt(total);
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan","David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

var hTable = new HashTable();

for (var i = 0; i < someNames.length; ++i) {
	hTable.put(someNames[i], someNames[i]);
}
hTable.showDistro();

// Hashing Integer Keys

function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min +1)) + min
}

function genStuData(arr){
	for(var i = 0; i < arr.length; ++i){
		var num = ""
		for(var j = 1; j <=9; ++j){
			num += Math.floor(Math.random() * 10)
		}
		num += getRandomInt(50, 100)
		arr[i] = num
	}
}

var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
console.log("Student data: \n");
for (var i = 0; i < students.length; ++i) {
	console.log(students[i].substring(0,8) + " " + students[i].substring(9));
}
console.log("\n\nData distribution: \n");
var hTable = new HashTable();
for (var i = 0; i < students.length; ++i) {
	hTable.put(students[i], students[i]);
}
hTable.showDistro();


// Storing and Retrieving Data in a Hash Table
// function put(key, data){
// 	var pos = this.betterHash(key)
// 	var index = 0
// 	if(this.table[pos][index] == undefined){
// 		this.table[pos][index+1] = data
// 		++index;
// 	}
	
// 	else{
// 		while(this.table[pos][index] != undefined){
// 			++index
// 		}
// 		this.table[pos][index]
// 	}
// }

function put(key, data) {
	var pos = this.betterHash(key);
	if(this.table[pos] == undefined){
		this.table[pos] = key;
		this.values[pos] = data;
	}else{
		while (this.table[pos] != undefined){
			pos++;
		}
		this.table[pos] = key;
		this.values[pos] = data;
	}
}

// function get(key){
// 	return this.table[this.betterHash(key)]
// }

function get(key) {
	var hash = -1;
	hash = this.betterHash(key);
	if (hash > -1) {
		for (var i = hash; this.table[hash] != undefined; i++) {
			if (this.table[i] == key) {
				return this.values[hash];
			}
		}
	}
	return undefined;
}


// Handling Collisions
// Separate Chaining
function buildChains() {
	for (var i = 0; i < this.table.length; ++i) {
		this.table[i] = new Array();
	}
}

var hTable = new HashTable();
hTable.buildChains();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (var i = 0; i < someNames.length; ++i) {
	hTable.put(someNames[i], someNames[i]);
}
hTable.showDistro();