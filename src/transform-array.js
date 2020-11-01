const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new TypeError('Expected an array as argument.');
  }
  const result = [];
  
  const discarded = {};

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        discarded[i + 1] = true;
        break;
      case '--discard-prev':
        if (!discarded[i - 1]) {
          result.pop();
        }
        break;
      case '--double-next':
        if (i + 1 < arr.length) {
          result.push(arr[i + 1])
        }
        break;
      case '--double-prev':
        if (i > 0 && !discarded[i - 1]) {
          result.push(arr[i - 1])
        }
        break;
      default:
        if (!discarded[i]) {
          result.push(arr[i]);
        }
        break;
    }
  }

  return result;
};
