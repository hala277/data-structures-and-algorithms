'use strict';

const Stack = require('../Stack.js');
const Node = require('../Node.js');


describe('Stack test', () => {

    it('Can successfully push onto a stack', async () => {
        let newStack = new Stack();
        newStack.push(1);

        expect(newStack.peek()).toBe(1)
    })

    it('Can successfully push multiple values onto a stack', async () => {
        let newStack = new Stack();
        newStack.push(1);
        expect(newStack.peek()).toBe(1)
        newStack.push(2);
        expect(newStack.peek()).toBe(2)
    })

    it('Can successfully pop off the stack', async () => {
        let newStack = new Stack();
        newStack.push(1);
        newStack.push(2);
        expect(newStack.pop()).toBe(2)
    })

    it('Can successfully empty a stack after multiple pops', async () => {
        let newStack = new Stack();
        newStack.push(1);
        newStack.push(2);
        expect(newStack.pop()).toBe(2);
        expect(newStack.pop()).toBe(1);
        expect(newStack.pop()).toBe('empty stack');
    })

    it('Can successfully peek the next item on the stack', async () => {
        let newStack = new Stack();
        newStack.push(1);
        newStack.push(2);
        newStack.push(3);
        expect(newStack.peek()).toBe(3);
       
    })
    it('Can successfully instantiate an empty stack', async () => {
        let newStack = new Stack();
        expect(newStack).toBeInstanceOf(Stack);
       
    })
    it('Calling pop or peek on empty stack raises exception', async () => {
        let newStack = new Stack();
        expect(newStack.pop()).toBe('empty stack');
        expect(newStack.peek()).toBe('empty stack');
       
    })




})