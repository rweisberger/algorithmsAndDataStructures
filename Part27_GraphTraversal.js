/**
 * There are two main traversal options, depth-first and breath-first
 * 
 * Since there is no direction,it can be challenging to distinguish these two methods.
 * 
 * Depth-first traversal- means we follow one path 
 * 
 * Breadth-first traversal - we visit all the siblings before moving to their children
 */



const graphDFS = ({ adjacencyList }) => {
    const result = [];
    const visited = new Set();
    // console.log(Object.keys(adjacencyList))

    const DFS = (inputVertex) => {

        visited.add(inputVertex);
        result.push(inputVertex);
        console.log(inputVertex)

        let neighbors = adjacencyList[inputVertex];
        for(let neighbor of neighbors){
            if(!visited.has(neighbor)) DFS(neighbor);
        }
    }

    DFS((Object.keys(adjacencyList)[0]));
    return result;
}


// const graphIterativeDFS = (adjacencyList) => {
//     let q = ();
//     q.push()


// }



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
