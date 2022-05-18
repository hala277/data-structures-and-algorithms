'use strict';

// const BinaryTree = require('../Trees/ BinarySearchTree');
const Hashtable = require('../Hashtable/Hashtable');

function tree_intersection(binaryTree1, binaryTree2) {

    let arr = [];

    let hashtable = new Hashtable();

    let tree1 = binaryTree1.preOrder();
    let tree2 = binaryTree2.preOrder();

    if (tree1 && tree2 !== 0) {
        // tree1
        for (let i = 0; i < tree1.length; i++) {

            let t1 = tree1[i].toString();
            let value = tree1[i];
            // console.log(tree1);
            if (!hashtable.contains(t1)) {

                hashtable.set(t1, value);
            }
        }
        // tree2
        for (let i = 0; i < tree2.length; i++) {

            let t2 = tree2[i].toString();
            let value = tree2[i];
            if (hashtable.get(t2) === value) {
                arr.push(hashtable.get(t2));
            }
            // console.log(tree2);
        }
    }
    else {
        return null;
    }
    return arr.length ? arr : 'Tree1 and Tree2 are not intersection'

}

module.exports = tree_intersection;

// let tree1 = new BinaryTree();

// tree1.Add(150);
// tree1.Add(100);
// tree1.Add(75);
// tree1.Add(160);
// tree1.Add(125);
// tree1.Add(175);
// tree1.Add(250);
// tree1.Add(200);
// tree1.Add(350);
// tree1.Add(300);
// tree1.Add(500);

// let tree2 = new BinaryTree();

// tree2.Add(42);
// tree2.Add(100);
// tree2.Add(15);
// tree2.Add(160);
// tree2.Add(125);
// tree2.Add(175);
// tree2.Add(600);
// tree2.Add(200);
// tree2.Add(350);
// tree2.Add(4);
// tree2.Add(500);

// console.log(tree_intersection(tree1, tree2));
// 100,160,125,175,200,350,500