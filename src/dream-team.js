const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {	
  if(Array.isArray(members)){
  let sum = [];
    if (members.some( (item) => typeof item === "string") ) {
    for(let i = 0; i < members.length; i++) {
  
      if(typeof members[i] === "string") {
          let probel = members[i].trim();
          let up = probel[0].toUpperCase();
          sum.push(up);
        }
      }
     sum = sum.sort();
     sum = sum.join('');
     return sum;
    } 
    return false;
   }
   return false;
  }


module.exports = {
  createDreamTeam
};
