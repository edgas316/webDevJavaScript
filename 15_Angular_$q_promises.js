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

const handleThirdPartyCallback = someArgument => {
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

handleThirdPartyCallback({user:101}).then(data => {
	console.log(data)ß
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
// =====================================================
// promices in action
// load-image.js
function loadImage(url){
	return new Promise((resolve, reject) => {
		let image = new Image()

		image.onload = function(){
			resolve(image)
		}

		image.onerror = function(){
			let msg = "Couldn't load image at: " + url;
			reject(new Error(msg))
		}

		image.src = url;
	})
}
export default loadImage

// usage
// app.js
import loadImage from './load-image'

let addImg = (src) => {
	let imgElement = document.createElement('img')
	imgElement.src = src
	document.body.appendChild(imgElement)
}

Promise.all([
	loadImage('images/cat1.png'),
	loadImage('images/cat2.png'),
	loadImage('images/cat3.png')
]).then((images) => {
	images.forEach(img => addImg(img.src))
}).catch((error) => {
	// handle all errors here
})

