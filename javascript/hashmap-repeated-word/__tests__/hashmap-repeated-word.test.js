'use strict';



const repeatedWord = require('../hashmap-repeated-word');

describe('Test repeated word hash map', () => {
    it('check if repeated word function its working', () => {
        const Input = 'Once upon a time, there was a brave princess who';
        expect(repeatedWord(Input)).toBe('a')
    })

    it('check if repeated word function its working', () => {
        const Input = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York';
        expect(repeatedWord(Input)).toBe('summer')
    })

    it('check if repeated word function its working', () => {
        const Input = 'here there is no repeated word';
        expect(repeatedWord(Input)).toBe('there is no repeated word')
    })
})