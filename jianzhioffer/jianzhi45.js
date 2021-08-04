/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    //快排
    function quickSort(left,right){
        //需要备份递归时候用
        //判断条件：拼接字符串a+b<=b+a a在前
        let l=left,r=right
        if(left<right){
            let temp=nums[left]
            // console.log("hhhhh",temp)
            while(left<right){
                while(left<right&&nums[right].toString()+temp.toString()>=temp.toString()+nums[right].toString()){
                    right--
                }
                nums[left]=nums[right]
                while(left<right&&nums[left].toString()+temp.toString()<=temp.toString()+nums[left].toString()){
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
   return nums.join("")
};

console.log(minNumber([3,30,34,5,9]))


