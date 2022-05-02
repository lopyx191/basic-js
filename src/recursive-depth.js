const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth( arr ) {
    let result = 1;
    let culc = 0;
      if (arr instanceof Array){
        for(let item of arr) {
        if(Array.isArray(item)) {
            result = this.calculateDepth(item);
            if(culc < result) {
            culc = result;
            }
          }
        } 
        return culc + 1;
      } return culc; 
    }
 }
const depthCalc = new DepthCalculator();

module.exports = {
  DepthCalculator
};
