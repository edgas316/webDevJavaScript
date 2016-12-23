const PI = 3.141593

// Block scope
let a = [1,2,3,4]

for(let i = 0; i < a.length; i++){
	let a = a[i]
	console.log(a)
}

// Block scoped function 
 {
 	function foo(){return 1}
 	foo() === 1
 	{
 		function foo(){return 2}
 		foo === 2
 	}
 	foo() === 1
 }

 // Arrow functions
 var odds = events.map(v => v + 1) // function (v) { return v + 1; }
 var mairs = events.map(v => ({event: v, odd: v + 1})) // function (v) { return { even: v, odd: v + 1 }; }
 var nums = events.map((v, i) => v + i) // function (v, i) { return v + i; }

 // Statement Bodies
 nums.forEach(v => { // function (v) {
 	if(v % 5 === 0){
 		fives.push(v)
 	}
 })