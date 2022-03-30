'use strict';

class Tree {
    constructor() {
        this.root = null;
    }


    preOrder() {
        let node = [];
        let preorder = (leaf) => {
            node.push(leaf.value);
            if (leaf.left) preorder(leaf.left);
            if (leaf.right) preorder(leaf.right);
        }
        if(this.root){
            preorder(this.root);  
        }
        else{
            return null;
        }
        return node;
    }

    inOrder(){
        let node = [];
        let inorder = (leaf) => {
          
            if (leaf.left) inorder(leaf.left);
            node.push(leaf.value);
            if (leaf.right) inorder(leaf.right);
        }
        if(this.root){
            inorder(this.root);  
        }
        else{
            return null;
        }
        return node;
    }

    postOrder(){
        let node = [];
        let postorder = (leaf) => {
          
            if (leaf.left) postorder(leaf.left);
            if (leaf.right) postorder(leaf.right);
            node.push(leaf.value);
        }
        if(this.root){
            postorder(this.root);  
        }
        else{
            return null;
        }
        return node;
    }
}
module.exports = Tree;