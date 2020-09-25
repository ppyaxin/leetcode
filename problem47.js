/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//https://leetcode-cn.com/problems/permutations-ii/
var permuteUnique = function (nums) {
    let results = [] //所有答案
    let result = [] //某个答案
    let ifUsed = [] //元素是否已经被用过
    for (let i = 0; i < nums.length; i++) {
        ifUsed[i] = false
    }
     getPermute(nums.sort(sortNum),ifUsed)

    //排序
    function sortNum(a, b) {
        return a - b;
    }

    function getPermute(numbers,index) {
        console.log(result.length,numbers.length)
        if (index==numbers.length) {
            results.push(result.slice())
            return
        }
        for (let i = 0; i < numbers.length; i++) {
            if (ifUsed[i]||(i > 0 && numbers[i] == numbers[i - 1])) {
                continue
            } else {
                result.push(numbers[i])
                console.log("当前result为："+result)
                ifUsed[i]=true
                getPermute(numbers,i+1)
                ifUsed[i]=false
            }
        }
    }
    console.log("当前结果数组为：" + results)
    return results
};

console.log(permuteUnique([1, 1, 2]))