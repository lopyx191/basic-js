const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform( arr ) {
  if(Array.isArray( arr )){
  let result = [];
  if (arr.some( (item) => typeof item === "string") ) {
      for(let i = 0; i < arr.length; i++) {
      let lastElem = result[result.length - 1];
        if(arr[i] === "--double-prev") {
        	if(typeof arr[i-1] === 'number' && arr[i-2] !== "--discard-next") {
          	result.push(lastElem);           
          }
        } else if(arr[i] === "--discard-prev"){
        	if(typeof arr[i-1] === 'number') {
          	result.pop();
          }
        } else if(arr[i] === "--double-next"){
        	if(typeof arr[i+1] === 'number') {
          	result.push(arr[i+1]);
          }
        } else if(arr[i] === "--discard-next"){
        	if(typeof (arr.indexOf('--discard-next')+1) === 'number') {
          arr.splice((arr.indexOf('--discard-next')+1),1);
          }
        } else {
          result.push(arr[i]);
        }        
      }
    } else {return arr;}
		return result;
  } else {
    throw Error("'arr' parameter must be an instance of the Array!");
}
}

module.exports = {
  transform
};
