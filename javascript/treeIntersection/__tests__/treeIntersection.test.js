'use strict';

const treeIntersection = require('../treeIntersection');
const BinaryTree = require('../../Trees/ BinarySearchTree');


describe('Test if treeInter section work', () => {
    it('return a set of values found in both trees.', () => {
         let tree1 = new BinaryTree();

        tree1.Add(150);
        tree1.Add(100);
        tree1.Add(75);
        tree1.Add(160);
        tree1.Add(125);
        tree1.Add(175);
        tree1.Add(250);
        tree1.Add(200);
        tree1.Add(350);
        tree1.Add(300);
        tree1.Add(500);
        
        let tree2 = new BinaryTree();
        
        tree2.Add(42);
        tree2.Add(100);
        tree2.Add(15);
        tree2.Add(160);
        tree2.Add(125);
        tree2.Add(175);
        tree2.Add(600);
        tree2.Add(200);
        tree2.Add(350);
        tree2.Add(4);
        tree2.Add(500);

        expect(treeIntersection(tree1,tree2)).toEqual([100,160,125,175,200,350,500])
        
    })

    it('return message says that Tree1 and Tree2 are not intersection', () => {
        let tree1 = new BinaryTree();

        tree1.Add(150);
        tree1.Add(100);

        let tree2 = new BinaryTree();
        
        tree2.Add(42);
        tree2.Add(200);

        expect(treeIntersection(tree1,tree2)).toEqual('Tree1 and Tree2 are not intersection')
    })

    it('if the trees are empty it shold return null ', () => {
        let tree1 = new BinaryTree();
        let tree2 = new BinaryTree();
        expect(treeIntersection(tree1,tree2)).toEqual(null);
    })
})