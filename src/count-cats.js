const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arrays) {
  let result = 0;
  for(let i = 0; i < arrays.length; i++) {
      for(let g = 0; g < arrays[i].length; g++) {
        if (arrays[i][g] === '^^') {
          result = result + 1;
        }
      }
      
    }
    return result
  }
  
  //console.log(arr);
  // remove line with error and write your code here




module.exports = {
  countCats
};
