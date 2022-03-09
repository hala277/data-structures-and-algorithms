'use strict';


const { describe, it } = require('eslint/lib/rule-tester/rule-tester');
// const { it } = require('eslint/lib/rule-tester/rule-tester');
// Require our linked list implementation

const LinkedLilst = require('../index');

describe('test Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('Can successfully instantiate an empty linked list', () => {
    const ll = new LinkedLilst();
    //  expect(ll).toBeInstanceOf(LinkedLilst);
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  })

});


describe('The head property will properly point to the first node in the linked list', () => {

  it('Can properly insert into the linked list', () => {
    const ll = new LinkedLilst();
    ll.insert(1);
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next).toBeNull();

  })

  it('Can properly insert multiple nodes into the linked list', () => {

    const ll = new LinkedLilst();
    ll.insert(1);
    ll.insert(2);
    expect(ll.head.value).toEqual(2);
    expect(ll.head.next.value).toBe(1);

  })
})

describe('return true,false thing', () => {
  it('return true when finding a value within the linked list that exists', () => {
    let ll = new LinkedLilst();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insert(4);
    expect(ll.includes(4)).toBe(true);
  })

  it('return false when searching for a value in the linked list that does not exist', () => {
    let ll = new LinkedLilst();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insert(4);
    expect(ll.includes(5)).toBe(false);
  })

  it('return a collection of all the values that exist in the linked list', () => {
    let ll = new LinkedLilst();
    ll.insert('a');
    ll.insert('b');
    ll.insert('c');
    expect(ll.toString()).toBe("{ c }->{ b }->{ a }->NULL");
  })



})
// linked-list-insertions
describe('test linked-list-insertions', () => {
  it('Can successfully add a node to the end of the linked list', () => {
    const ll = new LinkedLilst();
    ll.append(1);
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next).toBeNull();

  })

  it('Can successfully add multiple nodes to the end of a linked list', () => {

    const ll = new LinkedLilst();
    ll.append(1);
    ll.append(2);
    ll.append(3);

    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(2);
    expect(ll.head.next.next.value).toEqual(3);
    expect(ll.head.next.next.next).toBeNull();



  })
  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    let ll = new LinkedLilst();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    
    
    ll.insertBefore(3,10);
    let newValue = ll.toString();

    expect(newValue).toEqual("{ 10 }->{ 3 }->{ 2 }->{ 1 }->NULL");

  })

  it('Can successfully insert a node before the first node of a linked list', () => {

    let ll = new LinkedLilst();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insert(4);

    ll.insertBefore(4,10);
    let newValue = ll.toString();
    expect(newValue).toEqual("{ 10 }->{ 4 }->{ 3 }->{ 2 }->{ 1 }->NULL")

  })

  it('Can successfully insert after a node in the middle of the linked list', () => {
    let ll = new LinkedLilst();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insertAfter(2,10);
    let newValue = ll.toString();
    expect(newValue).toEqual("{ 3 }->{ 2 }->{ 10 }->{ 1 }->NULL")

  })

  it('Can successfully insert a node after the last node of the linked list',() => {
    let ll = new LinkedLilst();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.insertAfter(1,10);
    let newValue = ll.toString();
    expect(newValue).toEqual("{ 3 }->{ 2 }->{ 1 }->{ 10 }->NULL")

  })

})

// test kthFromEnd(k)
describe('test kthFromEnd(k)', () => {

it('Where k is greater than the length of the linked list',() => {
let ll = new LinkedLilst();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);

expect(ll.kthFromEnd(5)).toEqual('K more than the list length')
})

it('Where k and the length of the list are the same',() => {
  let ll = new LinkedLilst();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
expect(ll.kthFromEnd(4)).toEqual(4);
})

it('Where k is not a positive integer',() => {
  let ll = new LinkedLilst();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
expect(ll.kthFromEnd(-1)).toEqual('k is not a positive integer');
})

it('Where the linked list is of a size 1',() => {
  let ll = new LinkedLilst();
ll.insert(1);
expect(ll.kthFromEnd(1)).toEqual(1);

})

it('Happy Path where k is not at the end, but somewhere in the middle of the linked list',() => {
let ll = new LinkedLilst();
ll.insert(1);
ll.insert(2);
ll.insert(3);

expect(ll.kthFromthemiddle(2)).toEqual('Happy Path');

})


})
