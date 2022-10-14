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
  let newMem = ''; 
  let text = '';
  if (Array.isArray(members)) {
    for (i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
        newMem = members[i].toUpperCase();
        newMem = newMem.replaceAll(' ', '');
        text += newMem[0];
        text = text.split('').sort().join('');
      }
    }
  }
  return text;
}

createDreamTeam([
  '   William Alston ',
  ' Paul Benacerraf',
  '  Ross Cameron',
  '       Gilles Deleuze',
  '  Arda Denkel ',
  '  Michael Devitt',
  '  Kit Fine',
  ' Nelson Goodman',
  'David Kolb',
  '   Saul Kripke',
  '  Trenton Merricks',
  '  Jay Rosenberg',
])


module.exports = {
  createDreamTeam
};
