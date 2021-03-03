/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//二分查找
var binarySearch = function(nums, target) {
    let low=0
    let high=nums.length-1
    while(low<=high){
        let mid=low+(high-low)/2
        if(target==nums[mid]){
            return mid
        }else if(target>nums[mid]){
            low=mid+1
        }else{
            high=mid-1
        }
    }
    return -1
};
//target在有序分组里进行二分查找，无序的就逐个查找
var search = function(nums, target) {
    let low=0
    let high=nums.length-1
    while(low<=high&&nums[low]<nums[high]){
        let mid=parseInt(low+(high-low)/2) 
        if(target==nums[mid]){
            return mid
        }else if(target>nums[mid]){
            low=mid+1
        }else{
            high=mid-1
        }
    }
    if(low<=high){
        for(let i=low;i<=high;i++){
            if(target==nums[i]){
                return i
            }
        }
    }
    return -1
};
console.log(search([2,3],2))
