// The method to representing the edges of a graph is called an adjacency list, 
// or an array of adjacency lists.
// nodes are vertex/vetices and path is edges

function Graph(v){
	this.vertices = v
	this.vertexList = []
	this.edges = 0
	this.adj = []
	for(var i=0; i<this.vertices; ++i){
		this.adj[i] = []
		this.adj[i].push("")
	}
	this.addEdge = addEdge
	this.showGraph = showGraph
	this.dfs = dfs
	this.marked = []
	for(var i = 0; i < this.vertices; ++i){
		this.marked[i] = false
	}
	this.edgeTo = []
	this.hasPathTo = hasPathTo
	this.pathTo = pathTo
	this.topSortHelper = topSortHelper
	this.topSort = topSort
}

function topSort(){
	var stack = []
	var visited = []
	for(var i=0; i<this.vertices; i++){
		visited[i] = false
	}
	for(var i = 0; i < this.vertices; i++){
		if(visited[i] == false){
			this.topSortHelper(i, visited, stack)
		}
	}
	for(var i = 0; i < stack.length; i++){
		if(stack[i] != undefined && stack[i] != false){
			console.log(this.vertexList[stack[i]])
		}
	}
}

function topSortHelper(v, visited, stack){
	visited[v] = true
	for(var w in this.adj[v]){
		if(!visited[w]){
			this.topSortHelper(visited[w], visited, stack)
		}
	}
	stack.push(v)
}

function addEdge(v,w){
	this.adj[v].push(w)
	this.adj[w].push(v)
	this.edges++
}

function showGraph(){
	var visited = []
	for(var i = 0; i < this.vertices; ++i){
		visited.push(this.vertexList[i])
		for(var j = 0; j < this.vertices; ++j){
			if(this.adj[i][j] !== undefined){
				if(visited.indexOf(this.vertexList[j]) < 0){
					console.log(this.vertexList[j])
				}
			}
		}
		console.log()
		visited.pop()
	}
}

function dfs(v){
	this.marked[v] = true
	if(this.adj[v] != undefined){
		console.log('visited vertex: ' + v)
	}
	for(var w in this.adj[v]){
		if(!this.marked[w]){
			this.dfs(w)
		}
	}
}

function bfs(s){
	var queue = []
	this.marked[s] = true
	queue.unshift(s)
	while(queue.length > 0){
		var v = queue.shift()
		if(typeof(v) != 'string'){
			console.log('Visited vertex: ' + v)
		}
		for(var w in this.adj[v]){
			if(!this.marked[w]){
				this.edgeTo[w] = v
				this.marked[w] = true
				queue.unshift(w)
			}
		}
	}
}

function hasPathTo(v){
	return this.marked[v]
}

function pathTo(v){
	var source = 0
	if(!this.hasPathTo(v)){
		return undefined
	}
	var thePath = []
	for(var i = v; i != source; i = this.edgeTo[i]){
		thePath.push(i)
	}
	thePath.push(s)
	return thePath
}
// ==========================================
// graph datastructure using object datatype
let MakeGraph = () => {
	let graph = {}

	graph.contains = (node) => {
		return !!graph[node]
	}

	graph.addVertex = (node) => {
		if(!graph.contains(node)){
			graph[node] = {edges:{}}
		}
	}

	graph.removeVertex = (node) =>{
		if(graph.contains(node)){
			for(let connectedNode in graph[node].edges){
				graph.removeEdge(node, connectedNode)
			}
			delete graph[node]
		}
	}

	graph.addEdge = (startNode, endNode) => {
		if(graph.contains(startNode) && graph.contains(endNode)){
			graph[startNode].edges[endNode] = true
			graph[endNode].edges[startNode] = true
		}
	}

	graph.removeEdge = (startNode, endNode) => {
		if(graph.contains(startNode) && graph.contains(endNode)){
			delete graph[startNode].edges[endNode]
			delete graph[endNode].edges[startNode]
		}
	}

	return graph
}

let devBook = MakeGraph();  
devBook.addVertex('James Gosling');
devBook.addVertex('Guido Rossum');
devBook.addVertex('Linus Torvalds');
devBook.addVertex('Michael Olorunnisola');

devBook.addEdge('James Gosling', 'Guido Rossum');
devBook.addEdge('Linus Torvalds', 'Michael Olorunnisola');

devBook.removeEdge('Linus Torvalds', 'Michael Olorunnisola');

devBook.removeVertex('Linus Torvalds');

// time complexity
/*
	addNode is O(1)
	addEdge is O(1)
	removeNode is O(n)
	removeEdge is O(1)
	contains is O(1)
	hasEdge is O(1)
*/

// ============================================================
class Unit {
	constructor(entity, properties){
		this.entity = entity + '';
		this.load(properties || {})
	}
	load(properties){
		let p = Object.create(null)
		Object.keys(properties).forEach(function(v){
			p[v] = properties[v]
		})
		this.properties = p
		return this
	}

	set(property, value){
		return this.properties[property] = value
	}

	unset(property){
		return delete this.properties[property]
	}

	has(property){
		return Object.prototype.hasOwnProperty.call(this.properties, property)
	}

	get(property){
		return this.properties[property]
	}

	topString(){
		return [this.constructor.name, ' (', this.entity, ' ', JSON.stringify(this.properties), ') '].join('')
	}
}

class Node extends Unit {
	constructor(entity, properties){
		super(entity, properties)
		this.edges = []
		this.inputEdges = []
		this.outputEdges = []
	}

	unlink(){
		let edges = this.edges
		for(let i = 0 len = edges.length; i < len; i++){
			edges[i].unlink()
		}
		return true
	}
}