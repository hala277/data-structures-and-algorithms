'use strict';

const Hashtable = require('./Hashtable');

function repeatedWord(string) {

    const arr = string.match(/\w+/g);

    const hashtable = new Hashtable(arr.length);

    for (let i = 0; i < arr.length; i++) {
        let arr1 = arr[i].toLowerCase();
        if (hashtable.contains(arr1)) {
            if (hashtable.get(arr1) === arr1)
                return hashtable.get(arr1)
        }

        hashtable.set(arr1, arr1);

    }

    return 'there is no repeated word';
}

module.exports = repeatedWord;