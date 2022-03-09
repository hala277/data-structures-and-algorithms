'use strict';

const Node = require('./node.js');
class LinkedList {
    constructor() {
        this.head = null;
    }
    // insert
    insert(value) {
        //Adds a new node with that value to the head of the list with an O(1) Time performance.
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
    }

    // includes
    includes(value) {

        const node = this.head;
        while (node !== null) {
            if (node.value == value) {
                return true
            }
            else if (node.value !== value) {
                return false;
            }

        }

    }

    // toString
    toString() {
        let string = '';
        while (this.head !== null) {
            string = string + `{ ${this.head.value} }->`;
            this.head = this.head.next;
        }

        string = string + 'NULL';
        return string;
    }

    // append
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        }
        else {
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }

    //Insert Before
    insertBefore(value, newValue) {

        //  const node =this.head;
        //  node = this.head;
        if (this.head.value === value) {
            this.insert(newValue);
        }
        else {
            let tail = this.head;

            while (this.head !== null) {
                if (this.head.value === value) {
                    let newNode = new Node(newValue);
                    newNode.next = this.head;
                    tail.next = newNode;
                    break;
                }
                tail = this.head;
                this.head = this.head.next;
            }
        }
    }

    // insert after
    insertAfter(value, newValue) {
        let node = new Node(newValue);
        if (this.head) {
            if (this.head.value === value) {
                this.head.next = node;
                this.head = node;
                return;
            }
            let newNode = this.head;
            while (newNode) {
                if (newNode.value === value) {
                    let temp = newNode.next;
                    newNode.next = node;
                    node.next = temp;
                    return;
                }
                newNode = newNode.next;
            }
        }

    }

    // add kthFromEnd(k)
    kthFromEnd(k) {

        let node = this.head;
        let temp = 1;
        if (k <= 0) {
            return "k is not a positive integer"
        }


        while (node.next) {
            node = node.next;
            temp++;
        }

        node = this.head;
        let tail = temp - k;
        if (tail <= -1) {
            return "K more than the list length";
        }



        for (let i = 0; i < tail; i++) {
            node = node.next;
        }
        return node.value;

    }
    // k is not at the end, but somewhere in the middle of the linked list
    kthFromthemiddle(k) {
        let node = this.head;
        let temp = 1;
        if (k <= 0) {
            return "k is not a positive integer"
        }
        while (node.next) {
            node = node.next;
            temp++;
        }


        let temp2 = 0
        while (temp2 < 1 / 2) {
            node = node.next
            temp2 = temp2 + 1
            return "Happy Path"
        }
    }
}




module.exports = LinkedList;
