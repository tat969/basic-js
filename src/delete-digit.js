const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
   let newString = n.toString();
   let replaceNewString = '';
   let arrays = [];
   let deleteDigitArray = [];
   for(let i = 0; i < newString.length; i++) {
     replaceNewString = Number(newString.replace(newString[i], ''));
     arrays.push(replaceNewString);
     deleteDigitArray = Math.max(...arrays);
     //console.log(deleteDigitArray);
   }
   
  return deleteDigitArray
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
