'use strict';

const Queue = require('../Queue.js');

class AnimalShelter {

    constructor() {
        this.qlist = new Queue();
    }

    enqueue(animal) {
       if(animal === 'dog' || animal === 'cat'){
           this.qlist.enqueue(animal);
       }
       else {
           return 'this shelter is for dogs and cats';
       }
    }

    dequeue(pref){
       if(pref === 'dog' || pref === 'cat'){
           this.qlist.dequeue();
       }
       else{
           return null;
       }
    }
}
module.exports = AnimalShelter;