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
  if (members === false) return false;
  else if(Array.isArray(members) === false) return false;
  else if (members.length === 0) return false;

  let dreamTeam = [];

  members.forEach(name => {
    if (typeof(name) === 'string') {
      const firstLetter = name.trim().toUpperCase()[0];
      dreamTeam.push(firstLetter);
      //console.log(firstLetter);
    }
  });

  dreamTeam = dreamTeam.sort().join('');
  return dreamTeam
  //console.log(dreamTeam);
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
