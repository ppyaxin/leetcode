/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max=nums[0]
    if(nums.length==1) return nums[0]
    for (let i = 1; i < nums.length; i++) {
       if(nums[i-1]>0){
           nums[i]+=nums[i-1]
       }
       if(max<nums[i]){
           max=nums[i]
       }
    }
    return max
};
