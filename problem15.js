/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let results = []
    //排序
    function sortNum(a, b) {
        return a - b;
    }
    nums.sort(sortNum)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break
        if (i > 0 && nums[i] == nums[i - 1]) continue
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum == 0) {
                results.push([nums[i], nums[left], nums[right]])
                console.log(results)
                while (nums[left] == nums[left + 1]) {
                    left++
                }
                while (nums[right] == nums[right - 1]) {
                    right--
                }
                left++
                right--
            } else {
                if (sum > 0) right--
                if (sum < 0) left++
            }
        }
    }
    return results
}
console.log(1571259)
console.log(threeSum([-1, 0, 1, 2, -1, -4]))