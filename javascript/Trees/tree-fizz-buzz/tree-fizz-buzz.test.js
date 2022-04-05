'use strict';

const { fizzBuzzTree, kAryTree } = require('./tree-fizz-buzz');
let Node = require('./node');
const { it } = require('eslint/lib/rule-tester/rule-tester');


describe('test fizzBuzz Tree', () => {
    it('return new k-ary tree', () => {
        let one = new Node(25);
        let two = new Node(15);
        let three = new Node(9);
        let four = new Node(7);
        let five = new Node(2);

        three.klist.push(five, four);
        four.klist.push(one, two);

        let tree = new kAryTree(three);
        expect(fizzBuzzTree(tree).kArray).toEqual(['Fizz', '2', '7', 'Buzz', 'FizzBuzz']);
    })
    it('return null when the tree is empty', () => {
        let tree = new kAryTree();
        expect(fizzBuzzTree(tree)).toBe(null);
    })
})