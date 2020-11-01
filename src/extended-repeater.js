const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
  repeatTimes = 1, 
  separator = '+', 
  addition = '', 
  additionRepeatTimes = 1, 
  additionSeparator = '|'
} = {}) {
  return `${str}${`${addition}${additionSeparator}`
    .repeat(additionRepeatTimes)
    .slice(0, -1 * additionSeparator.length)
    }${separator}`
    .repeat(repeatTimes)
    .slice(0, -1 * separator.length);
};
  