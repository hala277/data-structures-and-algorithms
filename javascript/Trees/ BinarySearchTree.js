'use strict';

const Tree = require('./trees.js');
const Node = require('./node.js');


class BinarySearchTree extends Tree {
    constructor() {
        super();
    }

    Add(value) {
        let node = new Node(value);

        if (!this.root) {
            this.root = node;
            return 'add node';

        }
        else {
           

            let addNew = (curr,node) => {
               
                if (node.value < curr.value) {
                    if (curr.left) {
                       return addNew(curr.left,node);
                    }
                    else {
                       curr.left = node;
                       return'add node';
                    }
                }
                else if(node.value > curr.value){
                    if (curr.right) {
                      return addNew(curr.right,node)
                    }
                    else {
                       curr.right = node;
                       return'add node'
                    }
                }
                else if (node.value === curr.value){
                    return'cant add this node we have simmeler node'
                }
                else{
                    return null;
                }

            }
            return addNew(this.root,node);
           
        }
    }

    Contains(value) {
        return this.preOrder().includes(value);
    }
}
module.exports = BinarySearchTree;