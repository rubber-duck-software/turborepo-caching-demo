const { add } = require("add");

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function multiply(num1, num2) {
  let result = 0;
  for (let i = 0; i < num2; i++) {
    result = add(result, num1);
  }
  return result;
}

module.exports = { multiply };
