/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    let length = nums.length
    let res = 100000
    //遍历a
    for (let i = 0; i < length; i++) {
        let [b, c] = [i + 1, length - 1]
        while (b < c) {
            let sum = nums[i] + nums[b] + nums[c]
            console.log(b, c, sum)
            if (target == sum) {
                return target
            }
            if (Math.abs(target - sum) < Math.abs(target - res)) {
                res = sum
            }
            if (sum > target) {
                c = c - 1
            } else {
                b = b + 1
            }
        }
    }
    return res
};
console.log(threeSumClosest([0, 2, 1, -3], 1))