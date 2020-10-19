/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let enough = false;
    let index = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            if (enough) {
                if (nums[i] != nums[i + 1]) {
                    enough = false
                }
            } else {
                nums[index] = nums[i]
                index++
                enough=true
            }
        } else {
            nums[index] = nums[i]
            index++
            enough=false
        }
    }
    return nums
};

            
console.log(removeDuplicates([1,1,1,2,2,3]))