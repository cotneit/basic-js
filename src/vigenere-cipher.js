const CustomError = require("../extensions/custom-error");
// 65 - A
// 90 - Z
class VigenereCipheringMachine {
  constructor(isReverse) {
    this.isReverse = isReverse === undefined ? false : !isReverse;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Not enough arguments.');
    }
    
    const ASCII_CODE_A = 65;
    const LATIN_LETTER_COUNT = 26;

    let result = '';
    
    // The key only applies to letters, so we need to keep track of other characters
    let offset = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const charCode = char.toUpperCase().charCodeAt(0) - ASCII_CODE_A;

      if (charCode < 0 || charCode > LATIN_LETTER_COUNT) {
        result += char;
        offset++;
        continue;
      }

      const keyIndex = (i - offset) % key.length;
      const keyCharCode = key[keyIndex].toUpperCase().charCodeAt(0) - ASCII_CODE_A;
      const newCharCode = (charCode + keyCharCode) % LATIN_LETTER_COUNT + ASCII_CODE_A;

      result += String.fromCharCode(newCharCode);
    }

    result = this.isReverse ? result.split('').reverse().join('') : result;
    return result;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Not enough arguments.');
    }

    const ASCII_CODE_A = 65;
    const LATIN_LETTER_COUNT = 26;

    let result = '';
    
    // The key only applies to letters, so we need to keep track of other characters
    let offset = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];
      const charCode = char.toUpperCase().charCodeAt(0) - ASCII_CODE_A;

      if (charCode < 0 || charCode > LATIN_LETTER_COUNT) {
        result += char;
        offset++;
        continue;
      }

      const keyIndex = (i - offset) % key.length;
      const keyCharCode = key[keyIndex].toUpperCase().charCodeAt(0) - ASCII_CODE_A;
      let newCharCode;
      if (charCode - keyCharCode >= 0) {
        newCharCode = (charCode - keyCharCode) % LATIN_LETTER_COUNT + ASCII_CODE_A;
      } else {
        newCharCode = LATIN_LETTER_COUNT + charCode - keyCharCode + ASCII_CODE_A;
      }

      result += String.fromCharCode(newCharCode);
    }

    result = this.isReverse ? result.split('').reverse().join('') : result;
    return result;
  }
}

module.exports = VigenereCipheringMachine;
