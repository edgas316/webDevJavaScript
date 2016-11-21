// Dictionary Class
function Dictionary(){
	this.dataStore = []
}

Dictionary.prototype = {
	add: function(key, value){
		this.dataStore[key] = value
	},
	find: function (key) {
		return this.dataStore[key]
	},
	remove: function (key) {
		delete this.dataStore[key]
	},
	showAll: function(){
		var obj = this.dataStore
		for(var key in obj){
			console.log(key + " -> " + obj[key])
		}
		console.log(obj)
	},
	count: function(){
		var n = 0
		for(var key in this.dataStore){
			++n
		}
		return n
	},
	clear: function(){
		for(var key in this.dataStore){
			delete this.dataStore[key]
		}
	}
}

