'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.right = right;
        this.left = left;
        this.klist = [];
    }
}
module.exports = Node;