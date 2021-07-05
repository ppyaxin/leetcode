/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    //快排
    function quickSort(left,right){
        //需要备份递归时候用
        let l=left,r=right
        if(left<right){
            let temp=nums[left]
            console.log("hhhhh",temp)
            while(left<right){
                while(left<right&&nums[right]>=temp){
                    right--
                }
                nums[left]=nums[right]
                while(left<right&&nums[left]<=temp){
                    left++
                }
                nums[right]=nums[left]
            }
          nums[left]=temp
          quickSort(l,left-1)
          quickSort(left+1,r)
        }
    }
   quickSort(0,nums.length-1)
   return nums
};

console.log(minNumber([7,3,4,1,3,5,2]))