const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    const numberSampleActivity = +sampleActivity;
    let number = Math.log(MODERN_ACTIVITY / numberSampleActivity) * HALF_LIFE_PERIOD / 0.693;
    
    let cheking = false;
    if ((numberSampleActivity <= MODERN_ACTIVITY) && (numberSampleActivity > 0.0) && (typeof(numberSampleActivity) === 'number') && (typeof(sampleActivity) === 'string')) {
      cheking = true;
    }
    //console.debug(`Num: ${number} and cheking: ${cheking}`);
    return cheking ? Math.ceil(number) : false;
}

module.exports = {
  dateSample
};
