/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 已经排序好的两数之和就可以用双指针，时间o(n)， 空间o(1)。没有排序好的就用hashSet


var twoSum = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        let sum = nums[left] + nums[right]
        // console.log(left, right, sum)
        if (sum > target) {
            right--
        } else if (sum < target) {
            left++
        } else {
            return [nums[left], nums[right]]
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9))