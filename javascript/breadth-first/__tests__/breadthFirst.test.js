'use strict';


const Graph = require('../breadthFirst');
const Vertex = require('../../graph/vertex');
const { it } = require('eslint/lib/rule-tester/rule-tester');

describe('test breadth first', () => {
    it('Return: A collection of nodes in the order they were visited.', () => {
        const graph = new Graph();

        const Pandora = new Vertex('Pandora');
        const Arendelle = new Vertex('Arendelle');
        const Metroville = new Vertex('Metroville');
        const Monstroplolis = new Vertex('Monstroplolis');
        const Narnia = new Vertex('Narnia');
        const Naboo = new Vertex('Naboo');

        graph.addNode(Pandora);
        graph.addNode(Arendelle);
        graph.addNode(Metroville);
        graph.addNode(Monstroplolis);
        graph.addNode(Narnia);
        graph.addNode(Naboo);

        graph.addEdge(Pandora, Arendelle, 5);
        graph.addEdge(Arendelle, Pandora, 5);
        graph.addEdge(Arendelle, Metroville, 5);
        graph.addEdge(Metroville, Arendelle, 5);
        graph.addEdge(Arendelle, Monstroplolis, 5);
        graph.addEdge(Monstroplolis, Arendelle, 5);
        graph.addEdge(Metroville, Narnia, 5);
        graph.addEdge(Narnia, Metroville, 5);
        graph.addEdge(Metroville, Naboo, 5);
        graph.addEdge(Naboo, Metroville, 5);
        graph.addEdge(Metroville, Monstroplolis, 5);
        graph.addEdge(Monstroplolis, Metroville, 5);
        graph.addEdge(Monstroplolis, Naboo, 5);
        graph.addEdge(Naboo, Monstroplolis, 5);
        graph.addEdge(Narnia, Naboo, 5);
        graph.addEdge(Naboo, Narnia, 5);


        expect(graph.breadthFirst(Pandora)).toEqual([
            { value: 'Pandora' },
            { value: 'Arendelle' },
            { value: 'Metroville' },
            { value: 'Monstroplolis' },
            { value: 'Narnia' },
            { value: 'Naboo' }
        ])




    })

    it('return array of result', () => {
        const graph = new Graph();

        const Pandora = new Vertex('Pandora');
        const Arendelle = new Vertex('Arendelle');
        const Metroville = new Vertex('Metroville');

        graph.addNode(Pandora);
        graph.addNode(Arendelle);
        graph.addNode(Metroville);

        graph.addEdge(Pandora, Arendelle, 5);
        graph.addEdge(Arendelle, Pandora, 5);
        graph.addEdge(Arendelle, Metroville, 5);
        graph.addEdge(Metroville, Arendelle, 5);

        expect(graph.breadthFirst(Pandora)).toEqual([
            { value: 'Pandora' },
            { value: 'Arendelle' },
            { value: 'Metroville' },

        ])


    })

    it('return error if its not an object', () => {
        const graph = new Graph();
        expect(graph.breadthFirst(1)).toEqual('Eror the node shold ba an object')

    })

    

})