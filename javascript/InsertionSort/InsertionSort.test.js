'use strict';



const InsertionSort = require('./InsertionSort');

describe('test if Insertion Sort working', () => {
    it('if the code can sort an array', () => {
        const array = [8,4,23,42,16,15];
        expect(InsertionSort(array)).toEqual([4,8,15,16,23,42]);
    })

    it('if the code can sort an array that Reverse-sorted', () => {
        const array = [20,18,12,8,5,-2];
        expect(InsertionSort(array)).toEqual([-2,5,8,12,18,20]);
    })

    it('if the code can sort an array that Few uniques', () => {
        const array = [5,12,7,5,5,7];
        expect(InsertionSort(array)).toEqual([5,5,5,7,7,12]);
    })

    it('if the code can sort an array that Nearly-sorted', () => {
        const array = [2,3,5,7,13,11];
        expect(InsertionSort(array)).toEqual([2,3,5,7,11,13]);
    })
})