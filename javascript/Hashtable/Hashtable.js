'use strict';

const LinkedList = require('./ LinkedList.js');



class Hashtable {

    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    set(key, value) {
        let hashIndex = this.hash(key);
        if (!this.map[hashIndex]) {
            this.map[hashIndex] = new LinkedList();
        }

        let entryData = { [key]: value };
        this.map[hashIndex].append(entryData);
    }
    get(key) {
        // console.log('inside getttttttt',key)
        const hash = this.hash(key);
        // console.log('hashhhhhhh  ', hash);
        if (this.map[hash]) {
            let current = this.map[hash].head;
            // console.log('currentttttttttt', current)
            while (current) {
                if (current.value[key]) {
                    return current.value[key];
                }
                current = current.next;
                // console.log('currentttttttttt2', current)
            }
        }
        else {
            return null;
        }
    }

    contains(key) {
        const hash = this.hash(key);
        // console.log('keyyyyyyyyyyyyyyy',key)
        if (this.map[hash]) {
            let current = this.map[hash].head;
            // console.log('contains currenttt',current)
            while (current) {
                if (current.value[key]) {
                    current = current.next;
                    return true;
                }

                else {
                    // console.log('else1 hash', hash)
                    return false;
                }

            }
        }
        else {
            // console.log('else hash', hash)
            return false;
        }

    }

    hash(key) {
        return key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt();
        }, 0) * 599 % this.size;
       
    }

    keys(){
      
        return Object.keys(this.map);
    }
}

module.exports = Hashtable;

// const hashmap01 = new Hashtable(3);
// hashmap01.set('Razan', 'Instructor');
// hashmap01.set('Batool', 'TA');
// // hashmap01.set('Mohammad','Learner');
// hashmap01.set('Salam', 'Learner');


// console.log(hashmap01);
// console.log(hashmap01.map[0]);
// console.log(hashmap01.map[1]);
// // console.log(hashmap01.map[0]);
// console.log(hashmap01.map[2]);


// console.log('getttRazan  ', hashmap01.get(`Razan`));
// console.log('getttBatool  ', hashmap01.get(`Batool`));
// console.log('getttSalam', hashmap01.get(`Salam`));

// console.log('contains razan ', hashmap01.contains(`Razan`))
// console.log('contains Batool ', hashmap01.contains(`Batool`))
// console.log('contains Salam ', hashmap01.contains(`Salam`))
// console.log('contains hala ', hashmap01.contains(`Hala`))
// console.log('contains hala ', hashmap01.contains(`Hala`))

// console.log('keys Collection ', hashmap01.keys());

