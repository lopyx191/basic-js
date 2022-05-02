const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.result.getLength;
  },
  addLink( value ) {
    this.result.push(( ${value} ));
    return this;
  },
  removeLink( position ) {
      if(position - 1 < 0  position - 1 >= this.getLength()  position === ${position}){
        this.result = [];
        throw new Error;
      } else {
        this.result.splice(position - 1, 1);
        return this;
      }
  },
  reverseChain() {
    
  },
  finishChain() {
  }
};

module.exports = {
  chainMaker
};
