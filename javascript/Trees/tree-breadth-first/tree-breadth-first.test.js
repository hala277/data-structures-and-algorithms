

const Tree = require('./tree-breadth-first');

describe('tree breadth first test', () => {
    it('instantiate a new tree', () => {
        let tree = new Tree();
        expect(tree instanceof Tree).toBe(true);
    })

    it('test the breadth first if its work', () => {
        let tree = new Tree();
        tree.Add(2);
        tree.Add(7);
        tree.Add(5);
        
        
        expect(tree.treebreadthFirst()).toEqual([2,7,5]);
    })

    it('test the breadth first if there is one node', () => {
        let tree = new Tree();
        tree.Add(2);
        
        expect(tree.treebreadthFirst()).toEqual([2]);
    })

    it('return null if the tree is empty', () => {
        let tree = new Tree();
       
        
        expect(tree.treebreadthFirst()).toEqual(null);
    })
})