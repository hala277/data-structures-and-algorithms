'use strict';

const Stack = require('../Stack.js');
class PseudoQueue {

    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value) {
        this.stack1.push(value);
        return this.stack1.top;
    }

    dequeue() {

        while (this.stack1.top) {
            this.stack2.push(this.stack1.pop());
        }
        return (this.stack2.pop());

    }
}
module.exports = PseudoQueue;

