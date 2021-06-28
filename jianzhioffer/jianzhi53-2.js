/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
   //排序数组查找：二分查找
   let [left,right,mid]=[0,nums.length-1,Math.floor((nums.length-1)/2)]
//    console.log(left,right,mid)
   while(left<=right){
    //    console.log(left,right,mid)
      mid=Math.floor((left+right)/2)
      if(nums[mid]==mid){
          left=mid+1
      }else if(mid==0|| nums[mid-1]==mid-1){
          return mid
      }else{
          right=mid-1
      }
   }
   return nums.length
};

console.log(missingNumber([0,1]))