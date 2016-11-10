// Promisses
// ES6 Promisses
let promise = new Promise((resolve,reject) =>{
	if(true){
		resolve('Success!')
	}else{
		reject('Oops... something went wrong')
	}
})

promise.then(data => {
	console.log(data)
})

const handleThirdPartyCallback = comeArgument => {
	let promise = new Promise((resolve, reject) => {
		// assume some third-party API, that is *not* a Promise Object
		// but fires a callback once finished
		myCallbackLib(someArgument, response => {
			// we can resolve it with the response
			resolve(response)
		}, reason => {
			// we can reject it with the reason
			reject(reason)
		})
	})
	return promise
}

handleThirdPartyCallback({user:101}).hten(data => {
	console.log(data)
})

// $q
let promise = $q((resolve, reject) => {
	if(true){
		resolve('Success')
	}else{
		reject('Oops something went wrong')
	}
})

promise.then(data => {
	console.log(data)
})

// using $q in service
function MyService($q){
	return {
		getSomething(){
			return $q((resolve, reject) => {
				
			})
		}
	}
}
