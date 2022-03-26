'use strict';

const Stack = require('../Stack');

class stackBrackets{
    constructor() {
        this.stack = new Stack();

    }

    validateBrackets(string){

        let brackets = "[]{}()<>"
       
      let stack1 = [];
        for(let bracket of string) {
          let bracketsIndex = brackets.indexOf(bracket)
      
          if (bracketsIndex === -1){
            continue
          }
      
          if(bracketsIndex % 2 === 0) {
            stack1.push(bracketsIndex + 1)
          } else {
            if(stack1.pop() !== bracketsIndex) {
              return false;
            }
          }
        }
        return stack1.length === 0
      }
}
module.exports = stackBrackets;