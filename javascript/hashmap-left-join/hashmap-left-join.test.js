'use strict';



const Hashtable = require('../Hashtable/Hashtable');
const leftJoin = require('./hashmap-left-join');

describe('test hash map  LEFT JOIN ' ,() => {
it(' check it it  return left join hash map ',() => {

    let hashMap1 = new Hashtable(50);
    hashMap1.set("fond", "enamored");
    hashMap1.set("wrath", "anger");
    hashMap1.set("diligent", "employed");
    hashMap1.set("outfit", "garb");
    hashMap1.set("guide", "usher");

    let hashMap2 = new Hashtable(50);
    hashMap2.set("fond", "averse");
    hashMap2.set("wrath", "delight");
    hashMap2.set("diligent", "idle");
    hashMap2.set("guide", "usher");
    hashMap2.set("flow", "garb");

expect(leftJoin(hashMap1,hashMap2)).toEqual([

    
    ["wrath", "anger", "delight"],
    ["diligent", "employed", "idle"],
    ["guide", "usher", "usher"],
    ["fond", "enamored", "averse"],
    ["outfit", "garb", null],
     
])
})

it(' return left join hash map ',() => {

    let hashMap1 = new Hashtable(50);
    hashMap1.set("fond", "lele");
    hashMap1.set("wrath", "happy");
    
    

    let hashMap2 = new Hashtable(50);
    hashMap2.set("fond", "lala");
    hashMap2.set("wrath", "sad");
   
   

expect(leftJoin(hashMap1,hashMap2)).toEqual([
   
    ["wrath", "happy", "sad"],
    ["fond", "lele", "lala"],
   
])
})

it(' return left join hash map ',() => {

    let hashMap1 = new Hashtable(50);
    hashMap1.set("fond", "lele");
   
    
    

    let hashMap2 = new Hashtable(50);
    hashMap2.set("fond", "lala");
    
   
   

expect(leftJoin(hashMap1,hashMap2)).toEqual([
   
   
    ["fond", "lele", "lala"],
   
])
})

})
