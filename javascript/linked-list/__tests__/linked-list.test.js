'use strict';


const { describe, it } = require('eslint/lib/rule-tester/rule-tester');
// const { it } = require('eslint/lib/rule-tester/rule-tester');
// Require our linked list implementation

const LinkedLilst = require('../index');

describe('test Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('Can successfully instantiate an empty linked list',() => {
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
it('return true when finding a value within the linked list that exists',() => {
let ll = new LinkedLilst();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
expect(ll.includes(4)).toBe(true);
})

it('return false when searching for a value in the linked list that does not exist',() => {
  let ll = new LinkedLilst();
  ll.insert(1);
  ll.insert(2);
  ll.insert(3);
  ll.insert(4);
  expect(ll.includes(5)).toBe(false);
})

it('return a collection of all the values that exist in the linked list',() => {
  let ll = new LinkedLilst();
  ll.insert('a');
  ll.insert('b');
  ll.insert('c');
  expect(ll.toString()).toBe("{ c }->{ b }->{ a }->NULL");
})

})
