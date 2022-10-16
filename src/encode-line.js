const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';
  let count = 1;
  let prev = str[0];
  let result = '';
  
    
  for (let i = 1; i < str.length; i++){
      if (str[i] === prev) {
          count += 1;
      }
      else {
          
          if (count === 1) {
              result += `${prev}`; 
              prev = str[i];
          }
          else {
              result += `${count}${prev}`; 
              prev = str[i];
          }
          count = 1;
      }
  }
  if (count === 1) {
      result += `${prev}`; 
  }
  else {
      result += `${count}${prev}`; 
  }
  
  return result;
}

module.exports = {
  encodeLine
};
