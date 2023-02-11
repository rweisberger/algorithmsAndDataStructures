/**
 * There are two main traversal options, depth-first and breath-first
 * 
 * Since there is no direction,it can be challenging to distinguish these two methods.
 * 
 * Depth-first traversal- means we follow one path 
 * 
 * Breadth-first traversal - we visit all the siblings before moving to their children
 */


// Colt is suggesting using an object to keep track of visited vertexes with a a value of true. I will use a set here, but
// wonder if there are cases when that might be helpful
const graphDFS = ({ adjacencyList }) => {
    const result = [];
    const visited = new Set();

    const DFS = (inputVertex) => {

        visited.add(inputVertex);
        result.push(inputVertex);

        const neighbors = adjacencyList[inputVertex];
        for(let neighbor of neighbors){
            if(!visited.has(neighbor)) DFS(neighbor);
        }
    }

    DFS((Object.keys(adjacencyList)[0]));
    return result;
}

const graphIterativeDFS = ({ adjacencyList }) => {
    const q = [];
    const visited = new Set();
    // add parseInt() for int
    q.push(Object.keys(adjacencyList)[0]);
    let currentVertex;
    const result = [];

    while(q.length){
        currentVertex = q.pop();
        if(!visited.has(currentVertex)){
            result.push(currentVertex);
            visited.add(currentVertex);

            const neighbors = adjacencyList[currentVertex]
            neighbors.forEach(neighbor => {
                q.push(neighbor);
            })
        }
    }
    return result;
}

const graphBFS = ({ adjacencyList }) => {
    const q = [];
    const visited = new Set();
    q.push(Object.keys(adjacencyList)[0]);
    let currentVertex;
    const result = [];

    while(q.length){
        currentVertex = q.shift();
        result.add(currentVertex);
        visited.add(currentVertex);

        let neighbors = adjacencyList[currentVertex];
        neighbors.forEach(neighbor => {
            if(!visited.has(neighbor)){
                q.push(neighbor);
                visited.add(neighbor);
            }
        })
    }
    return result
}


let adjLst2 = {
	0: [1, 2, 3],
	1: [0, 2],
	2: [0, 1],
	3: [0, 4],
	4: [3],
};

// format of the below
let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
graphDFS(g)


//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F