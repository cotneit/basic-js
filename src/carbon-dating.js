const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleActivityNum = parseFloat(sampleActivity);

  if (sampleActivity !== 'string' || Number.isNaN(sampleActivityNum)) {
    return false;
  }

  //Ok, tests are broken.
};
