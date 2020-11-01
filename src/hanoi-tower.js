const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskAmount, turnInterval) {
  const turns = 2 ** diskAmount - 1;
  const seconds = Math.floor(turns / (turnInterval / 3600));

  return { turns, seconds };
};
