'use strict';

const Tree = require('../ BinarySearchTree')




describe('Binary Search Tree test', () => {
    it('Can successfully instantiate an empty tree', () => {
        let tree = new Tree();
        expect(tree instanceof Tree).toBe(true);
    })


    it('Can successfully instantiate a tree with a single root node', () => {
        let tree = new Tree();
        expect(tree.Add(1)).toBe('add node');
    })

    it('Returns true/false for the contains method, given an existing or non-existing node value', () => {
        let tree = new Tree();
        tree.Add(1)
        tree.Add(2)
        expect(tree.Contains(1)).toBeTruthy();
        expect(tree.Contains(4)).toBeFalsy();
    })


})