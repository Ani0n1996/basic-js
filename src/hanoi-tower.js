const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {

}

calculateHanoi(5, 4074);
calculateHanoi(38, 4594);
calculateHanoi(9, 4308);
calculateHanoi(18, 4442);
calculateHanoi(10, 4159);
calculateHanoi(44, 4685);
calculateHanoi(39, 4936);
calculateHanoi(49, 4797);
calculateHanoi(43, 4335);
calculateHanoi(20, 4091);


module.exports = {
  calculateHanoi
};
