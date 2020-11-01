const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let maxDepth = depth;
    arr.forEach((current) => {
      if (Array.isArray(current)) {
        depth++;
        let temp = this.calculateDepth(current, depth);
        maxDepth = temp > maxDepth ? temp : maxDepth;
        depth--;
      }
    })

    return maxDepth;
  }
};
