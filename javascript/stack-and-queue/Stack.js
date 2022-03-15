const Node = require('./Node.js');

class Stack {

    constructor() {
        // This object should be aware of a default empty value assigned to top when the stack is created.
        this.top = null;

    }

    // push method
    push(value) {
        let node = new Node(value);
        node.next = this.top;
        this.top = node;

    }
    // pop methode
    pop() {
        if (!this.top) {
            return 'empty stack';
        }
        let valu = this.top;
        this.top = valu.next;
        return valu.value;

    }

    peek() {
        if (!this.top) {
            return 'empty stack';
        }
      
     return this.top.value;
        
    }

    isEmpty(){
        if(!this.top){
            return true;
        }
        else{
            return false;
        }
    }


}
module.exports = Stack;