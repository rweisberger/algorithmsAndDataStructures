/**there is a difference between a binary tree and a binary search tree- the search tree 
 * has a specific ordering structure and a binary tree has no order
 * 
 * Ways to traverse a tree:
 * -Breadth First Search
 * -Depth First Search:
 *  pre-order
 *  post-oder
 *  in-order
 *  
 * 
 * 
 *  */ 

const BFS = (root) => {
let result=[];
let q = [];
let current;

q.push(root);

    while(q.length){
        current = q.shift();
        result.push(current.value);
        if(current.left) q.push(current.left);
        if(current.right) q.push(current.right);
    }
    return result;
}

const preOrderDFS = (root) => {
    let result = [];

    const traverse = (inputNode) => {
        if(!inputNode) return;

        result.push(inputNode.value);
        traverse(inputNode.left);
        traverse(inputNode.right);
    }

    traverse(root);
    return result;
}
const postOrderDFS = (root) => {
    let result = [];

    const traverse = (inputNode) => {
        if(inputNode.left) traverse(inputNode.left);
        if(inputNode.right) traverse(inputNode.right);
        result.push(inputNode.value);
    }        
    traverse(root);
    return result;
}
const inOrderDFS = (root) => {
    let result = [];

    const traverse = (inputNode) => {
        if(inputNode.left) traverse(inputNode.left);
        result.push(inputNode.value);
        if(inputNode.right) traverse(inputNode.right);
    }        
    traverse(root);
    return result;
}