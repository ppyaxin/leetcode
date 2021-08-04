//快排
//拿出第一个元素存起来，数组空出一个位置
//双指针，low在空出的位置，high小于取出的基本值时候，high填进去，不然移动指针，
//这样high就空出来了再换low ，等他俩相遇，空出来的那个填上基本值
//最后最难记的一步，递归左边，递归右边。因为这里只有最开始基准值的位置是完全正确了


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
