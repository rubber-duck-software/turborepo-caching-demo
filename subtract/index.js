const { add } = require("add");

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function subtract(num1, num2) {
  return add(num1, -num2);
}

module.exports = { subtract };
