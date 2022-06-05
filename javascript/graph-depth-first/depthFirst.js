'use strict';

const vertex = require('../graph/vertex');
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

    DepthFirst(node){
        if(!node) return null;

        const current = new Set();

        const traverse = (node1) => {
            current.add(node1);
            const neighbor = this.getNeighbors(node1);
            for(let Edge of neighbor){
                if(!current.has(Edge.vertex)){
                    traverse(Edge.vertex);
                }
            }

        }
        traverse(node);
        return current;
    }
}

module.exports = Graph;
