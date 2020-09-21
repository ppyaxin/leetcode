/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    //排序
    function sortNum(a, b) {
        return a - b
    }
    let results = [[]]
    let result = [] //某个结果
    function getResults(nums, index) {
        if (result.length == nums.length) {
            return
        } else {
            for (let i = index; i < nums.length; i++) {
                 if(nums[i-1]==nums[i]&&i>index){
                     continue
                 }
                result.push(nums[i])
                results.push(result.slice())
                getResults(nums,i+1)
                result.pop()
            }
        }

    }
    getResults(nums.sort(sortNum),0)//这里为啥不加括号
    return results
};

console.log(subsetsWithDup([2,1,2]))