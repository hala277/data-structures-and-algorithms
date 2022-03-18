'use strict';


const PseudoQueue = require('../stack-queue-pseudo.js');

describe('pseudo Queue testing', () => {
    it('Can enqueue into a pseudo queue', async () => {
        let pseudoQueue = new PseudoQueue();
        pseudoQueue.enqueue(1);
        expect(pseudoQueue.stack1.peek()).toBe(1);
    })

    it('Can enqueue multiple values into a pseudo queue', async () => {
        let pseudoQueue = new PseudoQueue();
        pseudoQueue.enqueue(1);
        expect(pseudoQueue.stack1.peek()).toBe(1);
        pseudoQueue.enqueue(2);
        expect(pseudoQueue.stack1.peek()).toBe(2);
        pseudoQueue.enqueue(3);
        expect(pseudoQueue.stack1.peek()).toBe(3);
    })

    it('Can dequeue out of a queue the expected value', async () => {
        let pseudoQueue = new PseudoQueue();
        pseudoQueue.enqueue(1);
        pseudoQueue.enqueue(2);
        expect(pseudoQueue.dequeue()).toBe(1);
        expect(pseudoQueue.dequeue()).toBe(2);
    })

    it('Can successfully empty a queue after multiple dequeues', async () => {
        let pseudoQueue = new PseudoQueue();
        pseudoQueue.enqueue(1);
        pseudoQueue.enqueue(2);
        expect(pseudoQueue.dequeue()).toBe(1);
        expect(pseudoQueue.dequeue()).toBe(2);
        expect(pseudoQueue.dequeue()).toBe('empty stack');
    })

    it('Calling dequeue or peek on empty queue raises exception', async () => {
        let pseudoQueue = new PseudoQueue();
        expect(pseudoQueue.dequeue()).toBe('empty stack');
        expect(pseudoQueue.stack1.peek()).toBe('empty stack');

    })

})