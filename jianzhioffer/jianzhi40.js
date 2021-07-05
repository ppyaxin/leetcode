/**
 * TODO TopN
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  let leastArr = new Array(k).fill(10001);
  for (const e of arr) {
    if (e < leastArr[0]) {
      leastArr[0] = e;
      let i = 0;
      while (true) {
        let left = 2 * i + 1;
        let right = left + 1;
        let maxI = -1;
        let maxValue = leastArr[i];
        if (left < k && maxValue < leastArr[left]) {
          maxI = left;
          maxValue = leastArr[left];
        }
        if (right < k && maxValue < leastArr[right]) {
          maxI = right;
          maxValue = leastArr[right];
        }
        if (maxI == -1) {
          break;
        }

        leastArr[maxI] = leastArr[i];
        leastArr[i] = maxValue;
        i = maxI;
      }
    }
  }
  return leastArr;
};

console.log(getLeastNumbers([1, 2, 3], 2));
