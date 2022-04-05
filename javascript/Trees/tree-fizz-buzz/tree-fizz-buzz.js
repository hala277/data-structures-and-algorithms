'use strict';

const kAryTree = require('./k-aryTree');

function fizzBuzzTree(karrTree) {
    if (!karrTree.root) {
        return null;
    }

    let ktree = karrTree;
    let kArray = [];

    function fizzBuzz(node) {
        if (node.value % 3 === 0 && node.value % 5 === 0) {
            node.value = "FizzBuzz";
            kArray.push(node.value);
        }
        else if (node.value % 3 === 0) {
            node.value = "Fizz";
            kArray.push(node.value);
        }
        else if (node.value % 5 === 0) {
            node.value = "Buzz";
            kArray.push(node.value);
        }
        else {
            node.value = node.value.toString();
            kArray.push(node.value);
        }
        for (let i = 0; i < node.klist.length; i++) {
            fizzBuzz(node.klist[i]);
        }
    }

    if (ktree.root) {
        fizzBuzz(ktree.root);
    }
    return { ktree, kArray };
}

module.exports = { fizzBuzzTree, kAryTree }