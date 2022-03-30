'use strict';

const BinaryTree = require('../ BinarySearchTree');

class treeMax extends BinaryTree{
    constructor(){
        super();
    }

    maximum(){

        if(!this.root){
            return null;
        }
        else{
            let num = -1;
            let preOrder = (leaf) => {
                if(num < leaf.value){
                    num = leaf.value;
                }
                if(leaf.left) preOrder (leaf.left);
                if(leaf.right) preOrder (leaf.right);
            }
            preOrder(this.root);
            return num;
        }
    }
}

module.exports = treeMax;