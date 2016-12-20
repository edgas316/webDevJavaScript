function Node(data, left, right){
	this.data = data
	this.left = left
	this.right = right
}

Node.prototype = {
	show:function(){
		return this.data
	}
}


function BST(){
	this.root = null
}

BST.prototype = {
	insert:function(data){		
		var n = new Node(data, null, null)
		if(this.root == null){
			this.root = n
		}else{
			var current = this.root
			var parent
			while(true){
				parent = current
				if(data < current.data){
					current = current.left
					if(current == null){
						parent.left = n
						break
					}
				}else{
					current = current.right
					if(current == null){
						parent.right = n
						break
					}
				}
			}
		}
	},
	inOrder:function(node, a){
		if(!(node == null)){
			this.inOrder(node.left, a)
			// console.log(node.show() + " ")
			a.push(node.show())
			this.inOrder(node.right, a)
		}
		return a
	},
	traverse: function(process){

        //helper function
        function inOrderHelper(node){
            if (node){

                //traverse the left subtree
                if (node.left !== null){
                    inOrderHelper(node.left);
                }            

                //call the process method on this node
                process.call(this, node);

                //traverse the right subtree
                if (node.right !== null){
                    inOrderHelper(node.right);
                }
            }
        }

        //start with the root
        inOrderHelper(this.root);
    },
	getMin:function(){
		var current = this.root
		while(!(current.left == null)){
			current = current.left
		}
		return current.data
	},
	getMax :function(){
		var current = this.root
		while(!(current.right == null)){
			current = current.right
		}
		return current.data
	},
	find:function(data){
		var current = this.root
		while(current.data != data){
			if(data < current.data){
				current = current.left
			}else{
				current = current.right
			}
			if(current == null){
				return null
			}
		}
		return current
	},
	remove:function(data){
		this.root = this.removeNode(this.root, data)
	},
	removeNode :function(node, data){
		if(node == null){
			return null
		}
		if(data == node.data){
			// node has no children
			if(node.left == null && node.right == null){
				return null
			}
			// node has no left child
			if(node.left == null){
				return node.right
			}
			// node has no right child
			if(node.right == null){
				return node.left
			}
			// node has two children
			var tempNode = node.right
			node.data = tempNode.data
			node.right = this.removeNode(node.right, tempNode.data)
			return node
		}else if(data < node.data){
			node.left = this.removeNode(node.left, data)
			return node
		}else{
			node.right = this.removeNode(node.right, data)
			return node
		}
	},
	removeZakas: function(value){ // according Nicolas Zakas
        var found   = false,
            parent  = null,
            current = this.root,
            childCount,
            replacement,
            replacementParent;
        if(this.contains(value)){found = true}
        //find the node (removed for space)
        //only proceed if the node was found
        if (found){
            //figure out how many children
            childCount = (current.left !== null ? 1 : 0) + 
                         (current.right !== null ? 1 : 0);

            //special case: the value is at the root
            if (current === this.root){
                switch(childCount){
                    //other cases removed to save space
                    //two children, little work to do
                    case 2:
                        //new root will be the old root's left child
                        //...maybe
                        replacement = this.root.left;
                        //find the right-most leaf node to be 
                        //the real new root
                        while (replacement.right !== null){
                            replacementParent = replacement;
                            replacement = replacement.right;
                        }
                        //it's not the first node on the left
                        if (replacementParent !== null){
                            //remove the new root from it's 
                            //previous position
                            replacementParent.right = replacement.left;
                            //give the new root all of the old 
                            //root's children
                            replacement.right = this.root.right;
                            replacement.left = this.root.left;
                        } else {
                            //just assign the children
                            replacement.right = this.root.right;
                        }
                        //officially assign new root
                        this.root = replacement;
                    //no default
                }       
            //non-root values
            } else {
                switch (childCount){
                    //other cases removed to save space 
                    //two children, a bit more complicated
                    case 2:
                        //reset pointers for new traversal
                        replacement = current.left;
                        replacementParent = current;
                        //find the right-most node
                        while(replacement.right !== null){
                            replacementParent = replacement;
                            replacement = replacement.right;
                        }
                        replacementParent.right = replacement.left;
                        //assign children to the replacement
                        replacement.right = current.right;
                        replacement.left = current.left;
                        //place the replacement in the right spot
                        if (current.value < parent.value){
                            parent.left = replacement;
                        } else {
                            parent.right = replacement;
                        }          
                    //no default
                }
            }
        }
    },
	contains: function(value){
        var found       = false,
            current     = this.root

        //make sure there's a node to search
        while(!found && current){

            //if the value is less than the current node's, go left
            if (value < current.data){
                current = current.left;

            //if the value is greater than the current node's, go right
            } else if (value > current.data){
                current = current.right;

            //values are equal, found it!
            } else {
                found = true;
            }
        }

        //only proceed if the node was found
        return found;
    },
    size:function(){
    	var length = 0
    	this.traverse(function(node){
    		length++
    	})
    	return length
    },
    toArray: function(){
    	var result = []
    	this.traverse(function(node){
    		result.push(node.data)
    	})
    	return result
    },
    toString: function(){
    	return this.toArray().toString()
    },
    // Check if tree is balanced
/**
 * Determines the minimum depth of a binary tree node.
 *
 * @param {BinaryTreeNode} node The node to check.
 * @return The minimum depth of a binary tree node.
 */
	minDepth: function(node){
		if(node === null){
			return 0
		}
		return 1 + Math.min(this.minDepth(node.left), this.minDepth(node.right))
	},

/**
 * Determines the maximum depth of a binary tree node.
 *
 * @param {BinaryTreeNode} node The node to check.
 * @return The maximum depth of a binary tree node.
 */
	maxDepth: function(node){
		if(node === null){
			return 0
		}
		return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right))
	},

/**
 * Determines whether a binary tree is balanced.
 *
 * @param {BinaryTreeNode} root The root of the tree.
 * @returns Whether the tree is balanced.
 */
	isBinaryTreeBalanced: function(root){
		if(root === null){
			return null
		}
		return this.maxDepth(root) - this.minDepth(root) <= 1
	},
	sortedArrayToBalanced: function(arr){ // max array length with good performance 300,000.00 - or 500,000.00 with significant slowdown - if more stack overflows...
		var that = this
		if(a == undefined){
			var a = []
			a.push(arr)
		}
		// if(a[0].length>0){
			var left = [],right = []
			for(let i = 0;i<a.length;){
				// let left = [],right = []
				left = a[i].slice(0, Math.floor(a[i].length/2))
				right = a[i].slice(Math.floor(a[i].length/2+1), a[i].length)
				that.insert(a[i][Math.floor(a[i].length/2)])
				a.shift()
				if(left.length > 2){
					a.push(left)
				}else if(left.length <= 2){
					left.forEach(function(item,index){
						that.insert(item)
					})
					left = []
				}
				if(right.length > 2){
					a.push(right)
				}else if(right.length <=2){
					right.forEach(function(item,index){
						that.insert(item)
					})
					right = []
				}						
			}
			// return that.sortedArrayToBalanced(a)
		// }	
		return true	
	}
}


var arr = []




var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

nums.inOrder(nums.root, arr);

// Preorder traversal
function preOrder(node){
	if(!(node == null)){
		console.log(node.show() + " ")
		preOrder(node.left)
		preOrder(node.right)
	}
}

// Postorder traversal
function postOrder(node) {
	if (!(node == null)) {
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show() + " ");
	}
}


