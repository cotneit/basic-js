const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const result = members.map((current) => {
    return typeof current === 'string' ? current.trim()[0].toUpperCase() : '';
  }).sort().join('');

  return result;
};
