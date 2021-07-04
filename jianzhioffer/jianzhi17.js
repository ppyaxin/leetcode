/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let result = [];
  for (let i = 0; i < Math.pow(10, n) - 1; i++) {
    result.push(i + 1);
  }
  return result
};
console.log(printNumbers(1))