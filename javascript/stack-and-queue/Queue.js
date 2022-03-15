const Node = require('./Node.js');

class Queue {
    constructor() {
        this.front = null;
    }

    // enqueue
    enqueue(value) {
        let node = new Node(value);

        if (!this.front) {
            this.front = node;
        }
        else {
            let back = this.front;
            while (back.next) {
                back = back.next;
            }
            back.next = node;
        }
    }

    // dequeue
    dequeue() {
        if (!this.front) {
            return 'empty queue'
        }
        else {
            let valu = this.front;
            this.front = this.front.next;
            return valu.value;
        }
    }

    // peek
    peek() {
        if (!this.front) {
            return 'empty queue';
        }

        return this.front.value;

    }

    // isEmpty
    isEmpty(){
        if(!this.front){
            return true;
        }
        else{
            return false;
        }
    }

}
module.exports = Queue;