const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((counter, array) => {
    return array.reduce((counter, current) => {
      return current === '^^' ? counter + 1 : counter;
    }, counter)
  }, 0)
};
