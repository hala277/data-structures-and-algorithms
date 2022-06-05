'use strict';

const Graph = require('../depthFirst');
const Vertex = require('../../graph/vertex');



describe('test graph depth first',() => {
    it('if its return A collection of nodes in their pre-order depth-first traversal order ',() => {
        let A = new Vertex('A');
        let B = new Vertex('B');
        let C = new Vertex('C');
        let D = new Vertex('D');
        let E = new Vertex('E');
        let F = new Vertex('F');
        let G = new Vertex('G');
        let H = new Vertex('H');

        let graph = new Graph();
        graph.addNode(A)
        graph.addNode(B)
        graph.addNode(C)
        graph.addNode(D)
        graph.addNode(E)
        graph.addNode(F)
        graph.addNode(G)
        graph.addNode(H)

        graph.addEdge(A,B,1);
        graph.addEdge(B,C,1);
        graph.addEdge(C,G,1);
        graph.addEdge(B,C,1);
        graph.addEdge(B,D,1);
        graph.addEdge(D,E,1);
        graph.addEdge(D,H,1);
        graph.addEdge(H,F,1);
        graph.addEdge(D,A,1);

        let result = graph.DepthFirst(A);
        expect([...result]).toEqual([A,B,C,G,D,E,H,F])

    })

    it('return one value',() => {
        let A = new Vertex('A');
        let graph = new Graph();
        graph.addNode(A);
        let result = graph.DepthFirst(A);
       
        expect([...result]).toEqual([A])
        
    })

    it('return new collection ',() => {
        let A = new Vertex('A');
        let B = new Vertex('B');
        let C = new Vertex('C');
        let D = new Vertex('D');

        let graph = new Graph();
        graph.addNode(A)
        graph.addNode(B)
        graph.addNode(C)
        graph.addNode(D)

        graph.addEdge(A,B,1);
        graph.addEdge(B,C,1);
        graph.addEdge(C,D,1);

        let result = graph.DepthFirst(A);
        expect([...result]).toEqual([A,B,C,D])


    })
})