/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  // 找左边下标
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      // 往左边找
      right = mid;
    } else {
      // 往右边找
      left = mid + 1;
    }
  }
  let leftIndex = left;
  if (nums[leftIndex] != target) {
    return [-1, -1];
  }
  right = nums.length - 1;
  //找右边下标
  while (left < right) {
    let mid = Math.ceil((left + right) / 2);
    if (nums[mid] > target) {
      //往左边找
      right = mid - 1;
    } else {
      //往右边找
      left = mid;
    }
  }
  let rightIndex=right
  return [leftIndex,rightIndex]
};

// function BinarySearch(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let ans = -1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     console.log(mid);
//     if (nums[mid] > target) {
//       right = mid - 1;
//       // console.log("right "+right)
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//       // console.log("left "+left)
//     } else {
//       ans = mid;
//       break;
//     }
//   }
//   return ans;
// }

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
