
/** Graphs are very highly used for social networks, map locations, 
 * wikipedia links,recommendations,  and a bunch of other things.
 * 
 * A graph is a bunch of nodes with varying connections. 
 * 
 *  vertex: node
 *  edges: connections
 * 
 *  A tree is a graph, but a graph is not necessarily a tree (just 
 * like a square is a rectangle, but a rectangle is not necessarily a 
 * square.)
 * 
 * The basic structure is an unweighted and undirected graph. 
 * 
 * There are directed graphs, where edges have a specific direction. 
 * For example, I follow EpicGardening on Instagram and see that 
 * content, but he does not see my content. 
 * 
 * There are also weighted graphs, where edges have a value. For example,
 * a map has connections with distance values. If there are one way streets, 
 * a map could be a weighted and directed graph. 
 * 
 * 
 */

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(name){
        if(!name)return;

        if(!this.adjacencyList[name])
            this.adjacencyList[name] = [];
    }
    addEdge(v1, v2){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1)
        }
    }
    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(item => item !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(item => item !== v1)
    }
    removeVertex(name){
        if(!name)return;

        this.adjacencyList[name].forEach(neighbor =>
            this.removeEdge(name, neighbor));

        delete this.adjacencyList[name]; 
    }
    recursiveDFS(vertex){
        const result = [];
        const visited = new Set();
        const adjacencyList = this.adjacencyList;
    
        const DFS = (inputVertex) => {
            if(!inputVertex) return null;
    
            visited.add(inputVertex);
            result.push(inputVertex);
            
            adjacencyList[inputVertex].forEach(neighbor =>{
                if(!visited.has(neighbor)) DFS(neighbor);
            })
        }
    
        DFS(vertex);
        return result;
    }
    iterativeDFS(vertex){
        // this time we are using a stack, last in first out
        const stack = [];
        const visited = new Set();
        const adjacencyList = this.adjacencyList;
        stack.push(vertex);
        let currentVertex;
        const result = [];
    
        while(stack.length){
            currentVertex = stack.pop();
            if(!visited.has(currentVertex)){
                result.push(currentVertex);
                visited.add(currentVertex);
    
                const neighbors = adjacencyList[currentVertex];
                neighbors.forEach(neighbor => {
                    stack.push(neighbor);
                })
            }
        }
        return result;
    }
    graphBFS(vertex){
        const q = [];
        q.push(vertex);
        const visited = new Set();
        const result = [];
        let currentVertex;

        while(q.length){
            currentVertex = q.shift();
            result.push(currentVertex);
            visited.add(currentVertex);

            let neighbors = this.adjacencyList[currentVertex];
            neighbors.forEach(neighbor => {
                if(!visited.has(neighbor)){
                    q.push(neighbor);
                    visited.add(neighbor);
                }
            })
        }
        return result;
    }
} 

 