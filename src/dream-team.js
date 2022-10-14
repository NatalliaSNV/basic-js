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
  if (Array.isArray(members) == false) return false; 

  const arrayWihtoutWhiteSpaces = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string')  {
      //console.debug(members[i]);
      arrayWihtoutWhiteSpaces.push(members[i].replace(/^\s+/g, '').toUpperCase());
    }
  }
  
  const membersSortAlf = arrayWihtoutWhiteSpaces.sort();
  let dreamTeam = '';
  for (let i = 0; i < membersSortAlf.length; i++) {
    if (typeof((membersSortAlf[i]) === 'string') ) {
      dreamTeam += membersSortAlf[i].charAt(0);
    }

  }
  if (dreamTeam === '') return false;
  //console.debug(`Dream ${dreamTeam} cheking ${cheking}`);
  return dreamTeam;
}

module.exports = {
  createDreamTeam
};
