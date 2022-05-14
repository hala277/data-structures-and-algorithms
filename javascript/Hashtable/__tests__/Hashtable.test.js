'use strict';

const Hashtable = require('../Hashtable.js');
describe('test Hashtable', () => {

  let Hashtable1;
  beforeAll(() => {
    Hashtable1 = new Hashtable(1);
    Hashtable1.set('status', 'graduate')
  });

  it('Setting a key/value to your hashtable results in the value being in the data structure', () => {

    let hashTable = new Hashtable(3);
    hashTable.set('Hala', 'fullStack');
    hashTable.set('collage', 'ASAC');

    const hash1 = hashTable.hash('Hala');
    const hach2 = hashTable.hash('collage');

    expect(hashTable.map[hash1].head.value).toEqual({Hala:'fullStack'});
    expect(hashTable.map[hach2].head.value).toEqual({collage:'ASAC'});
  });

  it('Retrieving based on a key returns the value stored', () => {

    let hashTable = new Hashtable(3);
    hashTable.set('Hala', 'fullStack');
    hashTable.set('collage', 'ASAC');

    
    expect(hashTable.get('Hala')).toEqual('fullStack');
    expect(hashTable.get('collage')).toEqual('ASAC');
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {

    let hashTable = new Hashtable(3);
    
    expect(hashTable.get('Hala')).toBeNull();
    expect(hashTable.get('collage')).toBeNull();
  });

  it('Successfully handle a collision within the hashtable', () => {
    Hashtable1.set('Hala', 'name');
    const hach1 = Hashtable1.hash('Hala');
    expect(Hashtable1.map[hach1].head.value).toEqual({status:'graduate'});
    expect(Hashtable1.map[hach1].head.next.value).toEqual({Hala:'name'});
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    Hashtable1.set('Hala', 'name');
    
    expect(Hashtable1.get('status')).toEqual('graduate');
    expect(Hashtable1.get('Hala')).toEqual('name');
  });

  it('Successfully hash a key to an in-range value', () => {
    
    const hashtable = Hashtable1.hash('Hala');
    expect(hashtable).toBeLessThan(Hashtable1.map.length);
    expect(hashtable).toBeLessThan(3);
  });

  it('indicating if the key exists in the table.', () => {
    
    let hashTable = new Hashtable(3);
    hashTable.set('Hala', 'fullStack');
    

    
    expect(hashTable.contains(`Hala`)).toBeTruthy();
    expect(hashTable.contains(`ASAC`)).toBeFalsy();
    
  });

});