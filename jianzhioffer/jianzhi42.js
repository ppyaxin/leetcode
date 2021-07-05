/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxLeft = nums[0];
  let maxRight = nums[nums.length - 1];
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (maxLeft > 0) {
      maxLeft = maxLeft + nums[left];
    } else {
      maxLeft = nums[left];
    }
    left++;
    console.log("left"+maxLeft)
    if (maxRight > 0) {
      maxRight = maxRight + nums[right];
    } else {
      maxRight = nums[right];
    }
    right--;
    console.log()
  }
  return maxRight + maxLeft;
};
