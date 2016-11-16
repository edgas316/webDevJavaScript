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
	while (!(currNode.next == null)) {
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
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





