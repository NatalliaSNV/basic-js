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
function deleteDigit(num) {
  let array = (""+num).split("").map(Number);
  
    let arrayPosibleNumbers = [];
    let arrayBufer = [];
    for (let i = 0; i < array.length; i++) {
        arrayBufer = [...array];
        arrayBufer.splice(i, 1);
        arrayPosibleNumbers.push((arrayBufer.join('')));
    }
  
    return Math.max(...arrayPosibleNumbers);
}

module.exports = {
  deleteDigit
};
