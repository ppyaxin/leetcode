/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    let set = new Set()
    nums.sort((a,b)=>a-b)
    let min = nums[0]

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            continue
        } else if (set.has(nums[i])) {
            return false
        } else {
            set.add(nums[i])
        }
        if (min - nums[i] >= 5) {
            return false
        } else if (min - nums[i] > 0) {
            min = nums[i]
        }
    }
    return true
};