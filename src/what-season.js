const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (typeof(date) === 'undefined') return 'Unable to determine the time of year!';

  if (toString.call(date) !== "[object Date]" ) throw new Error('Invalid date!');

  if (date.toString() === new Date().toString() ) throw new Error('Invalid date!');

  const month = date.getMonth();
  let time = '';
  if ( (month >= 0 && month <= 1) || (month == 11)){
    time = 'winter';
  }
  else if( (month >= 2 && month <= 4) ){
    time = 'spring';
  }
  else if( (month >= 5 && month <= 7) ){
    time = 'summer';
  }
  else if( (month >= 8 && month <= 10) ) {
    time = 'autumn';
  } 
  
  return time;
    
  
  
}

module.exports = {
  getSeason
};
