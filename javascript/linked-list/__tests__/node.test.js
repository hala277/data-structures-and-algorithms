'use strict';

const { describe, it } = require('eslint/lib/rule-tester/rule-tester');
const Node = require('../node.js');

describe('test Node class', () => {

    it('test creating Node with next and value', () => {
        const value = 'value';
        const node = new Node(value);
        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();

    })


})