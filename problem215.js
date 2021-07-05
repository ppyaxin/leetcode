/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//快速排序
var findKthLargest = function (nums, k) {
   let n=quickSort(nums,0,nums.length-1)
   return n[nums.length-k]
};

var quickSort = function (nums, left, right) {
    if (left < right) {
        let i = left, j = right, x = nums[i]
        while (i < j) {
            while (nums[j] >= x) {
                j--
            }
            if (i < j) {
                nums[i] = nums[j]
                i++
            }
            while (i < j && nums[i] < x) {
                i++
            }
            if (i < j) {
                nums[j] = nums[i]
                j--
            }
        }
        nums[i] = x
        quickSort(nums, left, i - 1)
        quickSort(nums, i + 1, right)
    }
    return nums
}
console.log(findKthLargest([3, 2, 1, 5, 6, 4],2))