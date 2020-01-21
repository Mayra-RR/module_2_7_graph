//Crear clase Graph
class Graph {

    constructor(numOfVertices) {
        this.numOfVertices = numOfVertices;
        this.AdjList = new Map();
    }

        //G = (V,E);
    //add vertex to the graph//
    addVertex(v) {
        //initialize the adjacent list with null//
        this.AdjList.set(v, []);
    }

    //add edge to the graph
    addEdge(v, w) {
        // get the list for vertex V and put the
        // vertex W denoting edge between v and w
        this.AdjList.get(v).push(w);

        //Since graph is undirected,
        //add an edge from w to v also
        this.AdjList.get(w).push(v);

    }
    //Prints the vertex and adjacency list
    printGraph(){
        //get all the vertices
        var get_keys = this.AdjList.keys();
        // [{"A",[{"A","B"}]}, {"B",[{"B","A"}]}, {"C",[{"A","C"}]}, ]

        //iterate over the vertices
        for (var i of get_keys){
            //get the corresponding adjacency list for the vertex
            var get_values = this.AdjList.get(i);
            var conc = "";
            //iterate over the adjacency list 
            //concatenate the values into a string
            for (var j of get_values) conc += j + " ";
            // print the vertex and its adjacency list
            console.log(i + "->" + conc);
        }
    }

}

//Using the above implemented graph class
var g = new Graph(9);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' ];

// adding vertices
for (var i = 0; i < vertices.length; i++){
    g.addVertex(vertices[i]);
}

//adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'G');
g.addEdge('B', 'C');
g.addEdge('B', 'E');
g.addEdge('B', 'I');
g.addEdge('C', 'I');
g.addEdge('C', 'F');
g.addEdge('D', 'G');
g.addEdge('E', 'G');
g.addEdge('E', 'H');
g.addEdge('F', 'I');
g.addEdge('G', 'H');
g.addEdge('H', 'I');


g.printGraph();