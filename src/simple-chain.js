const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value === undefined ? ' ' : value);
    return this;
  },

  removeLink(position) {
    if (position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error('Link does not exist.')
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = '';
    for (let i = 0; i < this.chain.length; i++) {
      result += `( ${this.chain[i]} )~~`;
    }

    result = result.slice(0, -2);
    this.chain = [];
    return result
  }
};

module.exports = chainMaker;
