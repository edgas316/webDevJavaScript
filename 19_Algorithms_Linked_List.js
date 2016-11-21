function Node(element){
	this.element = element
	this.next = null
}

function LList(){
	this.head = new Node("head")
	this.find = find
	this.insert = insert
	this.remove = remove
	this.display = display
	this.findPrevious = findPrevious
}


function find(item){
	var currNode = this.head
	while(currNode.element != item){
		currNode = currNode.next
	}
	return currNode
}

function insert(newElement, item){
	var newNode = new Node(newElement)
	var current = this.find(item)
	newNode.next = current.next
	current.next = newNode
}

function display(){
	var currNode = this.head
	while(!(currNode.next == null)){
		console.log(currNode.next.element)
		currNode = currNode.next
	}
}


var cities = new LList()
cities.insert("Conway", "head")
cities.insert("Russellvile", "Conway")
cities.insert("Alma", "Russellvile")
cities.display()


// we need to find previouse node to remove node
function findPrevious(item){
	var currNode = this.head
	while(!(currNode.next == null) && (currNode.next.element != item)){
		currNode = currNode.next
	}
	return currNode
} 

function remove(item){
	var prevNode = this.findPrevious(item)
	if(!(prevNode.next == null)){
		prevNode.next = prevNode.next.next
	}
}
//=======================================================
// Doubly linked list
function Node(element){
	this.element = element
	this.next = null
	this.previouse = null
}

function LList() {
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.remove = remove;
	this.findLast = findLast;
	this.dispReverse = dispReverse;
}

function dispReverse(){
	var currNode = this.head
	currNode = this.findLast()
	while(!(currNode == null)){
		console.log(currNode.element)
		currNode = currNode.previouse
	}
}

function findLast(){
	var currNode = this.head
	while(!(currNode.next == null)){
		currNode = currNode.next
	}
	return currNode
}

function remove(item){
	var currNode = this.find(item)
	if (!(currNode.next == null)) {
		currNode.previouse.next = currNode.next
		currNode.next.previouse = currNode.previouse
		currNode.next = null
		currNode.previouse = null
	}
}

function display() {
	var currNode = this.head;
	var arr = []
	while (!(currNode.next == null)) {
		console.log(currNode.next.element);
		arr.push(currNode.next.element)
		currNode = currNode.next;
	}
	return arr
}

function find(item) {
	var currNode = this.head;
	while (currNode.element != item) {
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement, item){
	var newNode = new Node(newElement)
	var current = this.find(item)
	newNode.next = current.next
	newNode.previouse = current
	current.next = newNode
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
cities.remove("Carlisle");
cities.display();
cities.dispReverse();

// Circularly linked list

// function LList(){
// 	this.head = new Node("head")
// 	this.head.next = this.head
// 	this.find = find
// 	this.insert = insert
// 	this.display = display
// 	this.findPrevious = findPrevious
// 	this.remove = remove
// }

// function display(){
// 	var currNode = this.head
// 	while(!(currNode.next == null) && !(currNode.next.element == "head")){
// 		console.log(currNode.next.element)
// 		currNode = currNode.next
// 	}
// }
//============================================================================================
//============================================================================================
// Doubly linked list by Nikolas Zakas

function DoublyLinkedList(){
	this._length = 0
	this._head = null
	this._tail = null
}

DoublyLinkedList.prototype = {
	add: function(data){
		var node = {
			data:data,
			next:null,
			prev:null
		}

		//special case: no items in the list yet
		if(this._length == 0){
			this._head = node
			this._tail = node
		}else{
			// attach to the tail node
			this._tail.next = node
			node.prev = this._tail
			this._tail = node
		}

		// don't forget to update the count
		this._length++
	},

	remove: function(index){

		// check for out-of-bounds values
		if(index > -1 && index < this._length){
			var current = this._head,
				i = 0

			// special case: removing first item 
			if(index === 0){
				this._head = current.next
				/*
                 * If there's only one item in the list and you remove it,
                 * then this._head will be null. In that case, you should
                 * also set this._tail to be null to effectively destroy
                 * the list. Otherwise, set the previous pointer on the
                 * new this._head to be null.
                 */
                if(!this._head){
                	this._tail = null
                }else{
                	this._head.prev = null
                }

            // special case: removing last item 
			}else if(index === this._length -1){
				current = this._tail
				this._tail = current.prev
				this._tail.next = null
			}else{
				// find the right location
				while(i++ < index){
					current = current.next
				}

				// skip over the item to remove 
				current.prev.next = current.next
			}

			//document the length
			this._length--

			// return the value
			return current.data
		}else{
			return null
		}
	}
}
