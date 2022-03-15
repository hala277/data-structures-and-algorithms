'use strict';

const Queue = require('../Queue.js');
const Node = require('../Node.js');


describe('Queue test', () => {

    it('Can successfully enqueue into a queue', async () => {
        let newqueue = new Queue();
        newqueue.enqueue(1);
        expect(newqueue.peek()).toBe(1);
    })

    it('Can successfully enqueue multiple values into a queue', async () => {
        let newqueue = new Queue();
        newqueue.enqueue(1);
        expect(newqueue.peek()).toBe(1);
        newqueue.enqueue(2);
        expect(newqueue.peek()).toBe(1);
    })

    it('Can successfully dequeue out of a queue the expected value', async () => {
        let newqueue = new Queue();
        newqueue.enqueue(1);
        newqueue.enqueue(2);
        expect(newqueue.dequeue()).toBe(1);
        expect(newqueue.dequeue()).toBe(2);
    })

    it('Can successfully peek into a queue, seeing the expected value', async () => {
        let newqueue = new Queue();
        newqueue.enqueue(1);
        newqueue.enqueue(2);
        expect(newqueue.peek()).toBe(1);
        expect(newqueue.peek()).toBe(1);
    })
    it('Can successfully empty a queue after multiple dequeues', async () => {
        let newqueue = new Queue();
        newqueue.enqueue(1);
        newqueue.enqueue(2);
        expect(newqueue.dequeue()).toBe(1);
        expect(newqueue.dequeue()).toBe(2);
        expect(newqueue.dequeue()).toBe('empty queue');
    })

    it('Can successfully instantiate an empty queue', async () => {
        let newqueue = new Queue();
       
        expect(newqueue).toBeInstanceOf(Queue);
    })

    it('Calling dequeue or peek on empty queue raises exception', async () => {
        let newqueue = new Queue();
        expect(newqueue.dequeue()).toBe('empty queue');
        expect(newqueue.peek()).toBe('empty queue');
      
    })

});