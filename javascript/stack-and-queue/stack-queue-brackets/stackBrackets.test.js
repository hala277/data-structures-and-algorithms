'use strict';

const StackBrackets = require('./stackBrackets');

describe('stack-queue-brackets test', () => {
    it('test stackBrackets 1', async () => {
        let stackBrackets = new StackBrackets();
       
        expect(stackBrackets.validateBrackets('{}')).toBeTruthy();
    })
    it('test stackBrackets 2 with a string', async () => {
        let stackBrackets = new StackBrackets();
       
        expect(stackBrackets.validateBrackets('{hi}')).toBeTruthy();
    })

    it('test stackBrackets 3', async () => {
        let stackBrackets = new StackBrackets();
      
        expect(stackBrackets.validateBrackets('{[}')).toBe(false);
    })
})

