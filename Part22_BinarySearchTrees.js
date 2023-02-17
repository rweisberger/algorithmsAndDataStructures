/**
 * What is a tree?
*   there are nodes in a parent/child relationship
*   lists are linear, but trees are nonlinear
*   all trees must have one root node
*   the arrows are called edges
*   leaf nodes have no children
 * 
 * How are trees used?
 *  the HTML DOM is a tree
 *  network routing
 *  abstract syntax tree
 *  folders in an operating system
 * 
 */

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null; 
    }
}

class BinarySearchTrees {
    constructor(){
        this.root = null;
    }
    insert(value) {
        const newNode= new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(current){
                if(value == current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    insertRecursive(value) {
        if(value == null) return undefined;
        const newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
            return this.root
        }

        const traverse = (inputNode) => {
            if(value == current.value) return undefined;

            if(value < inputNode.value){
                if(inputNode.right === null){
                    inputNode.right === newNode;
                    return this;
                }
                traverse(this.right)
            }
            if(value > inputNode.value){
                if(inputNode.right === null){
                    inputNode.right === newNode;
                    return this;
                }
                traverse(this.left); 
            }
        }
        traverse(this.root)
    }  
    insertRecursive(value) {
        if(value == null) return undefined;
        const newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
            return this.root
        }

        const traverse = (inputNode) => {
            if (!inputNode) return;
            if(value > inputNode.value){
                if(inputNode.right === null){
                    inputNode.right = newNode;
                    return this;
                }
                traverse(inputNode.right);
            }
            if(value < inputNode.value){
                if(inputNode.left === null){
                    inputNode.left = newNode;
                    return this;
                }

                traverse(inputNode.left); 
            }
        }
        traverse(this.root)
    }       
    search(value){
        if(value == null || this.root === null);
        let current = this.root;
        let result;

        const traverse = (currentNode) =>{
            if (!currentNode) return;
            if (currentNode.value === value){
                result = currentNode
            }

            traverse(currentNode.right);
            traverse(currentNode.left)
        }
        
        traverse(current);
        return result;
    }
}

// big O = O(log n) for insertion and search