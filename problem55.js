/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
   var maxJump=nums[0] 
   for(let i=0;i<nums.length;i++){
     //console.log("目前maxJump为"+maxJump)
     if(maxJump-i>=0){
         maxJump=Math.max(maxJump,nums[i]+i)
     }else{
         return false
     }
   }
   return true
};
console.log(canJump([3,2,1,0,4]))