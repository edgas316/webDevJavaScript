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
		if(visited[i] == false){
			this.topSortHelper(i,visited,stack)
		}
	}
	for(var i = 0; i < this.vertices; i++){
		if
	}

}


