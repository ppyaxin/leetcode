/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = [];
  let poppedI = 0;
  for (let push of pushed) {
    stack.push(push);
    while (stack.length > 0 && stack[stack.length - 1] == popped[poppedI]) {
      stack.pop();
      poppedI++;
    }
  }
  return poppedI == popped.length;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
