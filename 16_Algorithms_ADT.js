// A list ADT - Abstract Data Type
	function List(){
		this.listSize = 0
		this.pos = 0
		this.dataStore = []
		this.clear = clear
		this.find = find
		this.toString = toString
		this.insert = insert
		this.append = append
		this.remove = remove
		this.front = front
		this.end = end
		this.prev = prev
		this.next = next
		this.length = length
		this.currPos = currPos
		this.moveTo = moveTo
		this.getElement = getElement
		this.contains = contains
	}

	function append(element){
		this.dataStore[this.listSize++] = element
	}

	function find(element){
		for(var i = 0; i < this.dataStore.length; ++i){
			if (this.dataStore[i] == element) {
				return i
			}
		}
		return -1
	}
	function remove(element) {
		var foundAt = this.find(element)
		if (foundAt > -1) {
			this.dataStore.splice(foundAt,1)
			--this.listSize
			return true
		}
		return false
	}

	function length(){
		return this.listSize
	}

	function toString(){
		return this.dataStore
	}
	function insert(element, after){
		var insertPos = this.find(after)
		if (insertPos > -1) {
			this.dataStore.splice(insertPos + 1, 0, element)
			++this.listSize
			return true
		}
		return false
	}
	function clear(){
		delete this.dataStore
		this.dataStore = []
		this.listSize = this.pos = 0
	}
	function contains(element){
		for(var i = 0; i < this.dataStore.length; ++i){
			if(htis.dataStore[i] == element){
				return true
			}
		}
		return false
	}
	function front() {
		return this.pos = 0
	}
	function end() {
		this.pos = 0
	}
	function prev(){
		if(this.pos > 0){
			--this.pos
		}
	}
	function next(){
		if(this.pos < this.listSize-1){
			++this.pos
		}
	}
	function currPos(){
		return this.pos
	}
	function moveTo(position){
		this.pos = position
	}
	function getElement(){
		return this.dataStore[this.pos]
	}

	var names = new List()
// Iretating through the list
	names.append({name:"Marine", value:"Student"})
	names.append({name:"Edwin", value:"Student"})
	names.append({name:"David", value:"Student"})
	names.append({name:"Chris", value:"Student"})
	names.append({name:"Shone", value:"Student"})

// for(names.front(); names.currPos() < names.length(); names.next()){
// 	console.log(names.getElement())
// }