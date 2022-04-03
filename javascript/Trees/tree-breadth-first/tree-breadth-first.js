'use strict';

const TreeMax = require("../treeMax/treeMax");

class TreeBreadthFirst extends TreeMax {

    constructor() {
        super();
      }
    
      treebreadthFirst() {
        if (!this.root) {
          return null;
        }
        let breadthFirstArray = []; 
        let temp = [{value: 0, left: this.root, right: null}]; 
      
    
    
        function breadthFirst(tree) {
         
            breadthFirstArray.push(tree.value);
          if (tree.left) {
         
            temp.push(tree.left);
          }
          if (tree.right) {
           
            temp.push(tree.right);
          }
          
        }
    
        let traverse = () => {
          
          let nodeArr = temp.splice("");
          temp.length = 0;
    
          for (let i = 0; i < nodeArr.length; i++) {
   
            breadthFirst(nodeArr[i]);

          }
        };
    
        
        while (temp.length !== 0) {
            traverse();
        }  
    
        breadthFirstArray.shift()
        return breadthFirstArray;
      }
    
}

module.exports = TreeBreadthFirst;