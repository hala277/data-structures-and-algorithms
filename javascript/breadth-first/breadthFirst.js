'use strict';

const Vertex = require('../graph/vertex');
const Edge = require('../graph/edge');

class Graph {

    constructor() {
        this.adjacenctList = new Map();
    }

    addNode(value) {
        this.adjacenctList.set(value, []);
        return value;
    }

    addEdge(node1, node2, weight) {

        // check if node1,node2 are exist

        if (!this.adjacenctList.has(node1) || !this.adjacenctList.has(node2)) {
            return 'one node or both node are not existed';
        }

        const adjacencies = this.getNeighbors(node1);
        adjacencies.push(new Edge(node2, weight));

        // for bi directional
        const adjacencies2 = this.getNeighbors(node2);
        adjacencies2.push(new Edge(node1, weight));
    }

    getNodes() {
        return this.adjacenctList;
    }

    getNeighbors(node) {
        if (!this.adjacenctList.has(node)) {
            return 'node dose not exist!!'
        }
        return this.adjacenctList.get(node);
    }

    size() {
        if (this.adjacenctList.size > 0) {
            return this.adjacenctList.size;
        }
        else {
            return null;
        }
    }

    breadthFirst(node) {
        if (typeof node !== 'object') {
            return 'Eror the node shold ba an object'
        }

        if (this.size() === 0) {
            return 'graph is empty!';
        }
      
        const visited = new Set();
        let queue = [];
        queue.push(node);

        while(queue.length){
            let currentNode = queue.shift();
            visited.add(currentNode);
            this.adjacenctList.get(currentNode).forEach((vertex,element) => {
                if(!visited.has(vertex.vertex)){
                queue.push(vertex.vertex);
                }
        })
        }
        return[...visited];
           

    }

}

module.exports = Graph;