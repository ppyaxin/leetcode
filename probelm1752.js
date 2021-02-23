/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    for(let i=0;i<nums.length-1;i++){
        if(nums[i+1]<nums[i]){
           for(let j=i+1;j<nums.length-1;j++){
               if(nums[j+1]<nums[j]){
                   return false
               }
           }
           if(nums[nums.length-1]>nums[0]){
               return false
           }
        }
    }
    return true
};

console.log(check([1,2,3,2]))