/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   //左右分别二分查找
   let left=0
   let right=nums.length-1
   let startIndex=-1
   let endIndex=-1
   while(left<right){
      let mid=Math.floor((left+right)/2)
      if(nums[mid]>=target){
          //左边找
          right=mid
      }else{
          left=mid+1
      }
   }
//    console.log(right,left)
   if(nums[right]==target){
       startIndex=right
   }else{
       return 0
   }
   right=nums.length-1
   while(left<right){
       let mid=Math.ceil((left+right)/2)
       if(nums[mid]<=target){
           left=mid
       }else{
           right=mid-1
       }
   }
//    console.log(left,right)
   endIndex=left
//    console.log(startIndex,endIndex)
   return endIndex-startIndex+1
};
console.log(search([2,2],2))

if(!("a" in globalThis)){
    var a=100
}
console.log(a)