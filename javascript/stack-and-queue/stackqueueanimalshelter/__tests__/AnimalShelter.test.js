'use strict';



const AnimalShelter = require('../AnimalShelter');

describe('test AnimalShelter work', () => {

    it('test can enqueue cat', () => {
        let animal = new AnimalShelter();
        animal.enqueue('cat');
        expect(animal.qlist.front.value).toEqual('cat')
    })

    it('test can enqueue dog', () => {
        let animal = new AnimalShelter();
        animal.enqueue('dog');
        expect(animal.qlist.front.value).toEqual('dog')
    })

    it('test enqueue any thing other than cat and dog', () => {
        let animal = new AnimalShelter();
      
        expect( animal.enqueue('mouse')).toEqual('this shelter is for dogs and cats')
    })

    it('test can dnqueue cat', () => {
        let animal = new AnimalShelter();
        animal.enqueue('cat');
        animal.dequeue('cat');
        animal.dequeue('cat');
        expect(animal.qlist.isEmpty()).toBeTruthy();
    })

    it('test can dnqueue dog', () => {
        let animal = new AnimalShelter();
        animal.enqueue('dog');
        animal.dequeue('dog');
        animal.dequeue('dog');
        expect(animal.qlist.isEmpty()).toBeTruthy();
    })

})