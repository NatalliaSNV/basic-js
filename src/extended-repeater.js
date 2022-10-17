const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resultStr = '';
  //console.debug(`SEPARATOR: ${(options.additionSeparator == undefined) && (options.additionRepeatTimes > 1)} \\\\\\\\\\\\\\\\`);
  if ((options.separator == undefined) && (options.repeatTimes > 1)){
    options.separator = '+';
  }
  if ((options.additionSeparator == undefined) && (options.additionRepeatTimes > 1)){
    options.additionSeparator = '|';
  }
  if (options.repeatTimes == undefined){
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes == undefined){
    options.additionRepeatTimes = 1;
  }
  for (let repeatStr = 0; repeatStr < options.repeatTimes; repeatStr++) {
    resultStr += str;
    for (let repeatSep = 0; repeatSep < options.additionRepeatTimes; repeatSep++){
      if (options.addition !== undefined){
        resultStr += options.addition;
        if ((repeatSep !== options.additionRepeatTimes - 1) && (options.additionRepeatTimes > 1)){
          resultStr += options.additionSeparator;
        }
      }
    }
    if ((repeatStr !== options.repeatTimes - 1) && (options.repeatTimes > 1)){
      resultStr += options.separator;
    }
  }
  //console.debug(`RESULT: ${resultStr} \\\\\\\\\\\\\\\\`);
  return resultStr;
  
}

module.exports = {
  repeater
};
